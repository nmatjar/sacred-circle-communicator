import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import * as LucideIcons from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { currentView, setCurrentView, setSelectedProfileId } = useAppStore();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navigationItems = [
    {
      id: 'home',
      label: 'Główna',
      icon: LucideIcons.Home,
      view: 'home' as const,
      description: 'Dashboard główny'
    },
    {
      id: 'contacts',
      label: 'Kontakty',
      icon: LucideIcons.Users,
      view: 'contacts' as const,
      description: 'Lista zespołu'
    },
    {
      id: 'dashboard',
      label: 'Dashboardy',
      icon: LucideIcons.BarChart3,
      view: 'dashboard' as const,
      description: 'Analityka i raporty'
    },
    {
      id: 'mission',
      label: 'Misja',
      icon: LucideIcons.Target,
      view: 'home' as const,
      description: 'Przegląd misji',
      action: () => {
        setCurrentView('home');
        // Scroll to mission overview
        setTimeout(() => {
          const missionElement = document.querySelector('[data-mission-overview]');
          if (missionElement) {
            missionElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  ];

  const handleNavigation = (item: typeof navigationItems[0]) => {
    if (item.action) {
      item.action();
    } else {
      setCurrentView(item.view);
      // Clear selected profile when navigating away from profile view
      setSelectedProfileId(null);
    }
    
    // Close sidebar on mobile after navigation
    if (!isDesktop) {
      onToggle();
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // On desktop, sidebar is always visible but can be collapsed
  // On mobile, sidebar is overlay
  const shouldShowSidebar = isDesktop || isOpen;
  const sidebarWidth = isDesktop ? (isExpanded ? 280 : 80) : 280;

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!isDesktop && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          x: shouldShowSidebar ? 0 : -sidebarWidth,
          width: sidebarWidth
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200,
          duration: isDesktop ? 0.3 : undefined
        }}
        className={`h-full bg-black/90 backdrop-blur-md border-r border-white/10 z-50 ${
          isDesktop ? 'relative' : 'fixed left-0 top-0'
        }`}
        style={{ width: sidebarWidth }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              {isExpanded || !isDesktop ? (
                <div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    OCTO
                  </h2>
                  <p className="text-xs text-gray-400">Mission Control</p>
                </div>
              ) : (
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">O</span>
                </div>
              )}
              
              {isDesktop ? (
                <button
                  onClick={toggleExpanded}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <LucideIcons.PanelLeftClose 
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isExpanded ? 'rotate-0' : 'rotate-180'
                    }`} 
                  />
                </button>
              ) : (
                <button
                  onClick={onToggle}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <LucideIcons.X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                // Special handling for mission item - it's never "active" since it's just a scroll action
                const isActive = item.id === 'mission' ? false : currentView === item.view;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all group ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    title={!isExpanded && isDesktop ? item.label : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    
                    {(isExpanded || !isDesktop) && (
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    )}
                    
                    {isActive && (isExpanded || !isDesktop) && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    )}
                    
                    {isActive && !isExpanded && isDesktop && (
                      <div className="absolute left-0 w-1 h-8 bg-cyan-400 rounded-r-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Quick Actions */}
          {(isExpanded || !isDesktop) && (
            <div className="p-2 border-t border-white/10">
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                  <LucideIcons.Search className="w-4 h-4" />
                  <span className="text-sm">Szukaj</span>
                  <span className="ml-auto text-xs text-gray-500">⌘K</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
                  <LucideIcons.Settings className="w-4 h-4" />
                  <span className="text-sm">Ustawienia</span>
                </button>
              </div>
            </div>
          )}

          {/* Collapsed Quick Actions */}
          {!isExpanded && isDesktop && (
            <div className="p-2 border-t border-white/10">
              <div className="space-y-1">
                <button 
                  className="w-full flex items-center justify-center p-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                  title="Szukaj"
                >
                  <LucideIcons.Search className="w-4 h-4" />
                </button>
                <button 
                  className="w-full flex items-center justify-center p-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                  title="Ustawienia"
                >
                  <LucideIcons.Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Status */}
          <div className="p-2 border-t border-white/10">
            {(isExpanded || !isDesktop) ? (
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">Online</span>
                <span className="ml-auto text-xs text-gray-500">
                  {new Date().toLocaleTimeString('pl-PL', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center py-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" title="Online" />
              </div>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  );
};
