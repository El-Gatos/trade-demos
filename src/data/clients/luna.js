export const luna = {
  id: "luna",
  name: "Luna Plumbing Service",
  shortName: "LP",
  estYear: "2004",
  yearsInBusiness: "20+",
  phone: "(951) 331-3689",
  license: "CA Lic #890406",
  email: "horacio.luna@lunaplumbingservice.com",
  city: "Moreno Valley & Perris, CA",
  serviceAreas: "Moreno Valley, Perris, Sunnymead Ranch & Riverside",
  tagline: "Plumbing You Can Trust",

  theme: {
    primary: "bg-red-700 hover:bg-red-800 text-white",
    badge: "bg-red-50 text-red-700 border-red-200",
    accentText: "text-red-700",
    accentBorder: "border-red-400",
    heroButton: "bg-red-600 hover:bg-red-500 text-white shadow-red-600/30",
  },

  hero: {
    subBadge: "Horacio Luna • 20+ Years Trade Experience",
    title: "Honest Upfront Pricing Before A Single Wrench Turns.",
    subtitle: "Rapid emergency residential and commercial plumbing response throughout Moreno Valley and Perris.",
  },

  coupons: [
    { code: "LUNA-130", discount: "$129.99", title: "Water Heater Flush & Check", sub: "Flush scale and sediment. Inspect all lines, relief valves, and gas connections." },
    { code: "TRADE-50", discount: "$50 CASH BACK", title: "Old Unit Trade-In", sub: "Trade in your old water heater toward a high-efficiency system replacement." },
    { code: "DRAIN-25", discount: "$25 OFF", title: "Emergency Drain Snaking", sub: "Clear stubborn kitchen, bathroom, or mainline clogs quickly." }
  ],

  services: [
    { title: "Water Heater Repair & Flush", desc: "Restore hot water pressure and efficiency with comprehensive flush and element diagnostics." },
    { title: "Emergency Drain Snaking", desc: "Rapid mechanical clearing for backed-up sewer lines, toilets, and main laterals." },
    { title: "Slab Leak Diagnostics", desc: "Locate hot water slab leaks before concrete damage and high water bills accumulate." },
    { title: "Garbage Disposal & Fixtures", desc: "Commercial and residential fixture replacement, faucet rebuilds, and sink valve upgrades." },
    { title: "Pressure Regulators", desc: "Protect household copper and appliances from damaging street pressure surges." },
    { title: "Commercial Line Maintenance", desc: "Tailored preventative plumbing service for restaurants, offices, and retail spaces." }
  ],

  about: {
    quoteHeadline: "High quality service and expertise to keep your facilities running.",
    story: "With over 20 years of experience in Commercial and Residential plumbing fields, our goal is to deliver honest, dependable service directly to our neighbors in Moreno Valley and Perris.",
    testimonial: {
      quote: "They arrived in record time on New Year's when our sump pump went out. Horacio explained the issue upfront and had us running before flooded floors ruined our holiday.",
      author: "P. Clay",
      role: "Local Homeowner"
    }
  }
};