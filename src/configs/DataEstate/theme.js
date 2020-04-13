// @flow

const primaryFontFamily = [
  "Poppins",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
].join(",");

const secondaryFontFamily = `"Barlow", "Roboto", "Arial", sans-serif`;

const typography = {
  fontFamily: secondaryFontFamily,
  headingFontFamily: primaryFontFamily,
  h1: {
    fontFamily: primaryFontFamily,
    fontWeight: 700,
  },
  h2: {
    fontFamily: primaryFontFamily,
    fontWeight: 700,
  },
  h3: {
    fontFamily: primaryFontFamily,
    fontWeight: 500,
  },
  h4: {
    fontFamily: primaryFontFamily,
    fontWeight: 600,
  },
  h5: {
    fontFamily: primaryFontFamily,
  },
  h6: {
    fontFamily: primaryFontFamily,
  },
  subHeading: {
    fontFamily: secondaryFontFamily,
    fontWeight: 700,
  },
  infoBlock: {
    fontFamily: secondaryFontFamily,
    fontWeight: 400,
  },
  description: {
    fontFamily: secondaryFontFamily,
    fontWeight: 400,
  },
};

const colors = {
  dataEstateBlue: "#0061A1",
  skyBlue: "#53b7e8",
  darkNavy: "#003d68",
  chalkGrey: "#e6e6e6",
  undergroundRed: "ef3f3d",
  darkGrey: "#484848"
};

const palette = {
  primary: {
    main: colors.dataEstateBlue,
    dark: colors.dataEstateBlue,
    light: colors.skyBlue,
  },
};

export const theme = {
  typography,
  colors,
  palette,
};

export default theme;
