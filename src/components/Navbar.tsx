import { useState, useEffect } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Manage scrolled background state
      setIsScrolled(window.scrollY > 20);

      const H = window.innerHeight;
      let maxCoverage = 0;
      let activeId = '';

      const ids = ['listings', 'services', 'about', 'team', 'areas', 'contact'];
      
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        // Calculate the height of the element that is visible within the viewport limits [0, H]
        const top = Math.max(0, rect.top);
        const bottom = Math.min(H, rect.bottom);
        const visibleHeight = Math.max(0, bottom - top);
        
        // Calculate the percentage of the viewport height that this visible section covers
        const coveragePercent = (visibleHeight / H) * 100;

        // Meets the 35% threshold criteria requested
        if (coveragePercent >= 35) {
          if (coveragePercent > maxCoverage) {
            maxCoverage = coveragePercent;
            activeId = id;
          }
        }
      });

      // Special edge case: If scrolled to the absolute bottom of the document and viewport
      // is small, fallback to the final section's ID (contact) which is positioned at the footer.
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      if (isAtBottom) {
        activeId = 'contact';
      }

      setActiveSection(activeId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger immediately to align nav elements on initial load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Featured Listings', href: '#listings' },
    { name: 'Specialties', href: '#services' },
    { name: 'Our Story', href: '#about' },
  ];

  const rightLinks = [
    { name: 'Meet Team', href: '#team' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'Inquire', href: '#contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-brand-slate/95 backdrop-blur-md shadow-xl border-b border-gold/15 py-3'
          : 'bg-brand-slate/90 backdrop-blur-md lg:bg-transparent py-4 lg:py-6'
      }`}
    >
      {/* Symmetrical scroll indicator accent line */}
      <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-transparent absolute bottom-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DESKTOP LAYOUT (Perfectly Symmetrical Row Split with Centered Logo & Equal Gaps) */}
        <div className="hidden lg:flex items-center min-h-[50px] w-full">
          
          {/* Left Wing: Equal-spaced Nav Links (Aligned to right of left wing) */}
          <nav className="flex-1 flex items-center justify-end gap-x-8 xl:gap-x-12">
            {leftLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-gold/80 transition-all duration-300 ${
                    isActive ? 'w-2/3' : 'w-0 group-hover:w-1/2'
                  }`}></span>
                </a>
              );
            })}
          </nav>

          {/* Centered Logo Core (Perfect horizontal screen center with matching gap bounds) */}
          <div className="mx-8 xl:mx-12 shrink-0 flex justify-center">
            <a href="#" className="flex flex-col items-center group text-center select-none">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border border-gold/30 flex items-center justify-center transition-all bg-brand-slate/30 group-hover:border-gold">
                  <Home className="w-3 h-3 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-serif text-lg tracking-[0.25em] text-cream font-semibold uppercase leading-none group-hover:text-gold transition-colors">
                  Harborstone
                </span>
              </div>
              <span className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase font-medium mt-1.5 transition-colors">
                Realty Group
              </span>
            </a>
          </div>

          {/* Right Wing: Equal-spaced Nav Links (Aligned to left of right wing) */}
          <nav className="flex-1 flex items-center justify-start gap-x-8 xl:gap-x-12">
            {rightLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-gold/80 transition-all duration-300 ${
                    isActive ? 'w-2/3' : 'w-0 group-hover:w-1/2'
                  }`}></span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* MOBILE & TABLET LAYOUT (Framed Symmetrical Anchoring) */}
        <div className="flex lg:hidden items-center justify-between min-h-[40px]">
          
          {/* Left Wing mobile: Framed phone call quick-action */}
          <a
            href="tel:5124489200"
            className="w-10 h-10 border border-gold/20 hover:border-gold/60 flex items-center justify-center text-cream hover:text-gold transition-all duration-300"
            title="Call Harborstone Broker"
            aria-label="Call Broker"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Center Column mobile: Stacked brand logo */}
          <div className="flex-1 flex justify-center text-center">
            <a href="#" className="flex flex-col items-center group select-none">
              <span className="font-serif text-base tracking-[0.2em] text-cream font-semibold uppercase leading-none transition-colors group-hover:text-gold">
                Harborstone
              </span>
              <span className="font-sans text-[8px] tracking-[0.35em] text-gold uppercase font-medium mt-1">
                Realty Group
              </span>
            </a>
          </div>

          {/* Right Wing mobile: Symmetrical framed menu action */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 border border-gold/20 hover:border-gold/60 flex items-center justify-center text-cream hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER (Adaptive top spacing aligning seamlessly to navbar height) */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-brand-slate border-b border-gold/15 backdrop-blur-xl transition-all duration-300 ease-in-out shadow-2xl ${
          isScrolled ? 'top-[64px]' : 'top-[72px]'
        } ${
          isOpen ? 'opacity-100 max-h-screen py-6' : 'opacity-0 max-h-0 overflow-hidden py-0'
        }`}
      >
        <div className="px-4 sm:px-6 space-y-6">
          <nav className="flex flex-col">
            {[...leftLinks, ...rightLinks].map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-[11px] tracking-[0.25em] uppercase py-3.5 border-b border-gold/5 transition-all flex justify-between items-center ${
                    isActive ? 'text-gold font-semibold pl-2' : 'text-cream/90 hover:text-gold'
                  } ${
                    idx === 5 ? 'border-b-0' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />}
                    <span>{link.name}</span>
                  </span>
                  <span className={`text-[9px] font-mono transition-colors ${isActive ? 'text-gold' : 'text-gold/40'}`}>
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-gold/10 flex flex-col gap-3 text-center">
            <div className="text-[10px] tracking-widest text-cream/40 uppercase font-mono">
              Direct Advisory Line
            </div>
            <a
              href="tel:5124489200"
              className="font-mono text-base text-gold hover:text-gold-light tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold/80" />
              <span>(512) 448-9200</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
