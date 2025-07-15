import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { convertedTeamProfiles } from '@/data/teamProfilesAdapter';
import * as LucideIcons from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const { currentView, selectedProfileId, setCurrentView, setSelectedProfileId } = useAppStore();

  const getBreadcrumbs = () => {
    const breadcrumbs = [
      {
        label: 'OCTO',
        icon: LucideIcons.Home,
        onClick: () => {
          setCurrentView('home');
          setSelectedProfileId(null);
        }
      }
    ];

    switch (currentView) {
      case 'home':
        // No additional breadcrumbs for home view
        break;

      case 'contacts':
        breadcrumbs.push({
          label: 'Kontakty',
          icon: LucideIcons.Users,
          onClick: () => setCurrentView('contacts')
        });
        break;

      case 'dashboard':
        breadcrumbs.push({
          label: 'Dashboardy',
          icon: LucideIcons.BarChart3,
          onClick: () => setCurrentView('dashboard')
        });
        break;

      case 'profile':
        breadcrumbs.push({
          label: 'Kontakty',
          icon: LucideIcons.Users,
          onClick: () => {
            setCurrentView('contacts');
            setSelectedProfileId(null);
          }
        });

        if (selectedProfileId) {
          const profile = convertedTeamProfiles.find(p => p.id === selectedProfileId);
          if (profile) {
            breadcrumbs.push({
              label: profile.name,
              icon: LucideIcons.User,
              onClick: () => {} // Current page, no action
            });
          }
        }
        break;
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-sm text-gray-400 mb-4"
    >
      {breadcrumbs.map((crumb, index) => {
        const Icon = crumb.icon;
        const isLast = index === breadcrumbs.length - 1;

        return (
          <React.Fragment key={index}>
            <button
              onClick={crumb.onClick}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors ${
                isLast
                  ? 'text-white cursor-default'
                  : 'hover:text-cyan-400 hover:bg-white/5'
              }`}
              disabled={isLast}
            >
              <Icon className="w-4 h-4" />
              <span>{crumb.label}</span>
            </button>
            
            {!isLast && (
              <LucideIcons.ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </React.Fragment>
        );
      })}
    </motion.nav>
  );
};
