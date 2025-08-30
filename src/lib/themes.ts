export interface Theme {
  name: string;
  id: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    gradient: {
      from: string;
      via?: string;
      to: string;
    };
    button: {
      primary: string;
      secondary: string;
    };
  };
}

export const themes: Theme[] = [
  {
    name: "Ocean Breeze",
    id: "ocean",
    colors: {
      primary: "#06b6d4", // cyan-500
      secondary: "#3b82f6", // blue-500
      accent: "#f59e0b", // amber-500
      background: "from-cyan-50 via-blue-50 to-indigo-100",
      surface: "bg-white/90 backdrop-blur-xl border border-cyan-100/50",
      text: "text-slate-800",
      textSecondary: "text-slate-600",
      border: "border-cyan-200/50",
      gradient: {
        from: "from-cyan-500",
        via: "via-blue-500",
        to: "to-indigo-500"
      },
      button: {
        primary: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
        secondary: "border-cyan-200 hover:bg-cyan-50"
      }
    }
  },
  {
    name: "Sunset Glow",
    id: "sunset",
    colors: {
      primary: "#f97316", // orange-500
      secondary: "#ec4899", // pink-500
      accent: "#8b5cf6", // violet-500
      background: "from-orange-50 via-pink-50 to-purple-100",
      surface: "bg-white/85 backdrop-blur-lg border border-orange-100/50",
      text: "text-slate-800",
      textSecondary: "text-slate-600",
      border: "border-orange-200/50",
      gradient: {
        from: "from-orange-400",
        via: "via-pink-500",
        to: "to-purple-500"
      },
      button: {
        primary: "from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600",
        secondary: "border-orange-200 hover:bg-orange-50"
      }
    }
  },
  {
    name: "Forest Mist",
    id: "forest",
    colors: {
      primary: "#10b981", // emerald-500
      secondary: "#14b8a6", // teal-500
      accent: "#06b6d4", // cyan-500
      background: "from-emerald-50 via-teal-50 to-cyan-100",
      surface: "bg-white/90 backdrop-blur-xl border border-emerald-100/50",
      text: "text-slate-800",
      textSecondary: "text-slate-600",
      border: "border-emerald-200/50",
      gradient: {
        from: "from-emerald-500",
        via: "via-teal-500",
        to: "to-cyan-500"
      },
      button: {
        primary: "from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
        secondary: "border-emerald-200 hover:bg-emerald-50"
      }
    }
  },
  {
    name: "Rose Garden",
    id: "rose",
    colors: {
      primary: "#e11d48", // rose-600
      secondary: "#be185d", // pink-600
      accent: "#f59e0b", // amber-500
      background: "from-rose-50 via-pink-50 to-orange-50",
      surface: "bg-white/90 backdrop-blur-xl border border-rose-100/50",
      text: "text-slate-800",
      textSecondary: "text-slate-600",
      border: "border-rose-200/50",
      gradient: {
        from: "from-rose-500",
        via: "via-pink-500",
        to: "to-orange-500"
      },
      button: {
        primary: "from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700",
        secondary: "border-rose-200 hover:bg-rose-50"
      }
    }
  }
];

export function getTheme(themeId: string): Theme {
  return themes.find(theme => theme.id === themeId) || themes[0];
}

