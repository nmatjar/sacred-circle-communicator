import type { SacredStatus, SacredProfile } from '@/types/sacred';

// Kompatybilność elementalna - bazuje na tradycyjnych relacjach elementów
const ELEMENTAL_COMPATIBILITY = {
  'Earth': { 'Water': 0.96, 'Earth': 0.88, 'Fire': 0.45, 'Air': 0.62 },
  'Water': { 'Earth': 0.96, 'Water': 0.92, 'Fire': 0.38, 'Air': 0.71 },
  'Fire': { 'Air': 0.94, 'Fire': 0.85, 'Earth': 0.45, 'Water': 0.38 },
  'Air': { 'Fire': 0.94, 'Air': 0.89, 'Water': 0.71, 'Earth': 0.62 }
};

// Kompatybilność praktyk duchowych
const PRACTICE_COMPATIBILITY: Record<string, Record<string, number>> = {
  'Meditation': { 'Meditation': 0.95, 'Ceremony': 0.82, 'Healing': 0.78, 'Teaching': 0.65, 'Creating': 0.55, 'Journeying': 0.72, 'Gathering': 0.68, 'Resting': 0.85 },
  'Ceremony': { 'Ceremony': 0.96, 'Meditation': 0.82, 'Healing': 0.89, 'Teaching': 0.78, 'Journeying': 0.76, 'Creating': 0.61, 'Gathering': 0.85, 'Resting': 0.45 },
  'Healing': { 'Healing': 0.94, 'Ceremony': 0.89, 'Meditation': 0.78, 'Teaching': 0.72, 'Journeying': 0.68, 'Creating': 0.58, 'Gathering': 0.76, 'Resting': 0.65 },
  'Teaching': { 'Teaching': 0.87, 'Meditation': 0.65, 'Ceremony': 0.78, 'Healing': 0.72, 'Creating': 0.79, 'Journeying': 0.55, 'Gathering': 0.82, 'Resting': 0.48 },
  'Creating': { 'Creating': 0.87, 'Teaching': 0.79, 'Meditation': 0.55, 'Ceremony': 0.61, 'Healing': 0.58, 'Journeying': 0.52, 'Gathering': 0.68, 'Resting': 0.72 },
  'Journeying': { 'Journeying': 0.91, 'Meditation': 0.72, 'Ceremony': 0.76, 'Healing': 0.68, 'Teaching': 0.55, 'Creating': 0.52, 'Gathering': 0.65, 'Resting': 0.58 },
  'Gathering': { 'Gathering': 0.93, 'Ceremony': 0.85, 'Teaching': 0.82, 'Healing': 0.76, 'Meditation': 0.68, 'Creating': 0.68, 'Journeying': 0.65, 'Resting': 0.55 },
  'Resting': { 'Resting': 0.88, 'Meditation': 0.85, 'Healing': 0.65, 'Creating': 0.72, 'Journeying': 0.58, 'Teaching': 0.48, 'Ceremony': 0.45, 'Gathering': 0.55 }
};

// Wpływ faz księżyca na komunikację
const LUNAR_COMMUNICATION_BOOST = {
  'New': { 'seek_guidance': 1.3, 'connect_souls': 1.2, 'share_wisdom': 0.8 },
  'Waxing': { 'exchange_gifts': 1.4, 'sync_energies': 1.3, 'invite_ceremony': 1.2 },
  'Full': { 'offer_healing': 1.5, 'invite_ceremony': 1.4, 'sync_energies': 1.3 },
  'Waning': { 'address_discord': 1.4, 'share_wisdom': 1.3, 'seek_guidance': 1.2 }
};

// Analiza dostępności na podstawie ochrony energetycznej
const AVAILABILITY_SCORES: Record<string, number> = {
  'Otwarta': 1.0,
  'Łagodne Granice': 0.8,
  'Silne Granice': 0.5,
  'Zamknięta': 0.2
};

export interface VibrationalCompatibility {
  overall: number;
  elemental: number;
  practice: number;
  lunar: number;
  availability: number;
  recommendations: string[];
}

