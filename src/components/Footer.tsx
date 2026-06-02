import React from 'react';
import { Home, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1622] text-cream border-t border-gold/15 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-cream/5 items-start">
          
          {/* Logo brand and license info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 border border-gold hover:border-gold-light bg-brand-slate/50 flex items-center justify-center transition-all">
                <Home className="w-4.5 h-4.5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-widest text-cream uppercase leading-none font-semibold">
                  Harborstone
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase font-medium mt-1">
                  Realty Group
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs text-cream/60 font-light leading-relaxed max-w-sm">
              Providing luxury brokerage services and technical family home representation in the Austin metro area since 2009. Crafting distinctive stories of acquisition and equity.
            </p>

            {/* Social channels */}
            <div className="flex gap-3 pt-2">
              {[
                { label: 'Facebook', href: '#', icon: <Facebook className="w-4 h-4" /> },
                { label: 'Instagram', href: '#', icon: <Instagram className="w-4 h-4" /> },
                { label: 'LinkedIn', href: '#', icon: <Linkedin className="w-4 h-4" /> }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-cream/10 hover:border-gold hover:bg-gold hover:text-brand-slate flex items-center justify-center transition-all"
                  aria-label={`Visit our ${social.label} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Sitemap navigation references */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-gold uppercase">
              Sitemap Navigation
            </h5>
            <ul className="space-y-2.5 text-xs font-sans font-light text-cream/70">
              <li>
                <a href="#listings" className="hover:text-gold transition-colors">Featured Homes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Specialty Fields</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors"> Genesis Story</a>
              </li>
              <li>
                <a href="#team" className="hover:text-gold transition-colors">Our Elite Advisors</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">Service Registries</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Appointment Intake</a>
              </li>
            </ul>
          </div>

          {/* Service areas map quick overview list */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-gold uppercase">
              Licensed submarkets
            </h5>
            <ul className="space-y-2 text-xs font-sans font-light text-cream/70">
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">Austin, TX (Core Metro)</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">Round Rock, TX (North Corridor)</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">Cedar Park, TX (Suburban Hub)</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">Pflugerville, TX (East Loop)</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold transition-colors">Georgetown, TX (Texas Square)</a>
              </li>
            </ul>
          </div>

          {/* Office addresses contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-serif text-sm font-bold tracking-wider text-gold uppercase">
              Principal Headquarters
            </h5>
            <ul className="space-y-3.5 text-xs font-sans font-light text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>4821 Lakeview Blvd, Suite 200<br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:5124489200" className="hover:text-gold transition-colors">
                  (512) 448-9200
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:hello@harborstonerealty.com" className="hover:text-gold transition-colors">
                  hello@harborstonerealty.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright list and legal compliance flags */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] text-cream/45 border-t border-cream/5">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {currentYear} Harborstone Realty Group. All rights reserved.
            </span>
            <span className="hidden sm:inline text-cream/20">|</span>
            <span>
              Texas License: <strong>TX-DRE #0598312</strong>
            </span>
            <span className="hidden sm:inline text-cream/20">|</span>
            <span className="flex items-center gap-1 hover:text-gold transition-colors">
              <span className="inline-block w-2.5 h-2.5 border border-cream/30 flex items-center justify-center font-bold text-[7px]" aria-hidden="true">
                =
              </span>
              <span>Equal Housing Opportunity Broker</span>
            </span>
          </div>

          {/* Scroll to Top button */}
          <a
            href="#"
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 hover:text-gold transition-colors text-xs font-semibold tracking-wider uppercase font-sans focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Top of page</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}
