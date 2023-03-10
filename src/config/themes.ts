import { Theme } from "../constants/types";

const Fixed = {
  navbarHeight: "80px",
  secondary: "#645fc6",
  red: "#ea2e32",
};

export const DarkTheme: Theme = {
  primary: "#2c2c38",
  darkPrimary: "#21212d",
  lightPrimary: "#3f3f4b",
  text: "#ffffff",
  primaryText: "#7e8796",
  gray: "#cdcecf",
  ...Fixed,
};
export const LightTheme: Theme = {
  primary: "#ffffff",
  darkPrimary: "#8590a2",
  lightPrimary: "#d3d9e4",
  text: "#21212d",
  primaryText: "#7e8796",
  gray: "#cdcecf",
  ...Fixed,
};
