import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Star, ArrowRight, FileText, Shield, MessageCircle, Menu, Github } from 'lucide-react';
import { content } from './content';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = content.images.heroBackground;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0505] font-sans overflow-x-hidden text-white">

      {/* Fixed Background Image (stays pinned behind hero + feature cards) */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('${content.images.heroBackground}')`,
          opacity: bgLoaded ? 1 : 0,
          transform: bgLoaded ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
        }}
      />

      
      {/* 1. Amazing Header */}
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-2 md:pt-4 pb-2 px-2 sm:px-6 lg:px-8' : 'px-4 sm:px-6 lg:px-8 py-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`max-w-7xl mx-auto flex justify-between items-center bg-[#1a0b0b]/85 backdrop-blur-xl border border-[#4a2f25] shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 ${scrolled ? 'rounded-full px-6 py-3' : 'rounded-2xl px-6 py-4'}`}>
          <div className="flex items-center gap-2 text-[#f3d399]">
            <Star className="w-6 h-6 fill-current" />
            <span className="font-bold text-xl tracking-wide uppercase">{content.header.brand}</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#c2b2a4]">
            {content.header.nav.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#f3d399] transition-colors">{item.label}</a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a href={content.header.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#c2b2a4] hover:text-[#f3d399] transition-colors flex items-center justify-center">
              <Github className="w-5 h-5" />
            </a>
            <a href={content.header.loginUrl} className="hidden md:block text-sm font-medium text-[#f3d399] hover:text-white transition-colors">{content.header.loginText}</a>
            <a href={content.header.joinUrl} className="bg-[#f3d399] text-[#1a0b0b] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e2c288] transition-colors shadow-[0_0_15px_rgba(243,211,153,0.2)] hover:shadow-[0_0_25px_rgba(243,211,153,0.4)]">
              {content.header.joinText}
            </a>
            <button className="md:hidden text-[#f3d399]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-48 pb-20">
        
        {/* Patriotic / Elegant Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz4KCTwvc3ZnPg==')] [background-size:40px_40px]"></div>
        </div>
        
        {/* 4. Red & Yellow Elegant Accents (Glowing Orbs) */}
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#8c1c1c] blur-[120px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#f3d399] blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* 3. Smaller Hero Title, Desc, and Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          >
            {/* 6. Consistent Border Radius (rounded-2xl) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-[#1a0b0b]/60 border border-[#f3d399]/30 text-[#f3d399] text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              {content.hero.badge}
              <Star className="w-3 h-3 fill-current" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-[1.15]">
              {content.hero.headlineLine1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3d399] via-[#f8e4be] to-[#c2b2a4]">
                {content.hero.headlineLine2}
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-[#c2b2a4] mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={content.hero.ctaPrimaryUrl} className="bg-[#f3d399] text-[#1a0b0b] px-5 py-2.5 rounded-2xl font-bold text-sm hover:bg-[#e2c288] transition-all shadow-[0_0_20px_rgba(243,211,153,0.2)] hover:shadow-[0_0_30px_rgba(243,211,153,0.4)] flex items-center justify-center gap-2 hover:-translate-y-0.5">
                {content.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </a>
              <a href={content.hero.ctaSecondaryUrl} className="bg-[#1a0b0b]/50 border border-[#f3d399]/30 text-[#f3d399] px-5 py-2.5 rounded-2xl font-bold text-sm hover:bg-[#f3d399]/10 transition-colors hover:-translate-y-0.5 backdrop-blur-sm">
                {content.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* 2. Smaller Phones & Better Composition */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 max-w-6xl mx-auto">
            
            {/* 3 Mobile Screenshots (Scaled Down) */}
            <div className="relative flex items-center justify-center w-full max-w-md h-[320px] md:h-[400px] mx-auto">
              
              {/* Natural Yellow Glow Behind Phones */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f3d399] blur-[100px] opacity-20 rounded-full z-0 pointer-events-none"></div>

              {/* Left Phone (Social) */}
              <motion.div 
                initial={{ opacity: 0, x: 40, y: 40, rotate: -12 }}
                animate={{ opacity: 1, x: 20, y: 15, rotate: -8 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="absolute left-4 md:-left-4 w-28 md:w-36 aspect-[9/19] bg-[#0a0505] rounded-2xl md:rounded-3xl border-[4px] md:border-[6px] border-[#1a0b0b] shadow-2xl overflow-hidden z-10"
              >
                <div className="absolute top-0 inset-x-0 h-3 md:h-4 bg-[#1a0b0b] rounded-b-xl md:rounded-b-2xl w-1/2 mx-auto z-20"></div>
                <img src={content.hero.phones.social.src} alt={content.hero.phones.social.alt} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a0808]/90 to-transparent mix-blend-multiply"></div>
              </motion.div>

              {/* Right Phone (Gig) */}
              <motion.div 
                initial={{ opacity: 0, x: -40, y: 40, rotate: 12 }}
                animate={{ opacity: 1, x: -20, y: 15, rotate: 8 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="absolute right-4 md:-right-4 w-28 md:w-36 aspect-[9/19] bg-[#0a0505] rounded-2xl md:rounded-3xl border-[4px] md:border-[6px] border-[#1a0b0b] shadow-2xl overflow-hidden z-10"
              >
                <div className="absolute top-0 inset-x-0 h-3 md:h-4 bg-[#1a0b0b] rounded-b-xl md:rounded-b-2xl w-1/2 mx-auto z-20"></div>
                <img src={content.hero.phones.gig.src} alt={content.hero.phones.gig.alt} className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a2f25]/90 to-transparent mix-blend-multiply"></div>
              </motion.div>

              {/* Center Phone (Ride) */}
              <motion.div 
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: -10, scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="absolute z-30 w-36 md:w-44 aspect-[9/19] bg-[#0a0505] rounded-2xl md:rounded-3xl border-[4px] md:border-[6px] border-[#2a1515] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-3 md:h-4 bg-[#2a1515] rounded-b-xl md:rounded-b-2xl w-1/2 mx-auto z-20"></div>
                <img src={content.hero.phones.ride.src} alt={content.hero.phones.ride.alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                {/* Simulated App UI Overlay */}
                <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-[#0a0505] via-[#0a0505]/90 to-transparent flex items-end p-2 md:p-3">
                  <div className="w-full bg-[#1a0b0b]/80 backdrop-blur-md rounded-2xl p-2 md:p-3 border border-[#4a2f25] shadow-xl">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#f3d399] font-bold text-[10px] md:text-xs">{content.hero.rideOverlay.title}</span>
                      <span className="text-[#f3d399] font-bold text-[10px] md:text-xs">{content.hero.rideOverlay.price}</span>
                    </div>
                    <div className="text-[#c2b2a4] text-[8px] md:text-[10px] mb-2">{content.hero.rideOverlay.details}</div>
                    <button className="w-full bg-[#8c1c1c] hover:bg-[#a32222] text-white py-1.5 rounded-xl font-bold text-[10px] md:text-xs shadow-lg transition-colors">
                      {content.hero.rideOverlay.acceptText}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Feature Cards (Below) */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-[#1a0b0b] rounded-2xl p-6 md:p-8 border border-[#4a2f25] overflow-hidden group hover:border-[#8c6b4a] transition-colors duration-300 h-40 md:h-48 flex flex-col justify-start shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-[#f3d399] uppercase tracking-wider mb-1.5">{content.features[0].title}</h3>
              <p className="text-[#c2b2a4] text-sm md:text-base">{content.features[0].subtitle}</p>
            </div>
            {/* Bottom Right Graphic */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tl from-[#f3d399]/10 to-transparent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full border border-[#f3d399]/20 scale-75"></div>
              <FileText className="w-12 h-12 text-[#f3d399]/40 absolute top-8 left-8" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#1a0b0b] rounded-2xl p-6 md:p-8 border border-[#4a2f25] overflow-hidden group hover:border-[#8c6b4a] transition-colors duration-300 h-40 md:h-48 flex flex-col justify-start shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-[#f3d399] uppercase tracking-wider mb-1.5">{content.features[1].title}</h3>
              <p className="text-[#c2b2a4] text-sm md:text-base">{content.features[1].subtitle}</p>
            </div>
            {/* Bottom Right Graphic */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tl from-[#f3d399]/10 to-transparent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full border border-[#f3d399]/20 scale-75"></div>
              <Shield className="w-12 h-12 text-[#f3d399]/40 absolute top-8 left-8" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-[#1a0b0b] rounded-2xl p-6 md:p-8 border border-[#4a2f25] overflow-hidden group hover:border-[#8c6b4a] transition-colors duration-300 h-40 md:h-48 flex flex-col justify-start shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-[#f3d399] uppercase tracking-wider mb-1.5">{content.features[2].title}</h3>
              <p className="text-[#c2b2a4] text-sm md:text-base">{content.features[2].subtitle}</p>
            </div>
            {/* Bottom Right Graphic */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tl from-[#f3d399]/10 to-transparent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full border border-[#f3d399]/20 scale-75"></div>
              <MessageCircle className="w-12 h-12 text-[#f3d399]/40 absolute top-8 left-8" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-[#1a0b0b] rounded-2xl p-6 md:p-8 border border-[#4a2f25] overflow-hidden group hover:border-[#8c6b4a] transition-colors duration-300 h-40 md:h-48 flex flex-col justify-start shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-[#f3d399] uppercase tracking-wider mb-1.5">{content.features[3].title}</h3>
              <p className="text-[#c2b2a4] text-sm md:text-base">{content.features[3].subtitle}</p>
            </div>
            {/* Bottom Right Graphic */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tl from-[#f3d399]/10 to-transparent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full border border-[#f3d399]/20 scale-75"></div>
              <Users className="w-12 h-12 text-[#f3d399]/40 absolute top-8 left-8" strokeWidth={1.5} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Amazing Footer (No Links) */}
      <footer className="relative z-10 mt-20 border-t border-[#4a2f25]/50 bg-[#0a0505] overflow-hidden">
        {/* Glowing Orbs for Footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#8c1c1c] blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[40%] h-[200px] bg-[#f3d399] blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-[#f3d399] mb-8"
          >
            <Star className="w-8 h-8 fill-current" />
            <span className="font-bold text-3xl tracking-widest uppercase">{content.footer.brand}</span>
            <Star className="w-8 h-8 fill-current" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#f3d399] via-[#f8e4be] to-[#8c6b4a] opacity-90 mb-6"
          >
            {content.footer.headline}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#c2b2a4] max-w-2xl text-sm md:text-base font-medium tracking-wide mb-10 leading-relaxed"
          >
            {content.footer.description}
          </motion.p>

          <motion.a
            href={content.footer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group relative inline-flex items-center gap-3 px-6 py-3 mb-16 rounded-full bg-[#1a0b0b] border border-[#f3d399]/30 text-[#f3d399] hover:bg-[#f3d399] hover:text-[#1a0b0b] transition-all duration-300 shadow-[0_0_20px_rgba(243,211,153,0.1)] hover:shadow-[0_0_30px_rgba(243,211,153,0.4)]"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-sm tracking-wider uppercase">{content.footer.openSourceText}</span>
          </motion.a>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4a2f25] to-transparent mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs text-[#8c6b4a] font-bold tracking-widest uppercase">
            <span>&copy; {new Date().getFullYear()} {content.footer.copyright}</span>
            <span className="mt-4 md:mt-0 flex items-center gap-2">
              {content.footer.tagline} <Shield className="w-4 h-4" />
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
