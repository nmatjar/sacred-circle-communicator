export interface MissionObjective {
  id: string;
  title: string;
  description: string;
  category: 'strategy' | 'product' | 'engineering' | 'design' | 'research' | 'operations';
  priority: 'critical' | 'high' | 'medium' | 'low';
  progress: number; // 0-100
  assignedTo: string[]; // profile IDs
  dependencies: string[]; // other objective IDs
  blockers: string[];
  estimatedHours: number;
  actualHours: number;
  deadline: string;
  status: 'not_started' | 'in_progress' | 'blocked' | 'review' | 'completed';
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  vision: string;
  startDate: string;
  targetDate: string;
  objectives: MissionObjective[];
  keyMetrics: {
    name: string;
    current: number;
    target: number;
    unit: string;
  }[];
  riskFactors: {
    description: string;
    probability: number; // 0-1
    impact: number; // 0-1
    mitigation: string;
  }[];
}

export interface TeamCapacity {
  profileId: string;
  availableHours: number;
  cognitiveLoad: number; // 0-1
  energyLevel: number; // 0-1
  collaborationMode: string;
  expertise: string[];
  currentFocus: string[];
}

export interface MissionInsight {
  type: 'opportunity' | 'risk' | 'suggestion' | 'blocker' | 'synergy';
  title: string;
  description: string;
  actionable: boolean;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  affectedObjectives: string[];
  suggestedActions: string[];
}

export interface MissionProgress {
  overall: number; // 0-100
  byCategory: Record<string, number>;
  byPriority: Record<string, number>;
  timeline: {
    planned: number;
    actual: number;
    projected: number;
  };
  teamEfficiency: number; // 0-1
  riskScore: number; // 0-1
  momentum: number; // -1 to 1 (negative = slowing down, positive = accelerating)
}
