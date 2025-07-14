
import type { Profile } from "@/types/profile";

const StatusSection = ({ title, data, icon }: { title: string; data: Record<string, { value: string; emoji: string }>; icon: string }) => (
  <div className="bg-black/20 p-4 rounded-lg border border-white/10 shadow-lg">
    <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><span className="text-xl">{icon}</span>{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(data).map(([key, { value, emoji }]) => (
        <div key={key} className="bg-white/5 p-3 rounded-md flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <div>
            <p className="text-xs capitalize text-gray-400">{key}</p>
            <p className="font-semibold text-sm">{value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const StatusDisplay = ({ profile }: { profile: Profile }) => (
  <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 space-y-4">
    <h2 className="text-xl font-bold px-2 mb-4">Status: {profile.name}</h2>
    
    {/* Header Section - inspired by status.html */}
    <div className="text-center mb-6">
      <p className="text-sm text-gray-300">🌀 Global-Cognitive-Architect-9B7F</p>
      <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full mt-2 shadow-md">
        HL: ~{(profile.qpi * 100).toFixed(0)} ± 10 (Visionary Reason)
      </div>
      <p className="text-xs text-gray-400 mt-2">Live: {new Date().toLocaleTimeString()} CEST <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span></p>
    </div>

    <StatusSection title="Live Status" data={profile.status.live} icon="🟢" />
    <StatusSection title="Cognitive State" data={profile.status.cognitive} icon="🧠" />
    <StatusSection title="Social Resonance" data={profile.status.social} icon="👥" />
  </div>
);
