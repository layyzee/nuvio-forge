import React, { useState } from 'react';
import { Tv, Smartphone, Sparkles, Star, Play, Info, Flame, Clapperboard, Folder } from 'lucide-react';
import { NuvioCollectionGroup, ForgeProfile } from '../../types/nuvio';
import { SAMPLE_MEDIA, SampleMediaItem } from '../../data/samplePosters';

interface DeviceSimulatorProps {
  profile: ForgeProfile;
}

export const DeviceSimulator: React.FC<DeviceSimulatorProps> = ({ profile }) => {
  const [deviceMode, setDeviceMode] = useState<'tv' | 'mobile'>('tv');
  const [activeMedia, setActiveMedia] = useState<SampleMediaItem>(SAMPLE_MEDIA.trending_movies[0]);
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);

  // Flatten all folders for easy previewing
  const allFolders = profile.groups.flatMap(g => g.folders);
  const currentFolder = allFolders[activeFolderIndex] || allFolders[0];

  return (
    <div className="flex flex-col h-full bg-[#070A11] border-l border-nuvio-border">
      {/* Simulator Control Bar */}
      <div className="px-4 py-2.5 bg-nuvio-dark border-b border-nuvio-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-200">Live Nuvio Simulator</span>
          <span className="text-[10px] bg-brand-500/10 text-brand-400 px-1.5 py-0.5 rounded border border-brand-500/20">
            Realtime
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-nuvio-card border border-nuvio-border rounded-lg p-0.5">
          <button
            onClick={() => setDeviceMode('tv')}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
              deviceMode === 'tv'
                ? 'bg-brand-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>TV (16:9)</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition ${
              deviceMode === 'mobile'
                ? 'bg-brand-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      {/* Simulator Display Canvas */}
      <div className="flex-1 p-3 sm:p-5 overflow-y-auto flex items-center justify-center bg-gradient-to-b from-[#090D17] to-[#04060A]">
        {deviceMode === 'tv' ? (
          /* ================= TV DISPLAY (16:9 Landscape) ================= */
          <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/30 border border-slate-800 relative flex flex-col select-none group">
            {/* Ambient Hero Backdrop */}
            <div className="absolute inset-0 z-0">
              <img
                src={activeMedia.backdropUrl}
                alt={activeMedia.title}
                className="w-full h-full object-cover object-center opacity-45 scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
            </div>

            {/* TV Navigation Header */}
            <div className="relative z-10 px-6 py-4 flex items-center justify-between text-xs font-medium">
              <div className="flex items-center space-x-6">
                <span className="font-black text-lg tracking-wider text-brand-400">NUVIO</span>
                <span className="text-white font-bold border-b-2 border-brand-500 pb-0.5 cursor-pointer">Discover</span>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Movies</span>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Series</span>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">Collections</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono">1080p 60fps</span>
                <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center font-bold text-white text-[10px]">
                  U
                </div>
              </div>
            </div>

            {/* Hero Featured Content */}
            <div className="relative z-10 px-6 mt-auto pb-4 max-w-xl">
              <div className="flex items-center space-x-2 text-xs mb-1.5">
                <span className="px-1.5 py-0.5 bg-brand-500/30 border border-brand-400/30 rounded text-brand-300 font-bold text-[10px]">
                  {activeMedia.quality}
                </span>
                <span className="flex items-center text-amber-400 font-semibold gap-1">
                  <Star className="w-3 h-3 fill-amber-400" /> {activeMedia.rating}
                </span>
                <span className="text-slate-400">{activeMedia.year}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300 font-medium">{activeMedia.genre.join(', ')}</span>
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
                {activeMedia.title}
              </h1>
              <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed max-w-md drop-shadow">
                {activeMedia.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mt-3">
                <button className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-white text-black font-bold text-xs hover:bg-slate-200 shadow transition">
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Play Stream</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/20 text-white font-semibold text-xs hover:bg-white/30 backdrop-blur transition">
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </div>

            {/* Folders & Collections Carousel on TV */}
            <div className="relative z-10 bg-black/70 backdrop-blur-md px-6 py-3 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Folder className="w-3.5 h-3.5 text-brand-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {profile.groups[0]?.title || 'Collections'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">
                  {allFolders.length} Folders Configured
                </span>
              </div>

              {/* Folder Tiles Scrollable */}
              <div className="flex items-center space-x-3 overflow-x-auto pb-1 scrollbar-none">
                {allFolders.map((folder, idx) => {
                  const isSelected = activeFolderIndex === idx;
                  return (
                    <div
                      key={folder.id}
                      onClick={() => setActiveFolderIndex(idx)}
                      className={`flex-shrink-0 cursor-pointer rounded-xl overflow-hidden transition-all duration-300 relative group/tile ${
                        isSelected
                          ? 'ring-2 ring-brand-400 scale-105 shadow-lg shadow-brand-500/30'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ width: folder.tileShape === 'PORTRAIT' ? '80px' : '120px', height: '65px' }}
                    >
                      {folder._coverMode === 'image' && folder.coverImageUrl ? (
                        <img
                          src={folder.coverImageUrl}
                          alt={folder.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to emoji banner if image fails
                            (e.currentTarget as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-nuvio-surface to-brand-950 flex flex-col items-center justify-center p-1">
                          <span className="text-xl mb-0.5">{folder.coverEmoji || '📁'}</span>
                          <span className="text-[9px] font-bold text-slate-200 text-center truncate max-w-[90%]">
                            {folder.title}
                          </span>
                        </div>
                      )}

                      {/* Title overlay */}
                      {!folder.hideTitle && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-1">
                          <p className="text-[10px] font-bold text-white truncate text-center">
                            {folder.title}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ================= MOBILE DISPLAY (Phone Aspect) ================= */
          <div className="w-[310px] h-[610px] bg-black rounded-[40px] p-2.5 ring-8 ring-slate-800 shadow-2xl relative flex flex-col overflow-hidden select-none">
            {/* Phone Notch */}
            <div className="absolute top-3 inset-x-0 mx-auto w-24 h-4 bg-slate-900 rounded-full z-30" />

            {/* Inner Phone Screen */}
            <div className="flex-1 bg-[#090D17] rounded-[30px] overflow-y-auto flex flex-col relative scrollbar-none pt-7">
              {/* Mobile Hero Header */}
              <div className="relative h-44 w-full">
                <img
                  src={activeMedia.backdropUrl}
                  alt={activeMedia.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D17] via-[#090D17]/40 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3">
                  <div className="flex items-center space-x-1.5 text-[10px] font-bold text-brand-300">
                    <Flame className="w-3 h-3 text-rose-500" />
                    <span>POPULAR IN NUVIO</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                    {activeMedia.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-300 mt-1">
                    <span className="text-amber-400 font-bold">★ {activeMedia.rating}</span>
                    <span>{activeMedia.year}</span>
                    <span className="px-1 py-0.2 bg-white/20 rounded font-semibold text-[9px]">
                      {activeMedia.quality}
                    </span>
                  </div>
                </div>
              </div>

              {/* Configured Collection Folders on Mobile */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-200">Your Hub Categories</span>
                  <span className="text-[10px] text-brand-400 font-medium">{allFolders.length} rows</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {allFolders.slice(0, 6).map((folder, idx) => (
                    <div
                      key={folder.id}
                      className="bg-nuvio-card border border-nuvio-border rounded-xl p-2.5 flex items-center space-x-2 hover:border-brand-500 transition cursor-pointer"
                    >
                      <span className="text-lg">{folder.coverEmoji || '🎬'}</span>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-200 truncate">{folder.title}</p>
                        <p className="text-[10px] text-slate-400 truncate">
                          {folder.catalogSources[0]?.addonId || 'Addon source'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated Movie Carousel */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Clapperboard className="w-3 h-3 text-brand-400" /> Latest Watchlist
                    </span>
                    <span className="text-[10px] text-slate-400">See all</span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
                    {SAMPLE_MEDIA.trending_movies.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setActiveMedia(item)}
                        className="w-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden group"
                      >
                        <img
                          src={item.posterUrl}
                          alt={item.title}
                          className="w-full h-28 object-cover rounded-lg group-hover:scale-105 transition"
                        />
                        <p className="text-[10px] font-semibold text-slate-300 truncate mt-1">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
