// Facts sourced from tonkinplumbing.com (Home, About, Residential, Commercial,
// Testimonials) and CSLB public records (license #519138, C-36, active since 1987).
export const tonkin = {
  id: "tonkin",
  name: "Tonkin Plumbing",
  legalName: "Tonkin Plumbing, Inc.",
  shortName: "TP",
  logoText: "Tonkin",
  logoSub: "Plumbing",
  estYear: "1987",
  phone: "(951) 784-7586",
  email: "myplumber@tonkinplumbing.com",
  license: "CA Lic. #519138",
  licenseClass: "C-36 Plumbing Contractor",
  address: "Riverside, CA 92507",
  city: "Riverside, CA",
  locationNote: "Near the 91, 215 and 60 interchange",
  serviceAreas: ["Riverside", "Corona", "The Inland Empire"],

  theme: {
    ink: "#13294B",     // van navy
    signal: "#C62828",  // call-to-action red
    metal: "#B8662F",   // copper
    paper: "#F4F6F8",
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

  // Summaries of the two testimonials on tonkinplumbing.com/testimonials.
  // Not verbatim quotes; swap in the customers' exact words (or current Google
  // reviews) before this goes live.
  reviews: [
    { author: "Kenne James", date: "2016", text: "A customer of more than ten years who counts on Tonkin for reliable, quality work, and notes how professional and clean the crews are." },
    { author: "E. Hinton", date: "2015", text: "Praised the quick response, fair pricing, on-time arrival and respectful work." },
  ],
  reviewsSource: "https://www.tonkinplumbing.com/testimonials/",
};
