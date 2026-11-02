import React from 'react';
import { Zap, ShieldCheck, ExternalLink, HardDrive, Filter, CheckCircle2 } from 'lucide-react';
import { ForgeProfile, ScraperConfig, DebridProvider, ScraperType } from '../../types/nuvio';
import { POPULAR_SCRAPERS, DEBRID_SERVICES } from '../../data/scraperPresets';

interface Step4ScrapersProps {
  profile: ForgeProfile;
  onUpdateScrapers: (scrapers: ScraperConfig[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step4Scrapers: React.FC<Step4ScrapersProps> = ({
  profile,
  onUpdateScrapers,
  onNext,
  onBack
}) => {
  // If no scrapers exist yet, create default Comet scraper
  const currentScraper: ScraperConfig = profile.scrapers[0] || {
    id: 'comet-default',
    name: 'Comet Streams',
    type: 'comet',
    enabled: true,
    debridService: 'realdebrid',
    debridApiKey: '',
    resolutions: ['4k', '1080p'],
    sort: 'quality'
  };

  const updateScraper = (partial: Partial<ScraperConfig>) => {
    const updated = [{ ...currentScraper, ...partial }];
    onUpdateScrapers(updated);
  };

  const toggleResolution = (res: string) => {
    const current = currentScraper.resolutions;
    const exists = current.includes(res);
    let next: string[];
    if (exists) {
      if (current.length === 1) return; // keep at least one
      next = current.filter(r => r !== res);
    } else {
      next = [...current, res];
    }
    updateScraper({ resolutions: next });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Step Header */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-nuvio-card to-nuvio-surface border border-nuvio-border shadow-sm">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Step 4: Stream Scrapers & Debrid Provider
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Configure how Nuvio finds video streams. You can pair fast scrapers like Comet or Torrentio with high-speed Debrid services (Real-Debrid, TorBox, AllDebrid) for instant buffering and 4K playback.
            </p>
          </div>
        </div>
      </div>

      {/* Scraper Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
          1. Select Primary Scraper Engine
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {POPULAR_SCRAPERS.map((scraper) => {
            const isSelected = currentScraper.type === scraper.type;
            return (
              <div
                key={scraper.type}
                onClick={() => updateScraper({ type: scraper.type, name: scraper.name })}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-nuvio-card border-brand-500 ring-1 ring-brand-500/40 shadow-lg shadow-brand-500/10 text-white'
                    : 'bg-nuvio-card/60 hover:bg-nuvio-surface border-nuvio-border text-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">{scraper.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      {scraper.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {scraper.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-nuvio-border/60 flex items-center justify-between text-[11px] text-slate-400">
                  <a
                    href={scraper.website}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-brand-300 flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Selected
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Debrid Provider Selector */}
      <div className="bg-nuvio-card border border-nuvio-border rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-brand-400" /> 2. Connect Your Debrid Account
          </label>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Never Leaves Your Browser
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {DEBRID_SERVICES.map((deb) => {
            const isSelected = currentScraper.debridService === deb.id;
            return (
              <div
                key={deb.id}
                onClick={() => updateScraper({ debridService: deb.id as DebridProvider })}
                className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                  isSelected
                    ? 'bg-brand-600/15 border-brand-500 text-white shadow-sm ring-1 ring-brand-500/30'
                    : 'bg-nuvio-dark/70 hover:bg-nuvio-surface border-nuvio-border text-slate-300'
                }`}
              >
                <div className="font-bold text-xs text-white">{deb.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{deb.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Debrid API Key Input */}
        {currentScraper.debridService !== 'none' && (
          <div className="mt-3 pt-3 border-t border-nuvio-border">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-slate-200">
                {DEBRID_SERVICES.find(d => d.id === currentScraper.debridService)?.name} API Key / Token
              </label>
              {currentScraper.debridService === 'realdebrid' && (
                <a
                  href="https://real-debrid.com/apitoken"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center gap-1"
                >
                  <span>Get Real-Debrid API Token</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {currentScraper.debridService === 'torbox' && (
                <a
                  href="https://torbox.app/settings"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center gap-1"
                >
                  <span>Get TorBox API Token</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <input
              type="password"
              value={currentScraper.debridApiKey}
              onChange={(e) => updateScraper({ debridApiKey: e.target.value })}
              placeholder="Paste your debrid API key here"
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-brand-500 transition"
            />
          </div>
        )}
      </div>

      {/* Resolution & Sorting Filters */}
      <div className="bg-nuvio-card border border-nuvio-border rounded-2xl p-4 sm:p-5 space-y-4">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-400" /> 3. Quality & Stream Filters
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Allowed Video Resolutions
            </label>
            <div className="flex space-x-2">
              {['4k', '1080p', '720p'].map((res) => {
                const active = currentScraper.resolutions.includes(res);
                return (
                  <button
                    key={res}
                    type="button"
                    onClick={() => toggleResolution(res)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase transition ${
                      active
                        ? 'bg-brand-600 text-white shadow'
                        : 'bg-nuvio-dark text-slate-500 border border-nuvio-border'
                    }`}
                  >
                    {res}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Stream Sort Priority
            </label>
            <select
              value={currentScraper.sort}
              onChange={(e) => updateScraper({ sort: e.target.value as any })}
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none focus:border-brand-500 cursor-pointer"
            >
              <option value="quality">Quality First (4K HDR → 1080p)</option>
              <option value="size">Largest File Size (Highest Bitrate)</option>
              <option value="seeders">Most Seeders (Fastest Start)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-nuvio-border">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-nuvio-card hover:bg-nuvio-surface border border-nuvio-border transition"
        >
          ← Back to Folders
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition flex items-center space-x-2"
        >
          <span>Finish & Export Setup 🎉</span>
        </button>
      </div>
    </div>
  );
};
