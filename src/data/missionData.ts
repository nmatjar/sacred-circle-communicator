import type { Mission, MissionInsight, MissionProgress, TeamCapacity } from '../types/mission';

export const currentMission: Mission = {
  id: 'mission-2025-q1',
  title: 'OCTO Platform Launch',
  description: 'Uruchomienie pierwszej wersji platformy OCTO do komunikacji zespołowej opartej na profilach kognitywnych',
  vision: 'Rewolucja w komunikacji zespołowej poprzez inteligentne dopasowanie stylów komunikacji i optymalizację współpracy',
  startDate: '2025-01-01',
  targetDate: '2025-03-31',
  objectives: [
    {
      id: 'obj-1',
      title: 'Implementacja ProfileCoder 3.3',
      description: 'Pełna implementacja systemu profilowania kognitywnego zgodnie ze specyfikacją 3.3',
      category: 'engineering',
      priority: 'critical',
      progress: 75,
      assignedTo: ['alex-dev', 'sarah-arch'],
      dependencies: [],
      blockers: ['Brak finalnej specyfikacji algorytmu QPI'],
      estimatedHours: 120,
      actualHours: 95,
      deadline: '2025-02-15',
      status: 'in_progress'
    },
    {
      id: 'obj-2',
      title: 'MCIC Interface Design',
      description: 'Zaprojektowanie i implementacja interfejsu Multi-Channel Intention Communication',
      category: 'design',
      priority: 'high',
      progress: 60,
      assignedTo: ['maria-ux', 'alex-dev'],
      dependencies: ['obj-1'],
      blockers: [],
      estimatedHours: 80,
      actualHours: 45,
      deadline: '2025-02-28',
      status: 'in_progress'
    },
    {
      id: 'obj-3',
      title: 'Dashboard Analytics',
      description: 'System analityki zespołowej z metrykami QPI i efektywności komunikacji',
      category: 'product',
      priority: 'high',
      progress: 30,
      assignedTo: ['david-pm', 'sarah-arch'],
      dependencies: ['obj-1'],
      blockers: [],
      estimatedHours: 100,
      actualHours: 25,
      deadline: '2025-03-15',
      status: 'in_progress'
    },
    {
      id: 'obj-4',
      title: 'Security & Privacy Framework',
      description: 'Implementacja zabezpieczeń i ochrony prywatności zgodnie z GDPR',
      category: 'engineering',
      priority: 'critical',
      progress: 45,
      assignedTo: ['sarah-arch', 'tom-sec'],
      dependencies: [],
      blockers: [],
      estimatedHours: 90,
      actualHours: 40,
      deadline: '2025-02-20',
      status: 'in_progress'
    },
    {
      id: 'obj-5',
      title: 'User Research & Testing',
      description: 'Badania użytkowników i testy użyteczności platformy',
      category: 'research',
      priority: 'medium',
      progress: 20,
      assignedTo: ['lisa-research'],
      dependencies: ['obj-2'],
      blockers: ['Oczekiwanie na prototyp'],
      estimatedHours: 60,
      actualHours: 12,
      deadline: '2025-03-10',
      status: 'not_started'
    },
    {
      id: 'obj-6',
      title: 'Go-to-Market Strategy',
      description: 'Strategia wprowadzenia produktu na rynek i plan marketingowy',
      category: 'strategy',
      priority: 'medium',
      progress: 85,
      assignedTo: ['david-pm', 'anna-marketing'],
      dependencies: [],
      blockers: [],
      estimatedHours: 50,
      actualHours: 42,
      deadline: '2025-02-10',
      status: 'review'
    }
  ],
  keyMetrics: [
    {
      name: 'User Adoption Rate',
      current: 0,
      target: 1000,
      unit: 'active users'
    },
    {
      name: 'Communication Efficiency',
      current: 0,
      target: 85,
      unit: '%'
    },
    {
      name: 'Team QPI Average',
      current: 0.72,
      target: 0.85,
      unit: 'score'
    },
    {
      name: 'Platform Uptime',
      current: 0,
      target: 99.9,
      unit: '%'
    }
  ],
  riskFactors: [
    {
      description: 'Opóźnienia w implementacji ProfileCoder mogą wpłynąć na cały timeline',
      probability: 0.3,
      impact: 0.8,
      mitigation: 'Dodatkowe zasoby developerskie, podział na mniejsze iteracje'
    },
    {
      description: 'Konkurencja może wypuścić podobne rozwiązanie',
      probability: 0.4,
      impact: 0.6,
      mitigation: 'Przyspieszenie MVP, focus na unikalne features'
    },
    {
      description: 'Problemy z adopcją użytkowników',
      probability: 0.5,
      impact: 0.7,
      mitigation: 'Intensywne user research, iteracyjne ulepszenia UX'
    }
  ]
};

