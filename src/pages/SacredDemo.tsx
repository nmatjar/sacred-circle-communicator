import { useState } from 'react';
import { motion } from 'framer-motion';
import { SacredCircleInterface } from '@/components/sacred/SacredCircleInterface';
import { SacredStatusDisplay } from '@/components/sacred/SacredStatusDisplay';
import { SacredActionMenu } from '@/components/sacred/SacredActionMenu';
import { SacredStatusEditor } from '@/components/sacred/SacredStatusEditor';
import { VibrationalCommunication } from '@/components/sacred/VibrationalCommunication';
import { IntentionCircle } from '@/components/sacred/IntentionCircle';
import { ElementalIntelligence } from '@/components/sacred/ElementalIntelligence';
import { FestivalIntegration } from '@/components/sacred/FestivalIntegration';
import { SacredProfileDetails } from '@/components/sacred/SacredProfileDetails';
import SacredInfo from '@/components/sacred/SacredInfo';
import DevicePlan from '@/pages/DevicePlan';
import { sacredProfiles } from '@/data/sacred/sacredProfiles';
import type { SacredIntentionId, SacredProfile, SacredAction, SacredStatus } from '@/types/sacred';

type SacredFunction = 
  | 'vibrational-communication'
  | 'intention-circle'
  | 'elemental-intelligence'
  | 'festival-integration'
  | 'device-plan'
  | null;

