export const content = {
  // ── Header ──
  header: {
    brand: "SiapAja.id",
    nav: [
      { label: "Cara Kerja", href: "#" },
      { label: "Visi", href: "#" },
      { label: "Komunitas Jagoan", href: "http://rabs.2.vu/1" },
    ],
    githubUrl: "https://github.com/siapaja",
    loginUrl: "http://rabs.2.vu/1",
    loginText: "Masuk",
    joinUrl: "http://rabs.2.vu/1",
    joinText: "Daftar Jagoan",
  },

  // ── Hero ──
  hero: {
    badge: "Sistem Operasi Ekonomi Rakyat",
    headlineLine1: "Kerja Keras Sendiri,",
    headlineLine2: "Hasil Buat Sendiri.",
    description:
      "Platform ojol & jasa freelance pertama di DUNIA yang 100% milik pekerja. Potongan 0% dan transparansi radikal. Saatnya berhenti jadi sapi perah aplikasi raksasa.",
    ctaPrimaryUrl: "http://rabs.2.vu/1",
    ctaPrimary: "Gabung Jadi Jagoan",
    ctaSecondaryUrl: "http://rabs.2.vu/1",
    ctaSecondary: "Baca Manifesto",
    phones: {
      social: {
        src: "https://picsum.photos/seed/socialapp/300/600",
        alt: "Timeline Job",
      },
      gig: {
        src: "https://picsum.photos/seed/gigapp/300/600",
        alt: "Manajemen Jagoan",
      },
      ride: {
        src: "https://picsum.photos/seed/rideapp/300/600",
        alt: "Orderan Ojol",
      },
    },
    rideOverlay: {
      title: "Ada Orderan!",
      price: "Rp50.000",
      details: "1.2 km • 5 menit dari lokasi",
      acceptText: "Sikat! (Cair 100%)",
    },
  },

  // ── Feature Cards ──
  features: [
    { title: "Komisi 0%", subtitle: "Duit utuh tanpa potongan admin" },
    { title: "Anti-PHP", subtitle: "Duit konsumen di-lock di awal (Escrow)" },
    { title: "Sistem Pamor", subtitle: "Reputasi jadi modal & hak suara" },
    { title: "Bagi Hasil SHU", subtitle: "Bukan cuma mitra, kamu pemiliknya" },
  ],

  // ── Footer ──
  footer: {
    brand: "SiapAja.id",
    headline: "KAMU YANG PUNYA.",
    description:
      "Dibangun oleh rakyat, untuk rakyat. Era baru kerja digital yang adil, transparan, dan sejahtera bersama. Masa depan ekonomi ada di tangan kita sendiri.",
    githubUrl: "https://github.com/siapaja",
    openSourceText: "Kode Terbuka (Open Source)",
    copyright: "Koperasi SiapAja Digital",
    tagline: "Rakyat Berdaulat, Dompet Sehat",
  },

  // ── Site ──
  site: {
    title: "SiapAja.id | Platform Jagoan Indonesia",
    favicon: "/favicon.svg",
  },

  // ── Images ──
  images: {
    heroBackground: "/siapaja-hero.jpg",
    heroBackgroundMobile: "/siapaja-hero-9_16.jpeg",
  },
} as const;