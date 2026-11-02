import React from 'react';
import { Hammer, Sparkles, RefreshCw, Upload, Download, Github, ShieldCheck } from 'lucide-react';
import { STARTER_PRESETS } from '../data/presets';
import { ForgeProfile } from '../types/nuvio';

interface NavbarProps {
  profile: ForgeProfile;
  onSelectPreset: (presetId: string) => void;
  onReset: () => void;
  onOpenImport: () => void;
  onGoToExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onSelectPreset,
  onReset,
  onOpenImport,
  onGoToExport
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-nuvio-border px-4 lg:px-8 py-3.5 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-brand-500/20 ring-1 ring-white/20">
          <Hammer className="w-5 h-5 text-white transform -rotate-12" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              Nuvio<span className="text-brand-400">Forge</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3" /> 100% Free & Open
            </span>
          </div>
          <p className="text-xs text-slate-400 hidden sm:block">The community-first setup studio for Nuvio & Stremio</p>
        </div>
      </div>

      {/* Preset Selector & Quick Actions */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Preset Switcher */}
        <div className="flex items-center bg-nuvio-card border border-nuvio-border rounded-lg p-1">
          <Sparkles className="w-4 h-4 text-brand-400 ml-2 mr-1 hidden sm:block" />
          <select
            value={STARTER_PRESETS.some(p => p.id === profile.id) ? profile.id : "custom"}
            onChange={(e) => onSelectPreset(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-medium text-slate-200 py-1 px-2 focus:outline-none cursor-pointer"
          >
            <option value="custom" disabled className="bg-nuvio-card text-slate-400">Presets:</option>
            {STARTER_PRESETS.map((p) => (
              <option key={p.id} value={p.id} className="bg-nuvio-dark text-slate-200">
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Import JSON */}
        <button
          onClick={onOpenImport}
          className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-nuvio-card hover:bg-nuvio-surface border border-nuvio-border rounded-lg transition"
          title="Import existing collections.json"
        >
          <Upload className="w-3.5 h-3.5 text-slate-400" />
          <span>Import</span>
        </button>

        {/* Reset */}
        <button
          onClick={onReset}
          className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition"
          title="Reset to default preset"
        >
          <RefreshCw className="w-4 h-4" />
        </button>

        {/* Export Button */}
        <button
          onClick={onGoToExport}
          className="flex items-center space-x-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/25 rounded-lg transition"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Export Setup</span>
          <span className="sm:hidden">Export</span>
        </button>
      </div>
    </header>
  );
};
