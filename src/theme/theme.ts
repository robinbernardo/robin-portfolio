'use client';

import { createTheme } from '@mui/material/styles';

/**
 * Design tokens — mirrors the original landing page system:
 * charcoal canvas, sand accent, Anton display / Titillium body / Caveat script.
 * Font families come from next/font CSS variables set in app/layout.tsx.
 */
export const tokens = {
  page: '#101010',
  panel: '#1A1A1A',
  paper: '#FFFFFF',
  bodyInk: '#D8D3CB',
  muted: '#9B948A',
  sand: '#C9B49A',
  line: 'rgba(255,255,255,0.24)',
} as const;

const display = 'var(--font-anton), sans-serif';
const body = 'var(--font-titillium), sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: tokens.page, paper: tokens.panel },
    primary: { main: tokens.sand, contrastText: tokens.page },
    text: { primary: tokens.bodyInk, secondary: tokens.muted },
    common: { white: tokens.paper },
    divider: tokens.line,
  },
  typography: {
    fontFamily: body,
    fontWeightLight: 300,
    h1: {
      fontFamily: display,
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: 0.98,
      letterSpacing: '0.015em',
      color: tokens.paper,
      fontSize: 'clamp(2.8rem, 8.2vw, 7.2rem)',
    },
    h2: {
      fontFamily: display,
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: 1.05,
      letterSpacing: '0.02em',
      color: tokens.paper,
      fontSize: 'clamp(1.9rem, 4.2vw, 3.2rem)',
    },
    h3: {
      fontFamily: display,
      fontWeight: 400,
      textTransform: 'uppercase',
      color: tokens.paper,
      fontSize: '1.6rem',
    },
    body1: { fontWeight: 300, lineHeight: 1.65 },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.18em',
      fontSize: '0.78rem',
      color: tokens.sand,
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        '::selection': { background: tokens.sand, color: tokens.page },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: { root: { color: 'inherit' } },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.16em',
        },
      },
    },
  },
});

export default theme;
