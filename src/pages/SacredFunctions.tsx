import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VibrationalCommunication } from '@/components/sacred/VibrationalCommunication';
import { IntentionCircle } from '@/components/sacred/IntentionCircle';
import { ElementalIntelligence } from '@/components/sacred/ElementalIntelligence';
import { FestivalIntegration } from '@/components/sacred/FestivalIntegration';
import { FestivalPlanner } from '@/components/sacred/FestivalPlanner';
import { VibrationalAnalysisDisplay } from '@/components/sacred/VibrationalAnalysisDisplay';
import { sacredProfiles } from '@/data/sacred/sacredProfiles';

type SacredFunction = 
  | 'vibrational-communication'
  | 'intention-circle'
  | 'elemental-intelligence'
  | 'festival-integration'
  | 'festival-planner'
  | 'vibrational-analysis';

const functions = [
  {
    id: 'vibrational-communication' as SacredFunction,
    name: 'Komunikacja Wibracyjna',
    description: 'Rozumie Twój stan energetyczny i fazę księżyca',
    symbol: '🔮',
    color: 'from-purple-500 to-blue-500'
  },
  {
    id: 'intention-circle' as SacredFunction,
    name: 'Krąg Intencji',
    description: 'Oktagonalna mandala dostosowana do Twojej duszy',
    symbol: '🌙',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'elemental-intelligence' as SacredFunction,
    name: 'Inteligencja Elementalna',
    description: 'Wgląd w duchową dostępność i rezonans',
    symbol: '🌍',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'festival-integration' as SacredFunction,
    name: 'Integracja Festiwalowa',
    description: 'Świadomość wydarzeń i koordynacja obozów',
    symbol: '🎪',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'festival-planner' as SacredFunction,
    name: 'Planer Festiwali',
    description: 'Planowanie i zarządzanie festiwalami świadomościowymi',
    symbol: '🗓️',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'vibrational-analysis' as SacredFunction,
    name: 'Analiza Wibracyjna',
    description: 'Głęboka analiza energetyczna i rekomendacje',
    symbol: '🔬',
    color: 'from-cyan-500 to-blue-500'
  }
];

export const SacredFunctions: React.FC = () => {
  const [activeFunction, setActiveFunction] = useState<SacredFunction | null>(null);
  const [selectedProfile, setSelectedProfile] = useState(sacredProfiles[0]);

  const renderFunction = () => {
    if (!activeFunction) return null;

    switch (activeFunction) {
      case 'vibrational-communication':
        return <VibrationalCommunication profile={selectedProfile} />;
      case 'intention-circle':
        return <IntentionCircle profile={selectedProfile} />;
      case 'elemental-intelligence':
        return <ElementalIntelligence profile={selectedProfile} />;
      case 'festival-integration':
        return <FestivalIntegration profile={selectedProfile} />;
      case 'festival-planner':
        return <FestivalPlanner profile={selectedProfile} />;
      case 'vibrational-analysis':
        return <VibrationalAnalysisDisplay currentProfile={selectedProfile} communityProfiles={sacredProfiles} />;
      default:
        return null;
    }
  };

  if (activeFunction) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header with Back Button */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => setActiveFunction(null)}
              className="flex items-center space-x-2 text-amber-300 hover:text-amber-200 transition-colors"
            >
              <span>←</span>
              <span>Powrót do Świętych Funkcji</span>
            </button>
            
            {/* Profile Selector */}
            <select
              value={selectedProfile.id}
              onChange={(e) => {
                const profile = sacredProfiles.find(p => p.id === e.target.value);
                if (profile) setSelectedProfile(profile);
              }}
              className="bg-gray-800/50 border border-amber-500/30 rounded-lg px-3 py-2 text-sm"
            >
              {sacredProfiles.map(profile => (
                <option key={profile.id} value={profile.id}>
                  {profile.name} ({profile.archetype})
                </option>
              ))}
            </select>
          </motion.div>

          {/* Function Content */}
          <motion.div
            key={activeFunction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderFunction()}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-amber-300 mb-4">
            ✨ Święte Funkcje Sacred Circle
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Odkryj duchowe narzędzia komunikacji i analizy wibracyjnej dla społeczności festiwalowych
          </p>
        </motion.div>

        {/* Profile Selector */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <label className="block text-sm text-muted-foreground mb-2">
              Wybierz profil duchowy:
            </label>
            <select
              value={selectedProfile.id}
              onChange={(e) => {
                const profile = sacredProfiles.find(p => p.id === e.target.value);
                if (profile) setSelectedProfile(profile);
              }}
              className="bg-gray-800/50 border border-amber-500/30 rounded-lg px-4 py-2 text-white min-w-[200px]"
            >
              {sacredProfiles.map(profile => (
                <option key={profile.id} value={profile.id}>
                  {profile.name} - {profile.archetype}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {functions.map((func, index) => (
            <motion.div
              key={func.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFunction(func.id)}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-amber-500/50 transition-all duration-300 h-full">
                {/* Function Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${func.color} flex items-center justify-center text-2xl`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {func.symbol}
                  </motion.div>
                </div>

                {/* Function Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-amber-300 mb-2 group-hover:text-amber-200 transition-colors">
                    {func.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {func.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <span className="text-xs text-amber-400">
                      Kliknij aby eksplorować →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sacred Geometry Background */}
        <motion.div
          className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-96 h-96 border border-amber-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-80 h-80 border border-green-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 border border-blue-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-sm">
            Sacred Circle Communicator • Duchowe narzędzia dla społeczności świadomościowych
          </p>
        </motion.div>
      </div>
    </div>
  );
};
