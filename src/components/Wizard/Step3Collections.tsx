import React, { useState } from 'react';
import { FolderTree, ArrowUp, ArrowDown, Trash2, Edit2, Check, FolderPlus, Image as ImageIcon } from 'lucide-react';
import { ForgeProfile, NuvioCollectionGroup, NuvioFolder, TileShape } from '../../types/nuvio';

interface Step3CollectionsProps {
  profile: ForgeProfile;
  onUpdateGroups: (groups: NuvioCollectionGroup[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const AVAILABLE_COVERS = [
  { label: 'Hotstar', url: '/covers/hotstar.svg' },
  { label: 'JioCinema', url: '/covers/jiocinema.svg' },
  { label: 'SonyLIV', url: '/covers/sonyliv.svg' },
  { label: 'ZEE5', url: '/covers/zee5.svg' },
  { label: 'aha Video', url: '/covers/aha.svg' },
  { label: 'SUN NXT', url: '/covers/sunnxt.svg' },
  { label: 'Bollywood Hits', url: '/covers/bollywood.svg' },
  { label: 'South Cinema', url: '/covers/south_indian.svg' },
  { label: 'Netflix', url: '/covers/netflix.svg' },
  { label: 'Disney+', url: '/covers/disney.svg' },
  { label: 'HBO Max', url: '/covers/hbo.svg' },
  { label: 'Prime Video', url: '/covers/prime.svg' },
  { label: 'Apple TV+', url: '/covers/apple.svg' },
  { label: 'Trending Movies', url: '/covers/trending_movies.svg' },
  { label: 'Trending Shows', url: '/covers/trending_shows.svg' },
  { label: 'Anime Vault', url: '/covers/anime.svg' },
];

export const Step3Collections: React.FC<Step3CollectionsProps> = ({
  profile,
  onUpdateGroups,
  onNext,
  onBack
}) => {
  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editEmoji, setEditEmoji] = useState('');
  const [editCoverUrl, setEditCoverUrl] = useState('');
  const [editShape, setEditShape] = useState<TileShape>('LANDSCAPE');
  const [newGroupTitle, setNewGroupTitle] = useState('');
  const [showAddGroup, setShowAddGroup] = useState(false);

  const startEditFolder = (folder: NuvioFolder) => {
    setEditingFolderId(folder.id);
    setEditTitle(folder.title);
    setEditEmoji(folder.coverEmoji || '📁');
    setEditCoverUrl(folder.coverImageUrl || '');
    setEditShape(folder.tileShape || 'LANDSCAPE');
  };

  const saveEditFolder = (groupId: string, folderId: string) => {
    const updated = profile.groups.map(g => {
      if (g.id !== groupId) return g;
      return {
        ...g,
        folders: g.folders.map(f => {
          if (f.id !== folderId) return f;
          return {
            ...f,
            title: editTitle,
            coverEmoji: editEmoji,
            coverImageUrl: editCoverUrl || null,
            tileShape: editShape,
            _coverMode: (editCoverUrl ? 'image' : 'emoji') as any
          };
        })
      };
    });
    onUpdateGroups(updated);
    setEditingFolderId(null);
  };

  const moveFolder = (groupId: string, folderIdx: number, direction: 'up' | 'down') => {
    const updated = profile.groups.map(g => {
      if (g.id !== groupId) return g;
      const targetIdx = direction === 'up' ? folderIdx - 1 : folderIdx + 1;
      if (targetIdx < 0 || targetIdx >= g.folders.length) return g;
      const copy = [...g.folders];
      const temp = copy[folderIdx];
      copy[folderIdx] = copy[targetIdx];
      copy[targetIdx] = temp;
      return { ...g, folders: copy };
    });
    onUpdateGroups(updated);
  };

  const deleteFolder = (groupId: string, folderId: string) => {
    const updated = profile.groups.map(g => {
      if (g.id !== groupId) return g;
      return {
        ...g,
        folders: g.folders.filter(f => f.id !== folderId)
      };
    });
    onUpdateGroups(updated);
  };

  const handleAddGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupTitle.trim()) return;

    const newGroup: NuvioCollectionGroup = {
      id: `group-${Date.now()}`,
      title: newGroupTitle.trim(),
      pinToTop: false,
      focusGlowEnabled: true,
      viewMode: "FOLLOW_HOME",
      showAllTab: false,
      folders: []
    };

    onUpdateGroups([...profile.groups, newGroup]);
    setNewGroupTitle('');
    setShowAddGroup(false);
  };

