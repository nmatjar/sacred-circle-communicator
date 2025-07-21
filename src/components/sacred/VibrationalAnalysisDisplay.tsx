import React from 'react';
import { motion } from 'framer-motion';
import { 
  analyzeVibrationalCompatibility, 
  getOptimalCommunicationTime, 
  suggestOptimalIntention,
  calculateCommunityResonance
} from '@/lib/sacred/vibrationalAnalysis';
import type { SacredProfile } from '@/types/sacred';

interface VibrationalAnalysisDisplayProps {
  currentProfile: SacredProfile;
  targetProfile?: SacredProfile;
  communityProfiles?: SacredProfile[];
  className?: string;
}

export function VibrationalAnalysisDisplay({
  currentProfile,
  targetProfile,
  communityProfiles = [],
  className = ""
}: VibrationalAnalysisDisplayProps) {
  // Analiza kompatybilności z konkretną osobą
  const compatibility = targetProfile 
    ? analyzeVibrationalCompatibility(currentProfile.status, targetProfile.status)
    : null;

  // Sugestie optymalnego czasu komunikacji
  const communicationTiming = getOptimalCommunicationTime(currentProfile.status);

  // Sugestie optymalnych intencji
  const intentionSuggestions = suggestOptimalIntention(currentProfile.status);

  // Analiza rezonansu społeczności
  const communityResonance = communityProfiles.length > 0 
    ? calculateCommunityResonance([currentProfile, ...communityProfiles])
    : null;

  const getCompatibilityColor = (score: number) => {
    if (score >= 0.8) return 'text-green-400';
    if (score >= 0.6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCompatibilityLabel = (score: number) => {
    if (score >= 0.9) return 'Doskonała harmonia';
    if (score >= 0.8) return 'Bardzo dobra';
    if (score >= 0.7) return 'Dobra';
    if (score >= 0.6) return 'Umiarkowana';
    if (score >= 0.4) return 'Słaba';
    return 'Bardzo słaba';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Analiza kompatybilności z konkretną osobą */}
      {compatibility && targetProfile && (
        <motion.div
          className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <span className="mr-2">🔮</span>
            Analiza Wibracyjna z {targetProfile.name}
          </h3>

          {/* Ogólna kompatybilność */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Ogólna Kompatybilność</span>
              <span className={`font-bold ${getCompatibilityColor(compatibility.overall)}`}>
                {Math.round(compatibility.overall * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary/50 to-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${compatibility.overall * 100}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {getCompatibilityLabel(compatibility.overall)}
            </p>
          </div>

          {/* Szczegółowe wyniki */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">🌍 Elementalna:</span>
                <span className={`text-sm font-medium ${getCompatibilityColor(compatibility.elemental)}`}>
                  {Math.round(compatibility.elemental * 100)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">🧘 Praktyki:</span>
                <span className={`text-sm font-medium ${getCompatibilityColor(compatibility.practice)}`}>
                  {Math.round(compatibility.practice * 100)}%
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">🌙 Księżycowa:</span>
                <span className={`text-sm font-medium ${getCompatibilityColor(compatibility.lunar)}`}>
                  {Math.round(compatibility.lunar * 100)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">✨ Dostępność:</span>
                <span className={`text-sm font-medium ${getCompatibilityColor(compatibility.availability)}`}>
                  {Math.round(compatibility.availability * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Rekomendacje */}
          {compatibility.recommendations.length > 0 && (
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="text-sm font-medium text-primary mb-2">Rekomendacje:</h4>
              <ul className="space-y-1">
                {compatibility.recommendations.map((rec, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start">
                    <span className="mr-2">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* Optymalny czas komunikacji */}
      <motion.div
        className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">⏰</span>
          Optymalny Czas Komunikacji
        </h3>
        <div className="space-y-3">
          {communicationTiming.map((suggestion, index) => (
            <motion.div
              key={index}
              className="bg-gradient-lunar rounded-lg p-3 border border-primary/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-sm text-foreground">{suggestion}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sugestie intencji */}
      <motion.div
        className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">🎯</span>
          Sugerowane Intencje
        </h3>
        <div className="space-y-3">
          {intentionSuggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              className="bg-gradient-earth rounded-lg p-3 border border-primary/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-sm text-foreground">{suggestion}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rezonans społeczności */}
      {communityResonance && (
        <motion.div
          className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
            <span className="mr-2">🌐</span>
            Rezonans Społeczności
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Statystyki ogólne */}
            <div className="space-y-4">
              <div className="bg-gradient-sacred rounded-lg p-4">
                <h4 className="text-sm font-medium text-primary mb-2">Średnia Kompatybilność</h4>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">
                    {Math.round(communityResonance.averageCompatibility * 100)}%
                  </span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {getCompatibilityLabel(communityResonance.averageCompatibility)}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-earth rounded-lg p-4">
                <h4 className="text-sm font-medium text-primary mb-2">Dominujące Energie</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs">Element:</span>
                    <span className="text-xs font-medium">{communityResonance.dominantElement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs">Praktyka:</span>
                    <span className="text-xs font-medium">{communityResonance.dominantPractice}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rozkład faz księżyca */}
            <div className="space-y-4">
              <div className="bg-gradient-lunar rounded-lg p-4">
                <h4 className="text-sm font-medium text-primary mb-3">Fazy Księżyca</h4>
                <div className="space-y-2">
                  {Object.entries(communityResonance.lunarDistribution).map(([phase, count]) => (
                    <div key={phase} className="flex justify-between items-center">
                      <span className="text-xs flex items-center">
                        {phase === 'New' && '🌑 Nów'}
                        {phase === 'Waxing' && '🌒 Przybywający'}
                        {phase === 'Full' && '🌕 Pełnia'}
                        {phase === 'Waning' && '🌘 Ubywający'}
                      </span>
                      <span className="text-xs font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mapa energetyczna - top połączenia */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-primary mb-3">Najsilniejsze Połączenia</h4>
            <div className="space-y-2">
              {communityResonance.energyMap
                .sort((a, b) => b.strength - a.strength)
                .slice(0, 5)
                .map((entry, index) => (
                  <motion.div
                    key={entry.profile.id}
                    className="flex items-center justify-between bg-card/30 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">
                        {entry.profile.archetype === "Shaman" && "🔮"}
                        {entry.profile.archetype === "Herbalist" && "🌿"}
                        {entry.profile.archetype === "Craftsperson" && "🔨"}
                        {entry.profile.archetype === "Dancer" && "💃"}
                        {entry.profile.archetype === "Keeper" && "📚"}
                        {entry.profile.archetype === "Alchemist" && "⚗️"}
                      </span>
                      <div>
                        <div className="text-sm font-medium">{entry.profile.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {entry.connections} połączeń
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${getCompatibilityColor(entry.strength)}`}>
                        {Math.round(entry.strength * 100)}%
                      </div>
                      <div className="text-xs text-muted-foreground">siła</div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
