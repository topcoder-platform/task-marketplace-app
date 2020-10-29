import { createMuiTheme } from '@material-ui/core/styles'

/**
 * This defines the theme object. This theme object contains both color variables
 * as well as overrides for material ui components
 */
export const theme = createMuiTheme({
  colorTheme: {
    black: '#2a2a2a',
    white: '#ffffff',
    darkGreen: '#137D60',
    deepGrey: '#F4F4F4',
    grey: '#AAAAAA',
    lightGrey: '#7F7F7F',
    lightGreen: '#0AB88A'
  },
  palette: {
    primary: {
      light: '#137D60',
      main: '#137D60',
      dark: '#137D60',
      contrastText: '#FAFAFB'
    }
  },
  fontFamily: {
    roboto: 'Roboto, sans-serif',
    barlow: 'Barlow, sans-serif',
    barlowCondensed: 'Barlow Condensed, sans-serif'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
      xxl: 1920
    }
  }
})
