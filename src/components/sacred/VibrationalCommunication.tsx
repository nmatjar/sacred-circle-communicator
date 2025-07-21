import React from 'react';
import { motion } from 'framer-motion';
import type { SacredProfile } from '@/types/sacred';

interface VibrationalCommunicationProps {
  profile: SacredProfile;
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

export const VibrationalCommunication: React.FC<VibrationalCommunicationProps> = ({ profile }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">
          🔮 Komunikacja Wibracyjna
        </h2>
        <p className="text-gray-300">
          Rozumie Twój stan energetyczny i fazę księżyca
        </p>
      </div>

      {/* Energetic State Section */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">⚡</span>
          Stan Energetyczny
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Element</span>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full animate-sacred-pulse"
                  style={{ backgroundColor: ELEMENTAL_COLORS[profile.status.energetic.element.value] }}
                />
                <span className="text-sm">{profile.status.energetic.element.emoji}</span>
              </div>
            </div>
            <div className="text-xs font-medium">
              {profile.status.energetic.element.value}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Praktyka</span>
              <span className="text-sm">{profile.status.energetic.practice.emoji}</span>
            </div>
            <div className="text-xs font-medium">
              {profile.status.energetic.practice.value}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Dostępność</span>
              <span className="text-sm">{profile.status.energetic.availability.emoji}</span>
            </div>
            <div className="text-xs font-medium">
              {profile.status.energetic.availability.value}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Ochrona</span>
              <span className="text-sm">{profile.status.energetic.protection.emoji}</span>
            </div>
            <div className="text-xs font-medium">
              {profile.status.energetic.protection.value}
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
                style={{ backgroundColor: LUNAR_COLORS[profile.status.lunar.phase.value] }}
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
              <span className="text-sm">{profile.status.lunar.phase.emoji}</span>
              <span className="text-sm font-medium">{profile.status.lunar.phase.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Wpływ</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{profile.status.lunar.influence.emoji}</span>
              <span className="text-xs">{profile.status.lunar.influence.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Energia</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{profile.status.lunar.energy.emoji}</span>
              <span className="text-xs">{profile.status.lunar.energy.value}</span>
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
              <span className="text-sm">{profile.status.community.resonance.emoji}</span>
              <span className="text-xs">{profile.status.community.resonance.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Dzielenie</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{profile.status.community.sharing.emoji}</span>
              <span className="text-xs">{profile.status.community.sharing.value}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Zgromadzenie</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{profile.status.community.gathering.emoji}</span>
              <span className="text-xs">{profile.status.community.gathering.value}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sacred Energy Visualization */}
      <motion.div
        className="relative h-20 bg-gradient-earth rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
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
            🔮
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
};
