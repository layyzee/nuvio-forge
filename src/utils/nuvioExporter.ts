import { NuvioCollectionGroup, ForgeProfile } from '../types/nuvio';

/**
 * Formats and generates the 100% compliant Nuvio collections.json
 */
export function generateNuvioCollectionsJson(groups: NuvioCollectionGroup[]): string {
  // Strip editor-only fields like 'category' or 'badge'
  const cleanGroups = groups.map(group => ({
    id: group.id,
    title: group.title,
    backdropImageUrl: group.backdropImageUrl || null,
    pinToTop: Boolean(group.pinToTop),
    focusGlowEnabled: group.focusGlowEnabled !== undefined ? group.focusGlowEnabled : true,
    viewMode: group.viewMode || "FOLLOW_HOME",
    showAllTab: Boolean(group.showAllTab),
    folders: group.folders.map(folder => ({
      id: folder.id,
      title: folder.title,
      coverImageUrl: folder.coverImageUrl || null,
      focusGifUrl: folder.focusGifUrl || null,
      coverEmoji: folder.coverEmoji || null,
      tileShape: folder.tileShape || "LANDSCAPE",
      hideTitle: Boolean(folder.hideTitle),
      catalogSources: folder.catalogSources.map(cs => ({
        addonId: cs.addonId,
        type: cs.type,
        catalogId: cs.catalogId
      })),
      _coverMode: folder._coverMode || "image"
    }))
  }));

  return JSON.stringify(cleanGroups, null, 2);
}

/**
 * Downloads a string as a file to the user's computer
 */
export function downloadFile(content: string, filename: string, contentType: string = 'application/json') {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Generates an aggregated Stremio / Nuvio Addon manifest
 */
export function generateStremioManifest(profile: ForgeProfile) {
  const allCatalogs = profile.groups.flatMap(g => 
    g.folders.flatMap(f => 
      f.catalogSources.map(cs => ({
        type: cs.type,
        id: cs.catalogId,
        name: f.title
      }))
    )
  );

  return {
    id: `org.nuvioforge.${profile.id.replace(/[^a-z0-9]/gi, '')}`,
    version: "1.0.0",
    name: `NuvioForge: ${profile.name}`,
    description: "Custom curated home layout generated with NuvioForge",
    resources: ["catalog", "meta"],
    types: ["movie", "series", "anime"],
    catalogs: allCatalogs
  };
}

/**
 * Safely copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error("Clipboard copy failed:", err);
    return false;
  }
}
