import React from 'react';
import { motion } from 'framer-motion';
import type { DashboardConfig, DashboardMetric } from '@/types/team';

interface DashboardProps {
  config: DashboardConfig;
}

const MetricCard = ({ metric }: { metric: DashboardMetric }) => {
  const getValueColor = (value: number, thresholds: DashboardMetric['thresholds']) => {
    if (value >= thresholds.good) return 'text-green-400';
    if (value >= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getProgressColor = (value: number, thresholds: DashboardMetric['thresholds']) => {
    if (value >= thresholds.good) return 'bg-green-400';
    if (value >= thresholds.warning) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm">{metric.name}</h4>
        <span className="text-xs text-gray-400">{metric.unit}</span>
      </div>
      
      <div className="flex items-end gap-2 mb-3">
        <span className={`text-2xl font-bold ${getValueColor(metric.value, metric.thresholds)}`}>
          {metric.value}
        </span>
        <span className="text-sm text-gray-400">/ {metric.target}</span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(metric.value, metric.thresholds)}`}
          style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
        />
      </div>

      <p className="text-xs text-gray-400">{metric.description}</p>
    </motion.div>
  );
};

const AlertCard = ({ alert }: { alert: DashboardConfig['alerts'][0] }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-400 bg-red-400/10';
      case 'medium': return 'border-yellow-400 bg-yellow-400/10';
      case 'low': return 'border-blue-400 bg-blue-400/10';
      default: return 'border-gray-400 bg-gray-400/10';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return '🚨';
      case 'medium': return '⚠️';
      case 'low': return 'ℹ️';
      default: return '📋';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`border rounded-lg p-3 ${getSeverityColor(alert.severity)}`}
    >
      <div className="flex items-start gap-2">
        <span className="text-lg">{getSeverityIcon(alert.severity)}</span>
        <div className="flex-1">
          <h5 className="font-medium text-sm mb-1">{alert.title}</h5>
          <p className="text-xs text-gray-300 mb-2">{alert.message}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{alert.timestamp}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              alert.severity === 'high' ? 'bg-red-500/20 text-red-300' :
              alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
              'bg-blue-500/20 text-blue-300'
            }`}>
              {alert.severity.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Dashboard: React.FC<DashboardProps> = ({ config }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {config.name}
          </h2>
          <p className="text-gray-400 text-sm mt-1">{config.description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Ostatnia aktualizacja</div>
          <div className="text-sm font-medium">{config.lastUpdated}</div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Kluczowe Metryki</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </div>

      {/* Alerts */}
      {config.alerts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Alerty i Powiadomienia</h3>
          <div className="space-y-3">
            {config.alerts.map((alert, index) => (
              <AlertCard key={index} alert={alert} />
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Szybkie Akcje</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {config.quickActions.map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 text-left transition-colors"
            >
              <div className="text-lg mb-1">{action.icon}</div>
              <div className="text-sm font-medium">{action.name}</div>
              <div className="text-xs text-gray-400">{action.description}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
