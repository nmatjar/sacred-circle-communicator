import type { Profile } from "@/types/profile";
import type { TeamMember } from "@/types/team";
import { teamProfiles } from "./teamProfiles";

// Funkcja do parsowania ProfileCoder i konwersji na format Profile
function parseProfileCoder(profileCoder: string, teamMember: TeamMember): Profile["status"] {
  // Podstawowe mapowanie statusów na podstawie TeamMember
  const statusMapping = {
    available: "A (Available)",
    busy: "B (Busy)", 
    away: "A (Away)",
    offline: "O (Offline)"
  };

  const cognitiveLoadMapping = {
    low: "L (Low)",
    medium: "M (Medium)",
    high: "H (High)"
  };

  const activityMapping: Record<string, string> = {
    collaboration: "Collaboration",
    deep_work: "Deep Work",
    meeting: "Meeting",
    development: "Development",
    analysis: "Analysis",
    creative_work: "Creative Work",
    planning: "Planning",
    support: "Support",
    urgent_work: "Urgent Work",
    client_work: "Client Work",
    recruiting: "Recruiting",
    testing: "Testing",
    coordination: "Coordination",
    monitoring: "Monitoring",
    strategy: "Strategy",
    review: "Review",
    learning: "Learning"
  };

  return {
    live: {
      status: { 
        value: statusMapping[teamMember.status] || "A (Available)", 
        emoji: teamMember.status === "available" ? "🟢" : teamMember.status === "busy" ? "🟡" : teamMember.status === "away" ? "🟠" : "🔴" 
      },
      activity: { 
        value: activityMapping[teamMember.activity] || "Work", 
        emoji: "💼" 
      },
      interaction: { 
        value: "ASYNC", 
        emoji: "📨" 
      },
      response: { 
        value: "<30min", 
        emoji: "⏱️" 
      },
    },
    cognitive: {
      load: { 
        value: cognitiveLoadMapping[teamMember.cognitiveLoad] || "M (Medium)", 
        emoji: "🧠" 
      },
      energy: { 
        value: teamMember.cognitiveLoad === "high" ? "L (Low)" : "H (High)", 
        emoji: "🔋" 
      },
    },
    social: {
      mode: { 
        value: teamMember.status === "busy" ? "FOCUSED" : "OPEN", 
        emoji: teamMember.status === "busy" ? "🎯" : "🤝" 
      },
      bandwidth: { 
        value: teamMember.cognitiveLoad === "high" ? "LOW" : teamMember.cognitiveLoad === "medium" ? "MEDIUM" : "HIGH", 
        emoji: "⚡️" 
      },
    },
  };
}

