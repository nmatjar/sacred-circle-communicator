import { ContactList } from "@/features/contacts/components/ContactList";
import { MessagingInterface } from "@/features/messaging/components/MessagingInterface";
import { Dashboard } from "@/features/dashboard/components/Dashboard";
import { DashboardSelector } from "@/features/dashboard/components/DashboardSelector";
import { PersonalOverview } from "@/features/home/components/PersonalOverview";
import { QuickContacts } from "@/features/home/components/QuickContacts";
import { QuickActions } from "@/features/home/components/QuickActions";
import { MissionOverview } from "@/features/home/components/MissionOverview";
import { convertedTeamProfiles } from "@/data/teamProfilesAdapter";
import { useAppStore } from "@/store/useAppStore";

function App() {
  const { 
    selectedProfileId, 
    selectedDashboard, 
    currentView, 
    setSelectedDashboard, 
    setCurrentView 
  } = useAppStore();
  
  const selectedProfile = selectedProfileId
    ? convertedTeamProfiles.find((profile) => profile.id === selectedProfileId)
    : null;

  const renderMainContent = () => {
    switch (currentView) {
      case 'profile':
        return selectedProfile ? (
          <MessagingInterface profile={selectedProfile} />
        ) : null;
        
      case 'dashboard':
        return selectedDashboard ? (
          <div className="p-4 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentView('contacts')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
              >
                ← Powrót do kontaktów
              </button>
              <button
                onClick={() => setSelectedDashboard(null)}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                Zmień dashboard
              </button>
            </div>
            <Dashboard config={selectedDashboard} />
          </div>
        ) : (
          <div className="p-4 md:p-8">
            <DashboardSelector onSelectDashboard={setSelectedDashboard} />
          </div>
        );
        
      case 'contacts':
        return (
          <div className="p-4 md:p-8 space-y-8">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentView('home')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
              >
                ← Powrót do głównej
              </button>
              <button
                onClick={() => setCurrentView('dashboard')}
                className="bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg px-4 py-2 text-cyan-300 transition-colors text-sm"
              >
                📊 Dashboardy
              </button>
            </div>

            {/* Full Contact List */}
            <div className="max-w-4xl mx-auto">
              <ContactList />
            </div>
          </div>
        );
        
      default: // home view
        return (
          <div className="min-h-screen p-4 md:p-8">
            {/* Compact Header */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    OCTO Mission Control
                  </h1>
                  <p className="text-gray-400 mt-1">Twoje centrum dowodzenia komunikacją</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentView('contacts')}
                    className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg px-4 py-2 text-blue-300 transition-colors text-sm"
                  >
                    👥 Kontakty
                  </button>
                  <button
                    onClick={() => setCurrentView('dashboard')}
                    className="bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg px-4 py-2 text-purple-300 transition-colors text-sm"
                  >
                    📊 Dashboardy
                  </button>
                </div>
              </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Left Column - Personal Overview */}
              <div className="lg:col-span-1 space-y-6">
                <PersonalOverview />
                <QuickActions />
              </div>
              
              {/* Right Column - Quick Contacts */}
              <div className="lg:col-span-2">
                <QuickContacts />
              </div>
            </div>

            {/* Mission Overview - Secondary Feature */}
            <div className="max-w-6xl mx-auto">
              <MissionOverview />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {renderMainContent()}
    </div>
  );
}

export default App;
