import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: defaultTheme.typography.pxToRem(15),
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: defaultTheme.palette.background.paper,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: "top",
        arrow: true,
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [defaultTheme.breakpoints.up("lg")]: {
            maxWidth: 1000,
          },
        },
      },
    },
  },
});
