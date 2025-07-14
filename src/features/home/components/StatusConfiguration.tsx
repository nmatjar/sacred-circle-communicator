import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatusConfig {
  // Live Status
  status: 'A' | 'B' | 'O' | 'U'; // Available, Busy, Offline, Unavailable
  statusLabel: string;
  duration: string;
  activity: 'DEEP' | 'COLLAB' | 'MEET' | 'BREAK' | 'LEARN';
  location: 'HOME' | 'OFFICE' | 'REMOTE' | 'MOBILE';
  modality: 'DIG' | 'PHYS' | 'HYB'; // Digital, Physical, Hybrid
  interactionPref: 'ASYNC' | 'SYNC' | 'MIXED';
  responseTime: '<15m' | '<1h' | '<4h' | '<24h';
  interruptionThreshold: 'LOW' | 'MED' | 'HIGH' | 'IMP'; // Important only
  
  // Cognitive State
  cognitiveLoad: 'L' | 'M' | 'H'; // Low, Medium, High
  attentionState: 'FOC' | 'SCAT' | 'FLOW'; // Focused, Scattered, Flow
  energyLevel: 'L' | 'M' | 'H';
  flowState: 'MAINTAIN' | 'BUILD' | 'BREAK';
  optimalTaskType: string[];
  decisionCapacity: 'L' | 'M' | 'H';
  
  // Social Resonance
  collaborationMode: 'OPEN' | 'OFFER' | 'SELECTIVE' | 'CLOSED';
  collaborationTopics: string[];
  socialBandwidth: 'LOW' | 'MOD' | 'HIGH';
  serendipity: 'OPEN' | 'SEL' | 'CLOSED'; // Open, Selective, Closed
}

interface StatusConfigurationProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: StatusConfig) => void;
}

