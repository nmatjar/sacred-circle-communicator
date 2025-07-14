import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StatusConfiguration } from './StatusConfiguration';

interface PersonalMetric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  color: 'green' | 'yellow' | 'red' | 'blue';
  tooltip: string;
}

const personalMetrics: PersonalMetric[] = [
  {
    label: '🧠',
    value: '0.847',
    trend: 'up',
    color: 'green',
    tooltip: 'QPI'
  },
  {
    label: '✅',
    value: '89%',
    trend: 'stable',
    color: 'blue',
    tooltip: 'Dostępny'
  },
  {
    label: '⚡',
    value: 'Śred.',
    trend: 'down',
    color: 'yellow',
    tooltip: 'Obciążenie'
  },
  {
    label: '💬',
    value: '12min',
    trend: 'up',
    color: 'green',
    tooltip: 'Odpowiedź'
  }
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up': return '↗️';
    case 'down': return '↘️';
    default: return '→';
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case 'green': return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'yellow': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'red': return 'text-red-400 bg-red-400/10 border-red-400/20';
    case 'blue': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
};

export const PersonalOverview: React.FC = () => {
  const [isStatusConfigOpen, setIsStatusConfigOpen] = useState(false);

  const handleStatusSave = (config: unknown) => {
    console.log('Status configuration saved:', config);
    // Tu można dodać logikę zapisywania konfiguracji
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Mój Status
          </h2>
          <p className="text-gray-400 text-sm">Twoje kluczowe wskaźniki komunikacji</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400 font-medium">Dostępny</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-lg p-4 ${getColorClasses(metric.color)}`}
          >
            <div className="text-center">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">{metric.label}</span>
                <span className="text-xs">{getTrendIcon(metric.trend)}</span>
              </div>
              <div className="text-lg font-bold mb-1">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.tooltip}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          Ostatnia aktualizacja: {new Date().toLocaleTimeString('pl-PL', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
        <button 
          onClick={() => setIsStatusConfigOpen(true)}
          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Konfiguruj Status →
        </button>
      </div>
    </motion.div>

    <StatusConfiguration
      isOpen={isStatusConfigOpen}
      onClose={() => setIsStatusConfigOpen(false)}
      onSave={handleStatusSave}
    />
    </>
  );
};