export const teamCapacities: TeamCapacity[] = [
  {
    profileId: 'alex-dev',
    availableHours: 35,
    cognitiveLoad: 0.8,
    energyLevel: 0.9,
    collaborationMode: 'OFFER',
    expertise: ['react', 'typescript', 'ai', 'frontend'],
    currentFocus: ['obj-1', 'obj-2']
  },
  {
    profileId: 'sarah-arch',
    availableHours: 40,
    cognitiveLoad: 0.6,
    energyLevel: 0.8,
    collaborationMode: 'SELECTIVE',
    expertise: ['architecture', 'security', 'backend', 'scalability'],
    currentFocus: ['obj-1', 'obj-3', 'obj-4']
  },
  {
    profileId: 'maria-ux',
    availableHours: 30,
    cognitiveLoad: 0.4,
    energyLevel: 0.9,
    collaborationMode: 'OPEN',
    expertise: ['ux', 'design', 'prototyping', 'user-research'],
    currentFocus: ['obj-2']
  },
  {
    profileId: 'david-pm',
    availableHours: 38,
    cognitiveLoad: 0.7,
    energyLevel: 0.7,
    collaborationMode: 'OPEN',
    expertise: ['product-management', 'strategy', 'analytics'],
    currentFocus: ['obj-3', 'obj-6']
  },
  {
    profileId: 'lisa-research',
    availableHours: 32,
    cognitiveLoad: 0.3,
    energyLevel: 0.8,
    collaborationMode: 'SELECTIVE',
    expertise: ['user-research', 'data-analysis', 'psychology'],
    currentFocus: ['obj-5']
  },
  {
    profileId: 'tom-sec',
    availableHours: 25,
    cognitiveLoad: 0.9,
    energyLevel: 0.6,
    collaborationMode: 'CLOSED',
    expertise: ['security', 'compliance', 'privacy', 'audit'],
    currentFocus: ['obj-4']
  },
  {
    profileId: 'anna-marketing',
    availableHours: 35,
    cognitiveLoad: 0.5,
    energyLevel: 0.9,
    collaborationMode: 'OPEN',
    expertise: ['marketing', 'content', 'social-media', 'branding'],
    currentFocus: ['obj-6']
  }
];

export const missionProgress: MissionProgress = {
  overall: 52,
  byCategory: {
    engineering: 60,
    design: 60,
    product: 30,
    strategy: 85,
    research: 20,
    operations: 0
  },
  byPriority: {
    critical: 60,
    high: 45,
    medium: 52,
    low: 0
  },
  timeline: {
    planned: 45, // 45% czasu minęło
    actual: 52,  // 52% pracy wykonane
    projected: 78 // przewidywane ukończenie na 78% do deadline
  },
  teamEfficiency: 0.73,
  riskScore: 0.35,
  momentum: 0.15 // lekkie przyspieszenie
};

export const missionInsights: MissionInsight[] = [
  {
    type: 'opportunity',
    title: 'Synergy w zespole Design-Engineering',
    description: 'Maria (UX) i Alex (Dev) mają komplementarne style pracy i wysoką energię. Mogą przyspieszyć obj-2.',
    actionable: true,
    urgency: 'medium',
    affectedObjectives: ['obj-2'],
    suggestedActions: [
      'Zaplanuj wspólne sesje design-dev',
      'Zwiększ częstotliwość synchronizacji',
      'Rozważ pair programming dla komponentów UI'
    ]
  },
  {
    type: 'risk',
    title: 'Przeciążenie Sarah (Architecture)',
    description: 'Sarah ma wysokie obciążenie kognitywne (0.8) i pracuje nad 3 krytycznymi celami jednocześnie.',
    actionable: true,
    urgency: 'high',
    affectedObjectives: ['obj-1', 'obj-3', 'obj-4'],
    suggestedActions: [
      'Przenieś część obj-3 na Davida',
      'Dodaj wsparcie dla obj-4 (Tom może przejąć więcej)',
      'Zaplanuj dni focus dla Sarah'
    ]
  },
  {
    type: 'blocker',
    title: 'Zależność Research od Design',
    description: 'Lisa czeka na prototyp od Marii, co blokuje rozpoczęcie user research.',
    actionable: true,
    urgency: 'medium',
    affectedObjectives: ['obj-5'],
    suggestedActions: [
      'Stwórz low-fi prototyp dla wczesnych testów',
      'Rozpocznij research konceptualny bez prototypu',
      'Zaplanuj iteracyjne podejście do testowania'
    ]
  },
  {
    type: 'suggestion',
    title: 'Wykorzystaj wysoką energię zespołu',
    description: 'Większość zespołu ma wysoką energię (avg 0.8). To dobry moment na sprint finishowy.',
    actionable: true,
    urgency: 'low',
    affectedObjectives: ['obj-1', 'obj-2', 'obj-6'],
    suggestedActions: [
      'Zaplanuj 2-tygodniowy sprint intensywny',
      'Zorganizuj hackathon dla obj-1',
      'Wykorzystaj momentum dla obj-6'
    ]
  },
  {
    type: 'synergy',
    title: 'Cross-pollination Strategy-Product',
    description: 'David pracuje nad strategią i analytics - może połączyć insights z obu obszarów.',
    actionable: true,
    urgency: 'low',
    affectedObjectives: ['obj-3', 'obj-6'],
    suggestedActions: [
      'Stwórz unified dashboard dla strategy + analytics',
      'Wykorzystaj dane z obj-6 dla obj-3',
      'Zaplanuj wspólne sesje strategiczne'
    ]
  }
];

