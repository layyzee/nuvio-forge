import React, { useState } from 'react';
import { Upload, X, AlertCircle } from 'lucide-react';
import { NuvioCollectionGroup } from '../../types/nuvio';

interface ImportJsonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (groups: NuvioCollectionGroup[]) => void;
}

export const ImportJsonModal: React.FC<ImportJsonModalProps> = ({
  isOpen,
  onClose,
  onImport
}) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setJsonInput(text);
      setError(null);
    };
    reader.readAsText(file);
  };

  const handleProcessImport = () => {
    try {
      setError(null);
      const parsed = JSON.parse(jsonInput);

      if (!Array.isArray(parsed)) {
        throw new Error("Invalid Nuvio format: Expected an array of collection groups.");
      }

      // Quick validation
      const validGroups: NuvioCollectionGroup[] = parsed.map((item, idx) => ({
        id: item.id || `group-imported-${idx}`,
        title: item.title || `Collection ${idx + 1}`,
        backdropImageUrl: item.backdropImageUrl || null,
        pinToTop: Boolean(item.pinToTop),
        focusGlowEnabled: item.focusGlowEnabled !== undefined ? item.focusGlowEnabled : true,
        viewMode: item.viewMode || "FOLLOW_HOME",
        showAllTab: Boolean(item.showAllTab),
        folders: Array.isArray(item.folders) ? item.folders : []
      }));

      onImport(validGroups);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to parse JSON file.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-nuvio-dark border border-nuvio-border rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Upload className="w-5 h-5 text-brand-400" />
            <h3 className="text-base font-bold text-white">Import Existing collections.json</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Upload or paste your existing Nuvio, Xperience, or custom collection JSON file below to load it into NuvioForge for free editing.
        </p>

        {/* File Drag / Select */}
        <div>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-nuvio-border hover:border-brand-500 rounded-xl p-4 cursor-pointer bg-nuvio-card/50 transition">
            <Upload className="w-6 h-6 text-brand-400 mb-1" />
            <span className="text-xs font-semibold text-slate-200">Click to upload JSON file</span>
            <span className="text-[10px] text-slate-400 mt-0.5">.json files supported</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Text Area */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Or Paste Raw JSON:
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            rows={6}
            placeholder="[ { id: '...', title: 'Discover', folders: [...] } ]"
            className="w-full bg-nuvio-card border border-nuvio-border rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-brand-500"
          />
        </div>

        {error && (
          <div className="flex items-center space-x-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex justify-end space-x-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!jsonInput.trim()}
            onClick={handleProcessImport}
            className="px-5 py-2 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 disabled:opacity-40 rounded-xl shadow transition"
          >
            Import Configuration
          </button>
        </div>
      </div>
    </div>
  );
};
