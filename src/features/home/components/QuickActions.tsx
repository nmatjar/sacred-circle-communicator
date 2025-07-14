import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

interface QuickAction {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  action: () => void;
}

export const QuickActions: React.FC = () => {
  const { setCurrentView } = useAppStore();

  const quickActions: QuickAction[] = [
    {
      id: 'all-contacts',
      name: 'Wszystkie Kontakty',
      description: 'Przeglądaj pełną listę',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500',
      action: () => setCurrentView('contacts')
    },
    {
      id: 'dashboards',
      name: 'Dashboardy',
      description: 'Analityka i raporty',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      action: () => setCurrentView('dashboard')
    },
    {
      id: 'focus-mode',
      name: 'Tryb Skupienia',
      description: 'Wycisz powiadomienia',
      icon: '🎯',
      color: 'from-green-500 to-emerald-500',
      action: () => console.log('Focus mode activated')
    },
    {
      id: 'quick-sync',
      name: 'Szybka Synchronizacja',
      description: 'Sprawdź aktualizacje',
      icon: '🔄',
      color: 'from-orange-500 to-red-500',
      action: () => console.log('Quick sync initiated')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Szybkie Akcje
        </h2>
        <p className="text-gray-400 text-sm">Najczęściej używane funkcje</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={action.action}
            className="relative overflow-hidden rounded-lg p-4 bg-white/5 hover:bg-white/10 transition-all duration-200 text-left group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            
            <div className="relative z-10">
              <div className="text-2xl mb-2">{action.icon}</div>
              <h3 className="font-medium text-white text-sm mb-1">{action.name}</h3>
              <p className="text-xs text-gray-400">{action.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
