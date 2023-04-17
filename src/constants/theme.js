import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#2979ff',
    },
    accent: {
      main: '#651fff',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 14,
  },
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#3f51b5',
    secondary: '#303f9f',
    accent: '#609',
    muted: '#a4a4a4',
    online: '#2ac22f',
    offline: '#ee301f',
  },
  space: [0, 2, 4, 8, 16, 24, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
});

