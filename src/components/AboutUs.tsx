import { Quote, Calendar, Award, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const corporateAchievements = [
    {
      title: 'Est. 2009',
      desc: 'Founded amidst the Austin high-growth renaissance, building decades of deep local intelligence.'
    },
    {
      title: 'Ethical Integrity First',
      desc: 'Licensed under TX-DRE #0598312 with clean disciplinary checks and stellar legal compliance.'
    },
    {
      title: 'Bento Data Vetting',
      desc: 'Integrating structural engineering diagnostics and zoning surveys into every acquisition file.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream text-brand-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Luxury Image with Dual Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border border-gold/40 p-3 bg-white">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Harborstone luxury interior design"
                className="w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Decorative golden block behind */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-sand -z-0 border border-gold/10 hidden sm:block" />

            {/* Float Badge */}
            <div className="absolute -top-4 -left-4 bg-brand-slate text-cream p-5 shadow-2xl z-20 max-w-[150px] border-b-2 border-gold text-center">
              <div className="font-serif text-3xl font-bold text-gold">17+</div>
              <div className="font-sans text-[9px] uppercase tracking-widest font-semibold text-cream/70 mt-1">
                Years Devoted To Austin Metro
              </div>
            </div>
          </div>

          {/* Right Block: Content & Story */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-xs tracking-[0.2em] font-semibold text-gold uppercase">
                Our Genesis &amp; Values
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-slate leading-[1.15] mb-6">
              Empowering Texas Buyers Since 2009
            </h2>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-8">
              <p>
                Founded in the heart of Austin, Harborstone Realty Group was built on a simple, foundational premise: that real estate is never merely a transaction, but a life-defining chapter. Over the past fifteen years, our boutique agency has grown to encompass 38 of the state’s elite advisory professionals.
              </p>
              <p>
                Whether facilitating sophisticated structural due diligence on new Austin multi-family assets or coordinating multi-million dollar off-market transfers, we manage every facet of your journey. We don’t just navigate standard properties—we master market timing, county layouts, and premium design curves.
              </p>
            </div>

            {/* Founder Blockquote from James Whitfield */}
            <blockquote className="relative p-6 sm:p-8 bg-sand border-l-4 border-gold mb-8 relative font-serif text-slate-800 italic leading-relaxed text-sm sm:text-base">
              <Quote className="absolute top-3 right-4 w-12 h-12 text-gold/15 rotate-180 -z-0" />
              <p className="relative z-10 mb-4 font-serif text-slate-700">
                "Every house has a heart, and every home has a narrator. At Harborstone, we don’t just sell square footage; we honor the visual identity, the architectural story, and the families who write their histories within these walls."
              </p>
              <footer className="not-italic flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                    alt="James Whitfield"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <cite className="font-serif text-xs font-bold text-brand-slate block">
                    James Whitfield
                  </cite>
                  <span className="font-sans text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                    Founder &amp; Principal Broker, DRE #0541239
                  </span>
                </div>
              </footer>
            </blockquote>

            {/* Corporate achievements check list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {corporateAchievements.map((item, index) => (
                <div key={index} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-gold font-sans text-xs font-bold uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