// Funkcje pomocnicze do analizy misji
export const calculateMissionHealth = (mission: Mission, progress: MissionProgress): {
  score: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  factors: string[];
} => {
  const factors: string[] = [];
  let score = 0;

  // Timeline health (30%)
  const timelineHealth = progress.timeline.actual / progress.timeline.planned;
  if (timelineHealth > 1.1) {
    score += 30;
    factors.push('Wyprzedzamy harmonogram');
  } else if (timelineHealth > 0.9) {
    score += 25;
    factors.push('Zgodnie z harmonogramem');
  } else if (timelineHealth > 0.7) {
    score += 15;
    factors.push('Lekkie opóźnienia');
  } else {
    score += 5;
    factors.push('Znaczące opóźnienia');
  }

  // Team efficiency (25%)
  if (progress.teamEfficiency > 0.8) {
    score += 25;
    factors.push('Wysoka efektywność zespołu');
  } else if (progress.teamEfficiency > 0.6) {
    score += 20;
    factors.push('Dobra efektywność zespołu');
  } else if (progress.teamEfficiency > 0.4) {
    score += 10;
    factors.push('Średnia efektywność zespołu');
  } else {
    score += 5;
    factors.push('Niska efektywność zespołu');
  }

  // Risk management (20%)
  if (progress.riskScore < 0.3) {
    score += 20;
    factors.push('Niskie ryzyko');
  } else if (progress.riskScore < 0.5) {
    score += 15;
    factors.push('Umiarkowane ryzyko');
  } else if (progress.riskScore < 0.7) {
    score += 10;
    factors.push('Podwyższone ryzyko');
  } else {
    score += 5;
    factors.push('Wysokie ryzyko');
  }

  // Momentum (15%)
  if (progress.momentum > 0.1) {
    score += 15;
    factors.push('Pozytywny momentum');
  } else if (progress.momentum > -0.1) {
    score += 10;
    factors.push('Stabilny momentum');
  } else {
    score += 5;
    factors.push('Spadający momentum');
  }

  // Critical objectives (10%)
  const criticalObjectives = mission.objectives.filter(obj => obj.priority === 'critical');
  const criticalProgress = criticalObjectives.reduce((sum, obj) => sum + obj.progress, 0) / criticalObjectives.length;
  
  if (criticalProgress > 70) {
    score += 10;
    factors.push('Krytyczne cele na dobrej drodze');
  } else if (criticalProgress > 50) {
    score += 7;
    factors.push('Krytyczne cele w trakcie');
  } else {
    score += 3;
    factors.push('Krytyczne cele wymagają uwagi');
  }

  let status: 'excellent' | 'good' | 'warning' | 'critical';
  if (score >= 85) status = 'excellent';
  else if (score >= 70) status = 'good';
  else if (score >= 50) status = 'warning';
  else status = 'critical';

  return { score, status, factors };
};

export const getTeamRecommendations = (capacities: TeamCapacity[], insights: MissionInsight[]): string[] => {
  const recommendations: string[] = [];
  
  // Analiza obciążenia zespołu
  const overloadedMembers = capacities.filter(c => c.cognitiveLoad > 0.8);
  if (overloadedMembers.length > 0) {
    recommendations.push(`Rozważ redistrybucję zadań dla przeciążonych członków: ${overloadedMembers.map(m => m.profileId).join(', ')}`);
  }

  // Analiza energii zespołu
  const lowEnergyMembers = capacities.filter(c => c.energyLevel < 0.6);
  if (lowEnergyMembers.length > 0) {
    recommendations.push(`Zaplanuj wsparcie dla członków z niską energią: ${lowEnergyMembers.map(m => m.profileId).join(', ')}`);
  }

  // Analiza trybu współpracy
  const openCollaborators = capacities.filter(c => c.collaborationMode === 'OPEN').length;
  const closedCollaborators = capacities.filter(c => c.collaborationMode === 'CLOSED').length;
  
  if (openCollaborators > closedCollaborators * 2) {
    recommendations.push('Wykorzystaj wysoką otwartość zespołu na współpracę - zaplanuj sesje brainstormingowe');
  }

  // Dodaj rekomendacje z insights
  const actionableInsights = insights.filter(i => i.actionable && i.urgency !== 'low');
  actionableInsights.forEach(insight => {
    recommendations.push(`${insight.title}: ${insight.suggestedActions[0]}`);
  });

  return recommendations.slice(0, 5); // Maksymalnie 5 rekomendacji
};
