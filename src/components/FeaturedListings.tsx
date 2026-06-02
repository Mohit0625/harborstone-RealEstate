import React, { useState } from 'react';
import { Bed, Bath, Maximize2, MapPin, SearchX, Sparkles, Plus } from 'lucide-react';
import { Listing } from '../types';

interface FeaturedListingsProps {
  listings: Listing[];
  onSelectListing: (listing: Listing) => void;
  openAddListing: () => void;
  cityFilter: string;
  typeFilter: string;
  priceFilter: string;
  onResetFilters: () => void;
}

export default function FeaturedListings({
  listings,
  onSelectListing,
  openAddListing,
  cityFilter,
  typeFilter,
  priceFilter,
  onResetFilters
}: FeaturedListingsProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Featured' | 'Luxury' | 'New Construction'>('All');

  // Filter listings based on the current selection in Hero or the interactive tabs here
  const filteredListings = listings.filter((listing) => {
    // Top Hero Search State Filters
    if (cityFilter !== 'all' && listing.city.toLowerCase() !== cityFilter.toLowerCase()) {
      return false;
    }
    if (typeFilter !== 'all' && listing.type.toLowerCase() !== typeFilter.toLowerCase()) {
      return false;
    }
    if (priceFilter !== 'all') {
      if (priceFilter === 'under-750' && listing.price >= 750000) return false;
      if (priceFilter === '750-1500' && (listing.price < 750000 || listing.price > 1500000)) return false;
      if (priceFilter === 'over-1500' && listing.price <= 1500000) return false;
    }

    // Section Category Tab Filters
    if (activeTab === 'Featured' && !listing.featured) return false;
    if (activeTab === 'Luxury' && listing.type !== 'Luxury') return false;
    if (activeTab === 'New Construction' && listing.type !== 'New Construction') return false;

    return true;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const tabs: ('All' | 'Featured' | 'Luxury' | 'New Construction')[] = [
    'All',
    'Featured',
    'Luxury',
    'New Construction'
  ];

  return (
    <section id="listings" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with gold accents */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-xs tracking-[0.2em] font-semibold text-gold uppercase">
                Curated Properties
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-slate leading-tight mb-4">
              Featured Portfolio
            </h2>
            <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
              Discover unique estates and upscale family homes throughout the Austin metropolitan region, fully backed by the Harborstone signature of excellence.
            </p>
          </div>

          {/* Action to offer custom simulation */}
          <button
            onClick={openAddListing}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 border border-gold hover:bg-gold/5 text-gold-dark font-sans text-xs font-semibold tracking-wider uppercase transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>List Your Home</span>
          </button>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-2 border-b border-gray-200 mb-12 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 font-sans text-xs tracking-widest uppercase font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'border-gold text-gold-dark bg-gold/[0.03]'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              {tab === 'All' ? 'All Properties' : tab}
            </button>
          ))}
        </div>

        {/* Subtitle about Active Filters */}
        {(cityFilter !== 'all' || typeFilter !== 'all' || priceFilter !== 'all') && (
          <div className="mb-6 flex flex-wrap items-center gap-2 p-3 bg-gold/5 border border-gold/15 text-xs text-gold-dark">
            <span className="font-medium uppercase tracking-wider">Active Search Filters:</span>
            {cityFilter !== 'all' && (
              <span className="px-2 py-0.5 bg-gold/10 font-bold uppercase text-[10px]">City: {cityFilter}</span>
            )}
            {typeFilter !== 'all' && (
              <span className="px-2 py-0.5 bg-gold/10 font-bold uppercase text-[10px]">Type: {typeFilter}</span>
            )}
            {priceFilter !== 'all' && (
              <span className="px-2 py-0.5 bg-gold/10 font-bold uppercase text-[10px]">
                Price:{' '}
                {priceFilter === 'under-750'
                  ? 'Under $750k'
                  : priceFilter === '750-1500'
                  ? '$750k - $1.5M'
                  : 'Over $1.5M'}
              </span>
            )}
          </div>
        )}

        {/* Property cards Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing) => (
              <article
                key={listing.id}
                className="bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`article-${listing.id}`}
              >
                {/* Visual Header / Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer" onClick={() => onSelectListing(listing)}>
                  <img
                    src={listing.image}
                    alt={listing.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Category badging */}
                  <div className="absolute top-4 left-4 bg-brand-slate text-cream text-[10px] tracking-widest font-semibold uppercase px-2.5 py-1 z-10">
                    {listing.type}
                  </div>
                  {/* Dynamic context tag */}
                  {listing.featured && (
                    <div className="absolute top-4 right-4 bg-gold text-brand-slate text-[9px] tracking-widest font-bold uppercase px-2 py-1 shadow-md flex items-center gap-1 z-10">
                      <Sparkles className="w-2.5 h-2.5 fill-brand-slate" />
                      <span>{listing.tag}</span>
                    </div>
                  )}
                  {/* Hover visual scan effect */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-slate/85 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between z-10">
                    <span className="font-sans text-xs text-gold uppercase tracking-wider font-semibold">View Property Details</span>
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6 flex flex-col flex-grow justify-between text-left">
                  <div>
                    {/* Price and Address */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-slate">
                        {formatPrice(listing.price)}
                      </div>
                      <div className="font-sans text-[10px] text-slate-400 font-mono">
                        Y: {listing.yearBuilt}
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-brand-slate line-clamp-1 mb-2 hover:text-gold transition-colors cursor-pointer" onClick={() => onSelectListing(listing)}>
                      {listing.title}
                    </h3>

                    <div className="flex items-center gap-1 text-slate-500 font-sans text-xs font-light mb-4 text-left">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span className="line-clamp-1">{listing.address}</span>
                    </div>
                  </div>

                  {/* Fact line */}
                  <div className="grid grid-cols-3 divide-x divide-gray-100 py-3.5 border-t border-b border-gray-100 text-center text-slate-600 font-sans text-xs">
                    <div className="flex items-center justify-center gap-1.5">
                      <Bed className="w-4 h-4 text-slate-400" />
                      <span><strong>{listing.beds}</strong> Beds</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span><strong>{listing.baths}</strong> Baths</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 font-mono text-[11px]">
                      <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                      <span><strong>{listing.sqft}</strong> sqft</span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center justify-between mt-5 pt-1">
                    <span className="font-sans text-[11px] text-slate-400">
                      Brokerage Code: HS-{listing.id.split('-')[1] || '01'}
                    </span>
                    <button
                      onClick={() => onSelectListing(listing)}
                      className="font-sans text-xs tracking-widest uppercase font-semibold text-gold-dark hover:text-gold transition-all"
                    >
                      Inquire Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="min-h-[300px] border border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center p-8 text-center max-w-lg mx-auto">
            <SearchX className="w-12 h-12 text-slate-400 mb-4" />
            <h3 className="font-serif text-lg font-bold text-brand-slate mb-2">No Matching Homes</h3>
            <p className="font-sans text-xs text-slate-500 mb-6 font-light max-w-sm">
              We did not find any properties matched to those specific filters. Try expanding your location boundaries or choosing another specialty category.
            </p>
            <button
              onClick={onResetFilters}
              className="px-5 py-2.5 bg-brand-slate hover:bg-brand-slate/90 text-cream text-xs font-semibold tracking-wider uppercase"
            >
              Clear Current Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
