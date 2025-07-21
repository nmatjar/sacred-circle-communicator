// Sacred Circle Communicator - Types for consciousness festival community

export type SacredArchetype = 
  | "Shaman"           // Spiritual Guide/Healer
  | "Herbalist"        // Plant Medicine Expert
  | "Craftsperson"     // Sacred Arts & Crafts
  | "Dancer"           // Energy Movement & Flow
  | "Keeper"           // Tradition & Wisdom Keeper
  | "Alchemist";       // Elixir & Potion Maker

export type ElementalState = 
  | "Earth"    // Grounded, stable, practical
  | "Water"    // Flowing, emotional, intuitive
  | "Fire"     // Passionate, active, transformative
  | "Air";     // Inspired, communicative, mental

export type LunarPhase = 
  | "New"      // New beginnings, introspection
  | "Waxing"   // Growth, building energy
  | "Full"     // Peak energy, manifestation
  | "Waning";  // Release, letting go

export type SacredPractice = 
  | "Meditation"
  | "Ceremony"
  | "Healing"
  | "Creating"
  | "Teaching"
  | "Journeying"
  | "Gathering"
  | "Resting";

export type VibrationalResonance = {
  spiritual: number;      // 0-100 spiritual compatibility
  elemental: number;      // 0-100 elemental harmony
  lunar: number;          // 0-100 lunar cycle alignment
  festival: number;       // 0-100 festival community connection
  overall: number;        // 0-100 overall sacred resonance
};

export type SacredStatus = {
  energetic: {
    element: { value: ElementalState; emoji: string };
    practice: { value: SacredPractice; emoji: string };
    availability: { value: string; emoji: string };
    protection: { value: string; emoji: string };
  };
  lunar: {
    phase: { value: LunarPhase; emoji: string };
    influence: { value: string; emoji: string };
    energy: { value: string; emoji: string };
  };
  community: {
    resonance: { value: string; emoji: string };
    sharing: { value: string; emoji: string };
    gathering: { value: string; emoji: string };
  };
  festival: {
    location: { value: string; emoji: string };
    camp: { value: string; emoji: string };
    role: { value: string; emoji: string };
  };
};

export type SacredIntentionId = 
  | "share_wisdom"      // 🌱 ДЕЛИ МЪДРОСТ
  | "seek_guidance"     // 🔮 ТЪРСИ ВОДАЧЕСТВО  
  | "invite_ceremony"   // 🌙 ПОКАНИ НА ЦЕРЕМОНИЯ
  | "offer_healing"     // 💎 ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ
  | "exchange_gifts"    // 🌿 РАЗМЕНИ ДАРОВЕ
  | "sync_energies"     // 🦋 СИНХРОНИЗИРАЙ ЕНЕРГИИ
  | "address_discord"   // ⚡ СЪОБЩИ ДИСХАРМОНИЯ
  | "connect_souls";    // 🌸 СВЪРЖИ ДУШИ

export type SacredIntention = {
  id: SacredIntentionId;
  name: string;           // Slavic/Cyrillic name
  translation: string;    // English translation
  question: string;       // What this intention is for
  symbol: string;         // Sacred symbol (emoji or SVG)
  element: ElementalState; // Associated element
  lunarOptimal: LunarPhase[]; // Best lunar phases
  resonanceScore: number; // 0-100 compatibility with contact
  riskLevel: "low" | "medium" | "high";
  actions: SacredAction[];
};

export type SacredAction = {
  id: string;
  name: string;
  template: string;
  example: string;
  estimatedImpact: number;    // 0-100 spiritual impact
  energyRequired: number;     // 0-100 energy cost
  optimalTiming: string;      // Best time/conditions
  channel: "ceremony" | "gathering" | "private" | "community" | "digital";
  elements: ElementalState[]; // Which elements support this action
};

export type SacredSkill = {
  name: string;
  category: "healing" | "crafts" | "wisdom" | "movement" | "ceremony" | "plants" | "alchemy";
  level: "novice" | "practitioner" | "teacher" | "master";
  description: string;
  traditions: string[];      // Cultural traditions (Slavic, Mayan, etc.)
};

export type FestivalExperience = {
  name: string;
  year: number;
  role: string;              // Participant, Volunteer, Teacher, etc.
  camp?: string;
  workshops?: string[];
  connections: number;       // People met
  impact: "transformative" | "meaningful" | "enjoyable" | "challenging";
};

export type PlannedFestival = {
  name: string;
  year: number;
  dates: {
    start: string;
    end: string;
  };
  location: string;
  role: string;              // Participant, Volunteer, Teacher, etc.
  camp?: string;
  workshops?: string[];      // Workshops planning to attend/teach
  status: "confirmed" | "planning" | "interested" | "maybe";
  ticketStatus?: "purchased" | "work_exchange" | "waiting" | "applying";
  notes?: string;
};

