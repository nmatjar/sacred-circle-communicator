import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // MCIC-8/7 AR Interface Colors
        intention: {
          optimal: 'hsl(var(--intention-optimal))',
          moderate: 'hsl(var(--intention-moderate))',
          poor: 'hsl(var(--intention-poor))',
          disabled: 'hsl(var(--intention-disabled))'
        },
        glow: {
          primary: 'hsl(var(--glow-primary))',
          success: 'hsl(var(--glow-success))',
          warning: 'hsl(var(--glow-warning))',
          danger: 'hsl(var(--glow-danger))'
        }
      },
      backgroundImage: {
        'gradient-neural': 'var(--gradient-neural)',
        'gradient-intention': 'var(--gradient-intention)',
        'gradient-glow': 'var(--gradient-glow)'
      },
      boxShadow: {
        'ar-glass': 'var(--glass-shadow)',
        'neural-glow': '0 0 20px hsl(var(--glow-primary) / 0.5)',
        'intention-glow': '0 0 30px currentColor'
      },
      backdropBlur: {
        'ar': '12px'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        // MCIC AR Interface Animations
        'neural-pulse': {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)'
          }
        },
        'intention-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px currentColor'
          },
          '50%': {
            boxShadow: '0 0 40px currentColor, 0 0 60px currentColor'
          }
        },
        'octagon-rotate': {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        'slide-in-action': {
          from: {
            transform: 'translateY(100%) scale(0.8)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0) scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'intention-glow': 'intention-glow 3s ease-in-out infinite',
        'octagon-rotate': 'octagon-rotate 20s linear infinite',
        'slide-in-action': 'slide-in-action 0.4s cubic-bezier(0.2, 0, 0.2, 1)'
      }
    }
  },
  plugins: [tailwindcssAnimate],
}
