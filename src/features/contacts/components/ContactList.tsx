
import { convertedTeamProfiles } from "@/data/teamProfilesAdapter";
import type { Profile } from "@/types/profile";
import { useAppStore } from "@/store/useAppStore";
import { motion } from "framer-motion";

const ContactItem = ({ profile }: { profile: Profile }) => {
  const setSelectedProfileId = useAppStore((state) => state.setSelectedProfileId);
  const selectedProfileId = useAppStore((state) => state.selectedProfileId);

  const isSelected = selectedProfileId === profile.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`p-3 flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors duration-200 ${isSelected ? 'border border-blue-400' : ''}`}
      onClick={() => setSelectedProfileId(profile.id)}
    >
      <div className="flex items-center gap-3">
        {/* Placeholder for Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-bold">
          {profile.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-gray-400">{profile.archetype}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">QPI: {profile.qpi}</p>
        <div className="flex items-center justify-end gap-1.5 mt-1">
          <div className={`w-2.5 h-2.5 rounded-full ${profile.status.live.status.value.startsWith('A') ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
          <p className="text-xs text-gray-300">{profile.status.live.status.value}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ContactList = () => (
  <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 space-y-3">
    <h2 className="text-lg font-bold px-2">Contacts</h2>
    <div className="space-y-2">
      {convertedTeamProfiles.map((profile) => (
        <ContactItem key={profile.id} profile={profile} />
      ))}
    </div>
  </div>
);