export function analyzeVibrationalCompatibility(
  user1: SacredStatus,
  user2: SacredStatus
): VibrationalCompatibility {
  // Kompatybilność elementalna
  const elementalScore = ELEMENTAL_COMPATIBILITY[user1.energetic.element.value]?.[user2.energetic.element.value] || 0.5;
  
  // Kompatybilność praktyk
  const practiceScore = PRACTICE_COMPATIBILITY[user1.energetic.practice.value]?.[user2.energetic.practice.value] || 0.5;
  
  // Synchronizacja księżycowa (bonus jeśli obie osoby są w tej samej fazie)
  const lunarScore = user1.lunar.phase.value === user2.lunar.phase.value ? 1.2 : 0.9;
  
  // Dostępność (średnia z obu użytkowników)
  const availability1 = AVAILABILITY_SCORES[user1.energetic.availability.value] || 0.5;
  const availability2 = AVAILABILITY_SCORES[user2.energetic.availability.value] || 0.5;
  const availabilityScore = (availability1 + availability2) / 2;
  
  // Ogólna kompatybilność (ważona średnia)
  const overall = (
    elementalScore * 0.3 +
    practiceScore * 0.3 +
    lunarScore * 0.2 +
    availabilityScore * 0.2
  );
  
  // Generowanie rekomendacji
  const recommendations: string[] = [];
  
  if (elementalScore > 0.8) {
    recommendations.push(`Doskonała harmonia elementalna ${user1.energetic.element.emoji}${user2.energetic.element.emoji}`);
  }
  
  if (practiceScore > 0.8) {
    recommendations.push(`Wspólne praktyki duchowe wzmocnią waszą więź`);
  }
  
  if (user1.lunar.phase.value === user2.lunar.phase.value) {
    recommendations.push(`Synchronizacja księżycowa ${user1.lunar.phase.emoji} - idealny moment na połączenie`);
  }
  
  if (availabilityScore < 0.6) {
    recommendations.push(`Jedna z osób potrzebuje więcej przestrzeni energetycznej`);
  }
  
  return {
    overall,
    elemental: elementalScore,
    practice: practiceScore,
    lunar: lunarScore,
    availability: availabilityScore,
    recommendations
  };
}

export function getOptimalCommunicationTime(status: SacredStatus): string[] {
  const suggestions: string[] = [];
  const currentPhase = status.lunar.phase.value;
  const element = status.energetic.element.value;
  
  // Sugestie na podstawie fazy księżyca
  switch (currentPhase) {
    case 'New':
      suggestions.push('🌑 Nów - idealny czas na nowe początki i szukanie przewodnictwa');
      break;
    case 'Waxing':
      suggestions.push('🌒 Przybywający - energia rośnie, dobry moment na wymianę darów');
      break;
    case 'Full':
      suggestions.push('🌕 Pełnia - szczyt energii, najlepszy czas na uzdrawianie i ceremonie');
      break;
    case 'Waning':
      suggestions.push('🌘 Ubywający - czas refleksji, rozwiązywania konfliktów i dzielenia mądrości');
      break;
  }
  
  // Sugestie na podstawie elementu
  switch (element) {
    case 'Earth':
      suggestions.push('🌍 Ziemia - najlepsza komunikacja rano i wieczorem, w kontakcie z naturą');
      break;
    case 'Water':
      suggestions.push('💧 Woda - optymalne momenty przy wodzie, podczas deszczu lub o świcie');
      break;
    case 'Fire':
      suggestions.push('🔥 Ogień - energia szczytuje w południe i przy ognisku');
      break;
    case 'Air':
      suggestions.push('💨 Powietrze - najlepsza komunikacja na świeżym powietrzu, podczas wiatru');
      break;
  }
  
  return suggestions;
}

