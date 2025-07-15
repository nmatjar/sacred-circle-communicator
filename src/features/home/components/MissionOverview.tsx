import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  currentMission, 
  missionProgress, 
  missionInsights, 
  teamCapacities,
  calculateMissionHealth,
  getTeamRecommendations
} from '../../../data/missionData';
import type { MissionInsight } from '../../../types/mission';

export const MissionOverview: React.FC = () => {
  const [activeView, setActiveView] = useState<'overview' | 'objectives' | 'team' | 'insights'>('overview');
  const [selectedInsight, setSelectedInsight] = useState<MissionInsight | null>(null);

  const missionHealth = useMemo(() => 
    calculateMissionHealth(currentMission, missionProgress), 
    []
  );

  const teamRecommendations = useMemo(() => 
    getTeamRecommendations(teamCapacities, missionInsights), 
    []
  );

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'good': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'critical': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return '🚀';
      case 'risk': return '⚠️';
      case 'blocker': return '🚫';
      case 'suggestion': return '💡';
      case 'synergy': return '⚡';
      default: return '📊';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'border-l-red-500 bg-red-500/10';
      case 'high': return 'border-l-orange-500 bg-orange-500/10';
      case 'medium': return 'border-l-yellow-500 bg-yellow-500/10';
      case 'low': return 'border-l-green-500 bg-green-500/10';
      default: return 'border-l-gray-500 bg-gray-500/10';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'engineering': return 'bg-blue-500/20 text-blue-400';
      case 'design': return 'bg-purple-500/20 text-purple-400';
      case 'product': return 'bg-green-500/20 text-green-400';
      case 'strategy': return 'bg-orange-500/20 text-orange-400';
      case 'research': return 'bg-pink-500/20 text-pink-400';
      case 'operations': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'short'
    });
  };

  const daysUntilDeadline = Math.ceil(
    (new Date(currentMission.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
      data-mission-overview
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {currentMission.title}
            </h2>
            <p className="text-gray-300 text-sm mb-3">{currentMission.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>🎯 {formatDate(currentMission.targetDate)}</span>
              <span>⏱️ {daysUntilDeadline} dni pozostało</span>
              <span>👥 {teamCapacities.length} członków zespołu</span>
            </div>
          </div>
          
          {/* Mission Health Score */}
          <div className={`px-4 py-3 rounded-lg border ${getHealthColor(missionHealth.status)}`}>
            <div className="text-center">
              <div className="text-2xl font-bold">{missionHealth.score}</div>
              <div className="text-xs uppercase tracking-wide">{missionHealth.status}</div>
            </div>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                strokeDasharray={`${missionProgress.overall}, 100`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{missionProgress.overall}%</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400">{missionProgress.teamEfficiency * 100}%</div>
                <div className="text-xs text-gray-400">Efektywność</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">{missionProgress.timeline.projected}%</div>
                <div className="text-xs text-gray-400">Prognoza</div>
              </div>
              <div className="text-center">
                <div className={`text-lg font-bold ${missionProgress.momentum > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {missionProgress.momentum > 0 ? '↗' : '↘'} {Math.abs(missionProgress.momentum * 100).toFixed(0)}%
                </div>
                <div className="text-xs text-gray-400">Momentum</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">{Math.round(missionProgress.riskScore * 100)}%</div>
                <div className="text-xs text-gray-400">Ryzyko</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-white/10">
        {[
          { id: 'overview', label: 'Przegląd', emoji: '📊' },
          { id: 'objectives', label: 'Cele', emoji: '🎯' },
          { id: 'team', label: 'Zespół', emoji: '👥' },
          { id: 'insights', label: 'Insights', emoji: '🧠' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id as 'overview' | 'objectives' | 'team' | 'insights')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeView === tab.id
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
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeView === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Vision */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">🌟 Wizja</h3>
                <p className="text-gray-300">{currentMission.vision}</p>
              </div>

              {/* Key Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">📈 Kluczowe Metryki</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentMission.keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">{metric.name}</span>
                        <span className="text-xs text-gray-500">{metric.unit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">{metric.current}</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-lg text-cyan-400">{metric.target}</span>
                      </div>
                      <div className="mt-2 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((metric.current / metric.target) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Recommendations */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">💡 Rekomendacje dla Zespołu</h3>
                <div className="space-y-2">
                  {teamRecommendations.map((recommendation, index) => (
                    <div key={index} className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-sm text-gray-300">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeView === 'objectives' && (
            <motion.div
              key="objectives"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {currentMission.objectives.map((objective) => (
                <div key={objective.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-white">{objective.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(objective.category)}`}>
                          {objective.category}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          objective.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
                          objective.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {objective.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{objective.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>📅 {formatDate(objective.deadline)}</span>
                        <span>⏱️ {objective.actualHours}h / {objective.estimatedHours}h</span>
                        <span>👥 {objective.assignedTo.length} osób</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{objective.progress}%</div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        objective.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        objective.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
                        objective.status === 'blocked' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {objective.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-3 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${objective.progress}%` }}
                    />
                  </div>

                  {/* Blockers */}
                  {objective.blockers.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-sm font-medium text-red-400 mb-1">🚫 Blokady:</h5>
                      {objective.blockers.map((blocker, index) => (
                        <div key={index} className="text-xs text-gray-400 bg-red-500/10 px-2 py-1 rounded">
                          {blocker}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {activeView === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamCapacities.map((member) => (
                  <div key={member.profileId} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-white">{member.profileId}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        member.collaborationMode === 'OPEN' ? 'bg-green-500/20 text-green-400' :
                        member.collaborationMode === 'OFFER' ? 'bg-blue-500/20 text-blue-400' :
                        member.collaborationMode === 'SELECTIVE' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {member.collaborationMode}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center">
                        <div className="text-sm font-bold text-cyan-400">{member.availableHours}h</div>
                        <div className="text-xs text-gray-400">Dostępność</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-sm font-bold ${
                          member.cognitiveLoad > 0.8 ? 'text-red-400' :
                          member.cognitiveLoad > 0.6 ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>
                          {Math.round(member.cognitiveLoad * 100)}%
                        </div>
                        <div className="text-xs text-gray-400">Obciążenie</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-sm font-bold ${
                          member.energyLevel > 0.8 ? 'text-green-400' :
                          member.energyLevel > 0.6 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {Math.round(member.energyLevel * 100)}%
                        </div>
                        <div className="text-xs text-gray-400">Energia</div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-xs text-gray-400 mb-1">Ekspertyza:</div>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-400 mb-1">Aktualny focus:</div>
                      <div className="flex flex-wrap gap-1">
                        {member.currentFocus.map((focus) => (
                          <span key={focus} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeView === 'insights' && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {missionInsights.map((insight, index) => (
                <div 
                  key={index} 
                  className={`border-l-4 rounded-lg p-4 cursor-pointer transition-all hover:bg-white/5 ${getUrgencyColor(insight.urgency)}`}
                  onClick={() => setSelectedInsight(insight)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getInsightIcon(insight.type)}</span>
                      <h4 className="font-semibold text-white">{insight.title}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      insight.urgency === 'critical' ? 'bg-red-500/20 text-red-400' :
                      insight.urgency === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      insight.urgency === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {insight.urgency}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{insight.description}</p>
                  
                  {insight.actionable && (
                    <div className="bg-white/5 rounded p-2">
                      <div className="text-xs text-gray-400 mb-1">💡 Sugerowane działania:</div>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {insight.suggestedActions.slice(0, 2).map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <span className="text-cyan-400">•</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Insight Detail Modal */}
      <AnimatePresence>
        {selectedInsight && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setSelectedInsight(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-16 lg:inset-32 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl z-50 overflow-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getInsightIcon(selectedInsight.type)}</span>
                    <h3 className="text-xl font-bold text-white">{selectedInsight.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedInsight(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedInsight.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">🎯 Dotknięte cele:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInsight.affectedObjectives.map((objId) => {
                        const objective = currentMission.objectives.find(obj => obj.id === objId);
                        return objective ? (
                          <span key={objId} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded">
                            {objective.title}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">💡 Sugerowane działania:</h4>
                    <ul className="space-y-2">
                      {selectedInsight.suggestedActions.map((action, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className="text-gray-300">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