export type SacredProfile = {
  id: string;
  name: string;
  archetype: SacredArchetype;
  vibrationalResonance: VibrationalResonance;
  status: SacredStatus;
  
  // Sacred Identity
  sacredName?: string;        // Spiritual/festival name
  pronouns: string;
  birthMoon?: LunarPhase;     // Moon phase when born
  elementalAffinity: ElementalState[];
  
  // Skills & Practices
  sacredSkills: SacredSkill[];
  dailyPractices: SacredPractice[];
  teachingOfferings: string[];
  healingModalities: string[];
  
  // Festival Community
  festivalHistory: FestivalExperience[];
  plannedFestivals: PlannedFestival[];
  currentFestival?: string;
  campAffiliation?: string;
  giftOfferings: string[];    // What they offer to community
  
  // Sacred Connections
  intentions: SacredIntention[];
  culturalConnections: string[]; // Slavic, Mayan, Celtic, etc.
  languages: string[];
  
  // Wisdom & Knowledge
  plantAllies: string[];      // Plant medicines/allies
  crystalAllies: string[];    // Crystal/stone allies
  animalSpirits: string[];    // Animal spirit guides
  sacredTexts: string[];      // Books, teachings that inspire
  
  // Availability & Boundaries
  energyBoundaries: {
    deepPractice: boolean;    // Available during deep practice?
    ceremony: boolean;        // Available during ceremony?
    healing: boolean;         // Available for healing work?
    teaching: boolean;        // Available for teaching?
  };
  
  // Location & Timing
  timezone: string;
  location?: {
    festival?: string;
    camp?: string;
    region?: string;
  };
  
  // Sacred Calendar
  importantDates: {
    date: string;
    type: "ceremony" | "festival" | "personal" | "lunar";
    description: string;
  }[];
};

export type HerbalKnowledge = {
  id: string;
  name: string;
  scientificName: string;
  commonNames: string[];
  
  // Traditional Uses
  traditionalUses: string[];
  culturalSignificance: {
    culture: string;          // Slavic, Mayan, etc.
    meaning: string;
    ceremonies: string[];
  }[];
  
  // Practical Information
  properties: {
    medicinal: string[];
    energetic: string[];
    spiritual: string[];
  };
  
  preparations: {
    method: string;           // Tea, tincture, oil, etc.
    instructions: string;
    dosage?: string;
    duration?: string;
  }[];
  
  // Safety
  contraindications: string[];
  interactions: string[];
  warnings: string[];
  
  // Harvesting & Growing
  harvestTime: string[];
  growingConditions: string;
  sustainabilityNotes: string;
  
  // Spiritual Aspects
  elementalAssociation: ElementalState[];
  lunarTiming: LunarPhase[];
  chakraAssociation?: string[];
  intentionSupport: SacredIntentionId[];
};

export type FestivalEvent = {
  id: string;
  name: string;
  type: "festival" | "gathering" | "ceremony" | "workshop" | "retreat";
  
  // Basic Info
  description: string;
  website?: string;
  location: {
    country: string;
    region: string;
    coordinates?: { lat: number; lng: number };
  };
  
  // Timing
  dates: {
    start: string;
    end: string;
    year: number;
  };
  
  // Community
  expectedAttendance: number;
  ageRange: string;
  vibe: string[];            // Transformational, healing, artistic, etc.
  
  // Practices & Offerings
  practices: SacredPractice[];
  workshops: string[];
  ceremonies: string[];
  healingOffered: string[];
  
  // Cultural Elements
  culturalFocus: string[];   // Slavic, Mayan, etc.
  languages: string[];
  
  // Practical
  ticketInfo?: {
    price: string;
    availability: string;
    workExchange: boolean;
  };
  
  // Sacred Aspects
  lunarAlignment?: LunarPhase;
  elementalFocus?: ElementalState[];
  intentionSupport: SacredIntentionId[];
};

export type SacredGift = {
  id: string;
  name: string;
  category: "herb" | "crystal" | "craft" | "service" | "knowledge" | "art";
  
  // Basic Info
  description: string;
  images?: string[];
  
  // Offering Details
  offeredBy: string;        // Profile ID
  availableQuantity?: number;
  
  // Exchange
  exchangeType: "gift" | "trade" | "energy_exchange" | "service_trade";
  desiredExchange?: string;
  energyValue: number;      // 1-100 energy value
  
  // Sacred Aspects
  elementalEnergy: ElementalState[];
  intentionSupport: SacredIntentionId[];
  culturalSignificance?: string;
  blessings?: string;       // How it's been blessed/charged
  
  // Practical
  location: string;
  availability: {
    festivals: string[];    // Which festivals it's available at
    shipping: boolean;
    pickup: boolean;
  };
  
  // Community
  reviews: {
    from: string;           // Profile ID
    rating: number;         // 1-5 stars
    comment: string;
    date: string;
  }[];
};

// Utility types for sacred calculations
export type SacredCompatibility = {
  archetype: number;        // 0-100 archetype compatibility
  elemental: number;        // 0-100 elemental harmony
  lunar: number;            // 0-100 lunar alignment
  practice: number;         // 0-100 practice compatibility
  cultural: number;         // 0-100 cultural resonance
  festival: number;         // 0-100 festival community overlap
  overall: number;          // 0-100 total sacred compatibility
};

export type SacredTiming = {
  optimal: boolean;
  lunarSupport: number;     // 0-100 lunar support
  elementalAlignment: number; // 0-100 elemental alignment
  energyMatch: number;      // 0-100 energy compatibility
  recommendation: string;   // Human-readable timing advice
};
