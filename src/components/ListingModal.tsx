import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Compass, ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';
import { Listing } from '../types';

interface ListingModalProps {
  listing: Listing | null;
  onClose: () => void;
  onInquireSubmit: (name: string, email: string, phone: string, message: string) => void;
}

export default function ListingModal({ listing, onClose, onInquireSubmit }: ListingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!listing) return null;

  // Decide dedicated agent representation based on listing type
  const getDedicatedAgent = (type: string) => {
    switch (type) {
      case 'Luxury':
        return {
          name: 'Sofia Ramirez',
          role: 'Luxury Specialist',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
          lic: 'TX-Lic #0639841'
        };
      case 'New Construction':
        return {
          name: 'Derek Okonkwo',
          role: 'Construction Director',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
          lic: 'TX-Lic #0598312'
        };
      default:
        return {
          name: 'James Whitfield',
          role: 'Principal Broker',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
          lic: 'TX-Lic #0541239'
        };
    }
  };

  const agent = getDedicatedAgent(listing.type);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out the required Name and Email fields.');
      return;
    }
    onInquireSubmit(name, email, phone, message || `I am highly interested in reviewing ${listing.title} at ${listing.address}. Please coordinates a viewing.`);
    setIsSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
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

        {/* Center Modal */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white border border-gold/20 text-brand-slate text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full relative">
          
          {/* Subtle design corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold z-10" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold z-10" />
          
          {/* Close trigger button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-brand-slate hover:bg-gold text-cream hover:text-brand-slate transition-colors focus:outline-none"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: Media & Specifications */}
            <div className="md:col-span-7 bg-gray-50 flex flex-col justify-between border-r border-gray-100">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-brand-slate text-cream text-[10px] tracking-widest font-bold uppercase px-3 py-1">
                  {listing.type} Portfolio
                </div>
                {listing.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-brand-slate text-[9px] tracking-widest font-bold uppercase px-2.5 py-1 flex items-center gap-1 shadow-md">
                    <Sparkles className="w-2.5 h-2.5 fill-brand-slate" />
                    <span>{listing.tag}</span>
                  </div>
                )}
              </div>

              {/* Home Facts specifications */}
              <div className="p-6 md:p-8 space-y-6 text-left">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate mb-1">
                    {formatPrice(listing.price)}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 font-sans text-xs">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{listing.address}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-gray-200 py-4 border-t border-b border-gray-200 text-center text-slate-600 font-sans text-xs sm:text-sm">
                  <div className="space-y-1">
                    <div className="text-slate-400 text-xs">Bedrooms</div>
                    <div className="flex items-center justify-center gap-1.5 font-bold text-brand-slate">
                      <Bed className="w-4 h-4 text-gold" />
                      <span>{listing.beds} Beds</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-400 text-xs">Bathrooms</div>
                    <div className="flex items-center justify-center gap-1.5 font-bold text-brand-slate">
                      <Bath className="w-4 h-4 text-gold" />
                      <span>{listing.baths} Baths</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-400 text-xs">Sizing Index</div>
                    <div className="flex items-center justify-center gap-1.5 font-bold text-brand-slate font-mono text-xs sm:text-sm">
                      <Maximize2 className="w-4 h-4 text-gold" />
                      <span>{listing.sqft} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-sm font-bold text-brand-slate uppercase tracking-wider">
                    Property Description
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {listing.description}
                  </p>
                </div>

                {/* Additional Metadata Details */}
                <div className="grid grid-cols-2 gap-4 text-xs h-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                    <span>Year Built: <strong>{listing.yearBuilt}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Compass className="w-4 h-4 text-gold shrink-0" />
                    <span>Service Area: <strong>{listing.city}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Inquiry Form */}
            <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white text-left">
              <div>
                <h4 className="font-serif text-xl font-bold text-brand-slate mb-6">
                  Schedule Consultation
                </h4>

                {/* Listing Agent Card */}
                <div className="flex items-center gap-3 p-4 bg-sand border border-gold/15 mb-6">
                  <div className="w-12 h-12 rounded-none overflow-hidden bg-gray-100 flex-shrink-0 border border-gold/20">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-sans text-xs tracking-widest uppercase font-semibold text-gold">
                      {agent.role}
                    </div>
                    <div className="font-serif text-sm font-bold text-brand-slate-dark">
                      {agent.name}
                    </div>
                    <div className="font-sans text-[10px] text-slate-400">
                      {agent.lic}
                    </div>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-6 text-center text-emerald-800 space-y-3 mb-6">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
                    <h5 className="font-serif text-lg font-bold">Inquiry Sent</h5>
                    <p className="font-sans text-xs text-emerald-600 font-light leading-relaxed">
                      Thank you for your interest! {agent.name} has received your inquiry for <strong>{listing.title}</strong> and will connect with you shortly on your specified email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <input type="hidden" name="listing_id" value={listing.id} />
                    
                    <div className="flex flex-col">
                      <label htmlFor="modal-name" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                        Your Name *
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="modal-email" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                        Your Email *
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="modal-phone" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                        Phone Number
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(512) 555-0199"
                        className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="modal-message" className="font-sans text-[10px] tracking-wider text-slate-400 uppercase mb-1 font-medium">
                        Inquiry Message
                      </label>
                      <textarea
                        id="modal-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`I want to learn more about the price strategy and schedule a physical walk-through tour of ${listing.title} as early as possible.`}
                        className="w-full bg-cream border border-gray-200 p-2.5 text-xs text-brand-slate focus:outline-none focus:border-gold resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-slate hover:bg-gold hover:text-brand-slate text-cream py-3 font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-md mt-4"
                    >
                      Request Details
                    </button>
                  </form>
                )}
              </div>

              {/* Prompt assurances */}
              <div className="mt-8 pt-4 border-t border-gray-150 space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Direct Agent Support: {agent.name.toLowerCase().split(' ')[0]}@harborstonerealty.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Central Office: (512) 448-9200</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
