// Not yet fact-checked against Luna's real site or CSLB. Verify the license,
// offers and testimonial before showing this to anyone.
export const luna = {
  id: "luna",
  name: "Luna Plumbing Service",
  shortName: "LP",
  logoText: "Luna",
  logoSub: "Plumbing Service",
  estYear: "2004",
  phone: "(951) 331-3689",
  email: "horacio.luna@lunaplumbingservice.com",
  license: "CA Lic. #890406",
  city: "Moreno Valley, CA",
  serviceAreas: ["Moreno Valley", "Perris", "Sunnymead Ranch", "Riverside"],

  theme: {
    ink: "#2A1E1C",
    signal: "#B3261E",
    metal: "#8C9196",
    paper: "#F6F5F4",
  },

  hero: {
    headline: "Upfront pricing before a single wrench turns.",
    sub: "Residential and commercial plumbing across Moreno Valley and Perris, from Horacio Luna and 20+ years in the trade.",
    urgent: "Emergency? Call now for rapid response.",
  },

  facts: [
    { value: "Since 2004", label: "20+ years in residential and commercial plumbing" },
    { value: "Lic. #890406", label: "California licensed plumbing contractor" },
    { value: "Upfront pricing", label: "You know the price before work starts" },
  ],

  offers: [
    { discount: "$129.99", title: "Water heater flush and check", sub: "Flush scale and sediment, and inspect lines, relief valves and gas connections." },
    { discount: "$50 back", title: "Old water heater trade-in", sub: "Trade in your old unit toward a high-efficiency replacement." },
    { discount: "$25 off", title: "Emergency drain snaking", sub: "Kitchen, bathroom or main line clogs." },
  ],

  services: {
    home: [
      { title: "Water heater repair and flush", desc: "Restore hot water and efficiency with a full flush and diagnostics." },
      { title: "Emergency drain snaking", desc: "Backed-up sewer lines, toilets and main laterals." },
      { title: "Slab leak diagnostics", desc: "Find hot water slab leaks before concrete damage and high bills." },
      { title: "Disposals and fixtures", desc: "Fixture replacement, faucet rebuilds and sink valve upgrades." },
      { title: "Pressure regulators", desc: "Protect pipes and appliances from street pressure surges." },
    ],
    business: [
      { title: "Commercial line maintenance", desc: "Preventive service for restaurants, offices and retail." },
      { title: "Commercial fixtures", desc: "Replacement and repair for busy facilities." },
    ],
  },

  story: {
    headline: "Service that keeps your home and business running.",
    intro: "With over 20 years in commercial and residential plumbing, Horacio Luna’s goal is honest, dependable service for neighbors in Moreno Valley and Perris.",
  },

  reviews: [
    { author: "P. Clay", date: "Homeowner", quote: true, text: "They arrived in record time on New Year’s when our sump pump went out. Horacio explained the issue upfront and had us running before flooded floors ruined our holiday." },
  ],
};
