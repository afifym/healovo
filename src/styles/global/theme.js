import { createMuiTheme } from "@material-ui/core";

export const styledTheme = {
  fonts: {
    main: "Montserrat, sans-serif",
  },
  colors: {
    main1: "hsl(229, 86%, 56%)",
    main2: "#E6F0EF",
    main3: "#A7BCFB",
    dark1: "#343949",
    dark2: "#797C88",
    dark3: "#B6B8BE",
    dark4: "#E0E2E8",
    light1: "hsl(0, 0%, 100%)",
    action: "#EFC660",
  },
  gradients: {
    gradient1: "linear-gradient(to right bottom, #ffffff, #e7e8e9)",
    gradient2: "linear-gradient(to left top, #ffffff, #e7e8e9)",
    gradient3: "linear-gradient(to right bottom, #FFFFFF 0%, #e7e8e9 78.44%)",
    gradient4: "linear-gradient(135deg, #A7BCFB 0%, #2D50EF 78.44%)", // blue
    gradient5: "linear-gradient(91.29deg, #2D50EF 0%, #4ADEDE 100%)", // blue and cyan
    gradient6: "linear-gradient(91.29deg, #F1C40F 0%, #FF5851 100%)", // orange
  },
  shadows: {
    shadow1: "4px 4px 29px rgba(87, 87, 87, 0.25)",
  },
  borderRadiuses: {
    borderRadius1: "22px",
    borderRadius3: "15px",
    borderRadius2: "10px",
  },
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: { main: styledTheme.colors.main1 },
    secondary: { main: styledTheme.colors.dark1 },
  },
  typography: {
    fontFamily: styledTheme.fonts.main,
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        // background: styledTheme.gradients.gradient3,
        // color: styledTheme.colors.dark1,
        fontFamily: styledTheme.fonts.main,
        textTransform: "capitalize",
        transition: "all 0.1s ease",
        boxShadow: "4px 4px 29px rgba(87, 87, 87, 0.25)",

        "&:hover": {
          transform: "scale(1.03)",
        },
      },
    },
  },
});
