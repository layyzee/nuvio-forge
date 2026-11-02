import React from 'react';
import { KeyRound, ExternalLink, Sparkles, Shield, Star, Tv, CheckCircle2 } from 'lucide-react';
import { ForgeProfile, UserApiKeys } from '../../types/nuvio';
import { STARTER_PRESETS } from '../../data/presets';

interface Step1ProfilesProps {
  profile: ForgeProfile;
  onChangeProfileName: (name: string, description: string) => void;
  onChangeApiKeys: (keys: Partial<UserApiKeys>) => void;
  onApplyPreset: (presetId: string) => void;
  onNext: () => void;
}

export const Step1Profiles: React.FC<Step1ProfilesProps> = ({
  profile,
  onChangeProfileName,
  onChangeApiKeys,
  onApplyPreset,
  onNext
}) => {
  return (
    <div className="space-y-6 max-w-3xl">
      {/* Intro Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-900/40 via-nuvio-card to-nuvio-surface border border-brand-500/20 shadow-md">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Step 1: Profile & Integration Keys
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Name your setup and optionally connect API keys for enhanced posters, IMDb ratings, and Trakt synchronization. All keys are stored <strong>100% locally in your browser</strong> and never uploaded to any server.
            </p>
          </div>
        </div>
      </div>

      {/* Preset Quick Start */}
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
          Choose a Quick Template (Optional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {STARTER_PRESETS.map((preset) => {
            const isSelected = profile.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onApplyPreset(preset.id)}
                type="button"
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-brand-600/15 border-brand-500 ring-1 ring-brand-500/40 text-white shadow-lg shadow-brand-500/10'
                    : 'bg-nuvio-card hover:bg-nuvio-surface border-nuvio-border text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">{preset.name}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-400" />}
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {preset.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-nuvio-card border border-nuvio-border rounded-2xl p-4 sm:p-5 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Tv className="w-4 h-4 text-brand-400" /> Setup Profile Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Setup Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => onChangeProfileName(e.target.value, profile.description)}
              placeholder="e.g. Living Room Nuvio"
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Description
            </label>
            <input
              type="text"
              value={profile.description}
              onChange={(e) => onChangeProfileName(profile.name, e.target.value)}
              placeholder="e.g. 4K HDR & Streaming Setup"
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Metadata & Poster API Keys */}
      <div className="bg-nuvio-card border border-nuvio-border rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-brand-400" /> Poster & Metadata Keys (Optional)
          </h3>
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-400" /> Private & Client-Side
          </span>
        </div>

        <div className="space-y-4">
          {/* TMDB API Key */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-200 flex items-center gap-1.5">
                TMDB API Key (v3 Read Token)
              </label>
              <a
                href="https://www.themoviedb.org/settings/api"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                <span>Get Free TMDB Key</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <input
              type="text"
              value={profile.apiKeys.tmdbApiKey}
              onChange={(e) => onChangeApiKeys({ tmdbApiKey: e.target.value })}
              placeholder="Leave empty to use community default key"
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white font-mono text-xs focus:outline-none focus:border-brand-500 transition"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Powers title metadata, high-res posters, and actor information.
            </p>
          </div>

          {/* RPDB (Rating Poster Database) */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-200 flex items-center gap-1.5">
                RPDB API Key (Poster Ratings Badges)
              </label>
              <a
                href="https://ratingposterdb.com"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                <span>RPDB Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <input
              type="text"
              value={profile.apiKeys.rpdbApiKey}
              onChange={(e) => onChangeApiKeys({ rpdbApiKey: e.target.value })}
              placeholder="e.g. t0-your-rpdb-key"
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white font-mono text-xs focus:outline-none focus:border-brand-500 transition"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Overlays IMDb, Rotten Tomatoes, and Metacritic badges directly onto movie posters.
            </p>
          </div>

          {/* Trakt Integration */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-200">
                Trakt Client ID (Watchlist & Scrobbling)
              </label>
              <a
                href="https://trakt.tv/oauth/applications"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                <span>Trakt Developer Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <input
              type="text"
              value={profile.apiKeys.traktClientId}
              onChange={(e) => onChangeApiKeys({ traktClientId: e.target.value })}
              placeholder="Optional Trakt API client ID"
              className="w-full bg-nuvio-dark border border-nuvio-border rounded-xl px-3 py-2 text-sm text-white font-mono text-xs focus:outline-none focus:border-brand-500 transition"
            />
          </div>
        </div>
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 transition flex items-center space-x-2"
        >
          <span>Continue to Catalogs & Rows →</span>
        </button>
      </div>
    </div>
  );
};
