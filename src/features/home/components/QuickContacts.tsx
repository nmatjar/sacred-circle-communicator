import React from 'react';
import { motion } from 'framer-motion';
import { convertedTeamProfiles } from '@/data/teamProfilesAdapter';
import { useAppStore } from '@/store/useAppStore';
import type { Profile } from '@/types/profile';

export const QuickContacts: React.FC = () => {
  const setSelectedProfileId = useAppStore((state) => state.setSelectedProfileId);
  
  // Pokaż tylko 6 najważniejszych kontaktów (dostępnych i z wysokim QPI)
  const priorityContacts = convertedTeamProfiles
    .filter(profile => {
      const statusValue = profile.status.live.status.value;
      return statusValue.includes('Available') || statusValue.includes('Busy');
    })
    .sort((a, b) => b.qpi - a.qpi)
    .slice(0, 6);

  const getStatusFromProfile = (profile: Profile) => {
    const statusValue = profile.status.live.status.value;
    if (statusValue.includes('Available')) return 'available';
    if (statusValue.includes('Busy')) return 'busy';
    if (statusValue.includes('Away')) return 'away';
    return 'offline';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-400';
      case 'busy': return 'bg-yellow-400';
      case 'away': return 'bg-orange-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Dostępny';
      case 'busy': return 'Zajęty';
      case 'away': return 'Nieobecny';
      default: return 'Offline';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Priorytetowe Kontakty
          </h2>
          <p className="text-gray-400 text-sm">Najważniejsze osoby w Twojej sieci</p>
        </div>
        <button className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
          Zobacz wszystkie →
        </button>
      </div>

      <div className="space-y-3">
        {priorityContacts.map((contact, index) => (
          <motion.button
            key={contact.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProfileId(contact.id)}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {contact.name.charAt(0)}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(getStatusFromProfile(contact))} rounded-full border-2 border-gray-900`}></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-white truncate">{contact.name}</h3>
                <span className="text-xs text-cyan-400">QPI: {contact.qpi.toFixed(3)}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 truncate">{contact.archetype}</p>
                <span className="text-xs text-gray-500">{getStatusText(getStatusFromProfile(contact))}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{priorityContacts.length} z {convertedTeamProfiles.length} kontaktów</span>
          <span>Sortowane wg QPI</span>
        </div>
      </div>
    </motion.div>
  );
};
