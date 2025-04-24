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
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
  },
};

// Create Material-UI theme
const muiTheme = createTheme({
  ...baseTheme,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.background.paper,
          color: baseTheme.palette.text.primary,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgba(0, 0, 0, 0.87)',
          },
          '&:after': {
            borderBottom: '2px solid #000000',
          },
        },
      },
    },
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