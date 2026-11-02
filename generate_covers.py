import os

COVERS_DIR = "/Users/layyzee/.gemini/antigravity/scratch/nuvio-forge/public/covers"
os.makedirs(COVERS_DIR, exist_ok=True)

covers = {
    "netflix.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180407"/>
      <stop offset="50%" stop-color="#0A0203"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(229, 9, 20, 0.3)" stroke-width="2"/>
  
  <g transform="translate(320, 160)">
    <text text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="64" fill="#E50914" letter-spacing="4">NETFLIX</text>
    <path d="M -160,25 Q 0,42 160,25" fill="none" stroke="#E50914" stroke-width="4" stroke-linecap="round"/>
    <text y="70" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" letter-spacing="6" opacity="0.8">ORIGINALS &amp; BLOCKBUSTERS</text>
  </g>
</svg>''',

    "disney.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="disney-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A1838"/>
      <stop offset="60%" stop-color="#030814"/>
      <stop offset="100%" stop-color="#010308"/>
    </linearGradient>
    <radialGradient id="disney-glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#1B6DF5" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#1B6DF5" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#disney-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#disney-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(27, 109, 245, 0.3)" stroke-width="2"/>

  <g transform="translate(320, 160)">
    <path d="M -150,-10 C -50,-80 50,-80 150,-10" fill="none" stroke="#52A1FF" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    <circle cx="150" cy="-10" r="4" fill="#FFFFFF"/>
    <text text-anchor="middle" font-family="'Georgia', serif" font-weight="900" font-size="54" fill="#FFFFFF" letter-spacing="2">Disney<tspan fill="#52A1FF" font-size="60">+</tspan></text>
    <text y="60" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#9CC5FF" letter-spacing="5">PIXAR • MARVEL • STAR WARS</text>
  </g>
</svg>''',

    "hbo.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="hbo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D0B4E"/>
      <stop offset="60%" stop-color="#110320"/>
      <stop offset="100%" stop-color="#05000A"/>
    </linearGradient>
    <radialGradient id="hbo-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#9333EA" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#9333EA" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#hbo-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#hbo-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(147, 51, 234, 0.3)" stroke-width="2"/>

  <g transform="translate(320, 160)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="70" fill="#FFFFFF" letter-spacing="6">HBO <tspan fill="#A855F7">MAX</tspan></text>
    <text y="58" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#D8B4FE" letter-spacing="5">PRESTIGE DRAMA &amp; WARNER BROS</text>
  </g>
</svg>''',

    "prime.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="prime-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00223D"/>
      <stop offset="60%" stop-color="#00101F"/>
      <stop offset="100%" stop-color="#00070D"/>
    </linearGradient>
    <radialGradient id="prime-glow" cx="50%" cy="60%" r="60%">
      <stop offset="0%" stop-color="#00A8E1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#00A8E1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#prime-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#prime-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(0, 168, 225, 0.3)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Arial Rounded MT Bold', sans-serif" font-size="52" fill="#FFFFFF" letter-spacing="2">prime <tspan fill="#00A8E1">video</tspan></text>
    <path d="M -110,25 C -50,55 50,55 110,25" fill="none" stroke="#00A8E1" stroke-width="6" stroke-linecap="round"/>
    <path d="M 100,18 L 115,25 L 105,38" fill="none" stroke="#00A8E1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <text y="70" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#7CD9FF" letter-spacing="5">AMAZON ORIGINALS &amp; BLOCKBUSTERS</text>
  </g>
</svg>''',

    "apple.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="apple-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#24282F"/>
      <stop offset="50%" stop-color="#121316"/>
      <stop offset="100%" stop-color="#08080A"/>
    </linearGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#apple-bg)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="2"/>

  <g transform="translate(320, 160)">
    <text text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="58" fill="#FFFFFF" letter-spacing="-1">tv<tspan fill="#E2E8F0" font-weight="300" font-size="64">+</tspan></text>
    <text y="58" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13" fill="#A0AEC0" letter-spacing="6">APPLE ORIGINAL CINEMA</text>
  </g>
</svg>''',

    # INDIAN OTT PLATFORMS
    "hotstar.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="hotstar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07202B"/>
      <stop offset="50%" stop-color="#021017"/>
      <stop offset="100%" stop-color="#00070A"/>
    </linearGradient>
    <radialGradient id="hotstar-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#00A389" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#00A389" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#hotstar-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#hotstar-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(0, 163, 137, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 150)">
    <!-- Star icon -->
    <path d="M 0,-50 L 12,-15 L 48,-15 L 18,5 L 28,40 L 0,20 L -28,40 L -18,5 L -48,-15 L -12,-15 Z" fill="#FFC800" transform="translate(0, -10) scale(0.65)"/>
    <text y="30" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="44" fill="#FFFFFF" letter-spacing="1">Disney+ <tspan fill="#00D2B4">hotstar</tspan></text>
    <text y="70" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FFD54F" letter-spacing="4">HOTSTAR SPECIALS • LIVE SPORTS • PREMIERES</text>
  </g>
</svg>''',

    "jiocinema.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="jio-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3D0026"/>
      <stop offset="50%" stop-color="#1A0010"/>
      <stop offset="100%" stop-color="#0A0006"/>
    </linearGradient>
    <radialGradient id="jio-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#E5007D" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#E5007D" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#jio-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#jio-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(229, 0, 125, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <circle cx="-135" cy="-8" r="28" fill="#E5007D"/>
    <text x="-135" y="3" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="30" fill="#FFFFFF">Jio</text>
    <text x="25" y="2" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="900" font-size="46" fill="#FFFFFF" letter-spacing="1">Cinema</text>
    <text y="60" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FF77C2" letter-spacing="4">HBO IN INDIA • JIO STUDIOS • CRICKET &amp; BIGG BOSS</text>
  </g>
</svg>''',

    "sonyliv.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="sony-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14142B"/>
      <stop offset="60%" stop-color="#080812"/>
      <stop offset="100%" stop-color="#020205"/>
    </linearGradient>
    <linearGradient id="sony-stripes" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="33%" stop-color="#EC4899"/>
      <stop offset="66%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#sony-bg)"/>
  <rect x="2" y="340" width="636" height="16" rx="8" fill="url(#sony-stripes)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(139, 92, 246, 0.3)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="52" fill="#FFFFFF" letter-spacing="3">SONY <tspan fill="url(#sony-stripes)">LIV</tspan></text>
    <text y="55" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#E2E8F0" letter-spacing="4">SCAM 1992 • GULLAK • ROCKET BOYS • SPORTS</text>
  </g>
</svg>''',

    "zee5.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="zee-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#220038"/>
      <stop offset="60%" stop-color="#0D0017"/>
      <stop offset="100%" stop-color="#040008"/>
    </linearGradient>
    <radialGradient id="zee-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#9E00FF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#9E00FF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#zee-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#zee-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(158, 0, 255, 0.35)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <circle cx="-70" cy="-5" r="32" fill="none" stroke="#9E00FF" stroke-width="6"/>
    <text x="-70" y="8" text-anchor="middle" font-family="'Impact', sans-serif" font-size="36" fill="#FFFFFF">ZEE</text>
    <text x="35" y="16" text-anchor="middle" font-family="'Impact', sans-serif" font-size="70" fill="#9E00FF">5</text>
    <text y="62" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#D8B4FE" letter-spacing="4">HINDI • TELUGU • TAMIL • ORIGINALS</text>
  </g>
</svg>''',

    "aha.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="aha-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3D1200"/>
      <stop offset="60%" stop-color="#140500"/>
      <stop offset="100%" stop-color="#050100"/>
    </linearGradient>
    <radialGradient id="aha-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FF5500" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FF5500" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#aha-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#aha-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(255, 85, 0, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Arial Rounded MT Bold', sans-serif" font-size="74" fill="#FF5500" letter-spacing="-2">aha<tspan fill="#FFFFFF" font-size="40">!</tspan></text>
    <text y="58" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#FFB088" letter-spacing="4">100% TELUGU &amp; TAMIL CINEMA</text>
  </g>
</svg>''',

    "sunnxt.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="sun-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#331A00"/>
      <stop offset="60%" stop-color="#120800"/>
      <stop offset="100%" stop-color="#050200"/>
    </linearGradient>
    <radialGradient id="sun-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#FFB300" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#FFB300" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#sun-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#sun-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(255, 179, 0, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="64" fill="#FFB300" letter-spacing="3">SUN <tspan fill="#FFFFFF">NXT</tspan></text>
    <text y="56" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FFE082" letter-spacing="4">TAMIL • MALAYALAM • TELUGU • KANNADA</text>
  </g>
</svg>''',

    "bollywood.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bolly-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B0515"/>
      <stop offset="50%" stop-color="#1A0208"/>
      <stop offset="100%" stop-color="#050002"/>
    </linearGradient>
    <radialGradient id="bolly-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#F43F5E" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#F43F5E" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#bolly-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#bolly-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(244, 63, 94, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="56" fill="#FFFFFF" letter-spacing="3">BOLLYWOOD <tspan fill="#F43F5E">HITS</tspan></text>
    <text y="55" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FDA4AF" letter-spacing="4">LATEST HINDI CINEMA &amp; THEATRICAL RELEASES</text>
  </g>
</svg>''',

    "south_indian.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="south-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A2624"/>
      <stop offset="50%" stop-color="#041211"/>
      <stop offset="100%" stop-color="#010505"/>
    </linearGradient>
    <radialGradient id="south-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#14B8A6" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#14B8A6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#south-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#south-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="54" fill="#FBBF24" letter-spacing="2">SOUTH <tspan fill="#FFFFFF">SUPERHITS</tspan></text>
    <text y="55" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#5EEAD4" letter-spacing="4">TOLLYWOOD • KOLLYWOOD • MOLLYWOD • SANDALWOOD</text>
  </g>
</svg>''',

    "trending_movies.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="tm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#361005"/>
      <stop offset="60%" stop-color="#120401"/>
      <stop offset="100%" stop-color="#050100"/>
    </linearGradient>
    <radialGradient id="tm-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#EA580C" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#EA580C" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#tm-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#tm-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(234, 88, 12, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="56" fill="#FFFFFF" letter-spacing="3">TRENDING <tspan fill="#F97316">MOVIES</tspan></text>
    <text y="55" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FDBA74" letter-spacing="4">TOP WATCHED FILMS THIS WEEK</text>
  </g>
</svg>''',

    "trending_shows.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="ts-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081E38"/>
      <stop offset="60%" stop-color="#020912"/>
      <stop offset="100%" stop-color="#000305"/>
    </linearGradient>
    <radialGradient id="ts-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#0EA5E9" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0EA5E9" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#ts-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#ts-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(14, 165, 233, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="56" fill="#FFFFFF" letter-spacing="3">TRENDING <tspan fill="#38BDF8">SHOWS</tspan></text>
    <text y="55" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#BAE6FD" letter-spacing="4">POPULAR BINGE-WORTHY SERIES</text>
  </g>
</svg>''',

    "anime.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="100%" height="100%">
  <defs>
    <linearGradient id="ani-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#380826"/>
      <stop offset="60%" stop-color="#12010B"/>
      <stop offset="100%" stop-color="#050003"/>
    </linearGradient>
    <radialGradient id="ani-glow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#D946EF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#D946EF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="640" height="360" rx="24" fill="url(#ani-bg)"/>
  <rect width="640" height="360" rx="24" fill="url(#ani-glow)"/>
  <rect width="636" height="356" x="2" y="2" rx="22" fill="none" stroke="rgba(217, 70, 239, 0.4)" stroke-width="2"/>

  <g transform="translate(320, 155)">
    <text text-anchor="middle" font-family="'Impact', Arial, sans-serif" font-size="56" fill="#FFFFFF" letter-spacing="3">ANIME <tspan fill="#F0ABFC">VAULT</tspan></text>
    <text y="55" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#F5D0FE" letter-spacing="4">SIMULCASTS • CRUNCHYROLL • TOP AIRING</text>
  </g>
</svg>'''
}

for filename, content in covers.items():
    path = os.path.join(COVERS_DIR, filename)
    with open(path, "w") as f:
        f.write(content)
    print(f"Generated {filename}")

print(f"All {len(covers)} covers created successfully in {COVERS_DIR}")
