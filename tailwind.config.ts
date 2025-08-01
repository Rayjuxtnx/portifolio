import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Literata', 'serif'],
        code: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'hacker-glitch': {
          '0%': {
            transform: 'translate(0)',
            textShadow: 'none',
          },
          '10%': {
            transform: 'translate(-2px, -3px)',
            textShadow: '1px 1px 1px hsl(var(--accent)), -1px -1px 1px hsl(var(--primary))'
          },
          '20%': {
            transform: 'translate(2px, 3px)',
            textShadow: '1px 1px 1px hsl(var(--accent)), -1px -1px 1px hsl(var(--primary))'
          },
          '30%': {
            transform: 'skewX(10deg) translate(0, 0)',
            textShadow: 'none',
          },
          '40%': {
            transform: 'skewX(0deg) translate(-1px, 1px)',
            textShadow: '1px 1px 1px hsl(var(--accent)), -1px -1px 1px hsl(var(--primary))'
          },
          '50%': {
            transform: 'skewX(0deg) translate(0, 0)',
            textShadow: '1px 1px 1px hsl(var(--accent)), -1px -1px 1px hsl(var(--primary))'
          },
          '60%': {
            transform: 'skewX(-10deg) translate(0, 0)',
            textShadow: 'none',
          },
          '70%': {
            transform: 'skewX(0deg) translate(1px, -1px)',
            textShadow: '1px 1px 1px hsl(var(--accent)), -1px -1px 1px hsl(var(--primary))'
          },
          '80%': {
            transform: 'skewX(0deg) translate(0,0)',
            textShadow: '1px 1px 1px hsl(var(--accent)), -1px -1px 1px hsl(var(--primary))'
          },
          '90%': {
            transform: 'translate(0, 0)',
            textShadow: 'none'
          },
          '100%': {
            transform: 'translate(0, 0)',
            textShadow: 'none'
          },
        },
        'star-shimmer': {
          '0%': {
            transform: 'translateY(0px)',
          },
          '100%': {
            transform: 'translateY(-550px)'
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'hacker-glitch': 'hacker-glitch 2s ease-in-out infinite',
        'star-shimmer': 'star-shimmer 25s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addVariant }: { addVariant: (name: string, definition: string) => void }) {
      addVariant('static', '.static-mode &');
    }
  ],
} satisfies Config;
