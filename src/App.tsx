import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FeaturedListings from './components/FeaturedListings';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import MeetTheTeam from './components/MeetTheTeam';
import ServiceAreas from './components/ServiceAreas';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ListingModal from './components/ListingModal';
import AddListingModal from './components/AddListingModal';

import {
  INITIAL_LISTINGS,
  SERVICES,
  TESTIMONIALS,
  TEAM_MEMBERS,
  SERVICE_AREAS
} from './data';
import { Listing, ContactInquiry } from './types';

export default function App() {
  const [listings, setListings] = useState<Listing[]>(INITIAL_LISTINGS);
  
  // Property search filters lifted from Hero
  const [cityFilter, setCityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  
  // Interactive Modal triggers
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);
  
  // Storing in-memory simulated inquiries just for local flow awareness (optional)
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);

  const listingsSecRef = useRef<HTMLDivElement>(null);

  // Triggered when Hero click search
  const handleSearchExecute = () => {
    // Smooth scroll down to listings section to immediate reviews the matching entries
    const offsetTop = document.getElementById('listings')?.offsetTop || 0;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: 'smooth'
    });
  };

  // Add customized customer listings
  const handleAddCustomListing = (newListingData: Omit<Listing, 'id' | 'featured' | 'tag' | 'yearBuilt'>) => {
    const freshId = `lst-${listings.length + 1}`;
    const freshListing: Listing = {
      ...newListingData,
      id: freshId,
      featured: true,
      tag: 'New Offer',
      yearBuilt: new Date().getFullYear()
    };
    
    setListings([freshListing, ...listings]);
  };

  // Registering local form submissions
  const handleFormSubmission = (data: { name: string; email: string; phone: string; message: string }) => {
    const newInquiry: ContactInquiry = {
      id: `inq-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      date: new Date().toLocaleDateString()
    };
    
    setInquiries([newInquiry, ...inquiries]);
    console.log('Broker Intake Received:', newInquiry);
  };

  const handleInquireFromListing = (name: string, email: string, phone: string, message: string) => {
    if (!selectedListing) return;
    
    const newInquiry: ContactInquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      phone,
      message,
      interestInListingId: selectedListing.id,
      date: new Date().toLocaleDateString()
    };
    
    setInquiries([newInquiry, ...inquiries]);
    console.log('Intake specifically for listing:', selectedListing.title, newInquiry);
  };

  return (
    <div className="bg-cream font-sans min-h-screen text-brand-slate selection:bg-gold/20 selection:text-gold-dark antialiased">
      {/* 1. Header Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero full-width splash with properties search board */}
        <Hero
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          onSearchClick={handleSearchExecute}
        />

        {/* 3. Stats achievement counters */}
        <StatsBar />

        {/* 4. Filtered portfolio of Listings */}
        <div ref={listingsSecRef}>
          <FeaturedListings
            listings={listings}
            cityFilter={cityFilter}
            typeFilter={typeFilter}
            priceFilter={priceFilter}
            onSelectListing={setSelectedListing}
            openAddListing={() => setIsAddListingOpen(true)}
            onResetFilters={() => {
              setCityFilter('all');
              setTypeFilter('all');
              setPriceFilter('all');
            }}
          />
        </div>

        {/* 5. Core specialties descriptions */}
        <Services services={SERVICES} />

        {/* 6. Company chronicle genesis story */}
        <AboutUs />

        {/* 7. Star testimonials rating */}
        <Testimonials testimonials={TESTIMONIALS} />

        {/* 8. Meet Advisors roster */}
        <MeetTheTeam team={TEAM_MEMBERS} />

        {/* 9. Interactive service map highlights */}
        <ServiceAreas areas={SERVICE_AREAS} />

        {/* 10. Contact intakes form */}
        <ContactForm onFormSubmit={handleFormSubmission} />
      </main>

      {/* 11. Footer metadata specs */}
      <Footer />

      {/* --- FLOATING DIALOG OVERLAYS --- */}
      
      {/* Listing details view overlay info */}
      {selectedListing && (
        <ListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
          onInquireSubmit={handleInquireFromListing}
        />
      )}

      {/* Listing builder simulator */}
      {isAddListingOpen && (
        <AddListingModal
          onClose={() => setIsAddListingOpen(false)}
          onAddListing={handleAddCustomListing}
        />
      )}
    </div>
  );
}
