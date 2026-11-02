import React, { useState } from 'react';
import { LayoutGrid, Plus, Check, Trash2, Sparkles, Film } from 'lucide-react';
import { ForgeProfile, NuvioFolder } from '../../types/nuvio';
import { CATALOG_PRESETS, CatalogTemplate } from '../../data/catalogPresets';

interface Step2CatalogsProps {
  profile: ForgeProfile;
  onToggleCatalog: (template: CatalogTemplate) => void;
  onAddCustomRow: (folder: NuvioFolder) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2Catalogs: React.FC<Step2CatalogsProps> = ({
  profile,
  onToggleCatalog,
  onAddCustomRow,
  onNext,
  onBack
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customEmoji, setCustomEmoji] = useState('🍿');
  const [customAddonId, setCustomAddonId] = useState('aio-metadata');
  const [customCatalogId, setCustomCatalogId] = useState('');
  const [customType, setCustomType] = useState<'movie' | 'series' | 'anime'>('movie');

  const categories = [
    'All',
    'Trending & Discover',
    'Streaming Services',
    'Cinephile & 4K',
    'Anime & International'
  ];

  // Helper to check if a catalog preset is already in any group's folders
  const isCatalogActive = (template: CatalogTemplate) => {
    return profile.groups.some(g =>
      g.folders.some(f =>
        f.catalogSources.some(cs => cs.catalogId === template.folderData.catalogSources[0].catalogId)
      )
    );
  };

  const filteredPresets = selectedCategory === 'All'
    ? CATALOG_PRESETS
    : CATALOG_PRESETS.filter(p => p.category === selectedCategory);

  const totalActiveFolders = profile.groups.reduce((acc, g) => acc + g.folders.length, 0);

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle || !customCatalogId) return;

    const newFolder: NuvioFolder = {
      id: `folder-custom-${Date.now()}`,
      title: customTitle,
      coverEmoji: customEmoji,
      tileShape: "PORTRAIT",
      hideTitle: false,
      _coverMode: "emoji",
      catalogSources: [
        {
          addonId: customAddonId,
          type: customType,
          catalogId: customCatalogId,
          name: customTitle
        }
      ]
    };

    onAddCustomRow(newFolder);
    setCustomTitle('');
    setCustomCatalogId('');
    setShowCustomModal(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-nuvio-card to-nuvio-surface border border-nuvio-border">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-brand-400" /> Catalogs & Streaming Rows
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Choose what appears on your Nuvio home screen. Toggle cards to add or remove catalog rows.
          </p>
        </div>
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20 text-xs font-bold">
            {totalActiveFolders} Rows Active
          </span>
          <button
            onClick={() => setShowCustomModal(true)}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-nuvio-surface hover:bg-nuvio-border text-slate-200 text-xs font-semibold border border-nuvio-border transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Custom</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 font-semibold'
                : 'bg-nuvio-card hover:bg-nuvio-surface text-slate-400 hover:text-slate-200 border border-nuvio-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Catalog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {filteredPresets.map((preset) => {
          const active = isCatalogActive(preset);
          return (
            <div
              key={preset.id}
              onClick={() => onToggleCatalog(preset)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative group flex flex-col justify-between ${
                active
                  ? 'bg-nuvio-card border-brand-500 shadow-md shadow-brand-500/10 ring-1 ring-brand-500/40'
                  : 'bg-nuvio-card/60 hover:bg-nuvio-surface/80 border-nuvio-border opacity-75 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-2xl p-1 bg-nuvio-dark rounded-xl border border-nuvio-border/80">
                      {preset.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-brand-300 transition">
                        {preset.name}
                      </h4>
                      <span className="text-[10px] text-brand-400/90 font-medium">
                        {preset.category}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition ${
                      active
                        ? 'bg-brand-500 text-white shadow-sm'
                        : 'border border-slate-600 group-hover:border-slate-400'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              {/* Cover Preview snippet */}
              <div className="mt-3 pt-2.5 border-t border-nuvio-border/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono text-[10px] text-slate-500">
                  {preset.folderData.catalogSources[0]?.catalogId}
                </span>
                <span className="font-semibold text-slate-300">
                  {preset.folderData.tileShape}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-nuvio-border">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-nuvio-card hover:bg-nuvio-surface border border-nuvio-border transition"
        >
          ← Back to Keys
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition flex items-center space-x-2"
        >
          <span>Continue to Folders & Layout →</span>
        </button>
      </div>

      {/* Custom Row Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-nuvio-dark border border-nuvio-border rounded-2xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Film className="w-4 h-4 text-brand-400" /> Add Custom Catalog Row
            </h3>

            <form onSubmit={handleCreateCustom} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Row Title
                </label>
                <input
                  type="text"
                  required
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. 90s Cyberpunk Movies"
                  className="w-full bg-nuvio-card border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Folder Emoji
                  </label>
                  <input
                    type="text"
                    value={customEmoji}
                    onChange={(e) => setCustomEmoji(e.target.value)}
                    className="w-full bg-nuvio-card border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white text-center focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Content Type
                  </label>
                  <select
                    value={customType}
                    onChange={(e) => setCustomType(e.target.value as any)}
                    className="w-full bg-nuvio-card border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500 cursor-pointer"
                  >
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="anime">Anime</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Addon ID
                </label>
                <input
                  type="text"
                  required
                  value={customAddonId}
                  onChange={(e) => setCustomAddonId(e.target.value)}
                  placeholder="e.g. aio-metadata or cinemeta"
                  className="w-full bg-nuvio-card border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white font-mono text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Catalog ID / MDBList List ID
                </label>
                <input
                  type="text"
                  required
                  value={customCatalogId}
                  onChange={(e) => setCustomCatalogId(e.target.value)}
                  placeholder="e.g. mdblist.86934 or top"
                  className="w-full bg-nuvio-card border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white font-mono text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCustomModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow"
                >
                  Add Row
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
