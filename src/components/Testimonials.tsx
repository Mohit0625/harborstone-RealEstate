import { Star, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 bg-[#FAF7F1] text-brand-slate border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/15 mb-4">
            <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">
              Client Chronicles
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-slate mb-6">
            Words From Our Storytellers
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="font-sans text-xs sm:text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            With over 800+ 5-star reviews on Zillow, Google, and Yelp, we are humbled to guide buyers and sellers toward their architectural futures.
          </p>
        </div>

        {/* Testimonials cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((entry) => (
            <div
              key={entry.id}
              className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              {/* Giant quote mark behind */}
              <MessageSquare className="absolute bottom-6 right-6 w-16 h-16 text-gold/5 pointer-events-none transition-transform group-hover:scale-110" />

              <div>
                {/* Visual Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < entry.rating ? 'text-gold fill-gold' : 'text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="font-sans text-[10px] text-slate-400 font-mono ml-2">
                    ({entry.rating}.0)
                  </span>
                </div>

                {/* Star Quote Content */}
                <p className="font-serif text-slate-600 leading-relaxed text-sm italic mb-8 relative z-10">
                  "{entry.quote}"
                </p>
              </div>

              {/* Client Profile and Location */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-gray-100 relative z-10">
                <div className="w-11 h-11 rounded-none overflow-hidden bg-gray-100 border border-gold/20 flex-shrink-0">
                  <img
                    src={entry.avatar}
                    alt={entry.clientName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <div className="font-sans text-xs sm:text-sm font-bold text-brand-slate">
                    {entry.clientName}
                  </div>
                  <div className="font-sans text-[11px] text-gold-dark mt-0.5">
                    {entry.location} <span className="text-slate-300 mx-1">|</span> {entry.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
