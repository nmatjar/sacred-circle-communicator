
// Represents a single communication action within an intention.
export interface MCICAction {
  id: string;
  name: string;
  template: string;
  example: string;
  estimatedImpact: number; // 0-100%
  executionTime: number; // w minutach
  channel: "chat" | "email" | "meeting" | "document" | "public";
}

// Represents a communication intention with associated actions and match score.
export interface MCICIntention {
  id: number;
  name: string;
  question: string;
  icon: string;
  matchScore: number; // 0-100% match for this specific profile
  riskLevel: 'low' | 'medium' | 'high';
  actions: MCICAction[];
}

// Represents the detailed, multi-faceted status of a profile.
export interface ProfileStatus {
  live: Record<string, { value: string; emoji: string }>;
  cognitive: Record<string, { value: string; emoji: string }>;
  social: Record<string, { value: string; emoji: string }>;
}

// The core, unified data model for a user profile.
export interface Profile {
  id: string;
  name: string;
  archetype: string;
  avatarUrl?: string; // Optional avatar image URL
  qpi: number; // Quantum Profile Index, 0-1
  status: ProfileStatus;
  intentions: MCICIntention[];
}
