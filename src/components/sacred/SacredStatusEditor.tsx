import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, Save, X, Sparkles } from 'lucide-react';
import type { SacredStatus } from '@/types/sacred';

interface SacredStatusEditorProps {
  status: SacredStatus;
  onStatusUpdate: (newStatus: SacredStatus) => void;
  onClose: () => void;
  className?: string;
}

const ELEMENT_OPTIONS = [
  { value: 'Earth', emoji: '🌍', label: 'Ziemia' },
  { value: 'Water', emoji: '💧', label: 'Woda' },
  { value: 'Fire', emoji: '🔥', label: 'Ogień' },
  { value: 'Air', emoji: '💨', label: 'Powietrze' }
];

const PRACTICE_OPTIONS = [
  { value: 'Medytacja', emoji: '🧘' },
  { value: 'Taniec', emoji: '💃' },
  { value: 'Śpiew', emoji: '🎵' },
  { value: 'Rzemiosło', emoji: '🔨' },
  { value: 'Ziołolecznictwo', emoji: '🌿' },
  { value: 'Ceremonia', emoji: '🔮' }
];

const AVAILABILITY_OPTIONS = [
  { value: 'Dostępna', emoji: '🟢' },
  { value: 'Zajęta', emoji: '🟡' },
  { value: 'Niedostępna', emoji: '🔴' },
  { value: 'W Ceremonii', emoji: '🟣' }
];

const PROTECTION_OPTIONS = [
  { value: 'Otwarta', emoji: '✨' },
  { value: 'Łagodne Granice', emoji: '🌸' },
  { value: 'Silne Granice', emoji: '🛡️' },
  { value: 'Zamknięta', emoji: '🔒' }
];

const LUNAR_PHASE_OPTIONS = [
  { value: 'New', emoji: '🌑', label: 'Nów' },
  { value: 'Waxing', emoji: '🌒', label: 'Przybywający' },
  { value: 'Full', emoji: '🌕', label: 'Pełnia' },
  { value: 'Waning', emoji: '🌘', label: 'Ubywający' }
];

const RESONANCE_OPTIONS = [
  { value: 'Uzdrawiający', emoji: '💚' },
  { value: 'Hojny', emoji: '🤲' },
  { value: 'Nauczyciel', emoji: '📚' },
  { value: 'Wojownik', emoji: '⚔️' }
];

const SHARING_OPTIONS = [
  { value: 'Pełnia Mocy', emoji: '🌟' },
  { value: 'Przepełnione', emoji: '🌊' },
  { value: 'Zielarka', emoji: '🌿' },
  { value: 'Ogród Ziół', emoji: '🌺' }
];

const GATHERING_OPTIONS = [
  { value: 'Wibracje 2025', emoji: '🎪' },
  { value: 'Ogród Ziół', emoji: '🌸' },
  { value: 'Zielarka', emoji: '🌿' },
  { value: 'Lokalne Kręgi', emoji: '🏕️' }
];

const LOCATION_OPTIONS = [
  { value: 'Wibracje 2025', emoji: '🎪' },
  { value: 'Burning Man', emoji: '🔥' },
  { value: 'Ozora', emoji: '🌀' },
  { value: 'Boom Festival', emoji: '🌍' }
];

const CAMP_OPTIONS = [
  { value: 'Ogród Ziół', emoji: '🌸' },
  { value: 'Zielarka', emoji: '🌿' },
  { value: 'Krąg Uzdrowienia', emoji: '💎' },
  { value: 'Święty Ogień', emoji: '🔥' }
];

const ROLE_OPTIONS = [
  { value: 'Zielarka', emoji: '🌿' },
  { value: 'Strażniczka', emoji: '📚' },
  { value: 'Uzdrowicielka', emoji: '💎' },
  { value: 'Przewodniczka', emoji: '🔮' }
];

