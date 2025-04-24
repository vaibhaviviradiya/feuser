import { createTheme as createMuiTheme } from '@mui/material/styles';
import { extendTheme as createJoyTheme } from '@mui/joy/styles';

// Create Material-UI theme
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

// Create Joy UI theme
const joyTheme = createJoyTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#000000',
          solidHoverBg: '#333333',
          solidActiveBg: '#000000',
          solidColor: '#ffffff',
        },
        neutral: {
          solidBg: '#f50057',
          solidHoverBg: '#ff4081',
          solidActiveBg: '#c51162',
          solidColor: '#ffffff',
        },
        danger: {
          solidBg: '#f44336',
          solidHoverBg: '#e57373',
          solidActiveBg: '#d32f2f',
          solidColor: '#ffffff',
        },
        success: {
          solidBg: '#4caf50',
          solidHoverBg: '#81c784',
          solidActiveBg: '#388e3c',
          solidColor: '#ffffff',
        },
      },
    },
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

// Merge both themes
const theme = {
  ...muiTheme,
  ...joyTheme,
};

export default theme; 