export function suggestOptimalIntention(status: SacredStatus): string[] {
  const suggestions: string[] = [];
  const phase = status.lunar.phase.value;
  const practice = status.energetic.practice.value;
  const availability = status.energetic.availability.value;
  
  // Sugestie na podstawie fazy księżyca
  const lunarBoosts = LUNAR_COMMUNICATION_BOOST[phase];
  if (lunarBoosts) {
    const topIntentions = Object.entries(lunarBoosts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 2)
      .map(([intention]) => intention);
    
    suggestions.push(`Faza ${status.lunar.phase.emoji} wspiera: ${topIntentions.join(', ')}`);
  }
  
  // Sugestie na podstawie praktyki
  switch (practice) {
    case 'Meditation':
      suggestions.push('🧘 Medytacja - idealna do oferowania uzdrowienia i szukania przewodnictwa');
      break;
    case 'Ceremony':
      suggestions.push('🔮 Ceremonia - idealna do zaproszeń ceremonialnych i dzielenia mądrości');
      break;
    case 'Healing':
      suggestions.push('💎 Uzdrawianie - naturalna do oferowania uzdrowienia i wymiany darów');
      break;
    case 'Teaching':
      suggestions.push('📚 Nauczanie - doskonała do dzielenia mądrości i przewodnictwa');
      break;
    case 'Creating':
      suggestions.push('🎨 Tworzenie - idealna do wymiany darów i synchronizacji energii');
      break;
    case 'Journeying':
      suggestions.push('🌟 Podróżowanie - doskonała do szukania przewodnictwa i łączenia dusz');
      break;
    case 'Gathering':
      suggestions.push('🤝 Zgromadzenia - idealna do ceremonii i synchronizacji energii');
      break;
    case 'Resting':
      suggestions.push('🌙 Odpoczynek - czas na regenerację i głęboką refleksję');
      break;
  }
  
  // Ostrzeżenia na podstawie dostępności
  if (availability === 'Zamknięta') {
    suggestions.push('⚠️ Zamknięta energia - rozważ tylko najważniejsze komunikacje');
  } else if (availability === 'Silne Granice') {
    suggestions.push('🛡️ Silne granice - skup się na głębokich, znaczących połączeniach');
  }
  
  return suggestions;
}

export function calculateCommunityResonance(profiles: SacredProfile[]): {
  averageCompatibility: number;
  dominantElement: string;
  dominantPractice: string;
  lunarDistribution: Record<string, number>;
  energyMap: Array<{ profile: SacredProfile; connections: number; strength: number }>;
} {
  if (profiles.length === 0) {
    return {
      averageCompatibility: 0,
      dominantElement: 'Earth',
      dominantPractice: 'Medytacja',
      lunarDistribution: {},
      energyMap: []
    };
  }
  
  // Oblicz średnią kompatybilność wszystkich par
  let totalCompatibility = 0;
  let pairCount = 0;
  
  for (let i = 0; i < profiles.length; i++) {
    for (let j = i + 1; j < profiles.length; j++) {
      const compatibility = analyzeVibrationalCompatibility(
        profiles[i].status,
        profiles[j].status
      );
      totalCompatibility += compatibility.overall;
      pairCount++;
    }
  }
  
  const averageCompatibility = pairCount > 0 ? totalCompatibility / pairCount : 0;
  
  // Znajdź dominujący element
  const elementCounts: Record<string, number> = {};
  profiles.forEach(profile => {
    const element = profile.status.energetic.element.value;
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });
  const dominantElement = Object.entries(elementCounts)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Earth';
  
  // Znajdź dominującą praktykę
  const practiceCounts: Record<string, number> = {};
  profiles.forEach(profile => {
    const practice = profile.status.energetic.practice.value;
    practiceCounts[practice] = (practiceCounts[practice] || 0) + 1;
  });
  const dominantPractice = Object.entries(practiceCounts)
    .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Medytacja';
  
  // Rozkład faz księżyca
  const lunarDistribution: Record<string, number> = {};
  profiles.forEach(profile => {
    const phase = profile.status.lunar.phase.value;
    lunarDistribution[phase] = (lunarDistribution[phase] || 0) + 1;
  });
  
  // Mapa energetyczna - ile połączeń ma każdy profil
  const energyMap = profiles.map(profile => {
    let connections = 0;
    let totalStrength = 0;
    
    profiles.forEach(otherProfile => {
      if (profile.id !== otherProfile.id) {
        const compatibility = analyzeVibrationalCompatibility(
          profile.status,
          otherProfile.status
        );
        if (compatibility.overall > 0.7) {
          connections++;
          totalStrength += compatibility.overall;
        }
      }
    });
    
    return {
      profile,
      connections,
      strength: connections > 0 ? totalStrength / connections : 0
    };
  });
  
  return {
    averageCompatibility,
    dominantElement,
    dominantPractice,
    lunarDistribution,
    energyMap
  };
}
