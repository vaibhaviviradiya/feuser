import { createTheme } from '@mui/material/styles';
import { extendTheme as createJoyTheme } from '@mui/joy/styles';

// Create base theme
const baseTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    },
  },
};

// Create Material-UI theme
const muiTheme = createTheme(baseTheme);

// Create Joy UI theme
const joyTheme = createJoyTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: baseTheme.palette.primary.main,
          solidHoverBg: baseTheme.palette.primary.main,
          solidActiveBg: baseTheme.palette.primary.main,
          solidColor: '#ffffff',
        },
        neutral: {
          solidBg: baseTheme.palette.grey[100],
          solidHoverBg: baseTheme.palette.grey[200],
          solidActiveBg: baseTheme.palette.grey[300],
          solidColor: baseTheme.palette.grey[900],
        },
      },
    },
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.background.paper,
        },
      },
    },
  },
});

// Merge themes
const theme = {
  ...muiTheme,
  ...joyTheme,
};

export default theme; 