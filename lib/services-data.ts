export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  short: string;
  detail: string;
  tags: string[];
  helps: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "cleanouts",
    slug: "home-cleanouts",
    icon: "Package",
    title: "Home Cleanouts",
    short:
      "Clear out furniture, clutter, boxes, donation items, and leftover junk before photos or move-out.",
    detail:
      "We help sellers remove the items that make rooms feel smaller, dated, or distracting. Ideal for pre-listing cleanouts, estate cleanouts, downsizing, garages, basements, and leftover move-out items.",
    tags: ["Junk Removal", "Estate Cleanouts", "Decluttering", "Garage Cleanouts"],
    helps: [
      "Leftover furniture and boxes",
      "Garage, basement, and attic clutter",
      "Estate cleanouts and downsizing",
      "Items that make rooms feel smaller or distracting",
    ],
    image: "/images/services/cleanouts.jpg",
  },
  {
    id: "painting",
    slug: "painting-touch-ups",
    icon: "PaintbrushVertical",
    title: "Painting & Touch-Ups",
    short:
      "Neutral paint, drywall repairs, trim touch-ups, and small fixes that help rooms photograph cleaner.",
    detail:
      "Fresh paint and repaired walls can change how a room feels in photos. We focus on buyer-friendly colors, scuffed walls, trim, doors, and the details that make a home feel maintained.",
    tags: ["Interior Paint", "Drywall Repair", "Trim & Doors", "Neutral Colors"],
    helps: [
      "Scuffed or dated wall colors",
      "Drywall dings and nail holes",
      "Worn trim, doors, and baseboards",
      "Rooms that need a fresher, move-in feel",
    ],
    image: "/images/services/painting.jpg",
  },
  {
    id: "flooring",
    slug: "flooring-carpet",
    icon: "Layers",
    title: "Flooring & Carpet",
    short:
      "Replace tired carpet, repair damaged flooring, or refresh high-traffic areas before listing.",
    detail:
      "Worn floors are one of the first things buyers notice. We help prioritize practical flooring updates that improve presentation without turning the project into a full renovation.",
    tags: ["Carpet Replacement", "Hardwood Repair", "LVP", "High-Traffic Areas"],
    helps: [
      "Worn or stained carpet",
      "Damaged or scratched hardwood",
      "High-traffic areas that look tired",
      "Flooring that doesn't match buyer expectations",
    ],
    image: "/images/services/flooring.jpg",
  },
  {
    id: "cleaning",
    slug: "move-out-cleaning",
    icon: "Sparkles",
    title: "Move-Out Cleaning",
    short:
      "Deep cleaning after sellers move out so kitchens, bathrooms, floors, and surfaces show better.",
    detail:
      "A clean home photographs better and feels easier to buy. We handle the post-move details sellers often miss before showings.",
    tags: ["Deep Clean", "Kitchen & Bath", "Windows", "Post-Move"],
    helps: [
      "Kitchens and bathrooms after move-out",
      "Dust, streaks, and buildup on floors",
      "Windows, fixtures, and baseboards",
      "The last impression before showings",
    ],
    image: "/images/services/cleaning.jpg",
  },
  {
    id: "curb-appeal",
    slug: "curb-appeal-landscaping",
    icon: "Flower2",
    title: "Curb Appeal & Landscaping",
    short:
      "Mowing, mulch, trimming, debris removal, pressure washing, and exterior cleanup.",
    detail:
      "The first photo and first showing start outside. We clean up the exterior details that make the home feel cared for before buyers walk in.",
    tags: ["Lawn Care", "Mulch & Trim", "Pressure Washing", "Exterior Cleanup"],
    helps: [
      "Overgrown lawns and untrimmed shrubs",
      "Mulch, debris, and yard cleanup",
      "Dirty siding, walkways, and driveways",
      "First impressions before buyers walk in",
    ],
    image: "/images/services/curb-appeal.jpg",
  },
  {
    id: "repairs",
    slug: "minor-repairs",
    icon: "Wrench",
    title: "Minor Repairs",
    short:
      "Hardware, caulk, drywall patches, doors, fixtures, trim, and punch-list fixes.",
    detail:
      "Small repairs can create big buyer objections. We handle the visible fixes that help the home feel cleaner, safer, and better maintained.",
    tags: ["Handyman", "Caulk & Cracks", "Fixtures", "Punch-List"],
    helps: [
      "Loose hardware and broken fixtures",
      "Cracks, caulk, and drywall patches",
      "Sticking doors and worn trim",
      "Small issues that raise buyer questions",
    ],
    image: "/images/services/repairs.jpg",
  },
];
