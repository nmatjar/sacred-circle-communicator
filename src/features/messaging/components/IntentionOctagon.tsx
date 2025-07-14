import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { MCICIntention } from '@/types/profile';

interface IntentionOctagonProps {
  intentions: MCICIntention[];
  selectedIntention: MCICIntention | null;
  onIntentionSelect: (intention: MCICIntention) => void;
  className?: string;
}

const getIntentionState = (matchScore: number): 'optimal' | 'moderate' | 'poor' | 'disabled' => {
  if (matchScore >= 80) return 'optimal';
  if (matchScore >= 60) return 'moderate';
  if (matchScore >= 40) return 'poor';
  return 'disabled';
};

const IntentionOctagon: React.FC<IntentionOctagonProps> = ({
  intentions,
  selectedIntention,
  onIntentionSelect,
  className
}) => {
  // Pozycje wierzchołków ośmiokąta (w stopniach)
  const octagonPositions = [0, 45, 90, 135, 180, 225, 270, 315];

  const getVertexPosition = (index: number, radius: number) => {
    const angle = (octagonPositions[index] * Math.PI) / 180;
    const x = 50 + radius * Math.cos(angle - Math.PI / 2);
    const y = 50 + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };

  const getIntentionStateClass = (intention: MCICIntention) => {
    const state = getIntentionState(intention.matchScore);
    const baseClasses = 'transition-all duration-500';
    
    switch (state) {
      case 'optimal':
        return `${baseClasses} text-intention-optimal shadow-intention-glow border-intention-optimal`;
      case 'moderate':
        return `${baseClasses} text-intention-moderate shadow-intention-glow border-intention-moderate`;
      case 'poor':
        return `${baseClasses} text-intention-poor shadow-intention-glow border-intention-poor`;
      case 'disabled':
        return `${baseClasses} text-intention-disabled border-intention-disabled opacity-50`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className={`relative w-96 h-96 mx-auto ${className || ''}`}>
      {/* Tło ośmiokąta z efektem neural network */}
      <div className="absolute inset-0 bg-gradient-neural rounded-full opacity-10 animate-neural-pulse" />
      
      {/* Główny ośmiokąt */}
      <svg
        className="absolute inset-0 w-full h-full animate-octagon-rotate"
        viewBox="0 0 100 100"
        style={{ animationDuration: '60s' }}
      >
        {/* Linie łączące wierzchołki */}
        {octagonPositions.map((_, index) => {
          const pos1 = getVertexPosition(index, 35);
          const pos2 = getVertexPosition((index + 1) % 8, 35);
          return (
            <line
              key={`edge-${index}`}
              x1={pos1.x}
              y1={pos1.y}
              x2={pos2.x}
              y2={pos2.y}
              stroke="hsl(var(--border))"
              strokeWidth="0.2"
              opacity="0.5"
            />
          );
        })}
        
        {/* Linie do centrum */}
        {octagonPositions.map((_, index) => {
          const pos = getVertexPosition(index, 35);
          return (
            <line
              key={`center-${index}`}
              x1="50"
              y1="50"
              x2={pos.x}
              y2={pos.y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.1"
              opacity="0.3"
            />
          );
        })}
      </svg>

      {/* Wierzchołki z intencjami */}
      {intentions.map((intention, index) => {
        const position = getVertexPosition(index, 45);
        const IconComponent = LucideIcons[intention.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
        const isSelected = selectedIntention?.id === intention.id;
        const intentionState = getIntentionState(intention.matchScore);
        const isDisabled = intentionState === 'disabled';

        return (
          <motion.div
            key={intention.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => !isDisabled && onIntentionSelect(intention)}
          >
            {/* Wierzchołek */}
            <div
              className={`
                relative w-16 h-16 rounded-full border-2 backdrop-blur-ar
                flex items-center justify-center
                hover:scale-110 transform transition-all duration-300
                bg-glass-backdrop border-glass-border shadow-ar-glass
                ${getIntentionStateClass(intention)}
                ${isSelected ? 'scale-125 animate-intention-glow' : ''}
                ${isDisabled ? 'cursor-not-allowed' : ''}
              `}
            >
              {IconComponent && (
                <IconComponent className="w-6 h-6" />
              )}
              
              {/* Match score indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-background text-foreground text-xs flex items-center justify-center font-bold border">
                {intention.matchScore}
              </div>
            </div>

            {/* Tooltip z nazwą intencji */}
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-popover text-popover-foreground px-3 py-1 rounded-lg text-sm font-medium shadow-lg border whitespace-nowrap">
                {intention.name}
                <div className="text-xs text-muted-foreground mt-1">
                  {intention.question}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Centrum ośmiokąta */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-gradient-neural border-2 border-primary/50 flex items-center justify-center shadow-neural-glow">
          <div className="text-xs font-bold text-primary-foreground">MCIC</div>
        </div>
      </div>
    </div>
  );
};

export default IntentionOctagon;