  const deleteGroup = (groupId: string) => {
    if (profile.groups.length <= 1) {
      alert("You need at least one collection group.");
      return;
    }
    onUpdateGroups(profile.groups.filter(g => g.id !== groupId));
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-nuvio-card to-nuvio-surface border border-nuvio-border">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-brand-400" /> Nuvio Collections & Folders Layout
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Reorder rows, swap official brand covers (Hotstar, JioCinema, Netflix, etc.), and set tile shapes.
          </p>
        </div>
        <button
          onClick={() => setShowAddGroup(true)}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-md transition self-start sm:self-auto"
        >
          <FolderPlus className="w-3.5 h-3.5" />
          <span>New Group</span>
        </button>
      </div>

      {/* Add Group Input */}
      {showAddGroup && (
        <form onSubmit={handleAddGroup} className="bg-nuvio-card border border-brand-500/50 p-4 rounded-xl flex items-center gap-2">
          <input
            type="text"
            required
            value={newGroupTitle}
            onChange={(e) => setNewGroupTitle(e.target.value)}
            placeholder="e.g. Indian OTT Hub or Kids Zone"
            className="flex-1 bg-nuvio-dark border border-nuvio-border rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-brand-500"
          />
          <button
            type="submit"
            className="px-4 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold"
          >
            Create
          </button>
          <button
            type="button"
            onClick={() => setShowAddGroup(false)}
            className="px-3 py-1.5 text-slate-400 hover:text-white text-xs"
          >
            Cancel
          </button>
        </form>
      )}

      {/* Group List */}
      <div className="space-y-5">
        {profile.groups.map((group) => (
          <div
            key={group.id}
            className="bg-nuvio-card border border-nuvio-border rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Group Header */}
            <div className="px-4 py-3 bg-nuvio-surface/70 border-b border-nuvio-border flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm text-white tracking-wide">
                  {group.title}
                </span>
                <span className="text-[11px] font-semibold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full border border-brand-500/20">
                  {group.folders.length} Folders
                </span>
              </div>
              <button
                onClick={() => deleteGroup(group.id)}
                className="text-slate-400 hover:text-rose-400 text-xs p-1 rounded transition"
                title="Delete this entire category"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Folders in this Group */}
            <div className="divide-y divide-nuvio-border/60">
              {group.folders.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400">
                  No rows in this category. Go to <strong>Catalogs</strong> to toggle rows into here!
                </div>
              ) : (
                group.folders.map((folder, fIdx) => {
                  const isEditing = editingFolderId === folder.id;

                  return (
                    <div
                      key={folder.id}
                      className="p-3 sm:px-4 flex flex-col space-y-2 hover:bg-nuvio-surface/30 transition"
                    >
                      <div className="flex items-center justify-between">
                        {isEditing ? (
                          <div className="flex-1 flex flex-wrap items-center gap-2 mr-2">
                            <input
                              type="text"
                              value={editEmoji}
                              onChange={(e) => setEditEmoji(e.target.value)}
                              className="w-12 text-center bg-nuvio-dark border border-nuvio-border rounded-lg py-1 text-sm text-white"
                              title="Folder Emoji"
                            />
                            <input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="flex-1 min-w-[140px] bg-nuvio-dark border border-nuvio-border rounded-lg px-2.5 py-1 text-sm text-white"
                              placeholder="Folder Title"
                            />
                            <select
                              value={editShape}
                              onChange={(e) => setEditShape(e.target.value as TileShape)}
                              className="bg-nuvio-dark border border-nuvio-border rounded-lg px-2 py-1 text-xs text-white"
                            >
                              <option value="LANDSCAPE">Landscape (16:9)</option>
                              <option value="PORTRAIT">Portrait (Poster)</option>
                              <option value="SQUARE">Square (1:1)</option>
                            </select>
                            <button
                              onClick={() => saveEditFolder(group.id, folder.id)}
                              className="p-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 shadow"
                              title="Save Changes"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3 overflow-hidden">
                            {/* Cover Preview Tile */}
                            <div className="w-16 h-10 rounded-lg overflow-hidden border border-nuvio-border bg-nuvio-dark flex-shrink-0 relative">
                              {folder.coverImageUrl ? (
                                <img
                                  src={folder.coverImageUrl}
                                  alt={folder.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-lg">
                                  {folder.coverEmoji || '📁'}
                                </div>
                              )}
                            </div>

                            <div className="overflow-hidden">
                              <h4 className="font-bold text-sm text-white truncate flex items-center gap-1.5">
                                {folder.title}
                              </h4>
                              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                                <span className="font-mono text-slate-500">
                                  {folder.catalogSources[0]?.catalogId || 'Custom'}
                                </span>
                                <span>•</span>
                                <span className="text-brand-400 font-medium">{folder.tileShape}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Folder Actions */}
                        <div className="flex items-center space-x-1 flex-shrink-0">
                          <button
                            disabled={fIdx === 0}
                            onClick={() => moveFolder(group.id, fIdx, 'up')}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-nuvio-surface disabled:opacity-20 disabled:cursor-not-allowed transition"
                            title="Move Up"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            disabled={fIdx === group.folders.length - 1}
                            onClick={() => moveFolder(group.id, fIdx, 'down')}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-nuvio-surface disabled:opacity-20 disabled:cursor-not-allowed transition"
                            title="Move Down"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          {!isEditing && (
                            <button
                              onClick={() => startEditFolder(folder)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-brand-300 hover:bg-nuvio-surface transition"
                              title="Edit Folder & Cover"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteFolder(group.id, folder.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                            title="Remove from layout"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Quick Cover Picker when Editing */}
                      {isEditing && (
                        <div className="bg-nuvio-dark/80 p-3 rounded-xl border border-nuvio-border/80 mt-2 space-y-2">
                          <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                            <span className="flex items-center gap-1.5">
                              <ImageIcon className="w-3.5 h-3.5 text-brand-400" /> Select Cover Artwork:
                            </span>
                            <span className="text-[10px] text-slate-500 font-normal">Click a banner to apply</span>
                          </div>
                          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                            {AVAILABLE_COVERS.map((cov) => (
                              <button
                                key={cov.url}
                                type="button"
                                onClick={() => setEditCoverUrl(cov.url)}
                                className={`rounded-lg overflow-hidden border p-0.5 transition ${
                                  editCoverUrl === cov.url
                                    ? 'border-brand-500 ring-2 ring-brand-500/50'
                                    : 'border-nuvio-border hover:border-slate-500 opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img src={cov.url} alt={cov.label} className="w-full h-8 object-cover rounded" />
                                <span className="block text-[8px] text-slate-300 truncate mt-0.5 text-center">
                                  {cov.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-nuvio-border">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-nuvio-card hover:bg-nuvio-surface border border-nuvio-border transition"
        >
          ← Back to Catalogs
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition flex items-center space-x-2"
        >
          <span>Continue to Streams & Debrid →</span>
        </button>
      </div>
    </div>
  );
};
