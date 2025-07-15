import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import * as LucideIcons from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { currentView, setCurrentView, setSelectedProfileId } = useAppStore();

  const navItems = [
    {
      id: 'home',
      label: 'Główna',
      icon: LucideIcons.Home,
      view: 'home' as const,
    },
    {
      id: 'contacts',
      label: 'Kontakty',
      icon: LucideIcons.Users,
      view: 'contacts' as const,
    },
    {
      id: 'dashboard',
      label: 'Analityka',
      icon: LucideIcons.BarChart3,
      view: 'dashboard' as const,
    },
    {
      id: 'search',
      label: 'Szukaj',
      icon: LucideIcons.Search,
      action: () => {
        // TODO: Implement search functionality
        console.log('Search clicked');
      }
    }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.action) {
      item.action();
    } else {
      setCurrentView(item.view);
      setSelectedProfileId(null);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 z-40 lg:hidden"
    >
      <div className="flex items-center justify-around px-4 py-2 safe-area-pb">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.view;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                  />
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};
