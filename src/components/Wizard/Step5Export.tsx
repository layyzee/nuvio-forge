import React, { useState, useEffect, useRef } from 'react';
import { Download, Copy, Check, QrCode, Tv, Smartphone, Share2, Sparkles, ExternalLink, ShieldCheck, FileJson } from 'lucide-react';
import confetti from 'canvas-confetti';
import QRCodeLib from 'qrcode';
import { ForgeProfile } from '../../types/nuvio';
import { generateNuvioCollectionsJson, downloadFile, copyToClipboard } from '../../utils/nuvioExporter';

interface Step5ExportProps {
  profile: ForgeProfile;
  onBack: () => void;
}

export const Step5Export: React.FC<Step5ExportProps> = ({ profile, onBack }) => {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'tv' | 'mobile' | 'raw'>('tv');
  const collectionsJson = generateNuvioCollectionsJson(profile.groups);

  // Trigger celebratory confetti once on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  }, []);

  // Generate QR Code containing the data URI or base64 config
  useEffect(() => {
    async function makeQr() {
      try {
        // Data URI for the collections JSON
        const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(collectionsJson)}`;
        // If data is too large for standard QR, generate QR for local share
        const code = await QRCodeLib.toDataURL(dataUri.length < 2000 ? dataUri : window.location.href, {
          width: 260,
          margin: 1.5,
          color: {
            dark: '#6366F1',
            light: '#0B0F19'
          }
        });
        setQrDataUrl(code);
      } catch (err) {
        console.error("QR Code error:", err);
      }
    }
    makeQr();
  }, [collectionsJson]);

  const handleCopy = async () => {
    const success = await copyToClipboard(collectionsJson);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const safeName = profile.name.toLowerCase().replace(/[^a-z0-9]/gi, '_') || 'nuvio_setup';
    downloadFile(collectionsJson, `${safeName}_collections.json`);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Celebration Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-brand-900/50 via-nuvio-card to-emerald-950/30 border border-brand-500/30 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Ready for Nuvio
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Your Setup is Ready & 100% Free!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              No paywalls, no monthly subscription fees, and no profile limits. You own your configuration file.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-500/25 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download JSON</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-nuvio-surface hover:bg-nuvio-border border border-nuvio-border text-slate-200 font-bold text-xs sm:text-sm transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* QR Code & Installation Guide Split */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* QR Code Card */}
        <div className="bg-nuvio-card border border-nuvio-border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="flex items-center space-x-2 text-xs font-bold text-brand-300 uppercase tracking-wider mb-3">
            <QrCode className="w-4 h-4" /> Instant TV / Mobile Scan
          </div>

          <div className="p-2.5 bg-nuvio-dark rounded-2xl border border-nuvio-border shadow-inner">
            {qrDataUrl ? (
              <img src={qrDataUrl} alt="Nuvio Setup QR" className="w-48 h-48 rounded-xl" />
            ) : (
              <div className="w-48 h-48 flex items-center justify-center text-slate-500 text-xs">
                Generating QR...
              </div>
            )}
          </div>

          <p className="text-[11px] text-slate-400 mt-3 leading-relaxed max-w-[220px]">
            Scan with your phone or Nuvio TV camera to import without typing on a remote.
          </p>
        </div>

        {/* Step-by-Step Installation Tabs */}
        <div className="md:col-span-2 bg-nuvio-card border border-nuvio-border rounded-2xl p-5 flex flex-col justify-between shadow-sm">
          <div>
            {/* Guide Tabs */}
            <div className="flex items-center space-x-2 border-b border-nuvio-border pb-3 mb-4">
              <button
                onClick={() => setActiveTab('tv')}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'tv'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>Nuvio TV (FireStick / Android TV)</span>
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'mobile'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Nuvio Mobile / PC</span>
              </button>
              <button
                onClick={() => setActiveTab('raw')}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeTab === 'raw'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileJson className="w-3.5 h-3.5" />
                <span>Raw JSON</span>
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'tv' && (
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Download or Copy your JSON</h4>
                    <p className="text-slate-400 mt-0.5">
                      Click the <strong>Download JSON</strong> button above to save your <code className="text-brand-300">collections.json</code>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Open Nuvio TV App</h4>
                    <p className="text-slate-400 mt-0.5">
                      Navigate to <strong>Settings ➔ Addons & Catalogs ➔ Collections</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Import Setup</h4>
                    <p className="text-slate-400 mt-0.5">
                      Choose <strong>Import from Local File</strong> or use the <strong>Nuvio Web Companion Sync</strong> link shown on your TV screen to upload the JSON in 1 click!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mobile' && (
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Download File to Device</h4>
                    <p className="text-slate-400 mt-0.5">
                      Download your <code className="text-brand-300">collections.json</code> directly onto your Android device or PC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Import in Nuvio Mobile</h4>
                    <p className="text-slate-400 mt-0.5">
                      Open Nuvio ➔ Tap Gear Icon (Settings) ➔ <strong>Collections ➔ Import JSON</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'raw' && (
              <div className="relative">
                <pre className="bg-nuvio-dark border border-nuvio-border p-3 rounded-xl text-[11px] font-mono text-slate-300 max-h-48 overflow-y-auto scrollbar-thin">
                  {collectionsJson}
                </pre>
              </div>
            )}
          </div>

          {/* Cloud Sync Tip (Free GitHub Gist) */}
          <div className="mt-4 pt-3.5 border-t border-nuvio-border/80 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Host for free on GitHub Gist for auto-syncing across all TVs!
            </span>
            <a
              href="https://gist.github.com"
              target="_blank"
              rel="noreferrer"
              className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1 text-[11px]"
            >
              <span>GitHub Gist</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-2">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-nuvio-card hover:bg-nuvio-surface border border-nuvio-border transition"
        >
          ← Edit Scrapers & Settings
        </button>
      </div>
    </div>
  );
};
