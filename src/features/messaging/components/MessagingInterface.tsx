import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Profile, MCICIntention, MCICAction } from "@/types/profile";
import IntentionOctagon from './IntentionOctagon';
import ActionMenu from './ActionMenu';
import { useAppStore } from '@/store/useAppStore';
import * as LucideIcons from 'lucide-react';

interface MessagingInterfaceProps {
  profile: Profile;
}

export const MessagingInterface = ({ profile }: MessagingInterfaceProps) => {
  const [selectedIntention, setSelectedIntention] = useState<MCICIntention | null>(null);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const setSelectedProfileId = useAppStore((state) => state.setSelectedProfileId);

  const handleIntentionSelect = (intention: MCICIntention) => {
    setSelectedIntention(intention);
    setIsActionMenuOpen(true);
  };

  const handleActionExecute = (action: MCICAction) => {
    // Tutaj można dodać logikę wykonania akcji
    console.log(`Executing action: ${action.name} for ${profile.name}`);
    
    // Zamknij menu po wykonaniu akcji
    setIsActionMenuOpen(false);
    setSelectedIntention(null);
  };

  const handleCloseActionMenu = () => {
    setIsActionMenuOpen(false);
    setSelectedIntention(null);
  };

  const handleBackToContacts = () => {
    setSelectedProfileId(null);
  };

  const totalActions = profile.intentions.reduce((sum, intention) => sum + intention.actions.length, 0);
  const averageMatchScore = Math.round(
    profile.intentions.reduce((sum, intention) => sum + intention.matchScore, 0) / profile.intentions.length
  );

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pl-PL', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Europe/Warsaw'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBackToContacts}
                className="px-3 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors flex items-center gap-2"
              >
                <LucideIcons.ArrowLeft className="w-4 h-4" />
                Kontakty
              </button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
                  MCIC-8/7 Interface
                </h1>
                <p className="text-sm text-muted-foreground">
                  Micro-Contact Interaction Catalog - AR Navigation System
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-xs px-2 py-1 rounded border border-border bg-muted flex items-center gap-1">
                <LucideIcons.Eye className="w-3 h-3" />
                DESKTOP
              </div>
              <div className="text-xs px-2 py-1 rounded border border-border bg-muted flex items-center gap-1">
                <LucideIcons.Zap className="w-3 h-3" />
                {totalActions} Actions Available
              </div>
              <div className="text-xs px-2 py-1 rounded border border-border bg-muted flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live: {getCurrentTime()} CEST
              </div>
              <button className="px-3 py-1 text-sm border border-border rounded-md hover:bg-muted transition-colors flex items-center gap-2">
                <LucideIcons.Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Enhanced Profile Status Panel */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile Header */}
            <div className="bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border p-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-neural mx-auto mb-3 flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {profile.name.charAt(0)}
                  </span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-background animate-pulse" />
                </div>
                <h3 className="font-semibold">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.archetype}</p>
                <div className="text-xs text-primary mt-1 px-2 py-1 bg-primary/10 rounded">
                  QPI: {(profile.qpi * 100).toFixed(0)}% (Visionary Reason)
                </div>
              </div>
            </div>

            {/* Live Status */}
            <div className="bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-3">
                <LucideIcons.Circle className="w-4 h-4 text-green-400 fill-current" />
                <span className="text-sm font-medium">Live Status</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(profile.status.live).map(([key, value]) => (
                  <div key={key} className="bg-muted/50 p-2 rounded">
                    <div className="text-muted-foreground capitalize">{key}</div>
                    <div className="font-medium flex items-center gap-1">
                      <span>{value.emoji}</span>
                      <span>{value.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cognitive State */}
            <div className="bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-3">
                <LucideIcons.Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">Cognitive State</span>
              </div>
              <div className="space-y-2">
                {Object.entries(profile.status.cognitive).map(([key, value]) => (
                  <div key={key} className="bg-muted/50 p-2 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground capitalize">{key}</span>
                      <div className="flex items-center gap-1 text-xs font-medium">
                        <span>{value.emoji}</span>
                        <span>{value.value}</span>
                      </div>
                    </div>
                    <div className="mt-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500"
                        style={{ width: key === 'load' ? '65%' : '85%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Resonance */}
            <div className="bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-3">
                <LucideIcons.Users className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium">Social Resonance</span>
              </div>
              <div className="space-y-2">
                {Object.entries(profile.status.social).map(([key, value]) => (
                  <div key={key} className="bg-muted/50 p-2 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground capitalize">{key}</span>
                      <div className="flex items-center gap-1 text-xs font-medium">
                        <span>{value.emoji}</span>
                        <span>{value.value}</span>
                      </div>
                    </div>
                    <div className="mt-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-500"
                        style={{ width: '70%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MCIC Stats */}
            <div className="bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-3">
                <LucideIcons.Target className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium">MCIC Overview</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Match:</span>
                  <span className="font-medium text-primary">{averageMatchScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Intentions:</span>
                  <span className="font-medium">{profile.intentions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Actions:</span>
                  <span className="font-medium">{totalActions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selected:</span>
                  <span className="font-medium">
                    {selectedIntention?.name || 'None'}
                  </span>
                </div>
              </div>
            </div>

            {/* Neural Sync Status */}
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20 rounded-lg border p-3">
              <div className="flex items-center gap-2 text-sm">
                <LucideIcons.Zap className="w-4 h-4 text-purple-400" />
                <span className="font-medium">Neural Sync Available</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Enhanced connection quality with core team
              </p>
            </div>
          </div>

          {/* Main Octagon Interface */}
          <div className="lg:col-span-3">
            <div className="bg-glass-backdrop backdrop-blur-ar border-glass-border shadow-ar-glass rounded-lg border">
              <div className="text-center p-6 border-b border-border/50">
                <h2 className="text-xl font-bold">Intention Navigator</h2>
                <p className="text-sm text-muted-foreground">
                  Wybierz intencję komunikacyjną aby zobaczyć dostępne akcje
                </p>
              </div>
              
              <div className="flex justify-center items-center py-12">
                <div className="flex justify-center items-center py-12">
                <IntentionOctagon
                  intentions={profile.intentions}
                  selectedIntention={selectedIntention}
                  onIntentionSelect={handleIntentionSelect}
                />
              </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/5 to-green-600/5 border-green-500/20 rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-intention-optimal" />
                  <span className="text-sm font-medium">Optimal Match (80%+)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Wysokie dopasowanie do profilu osoby. Akcje mają największą szansę powodzenia.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 border-yellow-500/20 rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-intention-moderate" />
                  <span className="text-sm font-medium">Moderate Match (60-79%)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Średnie dopasowanie. Akcje wymagają dostosowania do kontekstu.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/5 to-red-600/5 border-red-500/20 rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-intention-poor" />
                  <span className="text-sm font-medium">Low Match (40-59%)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Niskie dopasowanie. Akcje mogą być nieskuteczne lub niewłaściwe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Menu Overlay */}
      <AnimatePresence>
        {isActionMenuOpen && selectedIntention && (
          <ActionMenu
            intention={selectedIntention}
            onActionExecute={handleActionExecute}
            onClose={handleCloseActionMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
