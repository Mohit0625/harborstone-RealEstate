import { useState, useEffect } from 'react';
import { Home, Zap, Star, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const [homesSold, setHomesSold] = useState(0);
  const [daysOnMarket, setDaysOnMarket] = useState(40);
  const [rating, setRating] = useState(3.0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    // Homes Sold animation (0 -> 420)
    const homesInterval = setInterval(() => {
      setHomesSold((prev) => {
        if (prev >= 420) {
          clearInterval(homesInterval);
          return 420;
        }
        return prev + 14;
      });
    }, 45);

    // Days On Market animation (40 -> 18)
    const daysInterval = setInterval(() => {
      setDaysOnMarket((prev) => {
        if (prev <= 18) {
          clearInterval(daysInterval);
          return 18;
        }
        return prev - 1;
      });
    }, 60);

    // Rating animation (3.0 -> 4.9)
    const ratingInterval = setInterval(() => {
      setRating((prev) => {
        if (prev >= 4.9) {
          clearInterval(ratingInterval);
          return 4.9;
        }
        return Number((prev + 0.1).toFixed(1));
      });
    }, 70);

    // Experience animation (0 -> 15)
    const expInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev >= 15) {
          clearInterval(expInterval);
          return 15;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(homesInterval);
      clearInterval(daysInterval);
      clearInterval(ratingInterval);
      clearInterval(expInterval);
    };
  }, []);

  const stats = [
    {
      icon: <Home className="w-5 h-5 text-gold" />,
      value: `${homesSold}+`,
      label: 'Homes Sold Annually',
      description: 'Delivering stellar sales year-over-year'
    },
    {
      icon: <Zap className="w-5 h-5 text-gold" />,
      value: `${daysOnMarket} Avg`,
      label: 'Days on Market',
      description: 'Well below regional and sector average'
    },
    {
      icon: <Star className="w-5 h-5 text-gold fill-gold/20" />,
      value: `${rating.toFixed(1)}/5.0`,
      label: 'Client Satisfaction',
      description: 'Based on 800+ verified customer reviews'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      value: `${experience} Yrs`,
      label: 'Established Trust',
      description: 'Advising Texas investors since 2009'
    }
  ];

  return (
    <section className="relative z-30 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-slate border-t-2 border-gold shadow-2xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gold/10 text-white min-h-[140px]">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-6 md:p-8 flex flex-col items-center text-center justify-center hover:bg-gold/[0.02] transition-colors"
          >
            <div className="mb-3.5 p-2 rounded-full bg-gold/5 flex items-center justify-center">
              {stat.icon}
            </div>
            <div className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-1.5 font-mono">
              {stat.value}
            </div>
            <div className="font-sans text-[11px] sm:text-xs tracking-widest font-semibold text-gold uppercase mb-1">
              {stat.label}
            </div>
            <div className="font-sans text-[10px] text-cream/45 hidden sm:block">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
