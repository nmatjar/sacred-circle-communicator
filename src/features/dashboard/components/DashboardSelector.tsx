import React from 'react';
import { motion } from 'framer-motion';
import { dashboardConfigs } from '@/data/dashboardConfigs';
import type { DashboardConfig } from '@/types/team';

interface DashboardSelectorProps {
  onSelectDashboard: (config: DashboardConfig) => void;
}

export const DashboardSelector: React.FC<DashboardSelectorProps> = ({ onSelectDashboard }) => {
  return (
    <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Wybierz Dashboard
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Wybierz dashboard dostosowany do Twojego stylu pracy i potrzeb
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dashboardConfigs.map((config) => (
          <motion.button
            key={config.id}
            onClick={() => onSelectDashboard(config)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 text-left transition-colors"
          >
            <h3 className="font-semibold text-lg mb-2">{config.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{config.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                {config.metrics.length} metryk • {config.quickActions.length} akcji
              </div>
              <div className="text-xs text-cyan-400">
                Wybierz →
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
