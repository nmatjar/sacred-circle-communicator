import React from 'react';
import { motion } from 'framer-motion';
import type { SacredProfile } from '@/types/sacred';

interface IntentionCircleProps {
  profile: SacredProfile;
}

export const IntentionCircle: React.FC<IntentionCircleProps> = ({ profile }) => {
  const intentions = [
    { id: 'share_wisdom', symbol: '🌱', name: 'Deli Mądrość', position: { top: '10%', left: '50%' } },
    { id: 'seek_guidance', symbol: '🔮', name: 'Szukaj Przewodnictwa', position: { top: '25%', right: '15%' } },
    { id: 'invite_ceremony', symbol: '🌙', name: 'Zaproś na Ceremonię', position: { top: '50%', right: '5%' } },
    { id: 'offer_healing', symbol: '💎', name: 'Oferuj Uzdrowienie', position: { bottom: '25%', right: '15%' } },
    { id: 'exchange_gifts', symbol: '🌿', name: 'Wymień Dary', position: { bottom: '10%', left: '50%' } },
    { id: 'sync_energies', symbol: '🦋', name: 'Synchronizuj Energie', position: { bottom: '25%', left: '15%' } },
    { id: 'address_discord', symbol: '⚡', name: 'Rozwiąż Konflikt', position: { top: '50%', left: '5%' } },
    { id: 'connect_souls', symbol: '🌸', name: 'Połącz Dusze', position: { top: '25%', left: '15%' } }
  ];

  const centerSymbol = profile.archetype === 'Shaman' ? '🔮' : 
                     profile.archetype === 'Herbalist' ? '🌿' :
                     profile.archetype === 'Craftsperson' ? '🔨' :
                     profile.archetype === 'Dancer' ? '💃' :
                     profile.archetype === 'Keeper' ? '📜' :
                     profile.archetype === 'Alchemist' ? '⚗️' : '✨';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">
          🌙 Krąg Intencji
        </h2>
        <p className="text-gray-300">
          Oktagonalna mandala dostosowana do Twojej duszy
        </p>
      </div>

      {/* Sacred Circle */}
      <div className="relative w-80 h-80 mx-auto">
        {/* Outer Circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-amber-500/30"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Inner Circle */}
        <motion.div
          className="absolute inset-8 rounded-full border border-amber-400/20"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        />

        {/* Center Symbol */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm border border-amber-500/30"
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
            {centerSymbol}
          </motion.div>
        </motion.div>

        {/* Intention Points */}
        {intentions.map((intention, index) => (
          <motion.div
            key={intention.id}
            className="absolute cursor-pointer group"
            style={intention.position}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center text-xl backdrop-blur-sm border border-green-500/30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {intention.symbol}
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {intention.name}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {intentions.map((_, index) => {
            const angle = (index * 45) * (Math.PI / 180);
            const centerX = 160;
            const centerY = 160;
            const radius = 120;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            return (
              <motion.line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="rgba(245, 158, 11, 0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              />
            );
          })}
        </svg>
      </div>

      {/* Selected Intention */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">✨</span>
          Wybrana Intencja
        </h3>
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full flex items-center justify-center text-lg">
            🌱
          </div>
          <div>
            <div className="text-sm font-medium">Deli Mądrość</div>
            <div className="text-xs text-muted-foreground">Podziel się swoją wiedzą z społecznością</div>
          </div>
        </div>
      </motion.div>

      {/* Sacred Geometry Animation */}
      <motion.div
        className="relative h-16 overflow-hidden rounded-lg bg-gradient-to-r from-amber-500/10 via-green-500/10 to-blue-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="text-2xl">🌀</div>
        </motion.div>
      </motion.div>
    </div>
  );
};
