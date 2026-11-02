import { ScraperConfig } from '../types/nuvio';

export interface ScraperInfo {
  type: ScraperConfig['type'];
  name: string;
  description: string;
  website: string;
  badge: string;
  defaultSort: "quality" | "size" | "seeders";
  supportedDebrids: ScraperConfig['debridService'][];
}

export const POPULAR_SCRAPERS: ScraperInfo[] = [
  {
    type: "comet",
    name: "Comet",
    description: "Fast, modern Stremio & Nuvio scraper with smart caching and Debrid proxying.",
    website: "https://comet.elfhosted.com",
    badge: "Recommended",
    defaultSort: "quality",
    supportedDebrids: ["realdebrid", "torbox", "alldebrid", "premiumize", "debridlink"]
  },
  {
    type: "torrentio",
    name: "Torrentio",
    description: "The gold standard torrent & debrid provider for Stremio and Nuvio.",
    website: "https://torrentio.strem.fun",
    badge: "Popular",
    defaultSort: "quality",
    supportedDebrids: ["realdebrid", "torbox", "alldebrid", "premiumize", "debridlink"]
  },
  {
    type: "mediafusion",
    name: "MediaFusion",
    description: "Multi-source scraper with multi-audio, live sports, and anime scrapers.",
    website: "https://mediafusion.elfhosted.com",
    badge: "Advanced",
    defaultSort: "quality",
    supportedDebrids: ["realdebrid", "torbox", "alldebrid", "premiumize"]
  },
  {
    type: "stremthru",
    name: "StremThru",
    description: "High-performance router and scraper proxy for fast stream resolutions.",
    website: "https://stremthru.elfhosted.com",
    badge: "Lightweight",
    defaultSort: "quality",
    supportedDebrids: ["realdebrid", "torbox", "alldebrid"]
  },
  {
    type: "knightcrawler",
    name: "KnightCrawler",
    description: "Open-source Torrentio fork with alternative scrapers and mirrors.",
    website: "https://knightcrawler.elfhosted.com",
    badge: "Community",
    defaultSort: "seeders",
    supportedDebrids: ["realdebrid", "torbox", "alldebrid", "premiumize"]
  }
];

export const DEBRID_SERVICES = [
  { id: "none", name: "P2P / Torrent (No Debrid)", desc: "Free, directly connects to torrent peers (VPN advised)" },
  { id: "realdebrid", name: "Real-Debrid", desc: "Fastest cached stream delivery, unlimited speeds" },
  { id: "torbox", name: "TorBox", desc: "Privacy-focused high-speed Debrid with generous limits" },
  { id: "alldebrid", name: "AllDebrid", desc: "Reliable multi-hoster and cached torrents" },
  { id: "premiumize", name: "Premiumize.me", desc: "Cloud downloader, VPN, and premium streaming" },
  { id: "debridlink", name: "Debrid-Link", desc: "European high-speed torrent cache" }
];
