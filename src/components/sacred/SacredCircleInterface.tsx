import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SacredProfile, SacredIntentionId } from '@/types/sacred';

interface SacredCircleInterfaceProps {
  profile: SacredProfile;
  onIntentionSelect: (intentionId: SacredIntentionId) => void;
  className?: string;
}

const SACRED_INTENTIONS = [
  {
    id: "share_wisdom" as SacredIntentionId,
    name: "ДЕЛИ МЪДРОСТ",
    translation: "Dziel Mądrość",
    symbol: "🌱",
    element: "Earth",
    position: { x: 0, y: -120 }, // Top
    color: "hsl(var(--element-earth))"
  },
  {
    id: "seek_guidance" as SacredIntentionId,
    name: "ТЪРСИ ВОДАЧЕСТВО",
    translation: "Szukaj Przewodnictwa",
    symbol: "🔮",
    element: "Air",
    position: { x: 85, y: -85 }, // Top-right
    color: "hsl(var(--element-air))"
  },
  {
    id: "invite_ceremony" as SacredIntentionId,
    name: "ПОКАНИ НА ЦЕРЕМОНИЯ",
    translation: "Zaproś na Ceremonię",
    symbol: "🌙",
    element: "Water",
    position: { x: 120, y: 0 }, // Right
    color: "hsl(var(--element-water))"
  },
  {
    id: "offer_healing" as SacredIntentionId,
    name: "ПРЕДЛОЖИ ИЗЦЕЛЕНИЕ",
    translation: "Oferuj Uzdrowienie",
    symbol: "💎",
    element: "Water",
    position: { x: 85, y: 85 }, // Bottom-right
    color: "hsl(var(--element-water))"
  },
  {
    id: "exchange_gifts" as SacredIntentionId,
    name: "РАЗМЕНИ ДАРОВЕ",
    translation: "Wymień Dary",
    symbol: "🌿",
    element: "Earth",
    position: { x: 0, y: 120 }, // Bottom
    color: "hsl(var(--element-earth))"
  },
  {
    id: "sync_energies" as SacredIntentionId,
    name: "СИНХРОНИЗИРАЙ ЕНЕРГИИ",
    translation: "Synchronizuj Energie",
    symbol: "🦋",
    element: "Air",
    position: { x: -85, y: 85 }, // Bottom-left
    color: "hsl(var(--element-air))"
  },
  {
    id: "address_discord" as SacredIntentionId,
    name: "СЪОБЩИ ДИСХАРМОНИЯ",
    translation: "Rozwiąż Dysharmonię",
    symbol: "⚡",
    element: "Fire",
    position: { x: -120, y: 0 }, // Left
    color: "hsl(var(--element-fire))"
  },
  {
    id: "connect_souls" as SacredIntentionId,
    name: "СВЪРЖИ ДУШИ",
    translation: "Połącz Dusze",
    symbol: "🌸",
    element: "Fire",
    position: { x: -85, y: -85 }, // Top-left
    color: "hsl(var(--element-fire))"
  }
];

export function SacredCircleInterface({ profile, onIntentionSelect, className = "" }: SacredCircleInterfaceProps) {
  const [hoveredIntention, setHoveredIntention] = useState<SacredIntentionId | null>(null);
  const [selectedIntention, setSelectedIntention] = useState<SacredIntentionId | null>(null);

  const handleIntentionClick = (intentionId: SacredIntentionId) => {
    setSelectedIntention(intentionId);
    onIntentionSelect(intentionId);
  };

  const getIntentionResonance = (intentionId: SacredIntentionId): number => {
    const profileIntention = profile.intentions.find(i => i.id === intentionId);
    return profileIntention?.resonanceScore || 50;
  };

  const getResonanceColor = (resonance: number): string => {
    if (resonance >= 80) return "hsl(var(--intention-optimal))";
    if (resonance >= 60) return "hsl(var(--intention-moderate))";
    if (resonance >= 40) return "hsl(var(--intention-poor))";
    return "hsl(var(--intention-disabled))";
  };

  return (
    <div className={`relative w-80 h-80 mx-auto ${className}`}>
      {/* Sacred Circle Background */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/20 bg-gradient-lunar"
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1]
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Central Sacred Symbol */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-sacred flex items-center justify-center text-2xl shadow-intention-glow">
          {profile.archetype === "Shaman" && "🔮"}
          {profile.archetype === "Herbalist" && "🌿"}
          {profile.archetype === "Craftsperson" && "🔨"}
          {profile.archetype === "Dancer" && "💃"}
          {profile.archetype === "Keeper" && "📚"}
          {profile.archetype === "Alchemist" && "⚗️"}
        </div>
      </motion.div>

      {/* Sacred Intentions */}
      {SACRED_INTENTIONS.map((intention) => {
        const resonance = getIntentionResonance(intention.id);
        const isHovered = hoveredIntention === intention.id;
        const isSelected = selectedIntention === intention.id;
        
        return (
          <motion.div
            key={intention.id}
            className="absolute cursor-pointer"
            style={{
              left: `calc(50% + ${intention.position.x}px)`,
              top: `calc(50% + ${intention.position.y}px)`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setHoveredIntention(intention.id)}
            onHoverEnd={() => setHoveredIntention(null)}
            onClick={() => handleIntentionClick(intention.id)}
          >
            <motion.div
              className={`
                w-12 h-12 rounded-full flex items-center justify-center text-lg
                border-2 transition-sacred shadow-lg
                ${isSelected ? 'ring-4 ring-primary/50' : ''}
              `}
              style={{
                backgroundColor: getResonanceColor(resonance),
                borderColor: intention.color,
                boxShadow: isHovered 
                  ? `0 0 20px ${getResonanceColor(resonance)}` 
                  : `0 4px 8px ${getResonanceColor(resonance)}40`
              }}
              animate={{
                rotate: isHovered ? [0, 5, -5, 0] : 0,
                scale: isSelected ? 1.1 : 1
              }}
              transition={{
                rotate: { duration: 0.5, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <span className="filter drop-shadow-sm">
                {intention.symbol}
              </span>
            </motion.div>

            {/* Intention Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50"
                >
                  <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-ar-glass min-w-48">
                    <div className="text-xs font-medium text-primary mb-1">
                      {intention.name}
                    </div>
                    <div className="text-sm text-foreground mb-2">
                      {intention.translation}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Rezonans: {resonance}%
                      </span>
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: intention.color }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Elemental Energy Lines - moved before intentions to be behind them */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <radialGradient id="energyGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Sacred Geometry Lines */}
        {SACRED_INTENTIONS.map((intention, index) => {
          const nextIntention = SACRED_INTENTIONS[(index + 1) % SACRED_INTENTIONS.length];
          return (
            <motion.line
              key={`line-${index}`}
              x1={`calc(50% + ${intention.position.x}px)`}
              y1={`calc(50% + ${intention.position.y}px)`}
              x2={`calc(50% + ${nextIntention.position.x}px)`}
              y2={`calc(50% + ${nextIntention.position.y}px)`}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Sacred Energy Pulse */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
