
import { create } from 'zustand';
import type { DashboardConfig } from '@/types/team';

interface AppState {
  selectedProfileId: string | null;
  selectedDashboard: DashboardConfig | null;
  currentView: 'home' | 'contacts' | 'dashboard' | 'profile';
  setSelectedProfileId: (id: string | null) => void;
  setSelectedDashboard: (dashboard: DashboardConfig | null) => void;
  setCurrentView: (view: 'home' | 'contacts' | 'dashboard' | 'profile') => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedProfileId: null,
  selectedDashboard: null,
  currentView: 'home',
  setSelectedProfileId: (id) => set({ selectedProfileId: id, currentView: id ? 'profile' : 'home' }),
  setSelectedDashboard: (dashboard) => set({ selectedDashboard: dashboard, currentView: dashboard ? 'dashboard' : 'home' }),
  setCurrentView: (view) => set({ currentView: view }),
}));
