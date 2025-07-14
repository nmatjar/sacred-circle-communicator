export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  relationship: "@Team" | "@Client" | "@Personal";
  role: string;
  department: string;
  profileCoder: string;
  lastSeen: Date;
  status: "available" | "busy" | "away" | "offline";
  cognitiveLoad: "low" | "medium" | "high";
  activity: string;
}

export interface DashboardMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  description: string;
  thresholds: {
    good: number;
    warning: number;
  };
}

export interface DashboardAlert {
  title: string;
  message: string;
  severity: "low" | "medium" | "high";
  timestamp: string;
}

export interface DashboardQuickAction {
  name: string;
  description: string;
  icon: string;
  action: string;
}

export interface DashboardConfig {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
  metrics: DashboardMetric[];
  alerts: DashboardAlert[];
  quickActions: DashboardQuickAction[];
  layout: DashboardWidget[];
}

export interface DashboardWidget {
  id: string;
  name: string;
  size: "small" | "medium" | "large" | "extra-large";
  position: { x: number; y: number; w: number; h: number };
  component: string;
  config?: Record<string, unknown>;
}