export const StatusConfiguration: React.FC<StatusConfigurationProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [config, setConfig] = useState<StatusConfig>({
    // Live Status defaults
    status: 'A',
    statusLabel: 'Dostępny do współpracy',
    duration: '4h',
    activity: 'COLLAB',
    location: 'HOME',
    modality: 'DIG',
    interactionPref: 'ASYNC',
    responseTime: '<1h',
    interruptionThreshold: 'MED',
    
    // Cognitive State defaults
    cognitiveLoad: 'M',
    attentionState: 'FOC',
    energyLevel: 'H',
    flowState: 'MAINTAIN',
    optimalTaskType: ['CR', 'AN'], // Creative, Analysis
    decisionCapacity: 'H',
    
    // Social Resonance defaults
    collaborationMode: 'OFFER',
    collaborationTopics: ['ai_bd', 'strategy'],
    socialBandwidth: 'MOD',
    serendipity: 'SEL'
  });

  const [activeTab, setActiveTab] = useState<'live' | 'cognitive' | 'social'>('live');

  const handleSave = () => {
    onSave(config);
    onClose();
  };

  const statusOptions = [
    { value: 'A', label: 'Available', emoji: '🟢', desc: 'Dostępny do kontaktu' },
    { value: 'B', label: 'Busy', emoji: '🟡', desc: 'Zajęty, ale można przerwać' },
    { value: 'O', label: 'Offline', emoji: '🔴', desc: 'Niedostępny' },
    { value: 'U', label: 'Unavailable', emoji: '⚫', desc: 'Całkowicie niedostępny' }
  ];

  const activityOptions = [
    { value: 'DEEP', label: 'Deep Work', emoji: '🎯' },
    { value: 'COLLAB', label: 'Collaboration', emoji: '🤝' },
    { value: 'MEET', label: 'Meetings', emoji: '📅' },
    { value: 'BREAK', label: 'Break', emoji: '☕' },
    { value: 'LEARN', label: 'Learning', emoji: '📚' }
  ];

  const collaborationTopics = [
    'ai_bd', 'strategy', 'product', 'engineering', 'design', 'marketing', 
    'sales', 'operations', 'research', 'innovation'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Konfiguracja Statusu
                </h2>
                <p className="text-gray-400 text-sm mt-1">Ustaw swój aktualny stan i preferencje komunikacji</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10">
              {[
                { id: 'live', label: 'Live Status', emoji: '🟢' },
                { id: 'cognitive', label: 'Cognitive State', emoji: '🧠' },
                { id: 'social', label: 'Social Resonance', emoji: '👥' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'live' | 'cognitive' | 'social')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-400/10'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'live' && (
                <div className="space-y-6">
                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Status</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {statusOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setConfig(prev => ({ ...prev, status: option.value as StatusConfig['status'] }))}
                          className={`p-4 rounded-lg border transition-all ${
                            config.status === option.value
                              ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                              : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.emoji}</div>
                          <div className="font-medium text-sm">{option.label}</div>
                          <div className="text-xs opacity-70 mt-1">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Label */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Status Label</label>
                    <input
                      type="text"
                      value={config.statusLabel}
                      onChange={(e) => setConfig(prev => ({ ...prev, statusLabel: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      placeholder="Opisz swój aktualny stan..."
                    />
                  </div>

                  {/* Activity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Aktywność</label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {activityOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setConfig(prev => ({ ...prev, activity: option.value as StatusConfig['activity'] }))}
                          className={`p-3 rounded-lg border transition-all ${
                            config.activity === option.value
                              ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                              : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                          }`}
                        >
                          <div className="text-xl mb-1">{option.emoji}</div>
                          <div className="text-xs font-medium">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Response Time & Interaction Preference */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Czas Odpowiedzi</label>
                      <select
                        value={config.responseTime}
                        onChange={(e) => setConfig(prev => ({ ...prev, responseTime: e.target.value as StatusConfig['responseTime'] }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="<15m">{'<15 minut'}</option>
                        <option value="<1h">{'<1 godzina'}</option>
                        <option value="<4h">{'<4 godziny'}</option>
                        <option value="<24h">{'<24 godziny'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferencja Interakcji</label>
                      <select
                        value={config.interactionPref}
                        onChange={(e) => setConfig(prev => ({ ...prev, interactionPref: e.target.value as StatusConfig['interactionPref'] }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="ASYNC">Asynchroniczna</option>
                        <option value="SYNC">Synchroniczna</option>
                        <option value="MIXED">Mieszana</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cognitive' && (
                <div className="space-y-6">
                  {/* Cognitive Load & Energy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Obciążenie Kognitywne</label>
                      <div className="space-y-2">
                        {[
                          { value: 'L', label: 'Niskie', color: 'green' },
                          { value: 'M', label: 'Średnie', color: 'yellow' },
                          { value: 'H', label: 'Wysokie', color: 'red' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setConfig(prev => ({ ...prev, cognitiveLoad: option.value as StatusConfig['cognitiveLoad'] }))}
                            className={`w-full p-3 rounded-lg border transition-all text-left ${
                              config.cognitiveLoad === option.value
                                ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                                : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Poziom Energii</label>
                      <div className="space-y-2">
                        {[
                          { value: 'L', label: 'Niski' },
                          { value: 'M', label: 'Średni' },
                          { value: 'H', label: 'Wysoki' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setConfig(prev => ({ ...prev, energyLevel: option.value as StatusConfig['energyLevel'] }))}
                            className={`w-full p-3 rounded-lg border transition-all text-left ${
                              config.energyLevel === option.value
                                ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                                : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flow State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Stan Flow</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'BUILD', label: 'Budowanie', emoji: '🏗️' },
                        { value: 'MAINTAIN', label: 'Utrzymanie', emoji: '⚡' },
                        { value: 'BREAK', label: 'Przerwa', emoji: '🛑' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setConfig(prev => ({ ...prev, flowState: option.value as StatusConfig['flowState'] }))}
                          className={`p-4 rounded-lg border transition-all ${
                            config.flowState === option.value
                              ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                              : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.emoji}</div>
                          <div className="text-sm font-medium">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'social' && (
                <div className="space-y-6">
                  {/* Collaboration Mode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Tryb Współpracy</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: 'OPEN', label: 'Otwarty', emoji: '🌐' },
                        { value: 'OFFER', label: 'Oferuję', emoji: '🤝' },
                        { value: 'SELECTIVE', label: 'Selektywny', emoji: '🎯' },
                        { value: 'CLOSED', label: 'Zamknięty', emoji: '🚫' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setConfig(prev => ({ ...prev, collaborationMode: option.value as StatusConfig['collaborationMode'] }))}
                          className={`p-4 rounded-lg border transition-all ${
                            config.collaborationMode === option.value
                              ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                              : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.emoji}</div>
                          <div className="text-sm font-medium">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Topics */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Tematy Współpracy</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                      {collaborationTopics.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => {
                            setConfig(prev => ({
                              ...prev,
                              collaborationTopics: prev.collaborationTopics.includes(topic)
                                ? prev.collaborationTopics.filter(t => t !== topic)
                                : [...prev.collaborationTopics, topic]
                            }));
                          }}
                          className={`p-2 rounded-lg border transition-all text-sm ${
                            config.collaborationTopics.includes(topic)
                              ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                              : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Social Bandwidth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Przepustowość Społeczna</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'LOW', label: 'Niska', emoji: '🔋' },
                        { value: 'MOD', label: 'Średnia', emoji: '🔋🔋' },
                        { value: 'HIGH', label: 'Wysoka', emoji: '🔋🔋🔋' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setConfig(prev => ({ ...prev, socialBandwidth: option.value as StatusConfig['socialBandwidth'] }))}
                          className={`p-4 rounded-lg border transition-all ${
                            config.socialBandwidth === option.value
                              ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                              : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.emoji}</div>
                          <div className="text-sm font-medium">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-white/10">
              <div className="text-sm text-gray-400">
                Ostatnia aktualizacja: {new Date().toLocaleTimeString('pl-PL', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-white/20 rounded-lg text-gray-300 hover:text-white hover:border-white/40 transition-colors"
                >
                  Anuluj
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-colors"
                >
                  Zapisz Status
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
