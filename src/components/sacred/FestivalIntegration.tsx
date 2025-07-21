import React from 'react';
import { motion } from 'framer-motion';
import type { SacredProfile } from '@/types/sacred';

interface FestivalIntegrationProps {
  profile: SacredProfile;
}

export const FestivalIntegration: React.FC<FestivalIntegrationProps> = ({ profile }) => {
  // Formatowanie dat dla wyświetlenia
  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleDateString('pl-PL', { month: 'long' });
    const year = startDate.getFullYear();
    
    if (startDay === endDay) {
      return `${startDay} ${month} ${year}`;
    }
    return `${startDay}-${endDay} ${month} ${year}`;
  };

  // Mapowanie statusów na kolory
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'planning': return 'bg-yellow-500';
      case 'interested': return 'bg-blue-500';
      case 'applying': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  // Mapowanie statusów biletów na emoji
  const getTicketEmoji = (ticketStatus?: string) => {
    switch (ticketStatus) {
      case 'purchased': return '✅';
      case 'work_exchange': return '🤝';
      case 'applying': return '📝';
      case 'waiting': return '⏳';
      default: return '🎫';
    }
  };

  const camps = [
    { name: 'Ogród Ziół', members: 45, focus: 'healing', symbol: '🌿' },
    { name: 'Słowiański Krąg', members: 32, focus: 'tradition', symbol: '🌙' },
    { name: 'Gwiezdny Pył', members: 28, focus: 'alchemy', symbol: '✨' },
    { name: 'Złote Dłonie', members: 38, focus: 'crafts', symbol: '🔨' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">
          🎪 Integracja Festiwalowa
        </h2>
        <p className="text-gray-300">
          Świadomość wydarzeń i koordynacja obozów
        </p>
      </div>

      {/* Current Festival Status */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">{profile.status.festival.location.emoji}</span>
          Aktualny Festiwal
        </h3>
        
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center text-2xl border border-purple-500/30"
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
            🎪
          </motion.div>
          
          <div className="flex-1">
            <div className="text-xl font-semibold">{profile.status.festival.location.value}</div>
            <div className="text-sm text-muted-foreground mb-2">
              Transformacyjny festiwal świadomości
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>👥 1,200 uczestników</span>
              <span>🌟 Aktywny</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Camp Affiliation */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">{profile.status.festival.camp.emoji}</span>
          Twój Obóz
        </h3>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center text-lg">
            🌿
          </div>
          <div>
            <div className="text-lg font-semibold">{profile.status.festival.camp.value}</div>
            <div className="text-sm text-muted-foreground">45 członków • Uzdrawianie</div>
          </div>
        </div>
        
        <div className="text-sm">
          <span className="text-muted-foreground">Twoja rola: </span>
          <span className="font-medium flex items-center gap-1">
            {profile.status.festival.role.emoji} {profile.status.festival.role.value}
          </span>
        </div>
      </motion.div>

      {/* Festival Timeline */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-sm font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">📅</span>
          Kalendarz Festiwali
        </h3>
        
        <div className="space-y-3">
          {/* Historia Festiwali */}
          {profile.festivalHistory.map((festival, index) => (
            <motion.div
              key={`history-${festival.name}-${festival.year}`}
              className="flex items-center space-x-3 p-2 rounded-lg bg-gray-800/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              
              <div className="flex-1">
                <div className="text-sm font-medium">{festival.name} {festival.year}</div>
                <div className="text-xs text-muted-foreground">
                  {festival.connections} połączeń • {festival.role}
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Historia
              </div>
            </motion.div>
          ))}

          {/* Planowane Festiwale */}
          {profile.plannedFestivals.map((festival, index) => (
            <motion.div
              key={`planned-${festival.name}-${festival.year}`}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + (profile.festivalHistory.length + index) * 0.1 }}
            >
              <div className={`w-3 h-3 rounded-full ${getStatusColor(festival.status)}`} />
              
              <div className="flex-1">
                <div className="text-sm font-medium flex items-center gap-2">
                  {festival.name} {festival.year}
                  <span className="text-lg">{getTicketEmoji(festival.ticketStatus)}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  {formatDateRange(festival.dates.start, festival.dates.end)} • {festival.location}
                </div>
                <div className="text-xs text-purple-300">
                  Rola: {festival.role}
                </div>
                {festival.workshops && festival.workshops.length > 0 && (
                  <div className="text-xs text-blue-300 mt-1">
                    Warsztaty: {festival.workshops.join(', ')}
                  </div>
                )}
                {festival.notes && (
                  <div className="text-xs text-gray-400 mt-1 italic">
                    {festival.notes}
                  </div>
                )}
              </div>
              
              <div className="text-xs text-muted-foreground capitalize">
                {festival.status}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Camp Network */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-sm font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">🏕️</span>
          Sieć Obozów
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {camps.map((camp, index) => (
            <motion.div
              key={camp.name}
              className="p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{camp.symbol}</span>
                <div className="text-sm font-medium">{camp.name}</div>
              </div>
              <div className="text-xs text-muted-foreground">
                {camp.members} członków • {camp.focus}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Insights */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-sm font-medium text-primary mb-3 flex items-center">
          <span className="mr-2">💫</span>
          Wglądy Społeczności
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full flex items-center justify-center text-sm">
              🌊
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Energia Festiwalu</div>
              <div className="text-xs text-muted-foreground">
                Wysoka wibracja transformacji, idealna do ceremonii uzdrawiających
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center text-sm">
              🔥
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Aktywne Połączenia</div>
              <div className="text-xs text-muted-foreground">
                23 nowe połączenia duchowe w ostatnim tygodniu
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center text-sm">
              🌱
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Nadchodzące Ceremonie</div>
              <div className="text-xs text-muted-foreground">
                Ceremonia Pełni Księżyca jutro o 21:00 w Ogrodzie Ziół
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Festival Energy Visualization */}
      <motion.div
        className="relative h-24 overflow-hidden rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
        
        <div className="absolute inset-0 flex items-center justify-center space-x-8">
          {['🎪', '🌙', '🔥', '🌿', '✨'].map((symbol, index) => (
            <motion.div
              key={index}
              className="text-2xl"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
