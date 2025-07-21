import React from 'react';
import { motion } from 'framer-motion';
import type { SacredProfile } from '@/types/sacred';

interface ElementalIntelligenceProps {
  profile: SacredProfile;
}

export const ElementalIntelligence: React.FC<ElementalIntelligenceProps> = ({ profile }) => {
  const elements = [
    { 
      name: 'Earth', 
      symbol: '🌍', 
      color: 'from-green-600 to-brown-600',
      description: 'Stabilność, ugruntowanie, praktyczność',
      energy: 85
    },
    { 
      name: 'Water', 
      symbol: '💧', 
      color: 'from-blue-600 to-cyan-600',
      description: 'Płynność, emocje, intuicja',
      energy: 72
    },
    { 
      name: 'Fire', 
      symbol: '🔥', 
      color: 'from-red-600 to-orange-600',
      description: 'Pasja, transformacja, działanie',
      energy: 58
    },
    { 
      name: 'Air', 
      symbol: '💨', 
      color: 'from-yellow-600 to-gray-400',
      description: 'Inspiracja, komunikacja, umysł',
      energy: 43
    }
  ];

  const currentElement = profile.status.energetic.element.value;
  const availability = profile.status.energetic.availability.value;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">
          🌍 Inteligencja Elementalna
        </h2>
        <p className="text-gray-300">
          Wgląd w duchową dostępność i rezonans
        </p>
      </div>

      {/* Current Elemental State */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">{profile.status.energetic.element.emoji}</span>
          Aktualny Stan Elementalny
        </h3>
        
        <div className="flex items-center space-x-4">
          <motion.div
            className={`w-16 h-16 rounded-full bg-gradient-to-br ${elements.find(e => e.name === currentElement)?.color} flex items-center justify-center text-2xl`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {profile.status.energetic.element.emoji}
          </motion.div>
          
          <div className="flex-1">
            <div className="text-xl font-semibold">{currentElement}</div>
            <div className="text-sm text-muted-foreground mb-2">
              {elements.find(e => e.name === currentElement)?.description}
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Dostępność: </span>
              <span className="font-medium">{availability}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Elemental Balance */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">⚖️</span>
          Równowaga Elementalna
        </h3>
        
        <div className="space-y-3">
          {elements.map((element, index) => (
            <motion.div
              key={element.name}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center space-x-2 w-20">
                <span className="text-lg">{element.symbol}</span>
                <span className="text-xs font-medium">{element.name}</span>
              </div>
              
              <div className="flex-1 relative">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${element.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${element.energy}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
                <div className="absolute right-0 top-0 text-xs text-muted-foreground">
                  {element.energy}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Spiritual Availability */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">🔮</span>
          Duchowa Dostępność
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Praktyka</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{profile.status.energetic.practice.emoji}</span>
              <span className="text-sm font-medium">{profile.status.energetic.practice.value}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Ochrona</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{profile.status.energetic.protection.emoji}</span>
              <span className="text-sm font-medium">{profile.status.energetic.protection.value}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resonance Insights */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">💫</span>
          Wglądy Rezonansowe
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center text-sm">
              🌟
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Optymalna Energia</div>
              <div className="text-xs text-muted-foreground">
                Twoja energia {currentElement} jest w harmonii z obecną fazą księżyca
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center text-sm">
              🌱
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Rekomendacja</div>
              <div className="text-xs text-muted-foreground">
                Idealny czas na praktyki uzdrawiające i dzielenie się mądrością
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Elemental Mandala */}
      <motion.div
        className="relative h-32 overflow-hidden rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 via-red-500/10 to-yellow-500/10" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="grid grid-cols-2 gap-4"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {elements.map((element, index) => (
              <motion.div
                key={element.name}
                className="w-8 h-8 flex items-center justify-center text-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {element.symbol}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
