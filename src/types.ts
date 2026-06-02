export interface Listing {
  id: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  type: 'Residential' | 'Luxury' | 'New Construction';
  image: string;
  featured: boolean;
  tag: string;
  description: string;
  yearBuilt: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  license: string;
  image: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  interestInListingId?: string;
  date: string;
}

export interface ServiceArea {
  name: string;
  description: string;
  avgPrice: string;
  growthRate: string;
  image: string;
  coordinates: { x: number; y: number };
}
