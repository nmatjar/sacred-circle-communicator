import type { DashboardConfig } from "@/types/team";

export const dashboardConfigs: DashboardConfig[] = [
  {
    id: "team-overview",
    name: "Team Overview Dashboard",
    description: "Kompleksowy przegląd statusu zespołu, obciążenia kognitywnego i krytycznych ścieżek komunikacji",
    lastUpdated: "2025-01-14 19:30:00",
    metrics: [
      {
        name: "Dostępność Zespołu",
        value: 85,
        target: 90,
        unit: "%",
        description: "Procent członków zespołu dostępnych do komunikacji",
        thresholds: { good: 80, warning: 60 }
      },
      {
        name: "Średnie Obciążenie Kognitywne",
        value: 65,
        target: 70,
        unit: "%",
        description: "Średnie obciążenie kognitywne zespołu",
        thresholds: { good: 50, warning: 75 }
      },
      {
        name: "Czas Odpowiedzi",
        value: 25,
        target: 30,
        unit: "min",
        description: "Średni czas odpowiedzi na komunikację",
        thresholds: { good: 30, warning: 60 }
      }
    ],
    alerts: [
      {
        title: "Wysokie obciążenie w Engineering",
        message: "3 członków zespołu Engineering ma wysokie obciążenie kognitywne",
        severity: "medium",
        timestamp: "2025-01-14 19:15:00"
      }
    ],
    quickActions: [
      {
        name: "Sprawdź Dostępność",
        description: "Zobacz kto jest dostępny teraz",
        icon: "👥",
        action: "check-availability"
      },
      {
        name: "Analiza Obciążenia",
        description: "Przeanalizuj obciążenie zespołu",
        icon: "🧠",
        action: "analyze-load"
      },
      {
        name: "Krytyczne Ścieżki",
        description: "Pokaż krytyczne ścieżki komunikacji",
        icon: "🔗",
        action: "critical-paths"
      },
      {
        name: "Raport Zespołu",
        description: "Wygeneruj raport statusu",
        icon: "📊",
        action: "team-report"
      }
    ],
    layout: [
      {
        id: "team-sync-panel",
        name: "Team Synchronization Panel",
        size: "extra-large",
        position: { x: 0, y: 0, w: 8, h: 4 },
        component: "TeamSyncPanel",
        config: {
          showCognitiveLoad: true,
          showDepartments: true,
          showCriticalPath: true
        }
      },
      {
        id: "cognitive-analytics",
        name: "Cognitive Analytics Dashboard",
        size: "large",
        position: { x: 8, y: 0, w: 4, h: 4 },
        component: "CognitiveAnalytics",
        config: {
          showTrends: true,
          showPredictions: true,
          timeRange: "week"
        }
      },
      {
        id: "qpi-hub",
        name: "Quantum Presence Hub",
        size: "medium",
        position: { x: 0, y: 4, w: 6, h: 3 },
        component: "QuantumPresenceHub",
        config: {
          showMultiDimensional: true,
          showTeamOverview: true
        }
      },
      {
        id: "mcic-center",
        name: "MCIC-8/7 Intention Center",
        size: "medium",
        position: { x: 6, y: 4, w: 6, h: 3 },
        component: "MCICIntentionCenter",
        config: {
          showQuickActions: true,
          showContextualSuggestions: true
        }
      },
      {
        id: "ai-partnership",
        name: "AI Partnership Control",
        size: "small",
        position: { x: 0, y: 7, w: 4, h: 2 },
        component: "AIPartnershipControl",
        config: {
          showAutomationLevel: true,
          showEfficiencyMetrics: true
        }
      },
      {
        id: "temporal-intelligence",
        name: "Temporal Intelligence Center",
        size: "small",
        position: { x: 4, y: 7, w: 4, h: 2 },
        component: "TemporalIntelligence",
        config: {
          showCalendarIntegration: true,
          showOptimalTiming: true
        }
      },
      {
        id: "environmental-integration",
        name: "Environmental Integration Hub",
        size: "small",
        position: { x: 8, y: 7, w: 4, h: 2 },
        component: "EnvironmentalIntegration",
        config: {
          showWorkspaceStatus: true,
          showToolIntegrations: true
        }
      }
    ]
  },
  {
    id: "deep-work",
    name: "Deep Work Sanctuary",
    description: "Dla indywidualnych kontrybutorów - ochrona stanu skupienia i osobista produktywność",
    lastUpdated: "2025-01-14 19:25:00",
    metrics: [
      {
        name: "Czas Skupienia",
        value: 180,
        target: 240,
        unit: "min",
        description: "Dzienny czas głębokiej pracy bez przeszkód",
        thresholds: { good: 200, warning: 120 }
      },
      {
        name: "Efektywność Kognitywna",
        value: 88,
        target: 85,
        unit: "%",
        description: "Poziom efektywności podczas głębokiej pracy",
        thresholds: { good: 80, warning: 60 }
      }
    ],
    alerts: [],
    quickActions: [
      {
        name: "Tryb Skupienia",
        description: "Włącz tryb głębokiej pracy",
        icon: "🎯",
        action: "enable-focus-mode"
      },
      {
        name: "Blokuj Powiadomienia",
        description: "Wycisz wszystkie powiadomienia",
        icon: "🔕",
        action: "block-notifications"
      },
      {
        name: "Analiza Produktywności",
        description: "Zobacz wzorce produktywności",
        icon: "📈",
        action: "productivity-analysis"
      }
    ],
    layout: [
      {
        id: "qpi-hub-personal",
        name: "Personal Quantum Presence Hub",
        size: "large",
        position: { x: 0, y: 0, w: 6, h: 4 },
        component: "QuantumPresenceHub",
        config: {
          showPersonalOnly: true,
          showFocusProtection: true,
          showCognitiveState: true
        }
      },
      {
        id: "cognitive-analytics-personal",
        name: "Personal Cognitive Analytics",
        size: "medium",
        position: { x: 6, y: 0, w: 6, h: 4 },
        component: "CognitiveAnalytics",
        config: {
          showPersonalMetrics: true,
          showProductivityPatterns: true,
          showFocusTime: true
        }
      },
      {
        id: "contextual-communication",
        name: "Contextual Communication Stream",
        size: "medium",
        position: { x: 0, y: 4, w: 8, h: 3 },
        component: "ContextualCommunication",
        config: {
          showMinimalDistractions: true,
          showPriorityFiltering: true,
          showQuietHours: true
        }
      },
      {
        id: "profile-customization",
        name: "Profile Customization Studio",
        size: "small",
        position: { x: 8, y: 4, w: 4, h: 3 },
        component: "ProfileCustomization",
        config: {
          showQuickToggles: true,
          showFocusModes: true
        }
      },
      {
        id: "ai-partnership-minimal",
        name: "AI Partnership (Minimal)",
        size: "small",
        position: { x: 0, y: 7, w: 4, h: 2 },
        component: "AIPartnershipControl",
        config: {
          showMinimalInterface: true,
          showFocusAssistance: true
        }
      },
      {
        id: "temporal-personal",
        name: "Personal Time Management",
        size: "small",
        position: { x: 4, y: 7, w: 4, h: 2 },
        component: "TemporalIntelligence",
        config: {
          showPersonalSchedule: true,
          showDeepWorkBlocks: true
        }
      },
      {
        id: "environmental-minimal",
        name: "Workspace Status",
        size: "small",
        position: { x: 8, y: 7, w: 4, h: 2 },
        component: "EnvironmentalIntegration",
        config: {
          showMinimalStatus: true,
          showFocusEnvironment: true
        }
      }
    ]
  },
  {
    id: "collaboration",
    name: "Collaboration Catalyst",
    description: "Dla budujących relacje zawodowe - masywna matryca kontaktów i doskonałość w interakcjach",
    lastUpdated: "2025-01-14 19:20:00",
    metrics: [
      {
        name: "Aktywne Relacje",
        value: 47,
        target: 50,
        unit: "kontaktów",
        description: "Liczba aktywnych relacji zawodowych",
        thresholds: { good: 40, warning: 25 }
      },
      {
        name: "Jakość Interakcji",
        value: 92,
        target: 85,
        unit: "%",
        description: "Średnia jakość komunikacji z kontaktami",
        thresholds: { good: 80, warning: 60 }
      },
      {
        name: "Czas Odpowiedzi",
        value: 15,
        target: 20,
        unit: "min",
        description: "Średni czas odpowiedzi na wiadomości",
        thresholds: { good: 20, warning: 40 }
      }
    ],
    alerts: [
      {
        title: "Nowe możliwości networkingu",
        message: "5 nowych kontaktów w Twojej sieci może być zainteresowanych współpracą",
        severity: "low",
        timestamp: "2025-01-14 19:00:00"
      }
    ],
    quickActions: [
      {
        name: "Analiza Sieci",
        description: "Przeanalizuj swoją sieć kontaktów",
        icon: "🕸️",
        action: "network-analysis"
      },
      {
        name: "Sugestie Kontaktów",
        description: "Zobacz sugerowane kontakty",
        icon: "🤝",
        action: "contact-suggestions"
      },
      {
        name: "Planuj Spotkania",
        description: "Zaplanuj spotkania z kontaktami",
        icon: "📅",
        action: "schedule-meetings"
      },
      {
        name: "Raport Relacji",
        description: "Wygeneruj raport relacji",
        icon: "📊",
        action: "relationship-report"
      }
    ],
    layout: [
      {
        id: "smart-contact-matrix",
        name: "Smart Contact Matrix",
        size: "extra-large",
        position: { x: 0, y: 0, w: 8, h: 5 },
        component: "SmartContactMatrix",
        config: {
          showAllContacts: true,
          showRelationshipStrength: true,
          showInteractionHistory: true,
          showNetworkAnalysis: true
        }
      },
      {
        id: "mcic-interaction-center",
        name: "MCIC-8/7 Interaction Excellence",
        size: "large",
        position: { x: 8, y: 0, w: 4, h: 5 },
        component: "MCICIntentionCenter",
        config: {
          showAdvancedActions: true,
          showRelationshipContext: true,
          showCommunicationPatterns: true
        }
      },
      {
        id: "contextual-communication-full",
        name: "Full Communication Stream",
        size: "large",
        position: { x: 0, y: 5, w: 6, h: 3 },
        component: "ContextualCommunication",
        config: {
          showAllChannels: true,
          showRichContext: true,
          showInteractionSuggestions: true
        }
      },
      {
        id: "cognitive-social",
        name: "Social Cognitive Analytics",
        size: "medium",
        position: { x: 6, y: 5, w: 6, h: 3 },
        component: "CognitiveAnalytics",
        config: {
          showSocialMetrics: true,
          showNetworkHealth: true,
          showCollaborationEffectiveness: true
        }
      },
      {
        id: "ai-relationship",
        name: "AI Relationship Assistant",
        size: "small",
        position: { x: 0, y: 8, w: 4, h: 2 },
        component: "AIPartnershipControl",
        config: {
          showRelationshipInsights: true,
          showCommunicationSuggestions: true
        }
      },
      {
        id: "temporal-coordination",
        name: "Team Coordination Hub",
        size: "small",
        position: { x: 4, y: 8, w: 4, h: 2 },
        component: "TemporalIntelligence",
        config: {
          showTeamAvailability: true,
          showMeetingOptimization: true
        }
      },
      {
        id: "environmental-collaboration",
        name: "Collaboration Environment",
        size: "small",
        position: { x: 8, y: 8, w: 4, h: 2 },
        component: "EnvironmentalIntegration",
        config: {
          showCollaborationTools: true,
          showSharedWorkspaces: true
        }
      }
    ]
  }
];

// Mapowanie komponentów do ich opisów
export const componentDescriptions = {
  "QuantumPresenceHub": "Wielowymiarowy przegląd obecności zawodowej z 5-wymiarową świadomością",
  "MCICIntentionCenter": "Launcher interakcji kontekstowych opartych na 8 podstawowych intencjach",
  "SmartContactMatrix": "Inteligentne zarządzanie relacjami z analizą sieci kontaktów",
  "CognitiveAnalytics": "Inteligencja produktywności z analizą wzorców kognitywnych",
  "TeamSyncPanel": "Przegląd inteligencji zbiorowej zespołu w czasie rzeczywistym",
  "AIPartnershipControl": "Dynamiczne zarządzanie automatyzacją i asystentami AI",
  "TemporalIntelligence": "Orkiestracja zawodowa świadoma czasu z optymalizacją harmonogramów",
  "EnvironmentalIntegration": "Łączność z inteligentnym workspace i narzędziami",
  "ContextualCommunication": "Inteligentne zarządzanie strumieniem wiadomości",
  "ProfileCustomization": "Dynamiczne zarządzanie ProfileCoder z szybkimi przełącznikami"
};
