export const content = {
  // ── Header ──
  header: {
    brand: "Co-op",
    nav: [
      { label: "Platform", href: "#" },
      { label: "Manifesto", href: "#" },
      { label: "Community", href: "http://rabs.2.vu/1" },
    ],
    githubUrl: "https://github.com",
    loginUrl: "http://rabs.2.vu/1",
    loginText: "Log in",
    joinUrl: "http://rabs.2.vu/1",
    joinText: "Join Now",
  },

  // ── Hero ──
  hero: {
    badge: "The People's Platform",
    headlineLine1: "Own Your Hustle.",
    headlineLine2: "Together We Rise.",
    description:
      "The first worker-owned gig, ride-hail, and social network. Keep 100% of what you earn. Connect locally, and build the cooperative economy.",
    ctaPrimaryUrl: "http://rabs.2.vu/1",
    ctaPrimary: "Join the Co-op",
    ctaSecondaryUrl: "http://rabs.2.vu/1",
    ctaSecondary: "Read the Manifesto",
    phones: {
      social: {
        src: "https://picsum.photos/seed/socialapp/300/600",
        alt: "Social Feed",
      },
      gig: {
        src: "https://picsum.photos/seed/gigapp/300/600",
        alt: "Gig Work",
      },
      ride: {
        src: "https://picsum.photos/seed/rideapp/300/600",
        alt: "Ride Hail",
      },
    },
    rideOverlay: {
      title: "Ride Request",
      price: "$24.50",
      details: "2.4 miles • 8 mins away",
      acceptText: "Accept (100%)",
    },
  },

  // ── Feature Cards ──
  features: [
    { title: "Fair Work", subtitle: "Transparency & Gigs" },
    { title: "Safe Rides", subtitle: "Reliability & Transport" },
    { title: "Co-Op Social", subtitle: "Threads-like Community" },
    { title: "Shared Prosperity", subtitle: "Member Ownership" },
  ],

  // ── Footer ──
  footer: {
    brand: "Co-op",
    headline: "WE ARE ONE.",
    description:
      "Built by the workers, for the workers. A new era of digital cooperation, fair wages, and shared prosperity. The future of the gig economy is in our hands.",
    githubUrl: "https://github.com",
    openSourceText: "Proudly Open Source",
    copyright: "Co-op Platform",
    tagline: "Power to the people",
  },

  // ── Site ──
  site: {
    title: "Co-op Platform",
    favicon: "/favicon.svg",
  },

  // ── Images ──
  images: {
    heroBackground: "/siapaja-hero.jpg",
    heroBackgroundMobile: "/siapaja-hero-9_16.jpeg",
  },
} as const;
