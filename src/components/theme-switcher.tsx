"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/theme-context';
import { Palette, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeSwitcher() {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">{currentTheme.name}</span>
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-2">
            {availableThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id);
                  setIsOpen(false);
                }}
                                  className={cn(
                    "w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                    currentTheme.id === theme.id && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  )}
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` 
                    }}
                  />
                  <span className="text-sm font-medium">{theme.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 