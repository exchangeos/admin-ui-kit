import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate';

const colorTokens = {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
};

const typographyTokens = {
  fontFamily: {
    sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  },
  fontSize: {
    '2xs': ['0.6875rem', { lineHeight: '1rem' }],
    'display-sm': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
    'display-md': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
  },
  typography: {
    DEFAULT: {
      css: {
        color: 'hsl(var(--foreground))',
        maxWidth: '65ch',
        a: {
          color: 'hsl(var(--primary))',
          fontWeight: '500',
          textDecoration: 'none',
          '&:hover': {
            color: 'hsl(var(--primary) / 0.85)',
            textDecoration: 'underline',
          },
        },
        strong: {
          color: 'hsl(var(--foreground))',
        },
        code: {
          color: 'hsl(var(--foreground))',
        },
        'h1, h2, h3, h4': {
          color: 'hsl(var(--foreground))',
          letterSpacing: '-0.02em',
        },
      },
    },
  },
};

const spacingTokens = {
  '4.5': '1.125rem',
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
};

const radiusTokens = {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
};

const keyframeTokens = {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
  'fade-in': {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  'fade-out': {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
};

const animationTokens = {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in': 'fade-in 0.2s ease-out',
  'fade-out': 'fade-out 0.2s ease-out',
};

const sharedTheme: Config['theme'] = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: colorTokens,
    fontFamily: typographyTokens.fontFamily,
    fontSize: typographyTokens.fontSize,
    spacing: spacingTokens,
    borderRadius: radiusTokens,
    keyframes: keyframeTokens,
    animation: animationTokens,
    typography: typographyTokens.typography,
  },
};

export const preset: Config = {
  content: ['../../apps/**/*.{ts,tsx,mdx}', '../../packages/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: sharedTheme,
  plugins: [forms, typography, tailwindcssAnimate],
};

export default preset;
