import { ForgeProfile } from '../types/nuvio';
import { STARTER_PRESETS } from '../data/presets';

const STORAGE_KEY = 'nuvio_forge_active_profile';
const ALL_PROFILES_KEY = 'nuvio_forge_saved_profiles';

export function loadActiveProfile(): ForgeProfile {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.groups && parsed.groups.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading profile from storage:", e);
  }
  // Default to The Essentials
  return JSON.parse(JSON.stringify(STARTER_PRESETS[0]));
}

export function saveActiveProfile(profile: ForgeProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...profile,
      lastUpdated: Date.now()
    }));
  } catch (e) {
    console.error("Error saving profile:", e);
  }
}

export function resetToPreset(presetId: string): ForgeProfile {
  const found = STARTER_PRESETS.find(p => p.id === presetId) || STARTER_PRESETS[0];
  const fresh = JSON.parse(JSON.stringify(found));
  fresh.lastUpdated = Date.now();
  saveActiveProfile(fresh);
  return fresh;
}
