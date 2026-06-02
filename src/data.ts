import { Listing, Service, Testimonial, TeamMember, ServiceArea } from './types';

export const INITIAL_LISTINGS: Listing[] = [
  {
    id: 'lst-1',
    title: 'The Overlook Lakefront Villa',
    price: 3250000,
    beds: 5,
    baths: 6,
    sqft: 6240,
    address: '1102 Waters Edge Dr, Austin, TX 78730',
    city: 'Austin',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Premium Luxury',
    description: 'An exceptional architectural marvel nestled along Lake Austin. Features floor-to-ceiling glass walls, a private infinity pool overlooking the water, double master suites, state-of-the-art chef\'s kitchen with gaggenau appliances, and custom stone masonry. Fully integrated smart home automation throughout.',
    yearBuilt: 2021
  },
  {
    id: 'lst-2',
    title: 'The Grove Craftsman Villa',
    price: 845000,
    beds: 4,
    baths: 3,
    sqft: 3150,
    address: '438 Hidden Creek Path, Round Rock, TX 78681',
    city: 'Round Rock',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Modern Family',
    description: 'Beautifully expanded mid-century modern craftsman sitting on a mature oak-lined cul-de-sac. Features open-concept living space, original wide-plank wood flooring, custom mudroom, gourmet island kitchen, and a gorgeous screened porch. Close proximity to top-tier schools and parks.',
    yearBuilt: 2018
  },
  {
    id: 'lst-3',
    title: 'Milam Skyline Penthouse',
    price: 1620000,
    beds: 3,
    baths: 3.5,
    sqft: 2850,
    address: '801 Congress Ave #2203, Austin, TX 78701',
    city: 'Austin',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    tag: 'Downtown Modern',
    description: 'Breathtaking 22nd-floor luxury penthouse situated in the heart of downtown Austin. Unrivaled 270-degree views of the Colorado River and Capitol building. Features minimalist custom marble cabinetry, sub-zero beverage station, motorized draperies, private secure elevator access, and multi-tier private outdoor terraces.',
    yearBuilt: 2022
  },
  {
    id: 'lst-4',
    title: 'North Creek Contemporary',
    price: 685000,
    beds: 3,
    baths: 2.5,
    sqft: 2420,
    address: '1422 Rolling Hills Dr, Cedar Park, TX 78613',
    city: 'Cedar Park',
    type: 'New Construction',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'New Build',
    description: 'Newly completed custom contemporary home featuring sleek zero-edge finishes, energy-efficient geothermal cooling, soaring 12ft ceilings, engineered white-oak floors, spa-like wet room in master bath, and an EV-ready oversized 2-car garage in highly coveted school district.',
    yearBuilt: 2025
  },
  {
    id: 'lst-5',
    title: 'The Orchard Modern Colonial',
    price: 590000,
    beds: 4,
    baths: 3,
    sqft: 2750,
    address: '908 Orchard Grove Ln, Pflugerville, TX 78660',
    city: 'Pflugerville',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'Great Location',
    description: 'Bright and airy modernized colonial home with high ceilings, luxurious custom lighting, updated designer quartz counter surfaces, cozy central electric fireplace, and an expansive fenced backyard ideal for summer entertaining. Walking distance to local community pools & lakes.',
    yearBuilt: 2017
  },
  {
    id: 'lst-6',
    title: 'Berry Creek Limestone Estate',
    price: 1195000,
    beds: 4,
    baths: 4.5,
    sqft: 4230,
    address: '228 Highland View Rd, Georgetown, TX 78628',
    city: 'Georgetown',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    tag: 'Hill Country Views',
    description: 'Prestigious custom hill country limestone estate situated on a half-acre lot backing up to a private greenbelt. Boasts high-timber vaulted beam ceilings, natural stone floor heating, custom-made temperature-controlled wine cellar, and a majestic double-tiered terrace with a modern outdoor stone fireplace.',
    yearBuilt: 2020
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Residential Sales',
    description: 'Matching families with their perfect homes. Our detailed data-driven market approach ensures you secure properties under peak favorable value and terms.',
    iconName: 'Home'
  },
  {
    id: 'srv-2',
    title: 'Luxury Homes',
    description: 'Discreet, white-glove advocacy for upscale residential acquisitions. We command off-market listings, private tours, and precise high-stakes negotiation.',
    iconName: 'Sparkles'
  },
  {
    id: 'srv-3',
    title: 'New Construction',
    description: 'Unmatched structural inspection and developer vetting. We consult directly with premium Austin homebuilders to secure early custom-selection tiers.',
    iconName: 'Hammer'
  },
  {
    id: 'srv-4',
    title: 'Property Management',
    description: 'End-to-end investment oversight. From strict tenant verification and digital maintenance portals to compliant accounting, we protect and amplify your yielded equity.',
    iconName: 'Building'
  },
  {
    id: 'srv-5',
    title: 'Relocation Services',
    description: 'Stress-free transition management. We deliver hyper-local Austin neighborhood analyses, video walkthroughs, and turn-key settling coordination.',
    iconName: 'Compass'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sarah & Marcus Thorne',
    location: 'West Lake Hills, Austin',
    quote: 'Selling our family estate was highly emotional and complex. Harborstone Realty Group was incredibly sensitive, strategic, and professional. James sold our home in just 9 days for over asking. Simply peerless.',
    rating: 5,
    date: 'April 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-2',
    clientName: 'David K. Vance',
    location: 'Downtown Austin',
    quote: 'I have closed three high-end acquisition deals with Derek. His technical understanding of modern construction framing, heating systems, and contracts is exceptional. He is the ultimate technical ally.',
    rating: 5,
    date: 'February 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-3',
    clientName: 'The Montgomery Family',
    location: 'Round Rock',
    quote: 'As out-of-state buyers from Chicago, navigating the Austin metro hot market felt impossible. Sofia helped us secure a craftsman in Round Rock before it even made the public listings board. Her network is unmatched!',
    rating: 5,
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'agent-1',
    name: 'James Whitfield',
    role: 'Founder & Principal Broker',
    bio: 'With over two decades of high-level Texas real estate expertise, James founded Harborstone in 2009. His vision is defined by strict ethical advocacy, hyper-local precision, and crafting authentic home stories for every buyer.',
    email: 'james@harborstonerealty.com',
    phone: '(512) 448-9201',
    license: 'TX-DRE #0541239',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'agent-2',
    name: 'Sofia Ramirez',
    role: 'Luxury Property Specialist',
    bio: 'A native Austinite who possesses a profound command of waterfront estates and off-market custom homes. Sofia represents clients with standard-setting grace, technical data fluency, and an absolute commitment to details.',
    email: 'sofia@harborstonerealty.com',
    phone: '(512) 448-9202',
    license: 'TX-DRE #0639841',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80'
  },
  {
    id: 'agent-3',
    name: 'Derek Okonkwo',
    role: 'Director of New Construction',
    bio: 'Derek possesses dual master\'s degrees in Urban Planning and Civil Engineering. He advises developers, residential home builders, and custom-home buyers on construction guidelines, zoning laws, and materials vetting.',
    email: 'derek@harborstonerealty.com',
    phone: '(512) 448-9203',
    license: 'TX-DRE #0598312',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Austin',
    description: 'The vibrant heart of central Texas, characterized by dynamic urban penthouses, historic neighborhoods, and prestigious waterfront views.',
    avgPrice: '$685,000',
    growthRate: '+4.8% YoY',
    image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    coordinates: { x: 50, y: 55 }
  },
  {
    name: 'Round Rock',
    description: 'A thriving technology-driven family hub, celebrated for exemplary award-winning public schools, sports venues, and master-planned parks.',
    avgPrice: '$460,000',
    growthRate: '+3.5% YoY',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    coordinates: { x: 58, y: 35 }
  },
  {
    name: 'Cedar Park',
    description: 'Lush greenery meets sleek contemporary residential living with sprawling hill country scenery and convenient premium shopping corridors.',
    avgPrice: '$525,000',
    growthRate: '+3.9% YoY',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    coordinates: { x: 32, y: 32 }
  },
  {
    name: 'Pflugerville',
    description: 'An expansive family community featuring excellent lakes, trail networks, high housing affordability, and swift commuting access loops.',
    avgPrice: '$415,000',
    growthRate: '+4.1% YoY',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    coordinates: { x: 65, y: 45 }
  },
  {
    name: 'Georgetown TX',
    description: 'Historic charm centered around the most beautiful town square in Texas, lined by stunning grand oak trees and stately limestone estates.',
    avgPrice: '$495,000',
    growthRate: '+5.2% YoY',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    coordinates: { x: 48, y: 15 }
  }
];
