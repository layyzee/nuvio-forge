export type TileShape = "LANDSCAPE" | "PORTRAIT" | "SQUARE" | "BANNER";
export type ViewMode = "FOLLOW_HOME" | "GRID" | "CAROUSEL";
export type CoverMode = "image" | "emoji";
export type ContentType = "movie" | "series" | "anime" | "other";

export interface NuvioCatalogSource {
  addonId: string;
  type: ContentType;
  catalogId: string;
  name?: string;
  icon?: string;
}

export interface NuvioFolder {
  id: string;
  title: string;
  coverImageUrl?: string | null;
  focusGifUrl?: string | null;
  coverEmoji?: string | null;
  tileShape?: TileShape;
  hideTitle?: boolean;
  catalogSources: NuvioCatalogSource[];
  _coverMode?: CoverMode;
  // Metadata for editor UI
  category?: string;
  badge?: string;
}

export interface NuvioCollectionGroup {
  id: string;
  title: string;
  backdropImageUrl?: string | null;
  pinToTop?: boolean;
  focusGlowEnabled?: boolean;
  viewMode?: ViewMode;
  showAllTab?: boolean;
  folders: NuvioFolder[];
}

export type DebridProvider = "none" | "realdebrid" | "torbox" | "alldebrid" | "premiumize" | "debridlink";
export type ScraperType = "torrentio" | "comet" | "mediafusion" | "stremthru" | "aiostreams" | "knightcrawler";

export interface ScraperConfig {
  id: string;
  name: string;
  type: ScraperType;
  enabled: boolean;
  debridService: DebridProvider;
  debridApiKey: string;
  resolutions: string[];
  sort: "quality" | "size" | "seeders";
  manifestUrl?: string;
}

export interface UserApiKeys {
  tmdbApiKey: string;
  rpdbApiKey: string;
  traktClientId: string;
  simklClientId: string;
  mdblistApiKey: string;
}

export interface ForgeProfile {
  id: string;
  name: string;
  description: string;
  groups: NuvioCollectionGroup[];
  scrapers: ScraperConfig[];
  apiKeys: UserApiKeys;
  lastUpdated: number;
}
