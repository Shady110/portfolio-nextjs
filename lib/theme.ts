import { createTheme, alpha } from '@mui/material/styles';

// ── Design System Palette ──────────────────────────────────
// #0D0D0D  near-black        → primary text
// #18261A  dark forest green → CTAs, dark elements
// #3a5c3e  medium forest     → secondary text
// #80A689  sage green        → accent, tertiary text
// #BDF2CA  mint green        → chip backgrounds, highlights
// #F2F2F2  near-white        → surfaces
// #ffffff  pure white        → card backgrounds

const P = {
  forest: '#18261A',
  forestHover: '#243d27',
  sage: '#80A689',
  mint: '#BDF2CA',
  nearBlack: '#0D0D0D',
  secondaryText: '#3a5c3e',
  tertiaryText: '#80A689',
  bg: '#ffffff',
  surface: '#F2F2F2',
  surface2: '#e4ede6',
  border: 'rgba(24,38,26,0.08)',
  borderStrong: 'rgba(24,38,26,0.14)',
  success: '#16a34a',
  error: '#dc2626',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: P.sage,
      light: P.mint,
      dark: P.forest,
    },
    background: {
      default: P.bg,
      paper: P.surface,
    },
    text: {
      primary: P.nearBlack,
      secondary: P.secondaryText,
      disabled: P.tertiaryText,
    },
    divider: P.border,
    success: { main: P.success },
    error: { main: P.error },
  },
  typography: {
    fontFamily: 'var(--font-inter), Inter, system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 750, letterSpacing: '-0.035em', lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 },
    h3: { fontWeight: 640, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h4: { fontWeight: 600, letterSpacing: '-0.015em' },
    h5: { fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    body1: { fontSize: '0.9375rem', lineHeight: 1.7, color: P.secondaryText },
    body2: { fontSize: '0.875rem', lineHeight: 1.65, color: P.secondaryText },
    caption: {
      fontSize: '0.6875rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: P.tertiaryText,
      fontWeight: 600,
    },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          borderRadius: '9px',
          padding: '9px 20px',
          transition: 'all 0.18s ease',
          letterSpacing: '-0.01em',
        },
        contained: {
          background: P.forest,
          color: '#ffffff',
          '&:hover': {
            background: P.forestHover,
            boxShadow: `0 4px 20px ${alpha(P.forest, 0.28)}`,
          },
          '&:active': { transform: 'scale(0.98)' },
        },
        outlined: {
          borderColor: P.borderStrong,
          color: P.nearBlack,
          background: 'transparent',
          '&:hover': {
            background: P.surface,
            borderColor: P.sage,
          },
          '&:active': { transform: 'scale(0.98)' },
        },
        text: {
          color: P.secondaryText,
          '&:hover': {
            color: P.nearBlack,
            background: P.surface,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#fff',
          border: `1px solid ${P.border}`,
          borderRadius: '14px',
          backgroundImage: 'none',
          boxShadow: '0 1px 3px rgba(24,38,26,0.05)',
          transition: 'box-shadow 0.25s ease, transform 0.25s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(24,38,26,0.1)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '20px',
          '&:last-child': { paddingBottom: '20px' },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: '#fff',
            borderRadius: '9px',
            fontSize: '0.9375rem',
            '& fieldset': { borderColor: P.border },
            '&:hover fieldset': { borderColor: P.sage },
            '&.Mui-focused fieldset': { borderColor: P.forest },
          },
          '& .MuiInputLabel-root': {
            color: P.tertiaryText,
            '&.Mui-focused': { color: P.forest },
          },
          '& .MuiInputBase-input': { color: P.nearBlack },
          '& .MuiInputBase-inputMultiline': { color: P.nearBlack },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          fontWeight: 500,
          fontSize: '0.6875rem',
          letterSpacing: '0.01em',
          background: alpha(P.mint, 0.45),
          border: `1px solid ${alpha(P.sage, 0.28)}`,
          color: P.forest,
          height: '22px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: P.bg,
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { width: '5px' },
          '&::-webkit-scrollbar-track': { background: P.surface },
          '&::-webkit-scrollbar-thumb': {
            background: alpha(P.forest, 0.18),
            borderRadius: '10px',
          },
        },
        '::selection': {
          background: alpha(P.mint, 0.55),
          color: P.forest,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: P.border },
      },
    },
  },
});

export default theme;
