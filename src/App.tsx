import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { StepNavigation, WizardStep } from './components/Wizard/StepNavigation';
import { Step1Profiles } from './components/Wizard/Step1Profiles';
import { Step2Catalogs } from './components/Wizard/Step2Catalogs';
import { Step3Collections } from './components/Wizard/Step3Collections';
import { Step4Scrapers } from './components/Wizard/Step4Scrapers';
import { Step5Export } from './components/Wizard/Step5Export';
import { DeviceSimulator } from './components/Simulator/DeviceSimulator';
import { ImportJsonModal } from './components/Modals/ImportJsonModal';
import { ForgeProfile, NuvioCollectionGroup, NuvioFolder, ScraperConfig, UserApiKeys } from './types/nuvio';
import { loadActiveProfile, saveActiveProfile, resetToPreset } from './utils/storage';
import { CatalogTemplate } from './data/catalogPresets';

export function App() {
  const [profile, setProfile] = useState<ForgeProfile>(() => loadActiveProfile());
  const [currentStep, setCurrentStep] = useState<WizardStep>('apis');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Auto-save whenever profile updates
  useEffect(() => {
    saveActiveProfile(profile);
  }, [profile]);

  // Preset switch
  const handleSelectPreset = (presetId: string) => {
    const updated = resetToPreset(presetId);
    setProfile(updated);
  };

  // Reset to default
  const handleReset = () => {
    if (confirm("Reset layout to default starter preset? Any unsaved edits will be cleared.")) {
      const reset = resetToPreset('preset-essentials');
      setProfile(reset);
    }
  };

  // Step 1 updates
  const handleChangeProfileName = (name: string, description: string) => {
    setProfile(prev => ({ ...prev, name, description }));
  };

  const handleChangeApiKeys = (keys: Partial<UserApiKeys>) => {
    setProfile(prev => ({
      ...prev,
      apiKeys: { ...prev.apiKeys, ...keys }
    }));
  };

  // Step 2 Catalog toggle
  const handleToggleCatalog = (template: CatalogTemplate) => {
    const catalogId = template.folderData.catalogSources[0].catalogId;

    // Check if already in any group
    const exists = profile.groups.some(g =>
      g.folders.some(f => f.catalogSources.some(cs => cs.catalogId === catalogId))
    );

    if (exists) {
      // Remove it
      const updatedGroups = profile.groups.map(g => ({
        ...g,
        folders: g.folders.filter(f => !f.catalogSources.some(cs => cs.catalogId === catalogId))
      }));
      setProfile(prev => ({ ...prev, groups: updatedGroups }));
    } else {
      // Add it
      const newFolder: NuvioFolder = {
        ...template.folderData,
        id: `folder-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      };

      // Determine target group based on category
      const targetGroupTitle = template.category === 'Streaming Services' ? 'Streaming Services' : 'Discover';
      let targetGroup = profile.groups.find(g => g.title.toLowerCase().includes(targetGroupTitle.toLowerCase()));

      let updatedGroups: NuvioCollectionGroup[];
      if (targetGroup) {
        updatedGroups = profile.groups.map(g => {
          if (g.id !== targetGroup!.id) return g;
          return { ...g, folders: [...g.folders, newFolder] };
        });
      } else {
        // Put in first group
        updatedGroups = profile.groups.map((g, idx) => {
          if (idx !== 0) return g;
          return { ...g, folders: [...g.folders, newFolder] };
        });
      }
      setProfile(prev => ({ ...prev, groups: updatedGroups }));
    }
  };

  const handleAddCustomRow = (folder: NuvioFolder) => {
    const updatedGroups = profile.groups.map((g, idx) => {
      if (idx !== 0) return g;
      return { ...g, folders: [...g.folders, folder] };
    });
    setProfile(prev => ({ ...prev, groups: updatedGroups }));
  };

  // Step 3 updates
  const handleUpdateGroups = (groups: NuvioCollectionGroup[]) => {
    setProfile(prev => ({ ...prev, groups }));
  };

  // Step 4 updates
  const handleUpdateScrapers = (scrapers: ScraperConfig[]) => {
    setProfile(prev => ({ ...prev, scrapers }));
  };

  // Import JSON handler
  const handleImportGroups = (groups: NuvioCollectionGroup[]) => {
    setProfile(prev => ({
      ...prev,
      name: "Imported Setup",
      groups
    }));
    setCurrentStep('folders');
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        profile={profile}
        onSelectPreset={handleSelectPreset}
        onReset={handleReset}
        onOpenImport={() => setIsImportModalOpen(true)}
        onGoToExport={() => setCurrentStep('export')}
      />

      {/* Step Wizard Bar */}
      <StepNavigation
        currentStep={currentStep}
        onStepChange={(step) => setCurrentStep(step)}
      />

      {/* Main Studio Body: Wizard on Left, Simulator on Right */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">
        {/* Left Side: Wizard Content */}
        <div className="lg:col-span-7 xl:col-span-7 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-115px)] scrollbar-thin">
          {currentStep === 'apis' && (
            <Step1Profiles
              profile={profile}
              onChangeProfileName={handleChangeProfileName}
              onChangeApiKeys={handleChangeApiKeys}
              onApplyPreset={handleSelectPreset}
              onNext={() => setCurrentStep('catalogs')}
            />
          )}

          {currentStep === 'catalogs' && (
            <Step2Catalogs
              profile={profile}
              onToggleCatalog={handleToggleCatalog}
              onAddCustomRow={handleAddCustomRow}
              onNext={() => setCurrentStep('folders')}
              onBack={() => setCurrentStep('apis')}
            />
          )}

          {currentStep === 'folders' && (
            <Step3Collections
              profile={profile}
              onUpdateGroups={handleUpdateGroups}
              onNext={() => setCurrentStep('scrapers')}
              onBack={() => setCurrentStep('catalogs')}
            />
          )}

          {currentStep === 'scrapers' && (
            <Step4Scrapers
              profile={profile}
              onUpdateScrapers={handleUpdateScrapers}
              onNext={() => setCurrentStep('export')}
              onBack={() => setCurrentStep('folders')}
            />
          )}

          {currentStep === 'export' && (
            <Step5Export
              profile={profile}
              onBack={() => setCurrentStep('scrapers')}
            />
          )}
        </div>

        {/* Right Side: Interactive Device Simulator */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-5 h-[calc(100vh-115px)] sticky top-[115px]">
          <DeviceSimulator profile={profile} />
        </div>
      </main>

      {/* Import JSON Modal */}
      <ImportJsonModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportGroups}
      />
    </div>
  );
}

export default App;
