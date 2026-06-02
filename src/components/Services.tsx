import { Home, Sparkles, Hammer, Building, Compass } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  // Map icons dynamically
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-8 h-8 text-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-gold" />;
      case 'Hammer':
        return <Hammer className="w-8 h-8 text-gold" />;
      case 'Building':
        return <Building className="w-8 h-8 text-gold" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-gold" />;
      default:
        return <Home className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-slate text-cream overflow-hidden relative">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/15 mb-4">
            <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">
              What We Do Best
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Our Specialties &amp; Services
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-cream/70 font-light max-w-2xl mx-auto leading-relaxed">
            By limiting our operations to specific luxury lanes and key suburban hubs around Austin, we render elite client intelligence and technical representation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="bg-[#1A2534]/50 border border-gold/10 p-8 hover:border-gold/30 hover:bg-[#1E2B3E]/60 transition-all duration-300 flex flex-col justify-between group relative text-left"
              id={`service-card-${service.id}`}
            >
              {/* Subtle design block in the card background */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/5 to-transparent transition-all group-hover:from-gold/10" />

              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 bg-brand-slate border border-gold/20 flex items-center justify-center mb-8 relative group-hover:border-gold/50 transition-all">
                  {getIcon(service.iconName)}
                  <div className="absolute inset-0 bg-gold/5 scale-0 group-hover:scale-100 transition-transform origin-center" />
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-cream/70 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action query connector */}
              <div className="pt-4 border-t border-cream/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest font-semibold">
                  Specialty 0{i+1}
                </span>
                <a
                  href="#contact"
                  className="font-sans text-xs text-cream/50 group-hover:text-gold transition-colors flex items-center gap-1 font-semibold"
                >
                  Request Consultation <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
