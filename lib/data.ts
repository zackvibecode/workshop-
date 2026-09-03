export const WA_NUMBER = "60125001601";
export const PHONE_DISPLAY = "6012 501 601";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi ZAQONE, I want to ask about vehicle wrap / branding."
)}`;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
];

export const PROJECTS = [
  {
    title: "BMW M4 Competition",
    type: "Full Vehicle Wrap",
    img: "/images/proj-bmw.jpg",
    size: "hero",
    slug: "bmw-m4-competition",
    description: "A stunning transformation of the BMW M4 Competition featuring a premium full vehicle wrap. This project showcases our expertise in applying high-quality vinyl wraps that enhance the vehicle's aggressive styling while providing paint protection.",
    details: {
      vehicle: "BMW M4 Competition",
      service: "Full Vehicle Wrap",
      material: "Premium 3M Vinyl Wrap",
      duration: "3-4 Days",
      features: [
        "Complete colour transformation",
        "Paint protection",
        "Premium finish quality",
        "Professional installation",
      ],
    },
    gallery: [
      "/images/proj-bmw.jpg",
      "/images/proj-bmw.jpg",
      "/images/proj-bmw.jpg",
    ],
  },
  {
    title: "Toyota GR86",
    type: "Custom Graphics",
    img: "/images/proj-gr86.jpg",
    size: "std",
    slug: "toyota-gr86-custom",
    description: "Custom racing graphics designed specifically for this Toyota GR86. The design combines aggressive lines with subtle details, creating a unique look that stands out on the road and track.",
    details: {
      vehicle: "Toyota GR86",
      service: "Custom Graphics Design & Application",
      material: "High-Performance Vinyl Graphics",
      duration: "2-3 Days",
      features: [
        "Bespoke design consultation",
        "Race-inspired graphics",
        "Precision application",
        "Durable outdoor-rated vinyl",
      ],
    },
    gallery: [
      "/images/proj-gr86.jpg",
      "/images/proj-gr86.jpg",
      "/images/proj-gr86.jpg",
    ],
  },
  {
    title: "Commercial Fleet",
    type: "Vehicle Branding",
    img: "/images/proj-fleet.jpg",
    size: "std",
    slug: "commercial-fleet-branding",
    description: "Complete branding solution for a commercial fleet, transforming company vehicles into powerful mobile advertisements. Strategic design and placement ensures maximum visibility and brand impact.",
    details: {
      vehicle: "Commercial Fleet Vehicles",
      service: "Fleet Branding & Graphics",
      material: "Commercial-Grade Vinyl",
      duration: "1-2 Days per vehicle",
      features: [
        "Brand consistency across fleet",
        "High-visibility design",
        "Weather-resistant materials",
        "Fast turnaround time",
      ],
    },
    gallery: [
      "/images/proj-fleet.jpg",
      "/images/proj-fleet.jpg",
      "/images/proj-fleet.jpg",
    ],
  },
  {
    title: "Mercedes-Benz C-Class",
    type: "Premium Wrap",
    img: "/images/proj-merc.jpg",
    size: "wide",
    slug: "mercedes-c-class-wrap",
    description: "Luxury meets performance with this Mercedes-Benz C-Class premium wrap. Featuring a sophisticated finish that complements the vehicle's elegant lines while adding a personal touch.",
    details: {
      vehicle: "Mercedes-Benz C-Class",
      service: "Premium Vehicle Wrap",
      material: "Premium Vinyl with Satin Finish",
      duration: "3-4 Days",
      features: [
        "Luxury finish quality",
        "Colour customization",
        "Paint protection",
        "Seamless application",
      ],
    },
    gallery: [
      "/images/proj-merc.jpg",
      "/images/proj-merc.jpg",
      "/images/proj-merc.jpg",
    ],
  },
];

export const SERVICES = [
  {
    no: "01",
    title: "Vehicle Wrap",
    desc: "Premium colour changes and custom finishes professionally installed.",
  },
  {
    no: "02",
    title: "Commercial Branding",
    desc: "Vehicle branding designed to turn company vehicles into moving advertisements.",
  },
  {
    no: "03",
    title: "Custom Graphics",
    desc: "Unique automotive graphics created specifically for each vehicle.",
  },
  {
    no: "04",
    title: "Printing & Installation",
    desc: "Professional printing and precision installation for long-lasting results.",
  },
];

export const WHY_POINTS = [
  { no: "01", title: "Professional Installation" },
  { no: "02", title: "Premium Materials" },
  { no: "03", title: "Custom Design" },
  { no: "04", title: "Clean Finishing" },
];

export const PROCESS = [
  { no: "01", title: "Tell Us Your Idea" },
  { no: "02", title: "Design & Planning" },
  { no: "03", title: "Production" },
  { no: "04", title: "Professional Installation" },
  { no: "05", title: "Ready For The Road" },
];

export const PERSONAL_POINTS = [
  "Colour changes",
  "Custom wraps",
  "Unique graphics",
  "Personal styling",
];

export const BUSINESS_POINTS = [
  "Fleet branding",
  "Company vehicles",
  "Advertising wraps",
  "Commercial graphics",
];

export const TESTIMONIALS = [
  {
    name: "Hafiz Rahman",
    vehicle: "Full Wrap — Honda Civic",
    quote: "Clean work and precise alignment. Finished on time as promised.",
  },
  {
    name: "Daniel Wong",
    vehicle: "Fleet Branding — 3 Vans",
    quote: "Our company vans look professional. Clear communication from start to finish.",
  },
  {
    name: "Siti Aminah",
    vehicle: "Custom Graphics — Perodua Myvi",
    quote: "Design followed exactly what I wanted. Installation was clean, no bubbles.",
  },
];

export const SERVICE_OPTIONS = [
  "Vehicle Wrap",
  "Commercial Branding",
  "Custom Graphics",
  "Printing",
  "Installation",
  "Other",
];
