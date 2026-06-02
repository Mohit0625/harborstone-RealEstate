import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

interface HeroProps {
  cityFilter: string;
  setCityFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  priceFilter: string;
  setPriceFilter: (value: string) => void;
  onSearchClick: () => void;
}

export default function Hero({
  cityFilter,
  setCityFilter,
  typeFilter,
  setTypeFilter,
  priceFilter,
  setPriceFilter,
  onSearchClick
}: HeroProps) {
  const cities = ['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown'];
  const types = ['Residential', 'Luxury', 'New Construction'];
  const priceRanges = [
    { label: 'Under $750k', value: 'under-750' },
    { label: '$750k - $1.5M', value: '750-1500' },
    { label: 'Over $1.5M', value: 'over-1500' }
  ];

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setCityFilter('all');
    setTypeFilter('all');
    setPriceFilter('all');
    onSearchClick();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-slate text-cream overflow-hidden pt-20"
    >
      {/* Background Image with Dual Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85"
          alt="Luxury Austin home dusk landscape"
          className="w-full h-full object-cover object-center opacity-45 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-brand-slate/75 to-brand-slate/20 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-slate/80 z-10" />
      </div>

      {/* Decorative Golden Geometry Lines */}
      <div className="absolute top-1/4 left-10 w-[1px] h-48 bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-[1px] h-48 bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 hidden md:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        {/* Subtle Tagline Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 backdrop-blur-md mb-6 hover:bg-gold/15 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-gold uppercase">
            Austin Metro Real Estate
          </span>
        </div>

        {/* Headline & Main Slogans */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Find Your Place.<br />
          <span className="text-gold italic font-normal">Own Your Story.</span>
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-cream/80 max-w-2xl font-light mb-12 leading-relaxed">
          Harborstone Realty Group crafts exceptional real estate experiences in Austin and surrounding metro areas. From pristine waterfront luxury to custom new builds, let us guide you home.
        </p>

        {/* Dynamic Interactive Search Box */}
        <div className="w-full max-w-4xl bg-brand-slate/90 border border-gold/20 backdrop-blur-xl p-5 md:p-6 shadow-2xl relative">
          {/* Subtle Corner Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-gold" />
          <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-gold" />
          <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-gold" />
          <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-gold" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* City Selector */}
            <div className="flex flex-col text-left">
              <label htmlFor="city-select" className="font-sans text-[10px] tracking-wider text-gold uppercase mb-1.5 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Location / City
              </label>
              <div className="relative">
                <select
                  id="city-select"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full bg-brand-slate/80 border border-gold/20 hover:border-gold/40 text-cream p-3 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">All Service Areas</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}, TX
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gold">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Specialty / Type Selector */}
            <div className="flex flex-col text-left">
              <label htmlFor="type-select" className="font-sans text-[10px] tracking-wider text-gold uppercase mb-1.5 font-medium flex items-center gap-1">
                <Home className="w-3 h-3" /> Property Type
              </label>
              <div className="relative">
                <select
                  id="type-select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full bg-brand-slate/80 border border-gold/20 hover:border-gold/40 text-cream p-3 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">All Specialties</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gold">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Price Range Selector */}
            <div className="flex flex-col text-left">
              <label htmlFor="price-select" className="font-sans text-[10px] tracking-wider text-gold uppercase mb-1.5 font-medium flex items-center gap-1">
                <DollarSign className="w-3 h-3" /> Price Range
              </label>
              <div className="relative">
                <select
                  id="price-select"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full bg-brand-slate/80 border border-gold/20 hover:border-gold/40 text-cream p-3 rounded-none font-sans text-xs sm:text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">Any Price</option>
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gold">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mt-5 pt-3 border-t border-gold/10">
            <span className="font-sans text-[11px] text-cream/50">
              License: TX-DRE #0598312 | Est. 2009
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              {(cityFilter !== 'all' || typeFilter !== 'all' || priceFilter !== 'all') && (
                <button
                  onClick={handleReset}
                  className="w-1/2 sm:w-auto px-5 py-2.5 font-sans text-xs tracking-widest uppercase text-cream/70 hover:text-cream border border-cream/10 hover:border-cream/30 transition-colors"
                >
                  Reset
                </button>
              )}
              <button
                onClick={onSearchClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-brand-slate px-8 py-3 rounded-none text-xs font-semibold tracking-widest uppercase transition-all shadow-md group"
              >
                <Search className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>Search Properties</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <a
            href="#listings"
            className="font-sans text-[10px] tracking-[0.2em] text-cream/70 uppercase focus:outline-none"
          >
            Explore Listings
          </a>
          <div className="w-[1px] h-6 bg-gold/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-gold h-1/2 rounded animate-[bounce_1.5s_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
