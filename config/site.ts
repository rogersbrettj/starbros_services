export const siteConfig = {
  name: "StarBro's Services",
  domain: "starbros.com",
  url: "https://starbros.com",
  phoneDisplay: "(703) 687-7551",
  phoneE164: "+1-703-687-7551",
  callHref: "tel:+17036877551",
  textHref: "sms:+17036877551",
  promotion:
    "Local College Student Special: Save $100 as One of Our First Customers",
  businessHours: "Monday–Friday: 9:00 AM–5:00 PM",
  serviceAreaMapEmbedUrl:
    "https://www.google.com/maps?q=Athens,+GA&z=10&output=embed",
  formspreeFormId: "meewnkol",
  socialLinks: {
    facebook: "",
    instagram: "",
  },
  serviceAreas: [
    "Athens",
    "Oconee County",
    "Watkinsville",
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    // Reviews is intentionally hidden from public navigation for now; the route and integration remain intact.
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const services = [
  {
    title: "Driveway Pressure Washing",
    shortTitle: "Driveways",
    description:
      "Refresh concrete affected by dirt, algae, mildew, tire marks, and everyday surface buildup.",
    icon: "driveway",
  },
  {
    title: "Sidewalk Pressure Washing",
    shortTitle: "Sidewalks",
    description:
      "Improve the appearance of entryways and the concrete paths around your property.",
    icon: "sidewalk",
  },
  {
    title: "Patio Pressure Washing",
    shortTitle: "Patios",
    description:
      "Bring a cleaner, brighter feel back to concrete outdoor living areas.",
    icon: "patio",
  },
  {
    title: "Walkway Pressure Washing",
    shortTitle: "Walkways",
    description:
      "Make the approach to your home feel cleaner and better maintained.",
    icon: "walkway",
  },
  {
    title: "Other Concrete Surface Cleaning",
    shortTitle: "Other Concrete",
    description:
      "Ask for a free quote on concrete pads, entry areas, and other concrete surfaces.",
    icon: "surface",
  },
] as const;

export const differentiators = [
  {
    title: "Local and Personal",
    description:
      "Work directly with local college students serving the Athens community.",
    icon: "local",
  },
  {
    title: "Honest Pricing",
    description:
      "Clear, project-specific quotes without the overhead of a large commercial company.",
    icon: "quote",
  },
  {
    title: "Professional Equipment",
    description:
      "Concrete-focused cleaning with a Westinghouse 3800 PSI pressure washer.",
    icon: "equipment",
  },
  {
    title: "Reliable Communication",
    description:
      "Friendly responses, straightforward scheduling, and updates from the people doing the work.",
    icon: "message",
  },
] as const;

export const whyChooseUs = [
  "Local student-founded business",
  "More than 3 years of hands-on experience",
  "Professional-grade equipment",
  "Free quotes",
  "Fast quoting through property measurements",
  "Honest, project-specific pricing",
] as const;

export const galleryItems = [
  {
    title: "Driveway Surface Transformation",
    category: "Driveways",
    src: "/images/gallery/driveway-cleaning-before-after.jpg",
    alt: "Residential driveway before and after pressure washing by StarBro's Services",
    description:
      "A residential driveway transformed by removing dark surface buildup and restoring a brighter finish.",
    position: "center",
  },
  {
    title: "Driveway Transformation",
    category: "Driveways",
    src: "/images/gallery/driveway-before-after.jpg",
    alt: "Driveway before and after concrete pressure washing",
    description:
      "A long residential driveway refreshed by removing widespread surface buildup.",
    position: "center",
  },
  {
    title: "Brick Porch and Steps",
    category: "Brick Steps",
    src: "/images/gallery/brick-porch-before-after.jpg",
    alt: "Brick porch and steps before and after pressure washing by StarBro's Services",
    description:
      "A brick porch and entry steps showing the contrast between built-up grime and a freshly cleaned surface.",
    position: "center",
  },
  {
    title: "Curbside Concrete Refresh",
    category: "Sidewalks",
    src: "/images/gallery/curb-pad-before-after.jpg",
    alt: "Curbside concrete pad before and after pressure washing by StarBro's Services",
    description:
      "A curbside concrete pad refreshed by clearing away years of dark surface buildup.",
    position: "center",
  },
  {
    title: "Back Patio Cleaning",
    category: "Patios",
    src: "/images/gallery/back-patio-before-after.jpg",
    alt: "Back patio before and after pressure washing by StarBro's Services",
    description:
      "A residential back patio restored to a cleaner, brighter appearance with professional pressure washing.",
    position: "center",
  },
  {
    title: "Sidewalk Refresh",
    category: "Sidewalks",
    src: "/images/gallery/sidewalk-before-after.jpg",
    alt: "Sidewalk before and after concrete pressure washing",
    description:
      "A front walkway cleaned to create a brighter approach to the home.",
    position: "center",
  },
  {
    title: "Patio Cleaning",
    category: "Patios",
    src: "/images/gallery/patio-before-after.jpg",
    alt: "Patio before and after concrete pressure washing",
    description:
      "A concrete patio and path cleaned around the home and garden.",
    position: "center",
  },
  {
    title: "Walkway Detail",
    category: "Walkways",
    src: "/images/gallery/walkway-before-after.jpg",
    alt: "Walkway before and after concrete pressure washing",
    description:
      "A stone-edged concrete path with dirt and organic buildup cleared away.",
    position: "center",
  },
  {
    title: "Large Driveway Refresh",
    category: "Before & After",
    src: "/images/gallery/large-driveway-before-after.jpg",
    alt: "Before and after pressure washing project by StarBro's Services",
    description:
      "A large residential driveway restored to a cleaner, brighter finish with professional pressure washing.",
    position: "center",
  },
] as const;

export const teamMembers = [
  {
    name: "Brett Rogers",
    role: "Manager",
    image: "/images/team/brett-headshot.png",
    imageAlt: "Brett Rogers, manager of StarBro's Services",
    imagePosition: "center 20%",
    school: "Finance student at Auburn University",
    bio:
      "Brett currently studies Finance at Auburn University. As the manager of StarBro's Services, he focuses on customer communication, quotes, scheduling, and building a reliable local service business. Long term, Brett is interested in entrepreneurship and hopes to build a business in the longevity and holistic health space.",
  },
  {
    name: "Kaden Smith",
    role: "Pressure Washing Specialist",
    image: "/images/team/kaden-headshot.png",
    imageAlt: "Kaden Smith, pressure washing specialist at StarBro's Services",
    imagePosition: "center 15%",
    school: "Student at the University of Georgia",
    bio:
      "Kaden currently attends the University of Georgia, where he is pursuing a path related to commercial real estate. He brings more than 3 years of hands-on pressure washing experience to StarBro's Services and handles the cleaning work using professional-grade equipment. Outside of work and school, Kaden enjoys pickleball and is interested in finding solutions that improve housing affordability in America.",
  },
  {
    name: "Collin Smith",
    role: "Founder of StarBro's Services",
    image: "/images/team/collin-headshot.jpg",
    imageAlt: "Collin Smith, founder of StarBro's Services",
    imagePosition: "center 18%",
    school: "Recent graduate of the University of Georgia",
    bio:
      "Collin is a founder of StarBro's Services and a recent graduate of the University of Georgia. He brings drive, discipline, and a strong work ethic to the team. Outside of StarBro's, he is working toward earning his pilot's license as part of his long-term dream of becoming a commercial pilot.",
  },
  {
    name: "Ethan Winn",
    role: "Pressure Washing Specialist",
    image: "/images/team/ethan-winn-headshot.jpg",
    imageAlt: "Ethan Winn, pressure washing specialist at StarBro's Services",
    imagePosition: "center 20%",
    school: "Accounting student at the University of Georgia",
    bio:
      "Ethan Winn is from Alpharetta, Georgia, and is currently studying Accounting at the University of Georgia. As a Pressure Washing Specialist, Ethan brings hands-on experience operating professional-grade equipment and takes pride in delivering high-quality results. Outside of work and school, Ethan enjoys serving at his church, spending time with family and friends, and pursuing his interests in knitting and Mahjong.",
  },
] as const;

export const faqs = [
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes. Submit the quote form or call or text StarBro's Services at (703) 687-7551 for a free, no-obligation quote.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Athens, Oconee County, Watkinsville, and surrounding Georgia communities.",
  },
  {
    question: "What surfaces do you clean?",
    answer:
      "StarBro's Services focuses on concrete pressure washing, including driveways, sidewalks, patios, walkways, and other concrete surfaces.",
  },
  {
    question: "Do you clean houses, roofs, gutters, decks, or fences?",
    answer:
      "No. StarBro's Services specializes in concrete cleaning only. We do not offer house washing, roof washing, gutter cleaning, deck cleaning, fence cleaning, or soft washing.",
  },
  {
    question: "How long does concrete pressure washing take?",
    answer:
      "Timing depends on the size, condition, access, and number of concrete surfaces. Share your project details and we can give you a better estimate with your free quote.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "That depends on property access and the project details. We will confirm access, water availability, and any other needs with you before the appointment.",
  },
  {
    question: "How much does concrete pressure washing cost?",
    answer:
      "Pricing depends on the size, condition, and type of concrete surface. Request a free quote for honest, project-specific pricing.",
  },
  {
    question: "How do I prepare before you arrive?",
    answer:
      "When possible, move vehicles, furniture, toys, planters, and personal items away from the concrete area before the appointment.",
  },
  {
    question: "Can pressure washing remove every stain?",
    answer:
      "Pressure washing can significantly improve dirt, mildew, algae, and surface buildup. Some deeply embedded or permanent stains may improve without disappearing completely.",
  },
  {
    question: "How do I claim the $100 off offer?",
    answer:
      "Submit a quote request or call or text us and mention the local college-student promotion. We are offering $100 off to our first customers.",
  },
] as const;
