export interface Location {
  name: string;
  county: string;
  state: string;
  slug: string;
  description: string;
}

export const locations: Location[] = [
  {
    name: "Harrisburg",
    county: "Dauphin County",
    state: "PA",
    slug: "harrisburg-pa",
    description: "Pre-listing home prep services in Harrisburg, PA and surrounding Dauphin County neighborhoods.",
  },
  {
    name: "Mechanicsburg",
    county: "Cumberland County",
    state: "PA",
    slug: "mechanicsburg-pa",
    description: "Home prep before listing in Mechanicsburg, PA — cleanouts, painting, cleaning, and curb appeal.",
  },
  {
    name: "Camp Hill",
    county: "Cumberland County",
    state: "PA",
    slug: "camp-hill-pa",
    description: "Pre-listing prep services for Camp Hill, PA homeowners and real estate agents.",
  },
  {
    name: "Carlisle",
    county: "Cumberland County",
    state: "PA",
    slug: "carlisle-pa",
    description: "Home prep and listing services in Carlisle, PA — coordinated prep for photos, showings, and sale.",
  },
  {
    name: "New Cumberland",
    county: "Cumberland County",
    state: "PA",
    slug: "new-cumberland-pa",
    description: "Pre-listing home prep in New Cumberland, PA — cleanouts, paint, flooring, cleaning, and more.",
  },
  {
    name: "Lemoyne",
    county: "Cumberland County",
    state: "PA",
    slug: "lemoyne-pa",
    description: "Pre-listing prep for Lemoyne, PA sellers getting homes ready for market.",
  },
  {
    name: "Enola",
    county: "Cumberland County",
    state: "PA",
    slug: "enola-pa",
    description: "Home prep services in Enola, PA — helping sellers and agents prepare before listing.",
  },
];

export const counties = [
  {
    name: "Cumberland County",
    state: "PA",
    cities: ["Mechanicsburg", "Camp Hill", "Carlisle", "New Cumberland", "Lemoyne", "Enola"],
  },
  {
    name: "Dauphin County",
    state: "PA",
    cities: ["Harrisburg", "Hershey", "Middletown", "Steelton"],
  },
  {
    name: "York County",
    state: "PA",
    cities: ["York", "Red Lion", "Dallastown"],
  },
];
