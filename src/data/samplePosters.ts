export interface SampleMediaItem {
  id: string;
  title: string;
  year: number;
  rating: number;
  quality: "4K HDR" | "1080p" | "Dolby Vision";
  posterUrl: string;
  backdropUrl: string;
  genre: string[];
  overview: string;
  type: "movie" | "series";
  platform?: string;
}

export const SAMPLE_MEDIA: Record<string, SampleMediaItem[]> = {
  trending_movies: [
    {
      id: "m_kalki",
      title: "Kalki 2898 AD",
      year: 2024,
      rating: 8.2,
      quality: "Dolby Vision",
      posterUrl: "https://image.tmdb.org/t/p/w500/9b2N9nfe28G9y5O9Qc2R8m29x6u.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/stKGOmvd1T0oOQ964Qp28x8bF0Y.jpg",
      genre: ["Sci-Fi", "Action", "Mythology"],
      overview: "A modern avatar of Vishnu, a Hindu god, who is believed to have descended to the earth to protect the world from evil forces in a futuristic dystopian Kasi.",
      type: "movie",
      platform: "Prime / Netflix"
    },
    {
      id: "m_stree2",
      title: "Stree 2",
      year: 2024,
      rating: 8.0,
      quality: "4K HDR",
      posterUrl: "https://image.tmdb.org/t/p/w500/m1i6U0h0o2R8x8bF0YstKGOmvd1.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/m4l28x8bF0YstKGOmvd1T0oOQ96.jpg",
      genre: ["Horror", "Comedy"],
      overview: "After the events of Stree, the town of Chanderi is being haunted again. This time by a headless entity abducting women.",
      type: "movie",
      platform: "Hotstar"
    },
    {
      id: "m1",
      title: "Dune: Part Two",
      year: 2024,
      rating: 8.6,
      quality: "Dolby Vision",
      posterUrl: "https://image.tmdb.org/t/p/w500/1pdfLvk8ke9hxwgYikKiHAIFAgP.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s52009.jpg",
      genre: ["Sci-Fi", "Adventure"],
      overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      type: "movie",
      platform: "JioCinema"
    },
    {
      id: "m2",
      title: "Oppenheimer",
      year: 2023,
      rating: 8.9,
      quality: "4K HDR",
      posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/fm6K9vYI7vdEN39HaAYmFqYr9Wn.jpg",
      genre: ["Drama", "History"],
      overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      type: "movie",
      platform: "JioCinema"
    }
  ],
  indian_shows: [
    {
      id: "is1",
      title: "Scam 1992: The Harshad Mehta Story",
      year: 2020,
      rating: 9.3,
      quality: "4K HDR",
      posterUrl: "https://image.tmdb.org/t/p/w500/8vN0o2R8x8bF0YstKGOmvd1T0oO.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/8vN0o2R8x8bF0YstKGOmvd1T0oO.jpg",
      genre: ["Crime", "Drama", "Biography"],
      overview: "Set in 1980s and 90s Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights.",
      type: "series",
      platform: "SonyLIV"
    },
    {
      id: "is2",
      title: "Panchayat",
      year: 2024,
      rating: 8.9,
      quality: "4K HDR",
      posterUrl: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2V7JMrRI.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
      genre: ["Comedy", "Drama"],
      overview: "An engineering graduate takes up a job as a secretary of a gram panchayat in a remote village of Uttar Pradesh.",
      type: "series",
      platform: "Prime Video"
    }
  ],
  trending_shows: [
    {
      id: "s1",
      title: "Shōgun",
      year: 2024,
      rating: 8.8,
      quality: "Dolby Vision",
      posterUrl: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WNzG1AgYT.jpg",
      backdropUrl: "https://image.tmdb.org/t/p/original/7c4tP6b69R5aE5o5k072049.jpg",
      genre: ["Drama", "War"],
      overview: "Lord Yoshii Toranaga fights for his life as his enemies on the Council of Regents unite against him.",
      type: "series",
      platform: "Hotstar"
    }
  ]
};