export function SacredDemo() {
  const [selectedProfile, setSelectedProfile] = useState<SacredProfile>(sacredProfiles[0]);
  const [selectedIntention, setSelectedIntention] = useState<SacredIntentionId | null>(null);
  const [showActionMenu, setShowActionMenu] = useState<boolean>(false);
  const [showStatusEditor, setShowStatusEditor] = useState<boolean>(false);
  const [activeSacredFunction, setActiveSacredFunction] = useState<SacredFunction>(null);

  const handleIntentionSelect = (intentionId: SacredIntentionId) => {
    setSelectedIntention(intentionId);
    setShowActionMenu(true);
    console.log('Selected intention:', intentionId);
  };

  const handleProfileChange = (profile: SacredProfile) => {
    setSelectedProfile(profile);
    setSelectedIntention(null);
    setShowActionMenu(false);
  };

  const handleActionExecute = (action: SacredAction) => {
    console.log('Executing action:', action);
    // Tutaj można dodać logikę wykonania akcji
    alert(`Wykonuję akcję: ${action.name}\n\nSzablon: ${action.template}\n\nPrzykład: ${action.example}`);
    setShowActionMenu(false);
  };

  const handleCloseActionMenu = () => {
    setShowActionMenu(false);
  };

  const handleStatusUpdate = (newStatus: SacredStatus) => {
    setSelectedProfile(prev => ({
      ...prev,
      status: newStatus
    }));
  };

  const handleCloseStatusEditor = () => {
    setShowStatusEditor(false);
  };

  // Znajdź wybraną intencję w profilu
  const currentIntention = selectedIntention 
    ? selectedProfile.intentions.find(intention => intention.id === selectedIntention)
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Concept Notice */}
      <motion.div
        className="bg-amber-900/20 border-b border-amber-500/30 py-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-200">
            <span className="text-lg">✨</span>
            <span className="text-sm font-medium">
              KONCEPCJA WIZJI - Osoby i wydarzenia nie są powiązane z prawdziwymi. 
              Działam w przestrzeni, żeby razem zmaterializować tą wizję.
            </span>
            <span className="text-lg">✨</span>
          </div>
          <div className="mt-1 text-xs text-amber-300/80">
            Kontakt: mateusz@inteligentnakariera.pl - Współtwórzmy przyszłość komunikacji festiwalowej
          </div>
        </div>
      </motion.div>

      {/* Sacred Header */}
      <motion.header
        className="bg-gradient-sacred text-primary-foreground py-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            animate={{
              scale: [1, 1.02, 1],
              textShadow: [
                "0 0 10px rgba(255,215,0,0.5)",
                "0 0 20px rgba(255,215,0,0.8)",
                "0 0 10px rgba(255,215,0,0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌿 Sacred Circle Communicator
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Pierwsza platforma komunikacyjna dla społeczności festiwali świadomościowych
          </motion.p>
          <motion.div
            className="mt-4 text-sm opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Łącząc dusze przez starożytną mądrość i nowoczesną technologię
          </motion.div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Selection */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-ar-glass">
              <h2 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <span className="mr-2">👥</span>
                Wybierz Profil Świętego
              </h2>
              
              <div className="space-y-3">
                {sacredProfiles.map((profile) => (
                  <motion.button
                    key={profile.id}
                    onClick={() => handleProfileChange(profile)}
                    className={`
                      w-full p-4 rounded-lg border-2 transition-sacred text-left
                      ${selectedProfile.id === profile.id 
                        ? 'border-primary bg-primary/10 shadow-intention-glow' 
                        : 'border-border/50 bg-card/30 hover:border-primary/50'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">
                        {profile.archetype === "Shaman" && "🔮"}
                        {profile.archetype === "Herbalist" && "🌿"}
                        {profile.archetype === "Craftsperson" && "🔨"}
                        {profile.archetype === "Dancer" && "💃"}
                        {profile.archetype === "Keeper" && "📚"}
                        {profile.archetype === "Alchemist" && "⚗️"}
                      </div>
                      <div>
                        <div className="font-medium">{profile.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {profile.sacredName}
                        </div>
                        <div className="text-xs text-primary">
                          {profile.archetype}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Selected Profile Details */}
              <motion.div
                className="mt-6 p-4 bg-gradient-earth rounded-lg"
                key={selectedProfile.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-medium text-primary mb-2">
                  Rezonans Wibracyjny
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duchowy:</span>
                    <span className="text-intention-optimal">
                      {selectedProfile.vibrationalResonance.spiritual}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Elementalny:</span>
                    <span className="text-intention-optimal">
                      {selectedProfile.vibrationalResonance.elemental}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Księżycowy:</span>
                    <span className="text-intention-moderate">
                      {selectedProfile.vibrationalResonance.lunar}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Festiwalowy:</span>
                    <span className="text-intention-optimal">
                      {selectedProfile.vibrationalResonance.festival}%
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sacred Circle Interface */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-ar-glass">
              <h2 className="text-xl font-semibold text-primary mb-6 text-center flex items-center justify-center">
                <span className="mr-2">🌙</span>
                Święty Krąg Intencji
              </h2>
              
              <SacredCircleInterface
                profile={selectedProfile}
                onIntentionSelect={handleIntentionSelect}
                className="mb-6"
              />

              {selectedIntention && (
                <motion.div
                  className="bg-gradient-lunar rounded-lg p-4 border border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-medium text-primary mb-2 text-center">
                    Wybrana Intencja
                  </h3>
                  <div className="text-center">
                    <div className="text-2xl mb-2">
                      {selectedIntention === "share_wisdom" && "🌱"}
                      {selectedIntention === "seek_guidance" && "🔮"}
                      {selectedIntention === "invite_ceremony" && "🌙"}
                      {selectedIntention === "offer_healing" && "💎"}
                      {selectedIntention === "exchange_gifts" && "🌿"}
                      {selectedIntention === "sync_energies" && "🦋"}
                      {selectedIntention === "address_discord" && "⚡"}
                      {selectedIntention === "connect_souls" && "🌸"}
                    </div>
                    <div className="text-sm font-medium">
                      {selectedIntention.replace('_', ' ').toUpperCase()}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sacred Status Display */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-ar-glass">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-primary flex items-center">
                  <span className="mr-2">✨</span>
                  Status Świętego
                </h2>
                <motion.button
                  onClick={() => setShowStatusEditor(true)}
                  className="px-3 py-2 bg-primary/20 border border-primary/30 rounded-lg hover:bg-primary/30 transition-sacred flex items-center gap-2 text-primary text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xs">✏️</span>
                  Edytuj
                </motion.button>
              </div>
              
              <SacredStatusDisplay
                status={selectedProfile.status}
                className="space-y-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Sacred Features Overview */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-gradient-earth rounded-lg p-8 border border-border/50">
            <h2 className="text-2xl font-bold text-center text-primary mb-8">
              🌟 Święte Funkcje Sacred Circle
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <motion.button
                className="text-center p-4 bg-card/30 rounded-lg border border-border/30 hover:border-primary/50 transition-sacred cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSacredFunction('vibrational-communication')}
              >
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="font-semibold text-primary mb-2">
                  Komunikacja Wibracyjna
                </h3>
                <p className="text-sm text-muted-foreground">
                  Rozumie Twój stan energetyczny i fazę księżyca
                </p>
                <div className="mt-3 text-xs text-primary">
                  Kliknij aby eksplorować →
                </div>
              </motion.button>

              <motion.button
                className="text-center p-4 bg-card/30 rounded-lg border border-border/30 hover:border-primary/50 transition-sacred cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSacredFunction('intention-circle')}
              >
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="font-semibold text-primary mb-2">
                  Krąg Intencji
                </h3>
                <p className="text-sm text-muted-foreground">
                  Oktagonalna mandala dostosowana do Twojej duszy
                </p>
                <div className="mt-3 text-xs text-primary">
                  Kliknij aby eksplorować →
                </div>
              </motion.button>

              <motion.button
                className="text-center p-4 bg-card/30 rounded-lg border border-border/30 hover:border-primary/50 transition-sacred cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSacredFunction('elemental-intelligence')}
              >
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-semibold text-primary mb-2">
                  Inteligencja Elementalna
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wgląd w duchową dostępność i rezonans
                </p>
                <div className="mt-3 text-xs text-primary">
                  Kliknij aby eksplorować →
                </div>
              </motion.button>

              <motion.button
                className="text-center p-4 bg-card/30 rounded-lg border border-border/30 hover:border-primary/50 transition-sacred cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSacredFunction('festival-integration')}
              >
                <div className="text-3xl mb-3">🎪</div>
                <h3 className="font-semibold text-primary mb-2">
                  Integracja Festiwalowa
                </h3>
                <p className="text-sm text-muted-foreground">
                  Świadomość wydarzeń i koordynacja obozów
                </p>
                <div className="mt-3 text-xs text-primary">
                  Kliknij aby eksplorować →
                </div>
              </motion.button>

              <motion.button
                className="text-center p-4 bg-gradient-to-br from-purple-100 to-green-100 rounded-lg border-2 border-purple-300 hover:border-purple-500 transition-sacred cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSacredFunction('device-plan')}
              >
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-purple-700 mb-2">
                  Plan Urządzenia AI
                </h3>
                <p className="text-sm text-purple-600">
                  Fizyczne urządzenie Sacred Circle dla festiwali
                </p>
                <div className="mt-3 text-xs text-purple-700 font-medium">
                  Zobacz szczegóły →
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Sacred Function Display */}
        {activeSacredFunction && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-primary">
                  {activeSacredFunction === 'vibrational-communication' && '🔮 Komunikacja Wibracyjna'}
                  {activeSacredFunction === 'intention-circle' && '🌙 Krąg Intencji'}
                  {activeSacredFunction === 'elemental-intelligence' && '🌍 Inteligencja Elementalna'}
                  {activeSacredFunction === 'festival-integration' && '🎪 Integracja Festiwalowa'}
                  {activeSacredFunction === 'device-plan' && '📱 Plan Urządzenia AI'}
                </h2>
                <motion.button
                  onClick={() => setActiveSacredFunction(null)}
                  className="px-3 py-2 bg-primary/20 border border-primary/30 rounded-lg hover:bg-primary/30 transition-sacred text-primary text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Zamknij
                </motion.button>
              </div>
              
              {activeSacredFunction === 'vibrational-communication' && (
                <VibrationalCommunication profile={selectedProfile} />
              )}
              {activeSacredFunction === 'intention-circle' && (
                <IntentionCircle profile={selectedProfile} />
              )}
              {activeSacredFunction === 'elemental-intelligence' && (
                <ElementalIntelligence profile={selectedProfile} />
              )}
              {activeSacredFunction === 'festival-integration' && (
                <FestivalIntegration profile={selectedProfile} />
              )}
              {activeSacredFunction === 'device-plan' && (
                <DevicePlan />
              )}
            </div>
          </motion.div>
        )}

        {/* Sacred Profile Details */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
            <h2 className="text-2xl font-bold text-center text-primary mb-8">
              🌟 Szczegóły Profilu: {selectedProfile.name}
            </h2>
            
            <SacredProfileDetails profile={selectedProfile} />
          </div>
        </motion.div>


        {/* Cultural Acknowledgment */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
            <h3 className="text-lg font-semibold text-primary mb-3">
              🌿 Uznanie Kulturowe
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Honorujemy i uznajemy tradycje mądrości rdzennej, które inspirują tę pracę:
              <strong className="text-primary"> Słowiańskie tradycje duchowe</strong>,
              <strong className="text-primary"> Majańską mądrość kalendarza</strong>,
              <strong className="text-primary"> Globalne praktyki rdzenne</strong> i
              <strong className="text-primary"> Społeczności festiwalowe</strong> które tworzą tymczasowe święte przestrzenie na całym świecie.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Sacred Action Menu */}
      {showActionMenu && currentIntention && (
        <SacredActionMenu
          intention={currentIntention}
          onActionExecute={handleActionExecute}
          onClose={handleCloseActionMenu}
        />
      )}

      {/* Sacred Status Editor */}
      {showStatusEditor && (
        <SacredStatusEditor
          status={selectedProfile.status}
          onStatusUpdate={handleStatusUpdate}
          onClose={handleCloseStatusEditor}
        />
      )}

      {/* Sacred Info Button */}
      <SacredInfo />
    </div>
  );
}
