// Facts sourced from tonkinplumbing.com (Home, About, Residential, Commercial,
// Testimonials) and CSLB public records (license #519138, C-36, active since 1987).
export const tonkin = {
  id: "tonkin",
  name: "Tonkin Plumbing",
  legalName: "Tonkin Plumbing, Inc.",
  shortName: "TP",
  logoText: "Tonkin",
  logoSub: "Plumbing & Drain Cleaning",
  estYear: "1987",
  phone: "(951) 784-7586",
  email: "myplumber@tonkinplumbing.com",
  license: "CA Lic. #519138",
  licenseClass: "C-36 Plumbing Contractor",
  address: "Riverside, CA 92507",
  city: "Riverside, CA",
  locationNote: "Near the 91, 215 and 60 interchange",
  serviceAreas: ["Riverside", "Corona", "The Inland Empire"],

  // Tonkin's brand colors
  theme: {
    ink: "#0B3B82",     // Tonkin blue
    deep: "#072552",    // dark navy
    signal: "#D92323",  // Tonkin red
    metal: "#D92323",   // accent (rules, timeline)
    paper: "#F2F5FA",
  },

  hero: {
    headline: "Riverside’s plumbers since 1987.",
    sub: "Repairs, water heaters, repipes and remodels for homes and businesses across Riverside, Corona and the Inland Empire.",
    urgent: "Plumbing emergency? We’re often there within the hour.",
  },

  facts: [
    { value: "Since 1987", label: "Family-run, same Riverside shop" },
    { value: "CSLB #519138", label: "Licensed C-36 plumbing contractor" },
    { value: "Certified installer", label: "A.O. Smith, Rinnai and Bradford White water heaters" },
    { value: "Free estimates", label: "You see your options before any work starts" },
  ],

  services: {
    home: [
      { title: "Water heaters", desc: "Repair and replacement, tank or tankless." },
      { title: "Leaks and slab leaks", desc: "Electronic leak detection to find it before we open anything up." },
      { title: "Drains and sewers", desc: "Clearing, hydro-jetting and camera inspections." },
      { title: "Whole-house repipes", desc: "Copper repiping to replace old, failing lines." },
      { title: "Kitchen and bath remodels", desc: "Fixtures, layout changes and project management." },
      { title: "Gas lines", desc: "New gas line installation and repair." },
      { title: "Fixtures", desc: "Toilets, faucets, sinks and garbage disposals." },
      { title: "Water pressure", desc: "Fixing pressure that’s too low or too high." },
    ],
    business: [
      { title: "Water heaters and boilers", desc: "Commercial hot water, repaired or replaced." },
      { title: "Backflow devices", desc: "Installation, repair and testing." },
      { title: "Grease, sand and lint traps", desc: "Installation and maintenance." },
      { title: "Drain cleaning", desc: "Hydro-jetting for heavy buildup." },
      { title: "Water and sewer lines", desc: "Including trenchless pipe bursting." },
      { title: "New construction", desc: "Plumbing planned and built from the ground up." },
      { title: "Maintenance agreements", desc: "Annual inspections that catch problems early." },
    ],
  },

  story: {
    headline: "Two apprentices from Matamata, New Zealand.",
    intro: "Phillip Tonkin and Terry Swney both did five-year plumbing apprenticeships in the same New Zealand town before ending up in Riverside.",
    timeline: [
      { year: "1987", text: "After time at Rancho Plumbing in Moreno Valley, Phillip opens Tonkin Plumbing with one truck and one plumber: himself." },
      { year: "1992", text: "Terry Swney joins as partner." },
      { year: "2017", text: "Phillip retires. Terry leads the company." },
      { year: "Today", text: "Supervisors, project managers and field crews serving homes and businesses across the Inland Empire." },
    ],
  },

  // Demo content: sample offers and reviews for the pitch.
  offers: [
    { code: "TONKIN-25", discount: "$25 off", title: "Any plumbing service call", sub: "Valid toward any residential repair, drain snaking or valve replacement.", finePrint: "Limit one per household. Mention code at time of booking." },
    { code: "TONKIN-CAM", discount: "Free", title: "HD sewer camera inspection", sub: "Pinpoint tree root intrusion and pipe shifts before you dig.", finePrint: "Included with any main lateral clearing or jetting service." },
    { code: "TONKIN-100", discount: "$100 off", title: "Water heater installation", sub: "Valid on standard energy-efficient tanks and Rinnai tankless upgrades.", finePrint: "Valid on replacement units installed by Tonkin Plumbing." },
  ],

  reviews: [
    { author: "Mark R.", date: "Poly High, Riverside", quote: true, text: "Tonkin has handled both our 1940s home near Poly High and our local warehouse for over a decade. When our water heater gave out on a Sunday morning, they had a tech out with a new tank by lunch. Pricing is always dead upfront." },
    { author: "David & Sarah T.", date: "Corona", quote: true, text: "Had two other plumbers tell us we needed a full $8,000 yard trench. Tonkin brought their camera out, showed us on video it was just a localized root plug at the cleanout, and cleared it in an hour. Honest guys." },
  ],
};
