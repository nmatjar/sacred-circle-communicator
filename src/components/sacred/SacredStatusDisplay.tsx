import React from 'react';
import { motion } from 'framer-motion';
import type { SacredStatus } from '@/types/sacred';

interface SacredStatusDisplayProps {
  status: SacredStatus;
  className?: string;
  compact?: boolean;
}

const ELEMENTAL_COLORS = {
  Earth: "hsl(var(--element-earth))",
  Water: "hsl(var(--element-water))",
  Fire: "hsl(var(--element-fire))",
  Air: "hsl(var(--element-air))"
};

const LUNAR_COLORS = {
  New: "hsl(var(--moon-new))",
  Waxing: "hsl(var(--moon-waxing))",
  Full: "hsl(var(--moon-full))",
  Waning: "hsl(var(--moon-waning))"
};

export function SacredStatusDisplay({ status, className = "", compact = false }: SacredStatusDisplayProps) {
  if (compact) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {/* Elemental State */}
        <motion.div
          className="flex items-center space-x-1"
          whileHover={{ scale: 1.05 }}
        >
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: ELEMENTAL_COLORS[status.energetic.element.value] }}
          />
          <span className="text-xs text-muted-foreground">
            {status.energetic.element.emoji}
          </span>
        </motion.div>

        {/* Lunar Phase */}
        <motion.div
          className="flex items-center space-x-1"
          whileHover={{ scale: 1.05 }}
        >
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: LUNAR_COLORS[status.lunar.phase.value] }}
          />
          <span className="text-xs text-muted-foreground">
            {status.lunar.phase.emoji}
          </span>
        </motion.div>

        {/* Practice Status */}
        <span className="text-xs text-muted-foreground">
          {status.energetic.practice.emoji}
        </span>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Energetic State Section */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">🌟</span>
          Stan Energetyczny
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Element</span>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full animate-sacred-pulse"
                  style={{ backgroundColor: ELEMENTAL_COLORS[status.energetic.element.value] }}
                />
                <span className="text-sm">{status.energetic.element.emoji}</span>
              </div>
            </div>
            <div className="text-xs font-medium">
              {status.energetic.element.value}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Praktyka</span>
              <span className="text-sm">{status.energetic.practice.emoji}</span>
            </div>
            <div className="text-xs font-medium">
              {status.energetic.practice.value}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Dostępność</span>
              <span className="text-sm">{status.energetic.availability.emoji}</span>
            </div>
            <div className="text-xs font-medium">
              {status.energetic.availability.value}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Ochrona</span>
              <span className="text-sm">{status.energetic.protection.emoji}</span>
            </div>
            <div className="text-xs font-medium">
              {status.energetic.protection.value}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lunar Alignment Section */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">🌙</span>
          Wpływ Księżyca
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Faza</span>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: LUNAR_COLORS[status.lunar.phase.value] }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm">{status.lunar.phase.emoji}</span>
              <span className="text-sm font-medium">{status.lunar.phase.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Wpływ</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.lunar.influence.emoji}</span>
              <span className="text-xs">{status.lunar.influence.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Energia</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.lunar.energy.emoji}</span>
              <span className="text-xs">{status.lunar.energy.value}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Community Resonance Section */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">👥</span>
          Rezonans Wspólnoty
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Rezonans</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.community.resonance.emoji}</span>
              <span className="text-xs">{status.community.resonance.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Dzielenie</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.community.sharing.emoji}</span>
              <span className="text-xs">{status.community.sharing.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Zgromadzenie</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.community.gathering.emoji}</span>
              <span className="text-xs">{status.community.gathering.value}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Festival Integration Section */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">🎪</span>
          Integracja Festiwalowa
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Lokalizacja</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.festival.location.emoji}</span>
              <span className="text-xs">{status.festival.location.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Obóz</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.festival.camp.emoji}</span>
              <span className="text-xs">{status.festival.camp.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Rola</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{status.festival.role.emoji}</span>
              <span className="text-xs">{status.festival.role.value}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sacred Energy Visualization */}
      <motion.div
        className="relative h-20 bg-gradient-earth rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div>
        </div>
        
        {/* Energy Flow Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{
            x: [-100, 400]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
}
