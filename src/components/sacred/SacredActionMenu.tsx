import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Clock, Target, Sparkles } from 'lucide-react';
import type { SacredIntention, SacredAction } from '@/types/sacred';

interface SacredActionMenuProps {
  intention: SacredIntention;
  onActionExecute: (action: SacredAction) => void;
  onClose: () => void;
  className?: string;
}

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case 'ceremony': return '🔥';
    case 'gathering': return '👥';
    case 'private': return '🤝';
    case 'community': return '🏕️';
    case 'digital': return '💻';
    default: return '✨';
  }
};

const getChannelColor = (channel: string) => {
  switch (channel) {
    case 'ceremony': return 'bg-red-500/10 text-red-400 border-red-500/20';
    case 'gathering': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'private': return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'community': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'digital': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

const getElementEmoji = (element: string) => {
  switch (element) {
    case 'Earth': return '🌍';
    case 'Water': return '💧';
    case 'Fire': return '🔥';
    case 'Air': return '💨';
    default: return '✨';
  }
};

export function SacredActionMenu({
  intention,
  onActionExecute,
  onClose,
  className
}: SacredActionMenuProps) {
  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 ${className || ''}`}>
        {/* Sacred Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        {/* Sacred Menu Container */}
        <motion.div 
          className="absolute inset-4 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="h-full bg-gradient-sacred backdrop-blur-ar border-2 border-primary/30 shadow-ar-glass rounded-xl">
            {/* Sacred Header */}
            <div className="p-6 border-b border-primary/20 bg-black/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center text-3xl shadow-intention-glow"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {intention.symbol}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {intention.name}
                    </h2>
                    <p className="text-lg text-amber-300 mb-2">
                      {intention.translation}
                    </p>
                    <p className="text-sm text-gray-300">
                      {intention.question}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-xs px-3 py-2 rounded-full border border-amber-400/50 bg-amber-400/10 text-amber-300">
                    <Sparkles className="w-3 h-3 mr-1 inline" />
                    Rezonans: {intention.resonanceScore}%
                  </div>
                  <div className="text-xs px-3 py-2 rounded-full border border-gray-500 bg-gray-800 text-gray-200">
                    Element: {getElementEmoji(intention.element)} {intention.element}
                  </div>
                  <button 
                    onClick={onClose}
                    className="h-10 w-10 rounded-full hover:bg-red-500/20 flex items-center justify-center transition-sacred border border-red-400/30"
                  >
                    <X className="w-5 h-5 text-red-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sacred Actions Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <motion.div 
                className="grid gap-6 md:grid-cols-2"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {intention.actions.map((action, index) => (
                  <motion.div
                    key={action.id}
                    className="cursor-pointer transition-sacred hover:scale-105"
                    initial={{ 
                      transform: 'translateY(100%) scale(0.8)',
                      opacity: 0
                    }}
                    animate={{ 
                      transform: 'translateY(0) scale(1)',
                      opacity: 1
                    }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                    onClick={() => onActionExecute(action)}
                  >
                    <div className="bg-black/85 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 rounded-xl p-6 h-full shadow-lg">
                      {/* Action Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-primary">
                          {action.name}
                        </h3>
                        <div className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1 ${getChannelColor(action.channel)}`}>
                          <span className="text-sm">{getChannelIcon(action.channel)}</span>
                          {action.channel}
                        </div>
                      </div>

                      {/* Template */}
                      <div className="text-sm text-gray-200 mb-4 p-3 bg-gray-800/50 rounded-lg border-l-4 border-amber-400/70">
                        <strong className="text-amber-300">Szablon:</strong><br />
                        {action.template}
                      </div>
                      
                      {/* Example */}
                      <div className="text-sm text-gray-200 bg-blue-900/30 p-3 rounded-lg border border-blue-400/30 mb-4">
                        <strong className="text-blue-300">Przykład:</strong><br />
                        {action.example}
                      </div>

                      {/* Elements */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-muted-foreground">Elementy:</span>
                        {action.elements.map((element) => (
                          <span 
                            key={element}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {getElementEmoji(element)} {element}
                          </span>
                        ))}
                      </div>

                      {/* Optimal Timing */}
                      <div className="text-xs text-muted-foreground mb-4 p-2 bg-muted/20 rounded border-l-2 border-primary/30">
                        <strong>Optymalne Timing:</strong> {action.optimalTiming}
                      </div>
                      
                      {/* Sacred Metrics */}
                      <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1 p-2 bg-muted/20 rounded">
                          <Target className="w-3 h-3 text-primary" />
                          <span>{action.estimatedImpact}% wpływ</span>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-muted/20 rounded">
                          <Zap className="w-3 h-3 text-primary" />
                          <span>{action.energyRequired} energia</span>
                        </div>
                        <div className="flex items-center gap-1 p-2 bg-muted/20 rounded">
                          <Clock className="w-3 h-3 text-primary" />
                          <span>Teraz</span>
                        </div>
                      </div>
                      
                      {/* Sacred Execute Button */}
                      <motion.button 
                        className="w-full mt-4 px-4 py-3 text-sm border-2 border-primary/30 rounded-lg hover:bg-primary/10 transition-sacred flex items-center justify-center gap-2 bg-gradient-sacred text-primary font-medium shadow-intention-glow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Sparkles className="w-4 h-4" />
                        Wykonaj Świętą Akcję
                        <Sparkles className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Sacred Footer */}
              <motion.div
                className="mt-8 text-center p-4 bg-gradient-lunar rounded-lg border border-primary/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">Święta Mądrość:</span> Każda akcja jest błogosławiona przez {intention.element} i wspierana przez energie {intention.lunarOptimal.join(', ')} księżyca
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
