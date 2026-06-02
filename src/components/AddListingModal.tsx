import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Listing } from '../types';

interface AddListingModalProps {
  onClose: () => void;
  onAddListing: (newListing: Omit<Listing, 'id' | 'featured' | 'tag' | 'yearBuilt'>) => void;
}

export default function AddListingModal({ onClose, onAddListing }: AddListingModalProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [beds, setBeds] = useState('3');
  const [baths, setBaths] = useState('2');
  const [sqft, setSqft] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Austin');
  const [type, setType] = useState<'Residential' | 'Luxury' | 'New Construction'>('Residential');
  const [description, setDescription] = useState('');
  const [selectedImagePreset, setSelectedImagePreset] = useState(0);

  const imagesPresets = [
    {
      label: 'Contemporary Pool Residence',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      label: 'Hill Country Stone Villa',
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      label: 'Mid-Century Chic Oakwood',
      url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !sqft || !address || !description) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    onAddListing({
      title,
      price: Number(price),
      beds: Number(beds),
      baths: Number(baths),
      sqft: Number(sqft),
      address,
      city,
      type,
      description,
      image: imagesPresets[selectedImagePreset].url
    });

    alert('Your home listing has been successfully simulated and added to the portfolio below! You can now search for it directly.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Background Overlay */}
        <div
          className="fixed inset-0 bg-brand-slate/85 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />

        {/* Center alignment */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white border border-gold/20 text-brand-slate text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full relative">
          
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold z-10" />

          {/* Close Trigger icon */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-brand-slate hover:bg-gold text-cream hover:text-brand-slate transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            <h4 className="font-serif text-2xl font-bold tracking-tight text-brand-slate mb-1">
              Simulate Your Listing
            </h4>
            <p className="font-sans text-xs text-slate-500 font-light mb-6">
              Create a simulated home listing request instantly. This will add your entry dynamically into our client-side portfolio so you can test search and filter capabilities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Title */}
                <div className="flex flex-col">
                  <label htmlFor="listing-title" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                    Property Title *
                  </label>
                  <input
                    id="listing-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Modern Creek Luxury Estate"
                    className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Price */}
                <div className="flex flex-col">
                  <label htmlFor="listing-price" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                    Target Price (USD) *
                  </label>
                  <input
                    id="listing-price"
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 595000"
                    className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Beds */}
                <div className="flex flex-col">
                  <label htmlFor="listing-beds" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                    Bedrooms count *
                  </label>
                  <select
                    id="listing-beds"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 2].map((num, i) => (
                      <option key={i} value={num}>{num} Bedrooms</option>
                    ))}
                  </select>
                </div>

                {/* Baths */}
                <div className="flex flex-col">
                  <label htmlFor="listing-baths" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                    Bathrooms count *
                  </label>
                  <select
                    id="listing-baths"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                    className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4, 5].map((num) => (
                      <option key={num} value={num}>{num} Bathrooms</option>
                    ))}
                  </select>
                </div>

                {/* Sqft */}
                <div className="flex flex-col">
                  <label htmlFor="listing-sqft" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                    Sizing (Square Feet) *
                  </label>
                  <input
                    id="listing-sqft"
                    type="number"
                    required
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    placeholder="e.g. 2450"
                    className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col">
                  <label htmlFor="listing-city" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                    Service Area / City *
                  </label>
                  <select
                    id="listing-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col">
                <label htmlFor="listing-address" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                  Property Street Address *
                </label>
                <input
                  id="listing-address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 1904 Creekside Ln, Austin, TX 78701"
                  className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                />
              </div>

              {/* Type Category */}
              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-2 font-medium">
                  Underlying Specialty Portfolio *
                </label>
                <div className="flex gap-4">
                  {['Residential', 'Luxury', 'New Construction'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 font-sans text-xs text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="add-category"
                        checked={type === cat}
                        onChange={() => setType(cat as any)}
                        className="text-gold focus:ring-gold focus:border-gold"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preset Housing Images Selection */}
              <div className="flex flex-col">
                <label className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-2 font-medium">
                  Select Architectural Styling Image Preset *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {imagesPresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImagePreset(idx)}
                      className={`relative overflow-hidden aspect-video border p-1 rounded-none transition-all ${
                        selectedImagePreset === idx ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'
                      }`}
                    >
                      <img src={preset.url} alt={preset.label} className="w-full h-full object-cover" />
                      {selectedImagePreset === idx && (
                        <div className="absolute inset-0 bg-brand-slate/40 flex items-center justify-center text-white">
                          <Check className="w-5 h-5 text-gold" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label htmlFor="listing-description" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                  Detailed Listing Description *
                </label>
                <textarea
                  id="listing-description"
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the highlight features, interior designs or scenic views..."
                  className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 justify-end pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 font-sans text-xs tracking-widest uppercase text-slate-400 hover:text-slate-700 border border-transparent transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-brand-slate hover:bg-gold hover:text-brand-slate text-cream font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-md"
                >
                  Confirm Simulation
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