export function applyTheme(theme: Theme, className: string): string {
  // Replace theme-specific classes with the current theme's colors
  let result = className;
  
  // Background gradients - new themes
  result = result.replace(/bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100/g, `bg-gradient-to-br ${theme.colors.background}`);
  result = result.replace(/bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100/g, `bg-gradient-to-br ${theme.colors.background}`);
  result = result.replace(/bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100/g, `bg-gradient-to-br ${theme.colors.background}`);
  result = result.replace(/bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50/g, `bg-gradient-to-br ${theme.colors.background}`);
  
  // Legacy background gradients (for compatibility)
  result = result.replace(/bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100/g, `bg-gradient-to-br ${theme.colors.background}`);
  result = result.replace(/bg-gradient-to-br from-indigo-50 via-purple-50 via-pink-50 to-orange-50/g, `bg-gradient-to-br ${theme.colors.background}`);
  result = result.replace(/bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800/g, `bg-gradient-to-br ${theme.colors.background}`);
  result = result.replace(/bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700/g, `bg-gradient-to-br ${theme.colors.background}`);
  
  // Surface backgrounds - new themes
  result = result.replace(/bg-white\/90 backdrop-blur-xl border border-cyan-100\/50/g, theme.colors.surface);
  result = result.replace(/bg-white\/85 backdrop-blur-lg border border-orange-100\/50/g, theme.colors.surface);
  result = result.replace(/bg-white\/90 backdrop-blur-xl border border-emerald-100\/50/g, theme.colors.surface);
  result = result.replace(/bg-white\/90 backdrop-blur-xl border border-rose-100\/50/g, theme.colors.surface);
  
  // Legacy surface backgrounds (for compatibility)
  result = result.replace(/bg-white\/80 backdrop-blur-xl/g, theme.colors.surface);
  result = result.replace(/bg-white\/90 backdrop-blur-sm/g, theme.colors.surface);
  result = result.replace(/bg-zinc-900\/70 backdrop-blur-xl border border-zinc-800/g, theme.colors.surface);
  result = result.replace(/bg-gray-800\/90 backdrop-blur-xl border border-gray-700/g, theme.colors.surface);
  
  // Borders - new themes
  result = result.replace(/border-cyan-200\/50/g, theme.colors.border);
  result = result.replace(/border-orange-200\/50/g, theme.colors.border);
  result = result.replace(/border-emerald-200\/50/g, theme.colors.border);
  result = result.replace(/border-rose-200\/50/g, theme.colors.border);
  
  // Legacy borders (for compatibility)
  result = result.replace(/border-gray-200\/50/g, theme.colors.border);
  result = result.replace(/border-white\/20/g, theme.colors.border);
  result = result.replace(/border-zinc-800/g, theme.colors.border);
  result = result.replace(/border-gray-700/g, theme.colors.border);
  
  // Text colors - comprehensive replacements for all themes
  result = result.replace(/text-slate-800/g, theme.colors.text);
  result = result.replace(/text-slate-600/g, theme.colors.textSecondary);
  result = result.replace(/text-slate-100/g, theme.colors.text);
  result = result.replace(/text-slate-300/g, theme.colors.textSecondary);
  
  // Legacy text colors (for compatibility)
  result = result.replace(/text-gray-900/g, theme.colors.text);
  result = result.replace(/text-gray-700/g, theme.colors.textSecondary);
  result = result.replace(/text-gray-600/g, theme.colors.textSecondary);
  result = result.replace(/text-zinc-50/g, theme.colors.text);
  result = result.replace(/text-zinc-300/g, theme.colors.textSecondary);
  result = result.replace(/text-white/g, theme.colors.text);
  result = result.replace(/text-black/g, theme.colors.text);
  result = result.replace(/text-slate-900/g, theme.colors.text);
  result = result.replace(/text-slate-700/g, theme.colors.textSecondary);
  result = result.replace(/text-slate-500/g, theme.colors.textSecondary);
  result = result.replace(/text-slate-400/g, theme.colors.textSecondary);
  result = result.replace(/text-slate-200/g, theme.colors.textSecondary);
  result = result.replace(/text-gray-100/g, theme.colors.text);
  result = result.replace(/text-gray-400/g, theme.colors.textSecondary);
  
  // Button gradients - new themes
  result = result.replace(/from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700/g, theme.colors.button.primary);
  result = result.replace(/from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600/g, theme.colors.button.primary);
  result = result.replace(/from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700/g, theme.colors.button.primary);
  result = result.replace(/from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700/g, theme.colors.button.primary);
  
  // Legacy button gradients (for compatibility)
  result = result.replace(/from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700/g, theme.colors.button.primary);
  result = result.replace(/from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700/g, theme.colors.button.primary);
  result = result.replace(/from-emerald-500 via-blue-500 to-orange-500 hover:from-emerald-600 hover:via-blue-600 hover:to-orange-600/g, theme.colors.button.primary);
  result = result.replace(/from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600/g, theme.colors.button.primary);
  
  return result;
} 