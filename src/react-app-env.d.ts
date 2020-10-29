/// <reference types="react-scripts" />
import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colorTheme: {
      black: React.CSSProperties['backgroundColor'];
      white: React.CSSProperties['backgroundColor'];
      darkGreen: React.CSSProperties['backgroundColor'];
      deepGrey: React.CSSProperties['backgroundColor'];
      grey: React.CSSProperties['backgroundColor'];
      lightGrey: React.CSSProperties['backgroundColor'];
      lightGreen: React.CSSProperties['backgroundColor'];
    }
    fontFamily: {
      roboto: string;
      barlow: string;
      barlowCondensed: string;
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    colorTheme: {
      black: string;
      white: string;
      darkGreen: string;
      deepGrey: string;
      grey: string;
      lightGrey: string;
      lightGreen: string;
    }
    fontFamily: {
      roboto: string;
      barlow: string;
      barlowCondensed: string;
    }
  }
}

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}