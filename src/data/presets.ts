import { ForgeProfile } from '../types/nuvio';

export const STARTER_PRESETS: ForgeProfile[] = [
  // 1. The Essentials (Global Streamer)
  {
    id: "preset-essentials",
    name: "The Essentials (Global)",
    description: "Trending Movies, Popular Shows, and all major streaming services (Netflix, Disney+, HBO Max, Apple TV+, Prime Video).",
    lastUpdated: Date.now(),
    apiKeys: {
      tmdbApiKey: "",
      rpdbApiKey: "",
      traktClientId: "",
      simklClientId: "",
      mdblistApiKey: ""
    },
    scrapers: [
      {
        id: "comet-default",
        name: "Comet Streams",
        type: "comet",
        enabled: true,
        debridService: "realdebrid",
        debridApiKey: "",
        resolutions: ["4k", "1080p"],
        sort: "quality"
      }
    ],
    groups: [
      {
        id: "group-discover",
        title: "Discover",
        pinToTop: false,
        focusGlowEnabled: true,
        viewMode: "FOLLOW_HOME",
        showAllTab: false,
        folders: [
          {
            id: "folder-trending-movies",
            title: "Trending Movies",
            coverImageUrl: "/covers/trending_movies.svg",
            coverEmoji: "🔥",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "mdblist.87667", name: "Trending Movies" }
            ]
          },
          {
            id: "folder-trending-shows",
            title: "Trending Shows",
            coverImageUrl: "/covers/trending_shows.svg",
            coverEmoji: "📺",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "series", catalogId: "mdblist.88434", name: "Trending Shows" }
            ]
          }
        ]
      },
      {
        id: "group-services",
        title: "Streaming Services",
        pinToTop: false,
        focusGlowEnabled: true,
        viewMode: "FOLLOW_HOME",
        showAllTab: false,
        folders: [
          {
            id: "folder-netflix",
            title: "Netflix",
            coverImageUrl: "/covers/netflix.svg",
            coverEmoji: "🔴",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "pw.ers.netflix-catalog", type: "movie", catalogId: "nfx", name: "Netflix Movies" },
              { addonId: "pw.ers.netflix-catalog", type: "series", catalogId: "nfx", name: "Netflix Shows" }
            ]
          },
          {
            id: "folder-disney",
            title: "Disney+",
            coverImageUrl: "/covers/disney.svg",
            coverEmoji: "✨",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "pw.ers.disney-catalog", type: "movie", catalogId: "disney", name: "Disney+ Movies" },
              { addonId: "pw.ers.disney-catalog", type: "series", catalogId: "disney", name: "Disney+ Shows" }
            ]
          },
          {
            id: "folder-hbo",
            title: "HBO Max",
            coverImageUrl: "/covers/hbo.svg",
            coverEmoji: "💜",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "pw.ers.hbo-catalog", type: "movie", catalogId: "hbo", name: "HBO Movies" },
              { addonId: "pw.ers.hbo-catalog", type: "series", catalogId: "hbo", name: "HBO Shows" }
            ]
          },
          {
            id: "folder-apple",
            title: "Apple TV+",
            coverImageUrl: "/covers/apple.svg",
            coverEmoji: "🍏",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "pw.ers.apple-catalog", type: "movie", catalogId: "atv", name: "Apple TV+ Movies" },
              { addonId: "pw.ers.apple-catalog", type: "series", catalogId: "atv", name: "Apple TV+ Shows" }
            ]
          },
          {
            id: "folder-prime",
            title: "Prime Video",
            coverImageUrl: "/covers/prime.svg",
            coverEmoji: "📦",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "pw.ers.prime-catalog", type: "movie", catalogId: "amz", name: "Prime Movies" },
              { addonId: "pw.ers.prime-catalog", type: "series", catalogId: "amz", name: "Prime Shows" }
            ]
          }
        ]
      }
    ]
  },

  // 2. Desi & Indian OTT Cinema (Dedicated India Pack)
  {
    id: "preset-indian-ott",
    name: "Desi & Indian OTT Cinema 🇮🇳",
    description: "Tailored for Indian entertainment: Disney+ Hotstar, JioCinema, SonyLIV, ZEE5, aha, Bollywood & South cinema.",
    lastUpdated: Date.now(),
    apiKeys: {
      tmdbApiKey: "",
      rpdbApiKey: "",
      traktClientId: "",
      simklClientId: "",
      mdblistApiKey: ""
    },
    scrapers: [
      {
        id: "comet-india",
        name: "Comet Multi-Audio",
        type: "comet",
        enabled: true,
        debridService: "realdebrid",
        debridApiKey: "",
        resolutions: ["4k", "1080p"],
        sort: "quality"
      }
    ],
    groups: [
      {
        id: "group-indian-ott",
        title: "Indian Streaming Platforms",
        pinToTop: true,
        focusGlowEnabled: true,
        viewMode: "FOLLOW_HOME",
        showAllTab: false,
        folders: [
          {
            id: "folder-hotstar",
            title: "Disney+ Hotstar",
            coverImageUrl: "/covers/hotstar.svg",
            coverEmoji: "🌟",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "hotstar.india.trending", name: "Hotstar Movies" },
              { addonId: "aio-metadata", type: "series", catalogId: "hotstar.india.series", name: "Hotstar Specials" }
            ]
          },
          {
            id: "folder-jiocinema",
            title: "JioCinema",
            coverImageUrl: "/covers/jiocinema.svg",
            coverEmoji: "🎀",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "jiocinema.movies", name: "JioCinema Movies" },
              { addonId: "aio-metadata", type: "series", catalogId: "jiocinema.shows", name: "JioCinema Shows" }
            ]
          },
          {
            id: "folder-sonyliv",
            title: "SonyLIV",
            coverImageUrl: "/covers/sonyliv.svg",
            coverEmoji: "⚡",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "series", catalogId: "sonyliv.originals", name: "SonyLIV Originals" },
              { addonId: "aio-metadata", type: "movie", catalogId: "sonyliv.movies", name: "SonyLIV Cinema" }
            ]
          },
          {
            id: "folder-zee5",
            title: "ZEE5",
            coverImageUrl: "/covers/zee5.svg",
            coverEmoji: "💜",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "zee5.movies", name: "ZEE5 Blockbusters" },
              { addonId: "aio-metadata", type: "series", catalogId: "zee5.originals", name: "ZEE5 Originals" }
            ]
          },
          {
            id: "folder-aha",
            title: "aha Video",
            coverImageUrl: "/covers/aha.svg",
            coverEmoji: "🔥",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "aha.telugu.tamil", name: "aha Cinema" },
              { addonId: "aio-metadata", type: "series", catalogId: "aha.originals", name: "aha Web Series" }
            ]
          },
          {
            id: "folder-sunnxt",
            title: "SUN NXT",
            coverImageUrl: "/covers/sunnxt.svg",
            coverEmoji: "☀️",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "sunnxt.south", name: "Sun NXT Blockbusters" }
            ]
          }
        ]
      },
      {
        id: "group-desi-cinema",
        title: "Indian Cinema & Trending",
        pinToTop: false,
        focusGlowEnabled: true,
        viewMode: "FOLLOW_HOME",
        showAllTab: false,
        folders: [
          {
            id: "folder-bollywood",
            title: "Bollywood Hits",
            coverImageUrl: "/covers/bollywood.svg",
            coverEmoji: "🎬",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "bollywood.trending.2024", name: "Bollywood Hits" }
            ]
          },
          {
            id: "folder-south-cinema",
            title: "South Cinema",
            coverImageUrl: "/covers/south_indian.svg",
            coverEmoji: "🏆",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "south.indian.blockbusters", name: "South Superhits" }
            ]
          }
        ]
      }
    ]
  },

  // 3. The 4K Cinephile
  {
    id: "preset-cinephile",
    name: "The 4K Cinephile",
    description: "Curated for home theater buffs: 4K HDR, Dolby Vision, IMDb Top 250, and Oscar masterpieces.",
    lastUpdated: Date.now(),
    apiKeys: {
      tmdbApiKey: "",
      rpdbApiKey: "",
      traktClientId: "",
      simklClientId: "",
      mdblistApiKey: ""
    },
    scrapers: [
      {
        id: "comet-cinephile",
        name: "Comet 4K High Bitrate",
        type: "comet",
        enabled: true,
        debridService: "realdebrid",
        debridApiKey: "",
        resolutions: ["4k"],
        sort: "quality"
      }
    ],
    groups: [
      {
        id: "group-4k-hdr",
        title: "Home Theater 4K & HDR",
        pinToTop: true,
        focusGlowEnabled: true,
        viewMode: "FOLLOW_HOME",
        showAllTab: false,
        folders: [
          {
            id: "folder-4k-uhd",
            title: "4K UHD Cinema",
            coverEmoji: "💎",
            tileShape: "PORTRAIT",
            hideTitle: false,
            _coverMode: "emoji",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "mdblist.4k", name: "4K UHD Cinema" }
            ]
          },
          {
            id: "folder-top-250",
            title: "IMDb Top 250",
            coverEmoji: "⭐",
            tileShape: "PORTRAIT",
            hideTitle: false,
            _coverMode: "emoji",
            catalogSources: [
              { addonId: "aio-metadata", type: "movie", catalogId: "imdb.top250", name: "IMDb Top 250" }
            ]
          }
        ]
      }
    ]
  },

  // 4. Anime & Global
  {
    id: "preset-anime-global",
    name: "Anime & Global Spotlight",
    description: "Dedicated hub for anime and Asian drama fans with Kitsu, simulcasts, and Crunchyroll hits.",
    lastUpdated: Date.now(),
    apiKeys: {
      tmdbApiKey: "",
      rpdbApiKey: "",
      traktClientId: "",
      simklClientId: "",
      mdblistApiKey: ""
    },
    scrapers: [
      {
        id: "mediafusion-anime",
        name: "MediaFusion Multi-Audio",
        type: "mediafusion",
        enabled: true,
        debridService: "torbox",
        debridApiKey: "",
        resolutions: ["1080p"],
        sort: "seeders"
      }
    ],
    groups: [
      {
        id: "group-anime",
        title: "Anime & Asian Spotlight",
        pinToTop: false,
        focusGlowEnabled: true,
        viewMode: "FOLLOW_HOME",
        showAllTab: false,
        folders: [
          {
            id: "folder-airing-anime",
            title: "Trending Anime",
            coverImageUrl: "/covers/anime.svg",
            coverEmoji: "🎌",
            tileShape: "LANDSCAPE",
            hideTitle: true,
            _coverMode: "image",
            catalogSources: [
              { addonId: "community.kitsu", type: "anime", catalogId: "kitsu.airing", name: "Kitsu Airing" }
            ]
          }
        ]
      }
    ]
  }
];
