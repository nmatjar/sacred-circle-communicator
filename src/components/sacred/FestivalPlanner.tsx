import React from 'react';
import { motion } from 'framer-motion';
import type { SacredProfile } from '@/types/sacred';

interface FestivalPlannerProps {
  profile: SacredProfile;
}

export function FestivalPlanner({ profile }: FestivalPlannerProps) {
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

  // Mapowanie statusów na opisy
  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Potwierdzone';
      case 'planning': return 'W planach';
      case 'interested': return 'Zainteresowany/a';
      case 'applying': return 'Aplikuję';
      default: return 'Nieznany';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-300 mb-2">
          🗓️ Planer Festiwali
        </h2>
        <p className="text-gray-300">
          Planowane wydarzenia i festiwale świadomościowe
        </p>
      </div>

      {/* Planowane Festiwale */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">🎪</span>
          Nadchodzące Festiwale
        </h3>
        
        {profile.plannedFestivals.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <div className="text-4xl mb-2">🌟</div>
            <p>Brak planowanych festiwali</p>
            <p className="text-sm">Dodaj swoje plany festiwalowe!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {profile.plannedFestivals.map((festival, index) => (
              <motion.div
                key={`planned-${festival.name}-${festival.year}`}
                className="p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold text-white">
                        {festival.name} {festival.year}
                      </h4>
                      <span className="text-2xl">{getTicketEmoji(festival.ticketStatus)}</span>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(festival.status)}`} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-300">📅</span>
                        <span>{formatDateRange(festival.dates.start, festival.dates.end)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-blue-300">📍</span>
                        <span>{festival.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-green-300">👤</span>
                        <span>Rola: {festival.role}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-300">🎯</span>
                        <span>Status: {getStatusDescription(festival.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {festival.workshops && festival.workshops.length > 0 && (
                  <div className="mb-3">
                    <div className="text-sm font-medium text-blue-300 mb-1">
                      🎓 Warsztaty:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {festival.workshops.map((workshop, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-900/30 text-blue-200 rounded-full text-xs"
                        >
                          {workshop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {festival.camp && (
                  <div className="mb-3">
                    <div className="text-sm">
                      <span className="text-orange-300">🏕️ Obóz:</span>
                      <span className="ml-2">{festival.camp}</span>
                    </div>
                  </div>
                )}

                {festival.notes && (
                  <div className="mt-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="text-sm font-medium text-gray-300 mb-1">
                      📝 Notatki:
                    </div>
                    <div className="text-sm text-gray-400 italic">
                      {festival.notes}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Historia Festiwali */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">📚</span>
          Historia Festiwali
        </h3>
        
        <div className="space-y-3">
          {profile.festivalHistory.map((festival, index) => (
            <motion.div
              key={`history-${festival.name}-${festival.year}`}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">
                    {festival.name} {festival.year}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {festival.impact === 'transformative' && '🌟 Transformacyjny'}
                    {festival.impact === 'meaningful' && '💫 Znaczący'}
                    {festival.impact === 'enjoyable' && '😊 Przyjemny'}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {festival.connections} połączeń • {festival.role}
                  {festival.camp && ` • ${festival.camp}`}
                </div>
                {festival.workshops && festival.workshops.length > 0 && (
                  <div className="text-xs text-blue-300 mt-1">
                    Warsztaty: {festival.workshops.join(', ')}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Statystyki */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Statystyki Festiwalowe
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-300">
              {profile.plannedFestivals.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Planowane
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300">
              {profile.festivalHistory.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Odwiedzone
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">
              {profile.festivalHistory.reduce((sum, f) => sum + f.connections, 0)}
            </div>
            <div className="text-sm text-muted-foreground">
              Połączenia
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">
              {profile.festivalHistory.filter(f => f.impact === 'transformative').length}
            </div>
            <div className="text-sm text-muted-foreground">
              Transformacyjne
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rekomendacje */}
      <motion.div
        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center">
          <span className="mr-2">💡</span>
          Rekomendowane Festiwale
        </h3>
        
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30">
            <div className="font-medium text-green-300">🌿 Festiwal Zdrowego Stylu Życia</div>
            <div className="text-sm text-muted-foreground">
              24-27 Lipiec 2025 • ARCHE Pałac i Folwark, Mazowieckie
            </div>
            <div className="text-xs text-green-400 mt-1">
              Dopasowanie: 95% • Wellness, ziołolecznictwo, natura
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <div className="font-medium text-purple-300">🔮 Conscious Man</div>
            <div className="text-sm text-muted-foreground">
              23-27 Lipiec 2025 • Ziemiary 56, Łódzkie
            </div>
            <div className="text-xs text-purple-400 mt-1">
              Dopasowanie: 88% • Męska energia, szamanizm, transformacja
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <div className="font-medium text-orange-300">🎪 Festiwal Wdzięczności</div>
            <div className="text-sm text-muted-foreground">
              25 Lipiec - 13 Sierpień 2025 • Nida 74A, Świętokrzyskie
            </div>
            <div className="text-xs text-orange-400 mt-1">
              Dopasowanie: 92% • Natura, wspólnota, ceremonie
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
