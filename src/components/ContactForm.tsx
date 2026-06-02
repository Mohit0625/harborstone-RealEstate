import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle, ShieldCheck } from 'lucide-react';

interface ContactFormProps {
  onFormSubmit: (data: { name: string; email: string; phone: string; message: string }) => void;
}

export default function ContactForm({ onFormSubmit }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out Name and Email.');
      return;
    }
    
    onFormSubmit({ name, email, phone, message });
    setIsSuccess(true);
    
    // Clear fields on submit
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-cream text-brand-slate relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Area: Company metadata & location specs */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="font-sans text-xs tracking-[0.2em] font-semibold text-gold uppercase">
                  Schedule Representation
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-slate leading-[1.1] mb-4">
                Partner With Our Advisers
              </h2>
              <p className="font-sans text-[13px] sm:text-sm text-slate-500 font-light leading-relaxed">
                Whether seeking to capture record value on an estate sale or hoping to target secure high country tracts, our team coordinates peerless results. Fill out our advisory registration to arrange a structured proposal file.
              </p>
            </div>

            {/* Structured Corporate Parameters */}
            <div className="space-y-6 pt-4">
              
              {/* HQ Address coordinates */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/25 bg-sand flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div className="text-left">
                  <div className="font-sans text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                    Headquarters
                  </div>
                  <div className="font-serif text-sm font-bold text-brand-slate mt-0.5">
                    4821 Lakeview Blvd, Suite 200
                  </div>
                  <div className="font-sans text-xs text-slate-500">
                    Austin, TX 78701
                  </div>
                </div>
              </div>

              {/* Direct corporate email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/25 bg-sand flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div className="text-left">
                  <div className="font-sans text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                    Direct Email
                  </div>
                  <a
                    href="mailto:hello@harborstonerealty.com"
                    className="font-serif text-sm font-bold text-brand-slate hover:text-gold block mt-0.5 transition-colors"
                  >
                    hello@harborstonerealty.com
                  </a>
                  <div className="font-sans text-xs text-slate-500">
                    Response threshold: &lt;2 hours
                  </div>
                </div>
              </div>

              {/* Central hotline phone line */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/25 bg-sand flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div className="text-left">
                  <div className="font-sans text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                    Austin central line
                  </div>
                  <a
                    href="tel:5124489200"
                    className="font-serif text-sm font-bold text-brand-slate hover:text-gold block mt-0.5 transition-colors"
                  >
                    (512) 448-9200
                  </a>
                  <div className="font-sans text-xs text-slate-500">
                    Support operating Hours: Mon - Sat, 8am - 7pm
                  </div>
                </div>
              </div>

            </div>

            {/* Licensing details badge */}
            <div className="p-5 border border-gold/15 bg-white space-y-3">
              <div className="flex items-center gap-2 text-gold font-sans text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Texas Accredited brokerage</span>
              </div>
              <p className="font-sans text-[11px] text-slate-500 font-light leading-relaxed">
                Harborstone Realty Group is officially registered as a Real Estate Corporation in the State of Texas under license ID <strong>TX-DRE #0598312</strong>. James Whitfield operates as the designated broker of record.
              </p>
            </div>

          </div>

          {/* Right Area: Interactive Submission Panel */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 border border-gray-100 shadow-xl relative">
            {/* Subtle accent corner framing */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-gold" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-gold" />

            {isSuccess ? (
              <div className="bg-emerald-50/50 border border-emerald-200 p-8 text-center space-y-4 py-16">
                <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto animate-[bounce_1.5s_infinite]" />
                <h3 className="font-serif text-2xl font-bold text-emerald-800">Registration Complete</h3>
                <p className="font-sans text-xs sm:text-sm text-emerald-600 font-light leading-relaxed max-w-md mx-auto">
                  Thank you! Your representation inquiry has been successfully transmitted log file. One of our 38 certified Austin real estate specialists will review your criteria and respond with a structured portfolio within 2 hours.
                </p>
                <div className="pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-500 bg-emerald-100/50 px-3 py-1 font-semibold">
                    Secure Ticket: HS-INQ-{(Math.random() * 10000).toFixed(0)}
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left" id="brokerage-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-name" className="font-sans text-[10px] tracking-widest text-slate-400 uppercase mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="James Sterling"
                      className="w-full bg-cream border border-gray-200 p-3.5 text-xs text-brand-slate focus:outline-none focus:border-gold placeholder:text-slate-300 font-sans"
                    />
                  </div>

                  {/* Email address */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-email" className="font-sans text-[10px] tracking-widest text-slate-400 uppercase mb-1.5 font-semibold">
                      Your Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="james@sterlingco.com"
                      className="w-full bg-cream border border-gray-200 p-3.5 text-xs text-brand-slate focus:outline-none focus:border-gold placeholder:text-slate-300 font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-phone" className="font-sans text-[10px] tracking-widest text-slate-400 uppercase mb-1.5 font-semibold">
                      Phone Coordinate
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0100"
                      className="w-full bg-cream border border-gray-200 p-3.5 text-xs text-brand-slate focus:outline-none focus:border-gold placeholder:text-slate-300 font-sans"
                    />
                  </div>

                  {/* Type criteria */}
                  <div className="flex flex-col">
                    <label htmlFor="interest-select" className="font-sans text-[10px] tracking-widest text-slate-400 uppercase mb-1.5 font-semibold">
                      Primary specialty Interest
                    </label>
                    <select
                      id="interest-select"
                      className="w-full bg-cream border border-gray-200 p-3.5 text-xs text-brand-slate focus:outline-none focus:border-gold cursor-pointer"
                    >
                      <option>Acquiring Luxury Property</option>
                      <option>Buying Family Residence</option>
                      <option>Listing/Selling Asset</option>
                      <option>New construction Consult</option>
                      <option>Relocation assistance</option>
                      <option>Property oversight</option>
                    </select>
                  </div>

                </div>

                {/* Brief Message specs */}
                <div className="flex flex-col">
                  <label htmlFor="contact-message" className="font-sans text-[10px] tracking-widest text-slate-400 uppercase mb-1.5 font-semibold">
                    Tell us about your property goals
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your desired bedrooms count, pricing timeline, preferred Austin school neighborhoods, or listing scope..."
                    className="w-full bg-cream border border-gray-200 p-3.5 text-xs text-brand-slate focus:outline-none focus:border-gold placeholder:text-slate-300 font-sans resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    <span>Your data is protected under Austin licensing guidelines.</span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-brand-slate hover:bg-gold hover:text-brand-slate text-cream font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-md shrink-0"
                  >
                    Submit Request
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
