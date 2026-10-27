// ORVIX rates file
// Rate badalne ke liye sirf price ka number badlein (Rs mein).
// price: 0 ka matlab hai "WhatsApp par confirm karein".
// Baaqi code ko haath na lagayein.

const ORVIX_WHATSAPP = "923242297814";

const ORVIX_SERVICES = [
  {
    id: "cctv",
    name: "CCTV Camera",
    emoji: "📹",
    items: [
      { name: "CCTV Camera Installation", price: 0, unit: "per camera" },
      { name: "CCTV Repair & Troubleshooting", price: 0, unit: "per visit" },
      { name: "DVR / NVR Setup", price: 0, unit: "per setup" },
      { name: "IP Camera Installation", price: 0, unit: "per camera" }
    ]
  },
  {
    id: "ac",
    name: "AC Services",
    emoji: "❄️",
    items: [
      { name: "AC Installation", price: 0, unit: "per AC" },
      { name: "AC Repair", price: 0, unit: "per visit" },
      { name: "AC Maintenance", price: 0, unit: "per AC" }
    ]
  },
  {
    id: "geyser",
    name: "Instant Electric Geyser",
    emoji: "🚿",
    items: [
      { name: "Geyser Installation", price: 0, unit: "per geyser" },
      { name: "Geyser Repair", price: 0, unit: "per visit" }
    ]
  },
  {
    id: "electrician",
    name: "Electrician",
    emoji: "💡",
    items: [
      { name: "Electrical Fault Checking", price: 0, unit: "per visit" },
      { name: "Switch / Socket Work", price: 0, unit: "per piece" },
      { name: "Wiring Work", price: 0, unit: "per job" }
    ]
  },
  {
    id: "plumber",
    name: "Plumbing",
    emoji: "🔧",
    items: [
      { name: "Plumbing Fault Checking", price: 0, unit: "per visit" },
      { name: "Tap / Fitting Work", price: 0, unit: "per piece" },
      { name: "Water Leakage Repair", price: 0, unit: "per job" }
    ]
  },
  {
    id: "appliances",
    name: "Home Appliances",
    emoji: "🏠",
    items: [
      { name: "Appliance Checking", price: 0, unit: "per visit" },
      { name: "Appliance Repair", price: 0, unit: "per job" }
    ]
  },
  {
    id: "laptop",
    name: "Laptop Repair",
    emoji: "💻",
    items: [
      { name: "Laptop Checking / Diagnosis", price: 0, unit: "per laptop" },
      { name: "Laptop Repair", price: 0, unit: "per laptop" }
    ]
  },
  {
    id: "carpenter",
    name: "Carpenter",
    emoji: "🪚",
    items: [
      { name: "Carpentry Work", price: 0, unit: "per job" },
      { name: "Woodwork Fitting", price: 0, unit: "per job" }
    ]
  },
  {
    id: "painting",
    name: "Painting",
    emoji: "🎨",
    items: [
      { name: "Interior Painting", price: 0, unit: "per job" },
      { name: "Exterior Painting", price: 0, unit: "per job" }
    ]
  },
  {
    id: "ceiling",
    name: "Luxury Ceiling",
    emoji: "✨",
    items: [
      { name: "Decorative Ceiling Work", price: 0, unit: "per job" }
    ]
  }
];
