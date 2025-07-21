import { motion } from 'framer-motion';
import type { SacredProfile } from '@/types/sacred';

interface SacredProfileDetailsProps {
  profile: SacredProfile;
  className?: string;
}

export function SacredProfileDetails({ profile, className = "" }: SacredProfileDetailsProps) {
  const getLevelEmoji = (level: string) => {
    switch (level) {
      case 'master': return '🌟';
      case 'teacher': return '📚';
      case 'practitioner': return '🌱';
      case 'novice': return '🌿';
      default: return '✨';
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'healing': return '💚';
      case 'crafts': return '🔨';
      case 'wisdom': return '📜';
      case 'movement': return '💃';
      case 'ceremony': return '🔥';
      case 'plants': return '🌿';
      case 'alchemy': return '⚗️';
      default: return '✨';
    }
  };

  const getPracticeEmoji = (practice: string) => {
    switch (practice) {
      case 'Meditation': return '🧘‍♀️';
      case 'Ceremony': return '🔥';
      case 'Healing': return '💚';
      case 'Creating': return '🎨';
      case 'Teaching': return '📚';
      case 'Journeying': return '🌌';
      case 'Gathering': return '🌿';
      case 'Resting': return '😴';
      default: return '✨';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Sacred Skills */}
      <motion.div
        className="bg-gradient-earth rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">🌟</span>
          Święte Umiejętności
        </h3>
        <div className="space-y-3">
          {profile.sacredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card/30 rounded-lg p-4 border border-border/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getCategoryEmoji(skill.category)}</span>
                  <h4 className="font-medium text-primary">{skill.name}</h4>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm">{getLevelEmoji(skill.level)}</span>
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.level}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {skill.traditions.map((tradition, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {tradition}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Daily Practices */}
      <motion.div
        className="bg-gradient-lunar rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">🌅</span>
          Codzienne Praktyki
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {profile.dailyPractices.map((practice, index) => (
            <motion.div
              key={index}
              className="bg-card/30 rounded-lg p-3 border border-border/20 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl mb-1">{getPracticeEmoji(practice)}</div>
              <div className="text-sm font-medium text-primary">{practice}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Teaching Offerings */}
      <motion.div
        className="bg-gradient-sacred rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">📚</span>
          Oferowane Nauczanie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {profile.teachingOfferings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-card/30 rounded-lg p-3 border border-border/20 flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg">📖</span>
              <span className="text-sm font-medium text-primary">{offering}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Healing Modalities */}
      <motion.div
        className="bg-gradient-earth rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">💚</span>
          Modalności Uzdrawiania
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {profile.healingModalities.map((modality, index) => (
            <motion.div
              key={index}
              className="bg-card/30 rounded-lg p-3 border border-border/20 flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg">💎</span>
              <span className="text-sm font-medium text-primary">{modality}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cultural Connections & Languages */}
      <motion.div
        className="bg-gradient-lunar rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">🌍</span>
          Połączenia Kulturowe
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-primary mb-2">Tradycje:</h4>
            <div className="flex flex-wrap gap-2">
              {profile.culturalConnections.map((connection, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {connection}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-primary mb-2">Języki:</h4>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-card/30 text-muted-foreground text-sm rounded-full border border-border/20"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sacred Allies */}
      <motion.div
        className="bg-gradient-sacred rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">🌿</span>
          Święci Sprzymierzeńcy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
              <span className="mr-1">🌱</span>
              Rośliny Sprzymierzone
            </h4>
            <div className="space-y-1">
              {profile.plantAllies.map((plant, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  {plant}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
              <span className="mr-1">💎</span>
              Kryształy Sprzymierzone
            </h4>
            <div className="space-y-1">
              {profile.crystalAllies.map((crystal, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  {crystal}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-primary mb-2 flex items-center">
              <span className="mr-1">🦅</span>
              Duchy Zwierząt
            </h4>
            <div className="space-y-1">
              {profile.animalSpirits.map((spirit, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  {spirit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gift Offerings */}
      <motion.div
        className="bg-gradient-earth rounded-lg p-6 border border-border/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
          <span className="mr-2">🎁</span>
          Dary dla Społeczności
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {profile.giftOfferings.map((gift, index) => (
            <motion.div
              key={index}
              className="bg-card/30 rounded-lg p-3 border border-border/20 flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg">🌟</span>
              <span className="text-sm font-medium text-primary">{gift}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
