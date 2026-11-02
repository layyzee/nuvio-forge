import React from 'react';
import { KeyRound, LayoutGrid, FolderTree, Zap, QrCode, Check } from 'lucide-react';

export type WizardStep = 'apis' | 'catalogs' | 'folders' | 'scrapers' | 'export';

interface StepNavigationProps {
  currentStep: WizardStep;
  onStepChange: (step: WizardStep) => void;
}

interface StepItem {
  id: WizardStep;
  label: string;
  subLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: StepItem[] = [
  { id: 'apis', label: 'Keys & APIs', subLabel: 'TMDB & Badges', icon: KeyRound },
  { id: 'catalogs', label: 'Catalogs', subLabel: 'Streaming & Rows', icon: LayoutGrid },
  { id: 'folders', label: 'Folders', subLabel: 'Nuvio Layout', icon: FolderTree },
  { id: 'scrapers', label: 'Scrapers', subLabel: 'Debrid & Comet', icon: Zap },
  { id: 'export', label: 'Export & Install', subLabel: 'QR & JSON', icon: QrCode },
];

export const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep, onStepChange }) => {
  return (
    <div className="bg-nuvio-card/50 border-b border-nuvio-border/80 px-4 lg:px-8 py-2 overflow-x-auto scrollbar-none">
      <div className="flex items-center min-w-max space-x-1 sm:space-x-3">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isDone = STEPS.findIndex(s => s.id === currentStep) > idx;

          return (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-brand-600/20 border border-brand-500/40 text-brand-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-nuvio-surface/60 border border-transparent'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                    : isDone
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-nuvio-surface text-slate-400'
                }`}
              >
                {isDone ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
              </div>
              <div>
                <div className="text-xs font-semibold leading-tight flex items-center gap-1.5">
                  <span className={isActive ? 'text-white' : ''}>{step.label}</span>
                </div>
                <div className="text-[10px] text-slate-400 font-normal leading-none mt-0.5">
                  {step.subLabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
