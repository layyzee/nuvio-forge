import { NuvioFolder } from '../types/nuvio';

export interface CatalogTemplate {
  id: string;
  name: string;
  category: "Trending & Discover" | "Indian OTT & Cinema" | "Streaming Services" | "Cinephile & 4K" | "Anime & International";
  description: string;
  icon: string;
  coverImageUrl: string;
  folderData: Omit<NuvioFolder, "id">;
}

export const CATALOG_PRESETS: CatalogTemplate[] = [
  // ================= Trending & Discover =================
  {
    id: "trending_movies",
    name: "Trending Movies",
    category: "Trending & Discover",
    description: "The most watched and talked-about movies this week (Updated dynamically via TMDB / Trakt)",
    icon: "🔥",
    coverImageUrl: "/covers/trending_movies.svg",
    folderData: {
      title: "Trending Movies",
      coverEmoji: "🔥",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/trending_movies.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "mdblist.87667", name: "Trending Movies" }
      ]
    }
  },
  {
    id: "trending_shows",
    name: "Trending Shows",
    category: "Trending & Discover",
    description: "Top binge-worthy TV series trending worldwide (Live updated daily)",
    icon: "📺",
    coverImageUrl: "/covers/trending_shows.svg",
    folderData: {
      title: "Trending Shows",
      coverEmoji: "📺",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/trending_shows.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "series", catalogId: "mdblist.88434", name: "Trending Shows" }
      ]
    }
  },

  // ================= Indian OTT & Cinema =================
  {
    id: "hotstar_hub",
    name: "Disney+ Hotstar / JioHotstar",
    category: "Indian OTT & Cinema",
    description: "Hotstar Specials, live sports, Disney+ India, and direct-to-digital Hindi/South movie premieres",
    icon: "🌟",
    coverImageUrl: "/covers/hotstar.svg",
    folderData: {
      title: "Disney+ Hotstar",
      coverEmoji: "🌟",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/hotstar.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "hotstar.india.trending", name: "Hotstar Movies" },
        { addonId: "aio-metadata", type: "series", catalogId: "hotstar.india.series", name: "Hotstar Specials" }
      ]
    }
  },
  {
    id: "jiocinema_hub",
    name: "JioCinema",
    category: "Indian OTT & Cinema",
    description: "HBO in India, Jio Studios films, Asur, Taaza Khabar, Bigg Boss, and blockbuster cricket",
    icon: "🎀",
    coverImageUrl: "/covers/jiocinema.svg",
    folderData: {
      title: "JioCinema",
      coverEmoji: "🎀",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/jiocinema.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "jiocinema.movies", name: "JioCinema Movies" },
        { addonId: "aio-metadata", type: "series", catalogId: "jiocinema.shows", name: "JioCinema Shows" }
      ]
    }
  },
  {
    id: "sonyliv_hub",
    name: "SonyLIV",
    category: "Indian OTT & Cinema",
    description: "Critically acclaimed Indian series: Scam 1992, Gullak, Rocket Boys, Maharani & Indian cinema",
    icon: "⚡",
    coverImageUrl: "/covers/sonyliv.svg",
    folderData: {
      title: "SonyLIV",
      coverEmoji: "⚡",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/sonyliv.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "series", catalogId: "sonyliv.originals", name: "SonyLIV Originals" },
        { addonId: "aio-metadata", type: "movie", catalogId: "sonyliv.movies", name: "SonyLIV Cinema" }
      ]
    }
  },
  {
    id: "zee5_hub",
    name: "ZEE5",
    category: "Indian OTT & Cinema",
    description: "Leading multi-lingual Indian originals: Hindi, Telugu, Tamil, Marathi, Punjabi and Bengali hits",
    icon: "💜",
    coverImageUrl: "/covers/zee5.svg",
    folderData: {
      title: "ZEE5",
      coverEmoji: "💜",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/zee5.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "zee5.movies", name: "ZEE5 Blockbusters" },
        { addonId: "aio-metadata", type: "series", catalogId: "zee5.originals", name: "ZEE5 Originals" }
      ]
    }
  },
  {
    id: "aha_hub",
    name: "aha (100% Telugu & Tamil)",
    category: "Indian OTT & Cinema",
    description: "Exclusive home for 100% Telugu & Tamil cinema, chat shows (Unstoppable), and original web series",
    icon: "🔥",
    coverImageUrl: "/covers/aha.svg",
    folderData: {
      title: "aha Video",
      coverEmoji: "🔥",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/aha.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "aha.telugu.tamil", name: "aha Cinema" },
        { addonId: "aio-metadata", type: "series", catalogId: "aha.originals", name: "aha Web Series" }
      ]
    }
  },
  {
    id: "sunnxt_hub",
    name: "SUN NXT",
    category: "Indian OTT & Cinema",
    description: "South Indian cinema powerhouse: massive library of Tamil, Malayalam, Telugu, and Kannada classics",
    icon: "☀️",
    coverImageUrl: "/covers/sunnxt.svg",
    folderData: {
      title: "SUN NXT",
      coverEmoji: "☀️",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/sunnxt.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "sunnxt.south", name: "Sun NXT Blockbusters" }
      ]
    }
  },
  {
    id: "bollywood_hits",
    name: "Bollywood Theatrical & OTT",
    category: "Indian OTT & Cinema",
    description: "Fresh digital premieres and trending Hindi cinema across all streaming apps",
    icon: "🎬",
    coverImageUrl: "/covers/bollywood.svg",
    folderData: {
      title: "Bollywood Hits",
      coverEmoji: "🎬",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/bollywood.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "bollywood.trending.2024", name: "Bollywood Hits" }
      ]
    }
  },
  {
    id: "south_cinema",
    name: "South Indian Superhits",
    category: "Indian OTT & Cinema",
    description: "Tollywood, Kollywood, Mollywood & Sandalwood pan-Indian action, thrillers, and dramas",
    icon: "🏆",
    coverImageUrl: "/covers/south_indian.svg",
    folderData: {
      title: "South Cinema",
      coverEmoji: "🏆",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/south_indian.svg",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "south.indian.blockbusters", name: "South Superhits" }
      ]
    }
  },

  // ================= Global Streaming Services =================
  {
    id: "netflix_hub",
    name: "Netflix Originals & Hits",
    category: "Streaming Services",
    description: "Netflix exclusive movies and worldwide series (Automatically synced with new drops)",
    icon: "🔴",
    coverImageUrl: "/covers/netflix.svg",
    folderData: {
      title: "Netflix",
      coverEmoji: "🔴",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/netflix.svg",
      catalogSources: [
        { addonId: "pw.ers.netflix-catalog", type: "movie", catalogId: "nfx", name: "Netflix Movies" },
        { addonId: "pw.ers.netflix-catalog", type: "series", catalogId: "nfx", name: "Netflix Series" }
      ]
    }
  },
  {
    id: "disney_hub",
    name: "Disney+ (Pixar • Marvel • Star Wars)",
    category: "Streaming Services",
    description: "Disney+, Pixar, Marvel Studios, Lucasfilm, and National Geographic cinema",
    icon: "✨",
    coverImageUrl: "/covers/disney.svg",
    folderData: {
      title: "Disney+",
      coverEmoji: "✨",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/disney.svg",
      catalogSources: [
        { addonId: "pw.ers.disney-catalog", type: "movie", catalogId: "disney", name: "Disney+ Movies" },
        { addonId: "pw.ers.disney-catalog", type: "series", catalogId: "disney", name: "Disney+ Series" }
      ]
    }
  },
  {
    id: "hbo_hub",
    name: "HBO Max / Max",
    category: "Streaming Services",
    description: "Award-winning HBO prestige dramas and Warner Bros blockbusters",
    icon: "💜",
    coverImageUrl: "/covers/hbo.svg",
    folderData: {
      title: "HBO Max",
      coverEmoji: "💜",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/hbo.svg",
      catalogSources: [
        { addonId: "pw.ers.hbo-catalog", type: "movie", catalogId: "hbo", name: "HBO Movies" },
        { addonId: "pw.ers.hbo-catalog", type: "series", catalogId: "hbo", name: "HBO Series" }
      ]
    }
  },
  {
    id: "prime_hub",
    name: "Amazon Prime Video",
    category: "Streaming Services",
    description: "Prime Video exclusives, The Boys, Rings of Power, and global blockbusters",
    icon: "📦",
    coverImageUrl: "/covers/prime.svg",
    folderData: {
      title: "Prime Video",
      coverEmoji: "📦",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/prime.svg",
      catalogSources: [
        { addonId: "pw.ers.prime-catalog", type: "movie", catalogId: "amz", name: "Prime Movies" },
        { addonId: "pw.ers.prime-catalog", type: "series", catalogId: "amz", name: "Prime Series" }
      ]
    }
  },
  {
    id: "apple_hub",
    name: "Apple TV+ Cinema",
    category: "Streaming Services",
    description: "Award-winning Apple Original cinematic films and high-budget sci-fi series",
    icon: "🍏",
    coverImageUrl: "/covers/apple.svg",
    folderData: {
      title: "Apple TV+",
      coverEmoji: "🍏",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/apple.svg",
      catalogSources: [
        { addonId: "pw.ers.apple-catalog", type: "movie", catalogId: "atv", name: "Apple TV+ Movies" },
        { addonId: "pw.ers.apple-catalog", type: "series", catalogId: "atv", name: "Apple TV+ Series" }
      ]
    }
  },

  // ================= Cinephile & 4K =================
  {
    id: "top_250",
    name: "IMDb Top 250",
    category: "Cinephile & 4K",
    description: "The highest rated films of all time voted by cinephiles worldwide",
    icon: "⭐",
    coverImageUrl: "/covers/trending_movies.svg",
    folderData: {
      title: "IMDb Top 250",
      coverEmoji: "⭐",
      tileShape: "PORTRAIT",
      hideTitle: false,
      _coverMode: "emoji",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "imdb.top250", name: "IMDb Top 250" }
      ]
    }
  },
  {
    id: "cinema_4k",
    name: "4K HDR & Dolby Vision",
    category: "Cinephile & 4K",
    description: "Crisp ultra-high definition cinema with Dolby Vision & Atmos",
    icon: "💎",
    coverImageUrl: "/covers/trending_movies.svg",
    folderData: {
      title: "4K UHD Cinema",
      coverEmoji: "💎",
      tileShape: "PORTRAIT",
      hideTitle: false,
      _coverMode: "emoji",
      catalogSources: [
        { addonId: "aio-metadata", type: "movie", catalogId: "mdblist.4k", name: "4K UHD Cinema" }
      ]
    }
  },

  // ================= Anime & International =================
  {
    id: "anime_trending",
    name: "Top Airing Anime & Crunchyroll",
    category: "Anime & International",
    description: "Japanese simulcasts and top-rated anime series (Kitsu / Anilist)",
    icon: "🎌",
    coverImageUrl: "/covers/anime.svg",
    folderData: {
      title: "Trending Anime",
      coverEmoji: "🎌",
      tileShape: "LANDSCAPE",
      hideTitle: true,
      _coverMode: "image",
      coverImageUrl: "/covers/anime.svg",
      catalogSources: [
        { addonId: "community.kitsu", type: "anime", catalogId: "kitsu.airing", name: "Kitsu Airing" }
      ]
    }
  }
];
