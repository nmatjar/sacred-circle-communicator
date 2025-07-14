import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { MCICAction, MCICIntention } from '@/types/profile';

interface ActionMenuProps {
  intention: MCICIntention;
  onActionExecute: (action: MCICAction) => void;
  onClose: () => void;
  className?: string;
}

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case 'chat': return 'MessageCircle';
    case 'email': return 'Mail';
    case 'meeting': return 'Video';
    case 'document': return 'FileText';
    case 'public': return 'Users';
    default: return 'Send';
  }
};

const getChannelColor = (channel: string) => {
  switch (channel) {
    case 'chat': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'email': return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'meeting': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'document': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    case 'public': return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

const ActionMenu: React.FC<ActionMenuProps> = ({
  intention,
  onActionExecute,
  onClose,
  className
}) => {
  return (
    <div className={`fixed inset-0 z-50 ${className || ''}`}>
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      {/* Menu Container */}
      <motion.div 
        className="absolute inset-4 overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border">
          {/* Header */}
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-neural flex items-center justify-center">
                  {React.createElement(
                    LucideIcons[intention.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>,
                    { className: "w-6 h-6 text-primary-foreground" }
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{intention.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {intention.question}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-xs px-2 py-1 rounded border border-border bg-muted">
                  Match: {intention.matchScore}%
                </div>
                <button 
                  onClick={onClose}
                  className="h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <LucideIcons.X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {intention.actions.map((action, index) => {
                const ChannelIcon = LucideIcons[getChannelIcon(action.channel) as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
                
                return (
                  <motion.div
                    key={action.id}
                    className="cursor-pointer transition-all duration-300 hover:scale-105"
                    initial={{ 
                      transform: 'translateY(100%) scale(0.8)',
                      opacity: 0
                    }}
                    animate={{ 
                      transform: 'translateY(0) scale(1)',
                      opacity: 1
                    }}
                    transition={{ 
                      delay: index * 50 / 1000,
                      duration: 0.4,
                      ease: [0.2, 0, 0.2, 1]
                    }}
                    onClick={() => onActionExecute(action)}
                  >
                    <div className="bg-gradient-intention border-border/50 hover:border-primary/50 rounded-lg border p-4 h-full">
                      {/* Action Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base font-semibold">
                          {action.name}
                        </h3>
                        <div className={`text-xs px-2 py-1 rounded border ${getChannelColor(action.channel)}`}>
                          <ChannelIcon className="w-3 h-3 mr-1 inline" />
                          {action.channel}
                        </div>
                      </div>

                      {/* Template */}
                      <div className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {action.template}
                      </div>
                      
                      {/* Example */}
                      <div className="text-xs text-accent-foreground bg-accent/10 p-2 rounded border-l-2 border-accent mb-3">
                        <strong>Przykład:</strong> {action.example}
                      </div>
                      
                      {/* Metrics */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <LucideIcons.Target className="w-3 h-3" />
                          <span>{action.estimatedImpact}% impact</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <LucideIcons.Clock className="w-3 h-3" />
                          <span>{action.executionTime}min</span>
                        </div>
                      </div>
                      
                      {/* Execute Button */}
                      <button className="w-full mt-3 px-3 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors flex items-center justify-center gap-2">
                        <LucideIcons.Zap className="w-4 h-4" />
                        Wykonaj Akcję
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ActionMenu;
