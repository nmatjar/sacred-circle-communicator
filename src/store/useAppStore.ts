
import { create } from 'zustand';
import type { DashboardConfig } from '@/types/team';

interface AppState {
  selectedProfileId: string | null;
  selectedDashboard: DashboardConfig | null;
  currentView: 'home' | 'contacts' | 'dashboard' | 'profile';
  isSidebarOpen: boolean;
  setSelectedProfileId: (id: string | null) => void;
  setSelectedDashboard: (dashboard: DashboardConfig | null) => void;
  setCurrentView: (view: 'home' | 'contacts' | 'dashboard' | 'profile') => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  selectedProfileId: null,
  selectedDashboard: null,
  currentView: 'home',
  isSidebarOpen: false,
  setSelectedProfileId: (id) => set({ selectedProfileId: id, currentView: id ? 'profile' : get().currentView }),
  setSelectedDashboard: (dashboard) => set({ selectedDashboard: dashboard }),
  setCurrentView: (view) => set({ currentView: view }),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),
}));
