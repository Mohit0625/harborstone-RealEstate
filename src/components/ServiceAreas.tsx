import { useState } from 'react';
import { MapPin, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { ServiceArea } from '../types';

interface ServiceAreasProps {
  areas: ServiceArea[];
}

export default function ServiceAreas({ areas }: ServiceAreasProps) {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);
  const activeArea = areas[selectedAreaIndex];

  return (
    <section id="areas" className="py-24 bg-brand-slate text-cream relative overflow-hidden border-b border-gold/15">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Unit */}
        <div className="max-w-3xl text-left mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="font-sans text-xs tracking-[0.2em] font-semibold text-gold uppercase">
              Austin Core Markets
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Where We Specialize &amp; Serve
          </h2>
          <p className="font-sans text-xs sm:text-sm text-cream/70 font-light max-w-2xl leading-relaxed">
            Our brokerage is exclusively aligned with the highest yielding regional submarkets in Central Texas, delivering unparalleled growth context for acquisitions.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Left Column: Interactive Area List */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="font-sans text-[11px] tracking-widest font-bold text-gold uppercase mb-2">
              Select Regional Submarket
            </div>
            
            <div className="flex flex-col gap-3">
              {areas.map((area, index) => (
                <button
                  key={area.name}
                  onClick={() => setSelectedAreaIndex(index)}
                  className={`w-full p-5 text-left border transition-all duration-300 flex items-center justify-between ${
                    selectedAreaIndex === index
                      ? 'bg-[#1E2B3E] border-gold text-white shadow-lg shadow-gold/5'
                      : 'bg-brand-slate/40 border-gold/10 text-cream/70 hover:border-gold/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${selectedAreaIndex === index ? 'text-gold' : 'text-cream/40'}`} />
                    <span className="font-serif text-lg font-bold">{area.name}, TX</span>
                  </div>
                  <span className={`text-xs ${selectedAreaIndex === index ? 'text-gold' : 'text-cream/30'}`}>
                    Active Focus
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: High Fidelity Information Board */}
          <div className="lg:col-span-7 bg-[#1A2534]/60 border border-gold/10 p-6 md:p-8 relative">
            {/* Stylized Accent corners */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-gold" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-gold" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              
              {/* Stats & Description */}
              <div className="order-2 md:order-1 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                    {activeArea.name} Market Profile
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mb-4" />
                  <p className="font-sans text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                    {activeArea.description}
                  </p>
                </div>

                {/* Micro metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cream/5">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-gold text-xs font-semibold tracking-wider uppercase mb-1">
                      <DollarSign className="w-3.5 h-3.5 text-gold" />
                      <span>Avg Home Price</span>
                    </div>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeArea.avgPrice}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-gold text-xs font-semibold tracking-wider uppercase mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-gold" />
                      <span>YoY Appreciation</span>
                    </div>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeArea.growthRate}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-brand-slate font-sans text-xs font-bold tracking-widest uppercase transition-colors"
                  >
                    <span>Request Area Guide</span>
                  </a>
                </div>
              </div>

              {/* Graphical Map Simulator & Picture */}
              <div className="order-1 md:order-2 space-y-6">
                <div className="relative aspect-square border border-gold/15 bg-brand-slate overflow-hidden p-2">
                  {/* Photo representing area */}
                  <img
                    src={activeArea.image}
                    alt={`${activeArea.name} real estate landscape`}
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent" />
                  
                  {/* Pulsating Map Coordinate HUD */}
                  <div
                    className="absolute z-20 flex flex-col items-center gap-1 pointer-events-none"
                    style={{ left: `${activeArea.coordinates.x}%`, top: `${activeArea.coordinates.y}%` }}
                  >
                    <div className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-gold border-2 border-white items-center justify-center shadow-lg">
                        <MapPin className="w-3 h-3 text-brand-slate" />
                      </span>
                    </div>
                    <div className="bg-brand-slate/95 border border-gold/40 text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest text-cream">
                      {activeArea.name} Station
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel tags overview line for SEO anchoring */}
        <div className="mt-16 pt-8 border-t border-gold/10 text-center">
          <div className="text-cream/40 font-sans text-[11px] uppercase tracking-[0.25em] mb-4">
            Licensed Coverage Area Registry:
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area.name}
                className="px-3.5 py-1.5 bg-brand-slate border border-gold/15 text-[10px] sm:text-xs tracking-wider text-gold-light uppercase"
              >
                {area.name} Real Estate
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