export function SacredStatusEditor({
  status,
  onStatusUpdate,
  onClose,
  className = ""
}: SacredStatusEditorProps) {
  const [editedStatus, setEditedStatus] = useState<SacredStatus>(status);

  const handleSave = () => {
    onStatusUpdate(editedStatus);
    onClose();
  };

  const updateField = (section: keyof SacredStatus, field: string, value: { value: string; emoji: string }) => {
    setEditedStatus(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 ${className}`}>
        {/* Sacred Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        {/* Sacred Editor Container */}
        <motion.div 
          className="absolute inset-4 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="h-full bg-gradient-sacred backdrop-blur-ar border-2 border-primary/30 shadow-ar-glass rounded-xl">
            {/* Sacred Header */}
            <div className="p-6 border-b border-primary/20 bg-gradient-lunar">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-earth flex items-center justify-center text-2xl shadow-intention-glow"
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
                    <Edit3 className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-1">
                      Edytuj Status Świętego
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Dostosuj swój stan energetyczny i dostępność
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <motion.button 
                    onClick={handleSave}
                    className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg hover:bg-primary/30 transition-sacred flex items-center gap-2 text-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Save className="w-4 h-4" />
                    Zapisz
                  </motion.button>
                  <button 
                    onClick={onClose}
                    className="h-10 w-10 rounded-full hover:bg-primary/10 flex items-center justify-center transition-sacred border border-primary/20"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sacred Editor Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid gap-6 md:grid-cols-2">
                
                {/* Energetic State Section */}
                <motion.div
                  className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="mr-2">🌟</span>
                    Stan Energetyczny
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Element */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Element</label>
                      <div className="grid grid-cols-2 gap-2">
                        {ELEMENT_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('energetic', 'element', {
                              value: option.value,
                              emoji: option.emoji
                            })}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.energetic.element.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Practice */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Praktyka</label>
                      <div className="grid grid-cols-2 gap-2">
                        {PRACTICE_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('energetic', 'practice', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.energetic.practice.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Dostępność</label>
                      <div className="grid grid-cols-2 gap-2">
                        {AVAILABILITY_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('energetic', 'availability', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.energetic.availability.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Protection */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Ochrona</label>
                      <div className="grid grid-cols-2 gap-2">
                        {PROTECTION_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('energetic', 'protection', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.energetic.protection.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Lunar Alignment Section */}
                <motion.div
                  className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="mr-2">🌙</span>
                    Wpływ Księżyca
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Lunar Phase */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Faza Księżyca</label>
                      <div className="grid grid-cols-2 gap-2">
                        {LUNAR_PHASE_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('lunar', 'phase', {
                              value: option.value,
                              emoji: option.emoji
                            })}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.lunar.phase.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Community Resonance Section */}
                <motion.div
                  className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="mr-2">👥</span>
                    Rezonans Wspólnoty
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Resonance */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Rezonans</label>
                      <div className="grid grid-cols-2 gap-2">
                        {RESONANCE_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('community', 'resonance', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.community.resonance.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sharing */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Dzielenie</label>
                      <div className="grid grid-cols-2 gap-2">
                        {SHARING_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('community', 'sharing', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.community.sharing.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Gathering */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Zgromadzenie</label>
                      <div className="grid grid-cols-2 gap-2">
                        {GATHERING_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('community', 'gathering', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.community.gathering.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Festival Integration Section */}
                <motion.div
                  className="bg-black/85 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <span className="mr-2">🎪</span>
                    Integracja Festiwalowa
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Location */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Lokalizacja</label>
                      <div className="grid grid-cols-2 gap-2">
                        {LOCATION_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('festival', 'location', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.festival.location.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Camp */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Obóz</label>
                      <div className="grid grid-cols-2 gap-2">
                        {CAMP_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('festival', 'camp', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.festival.camp.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Role */}
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Rola</label>
                      <div className="grid grid-cols-2 gap-2">
                        {ROLE_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateField('festival', 'role', option)}
                            className={`p-3 rounded-lg border transition-sacred flex items-center gap-2 ${
                              editedStatus.festival.role.value === option.value
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border/50 bg-card/30 hover:border-primary/50'
                            }`}
                          >
                            <span className="text-lg">{option.emoji}</span>
                            <span className="text-sm">{option.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sacred Save Button */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button 
                  onClick={handleSave}
                  className="px-8 py-4 bg-gradient-sacred border-2 border-primary/30 rounded-lg hover:bg-primary/20 transition-sacred flex items-center justify-center gap-3 text-primary font-medium shadow-intention-glow mx-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-5 h-5" />
                  Zapisz Święty Status
                  <Sparkles className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