// Generowanie intencji MCIC na podstawie roli i działu
function generateIntentions(teamMember: TeamMember) {
  const baseIntentions = [
    {
      id: 1,
      name: "PODZIEL SIĘ",
      question: "Chcę coś tej osobie przekazać",
      icon: "Share",
      matchScore: 85,
      riskLevel: "low" as const,
      actions: [
        {
          id: "1.1",
          name: "Wyślij Update",
          template: `Wyślij update dotyczący [PROJEKTU] z ${teamMember.department}`,
          example: `Wyślij update o postępie w projekcie ${teamMember.department.toLowerCase()}`,
          estimatedImpact: 75,
          executionTime: 5,
          channel: "chat" as const
        },
        {
          id: "1.2",
          name: "Przekaż Informację",
          template: `Podziel się informacją z obszaru ${teamMember.role}`,
          example: `Przekaż kluczowe informacje z perspektywy ${teamMember.role}`,
          estimatedImpact: 80,
          executionTime: 8,
          channel: "email" as const
        }
      ]
    },
    {
      id: 2,
      name: "ZAPYTAJ",
      question: "Potrzebuję czegoś od tej osoby",
      icon: "MessageCircleQuestion",
      matchScore: 78,
      riskLevel: "medium" as const,
      actions: [
        {
          id: "2.1",
          name: "O Ekspertyzę",
          template: `Zapytaj o ekspertyzę w obszarze ${teamMember.role}`,
          example: `Poproś o opinię ekspercką dotyczącą ${teamMember.department.toLowerCase()}`,
          estimatedImpact: 85,
          executionTime: 10,
          channel: "chat" as const
        },
        {
          id: "2.2",
          name: "O Status",
          template: "Zapytaj o status bieżących zadań",
          example: "Sprawdź postęp w aktualnych projektach",
          estimatedImpact: 70,
          executionTime: 3,
          channel: "chat" as const
        }
      ]
    },
    {
      id: 3,
      name: "ZAPROŚ",
      question: "Chcę, żeby do czegoś dołączyła",
      icon: "UserPlus",
      matchScore: 82,
      riskLevel: "low" as const,
      actions: [
        {
          id: "3.1",
          name: "Na Spotkanie",
          template: `Zaproś na spotkanie dotyczące ${teamMember.department}`,
          example: `Zaproś na spotkanie zespołu ${teamMember.department}`,
          estimatedImpact: 80,
          executionTime: 5,
          channel: "meeting" as const
        },
        {
          id: "3.2",
          name: "Do Projektu",
          template: `Zaproś do współpracy nad projektem z ${teamMember.department}`,
          example: `Zaproponuj współpracę w roli ${teamMember.role}`,
          estimatedImpact: 90,
          executionTime: 15,
          channel: "meeting" as const
        }
      ]
    },
    {
      id: 4,
      name: "ZAPROPONUJ",
      question: "Mam pomysł lub sugestię",
      icon: "Lightbulb",
      matchScore: 75,
      riskLevel: "medium" as const,
      actions: [
        {
          id: "4.1",
          name: "Usprawnienie",
          template: `Zaproponuj usprawnienie w procesach ${teamMember.department}`,
          example: `Zasugeruj optymalizację w obszarze ${teamMember.role}`,
          estimatedImpact: 85,
          executionTime: 12,
          channel: "document" as const
        }
      ]
    },
    {
      id: 5,
      name: "ZSYNCHRONIZUJ SIĘ",
      question: "Chcę sprawdzić, czy jesteśmy na tej samej stronie",
      icon: "RefreshCw",
      matchScore: 88,
      riskLevel: "low" as const,
      actions: [
        {
          id: "5.1",
          name: "Sprawdź Alignment",
          template: `Potwierdź zgodność w kwestiach ${teamMember.department}`,
          example: `Sprawdź czy jesteśmy zgodni co do kierunku w ${teamMember.department.toLowerCase()}`,
          estimatedImpact: 80,
          executionTime: 8,
          channel: "chat" as const
        }
      ]
    },
    {
      id: 6,
      name: "WESPRZYJ",
      question: "Chcę zaoferować pomoc lub docenić",
      icon: "Heart",
      matchScore: 70,
      riskLevel: "low" as const,
      actions: [
        {
          id: "6.1",
          name: "Zaoferuj Pomoc",
          template: `Zaoferuj wsparcie w obszarze ${teamMember.role}`,
          example: `Zaproponuj pomoc w zadaniach ${teamMember.department.toLowerCase()}`,
          estimatedImpact: 75,
          executionTime: 5,
          channel: "chat" as const
        }
      ]
    },
    {
      id: 7,
      name: "ZGŁOŚ PROBLEM",
      question: "Coś wymaga jej uwagi",
      icon: "AlertTriangle",
      matchScore: 85,
      riskLevel: "high" as const,
      actions: [
        {
          id: "7.1",
          name: "Zgłoś Bloker",
          template: `Zgłoś problem blokujący pracę w ${teamMember.department}`,
          example: `Poinformuj o blokadzie w procesach ${teamMember.department.toLowerCase()}`,
          estimatedImpact: 95,
          executionTime: 10,
          channel: "chat" as const
        }
      ]
    },
    {
      id: 8,
      name: "NAWIĄŻ KONTAKT",
      question: "Chcę zainicjować otwartą interakcję",
      icon: "MessageCircle",
      matchScore: 65,
      riskLevel: "low" as const,
      actions: [
        {
          id: "8.1",
          name: "Rozpocznij Rozmowę",
          template: `Nawiąż rozmowę o ${teamMember.department}`,
          example: `Rozpocznij dyskusję o trendach w ${teamMember.department.toLowerCase()}`,
          estimatedImpact: 70,
          executionTime: 5,
          channel: "chat" as const
        }
      ]
    }
  ];

  return baseIntentions;
}

// Konwersja TeamMember na Profile
function convertTeamMemberToProfile(teamMember: TeamMember): Profile {
  return {
    id: teamMember.id,
    name: teamMember.name,
    archetype: `${teamMember.role} (${teamMember.department})`,
    qpi: Math.random() * 0.3 + 0.7, // QPI między 0.7-1.0
    status: parseProfileCoder(teamMember.profileCoder, teamMember),
    intentions: generateIntentions(teamMember)
  };
}

// Eksport przekonwertowanych profili
export const convertedTeamProfiles: Profile[] = teamProfiles.map(convertTeamMemberToProfile);
