export const tonkin = {
  id: "tonkin",
  name: "Tonkin Plumbing",
  legalName: "Tonkin Plumbing, Inc.",
  shortName: "TP",
  estYear: "1987",
  yearsInBusiness: "39+",
  phone: "(951) 784-7586",
  rawPhone: "9517847586",
  license: "CA Lic #512803",
  email: "service@tonkinplumbing.com",
  address: "Riverside, CA (Vine St corridor)",
  city: "Riverside, CA",
  serviceAreas: "Riverside, Corona, Norco, Moreno Valley & the Inland Empire",
  tagline: "Riverside’s Trusted Master Plumbers Since 1987",
  
  theme: {
    primary: "bg-blue-700 hover:bg-blue-800 text-white",
    primaryBg: "bg-blue-700",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    accentText: "text-blue-700",
    accentBorder: "border-blue-400",
    heroButton: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30",
  },

  hero: {
    badge: "Riverside’s Longest-Running Family Plumbing Shop",
    headlineMain: "When You Have A Plumbing Problem,",
    headlineHighlight: "We're There In A Jiffy.",
    subtext: "Serving Riverside and Corona for over 39 years. From slab leak acoustic detection and Bradford White water heaters to commercial sewer hydro jetting.",
    guarantees: [
      "100% Workmanship Guarantee",
      "Upfront Flat Rates Before Work Begins",
      "Certified Master Technicians",
      "24/7 Live Emergency Line"
    ]
  },

  coupons: [
    { 
      code: "TONKIN-25", 
      discount: "$25 OFF", 
      title: "Any Plumbing Service Call", 
      sub: "Valid toward any residential repair, drain snaking, or valve replacement.",
      finePrint: "Limit one per household. Mention code at time of booking."
    },
    { 
      code: "TONKIN-CAM", 
      discount: "FREE", 
      title: "High-Def Sewer Camera Inspection", 
      sub: "Pinpoint tree root intrusion and pipe shifts before you dig.",
      finePrint: "Included with any main lateral clearing or jetting service."
    },
    { 
      code: "TONKIN-100", 
      discount: "$100 OFF", 
      title: "Water Heater Installation", 
      sub: "Valid on standard energy-efficient tanks and Rinnai tankless upgrades.",
      finePrint: "Valid on replacement units installed by Tonkin Plumbing."
    }
  ],

  services: {
    residential: [
      { 
        title: "Water Heaters & Tankless Systems", 
        desc: "Diagnostic repair, element flushes, and replacements for Bradford White, A.O. Smith, and Rinnai tankless systems.",
        tag: "High Priority"
      },
      { 
        title: "Sewer Jetting & Main Drains", 
        desc: "High-pressure hydro jetting clears severe grease, industrial sludge, and invasive tree roots out to the street main.",
        tag: "Fast Dispatch"
      },
      { 
        title: "Electronic Slab Leak Detection", 
        desc: "Non-invasive electronic and acoustic frequency testing to locate hidden foundation leaks without tearing up floors.",
        tag: "Specialized"
      },
      { 
        title: "Whole-Home Copper Repiping", 
        desc: "Eliminate low water pressure and rust by swapping brittle galvanized lines for Type-L American copper or Uponor PEX.",
        tag: "Permanent Fix"
      }
    ],
    commercial: [
      { 
        title: "Backflow Testing & Certification", 
        desc: "Annual certified backflow testing, device rebuilding, and automated municipal compliance filings for city water districts.",
        tag: "Certified"
      },
      { 
        title: "Commercial Boilers & Circulators", 
        desc: "Heavy-duty commercial hot water loops, circulating pumps, and boiler maintenance for hospitality and retail.",
        tag: "Commercial"
      },
      { 
        title: "Grease Trap & Interceptor Maintenance", 
        desc: "Routine line scoping, jetting, and emergency overflow prevention for Riverside restaurants and cafeterias.",
        tag: "Code Compliant"
      },
      { 
        title: "Facility Preventative Maintenance", 
        desc: "Scheduled valve exercises, pressure regulator adjustments, and multi-tenant plumbing servicing contracts.",
        tag: "Retainer Ready"
      }
    ]
  },

  reviews: [
    {
      author: "Mark R.",
      location: "Poly High Neighborhood, Riverside",
      stars: 5,
      date: "Recent Customer",
      text: "Tonkin has handled both our 1940s home near Poly High and our local warehouse for over a decade. When our water heater gave out on a Sunday morning, they had a tech out with a new tank by lunch. Pricing is always dead upfront."
    },
    {
      author: "David & Sarah T.",
      location: "Corona, CA",
      stars: 5,
      date: "Verified Homeowner",
      text: "Had two other plumbers tell us we needed a full $8,000 yard trench. Tonkin brought their camera out, showed us on video it was just a localized root plug at the cleanout, and cleared it in an hour. Honest guys."
    }
  ]
};