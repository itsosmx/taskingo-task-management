import { Theme } from "../constants/types";

const Fixed = {
  navbarHeight: "80px",
  secondary: "linear-gradient(90deg, #6190E8 0%, #A7BFE8 100%)",
  accent: "#A7BFE8",
  red: "#ea2e32",
  white: "#ffffff",
  blue: "#1877f2",
};

export const DarkTheme: Theme = {
  ...Fixed,
  primary: "#2c2c38",
  darkPrimary: "#21212d",
  lightPrimary: "#3f3f4b",
  text: "#ffffff",
  primaryText: "#7e8796",
  gray: "#cdcecf",
};
export const LightTheme: Theme = {
  ...Fixed,
  primary: "#cdcecf",
  darkPrimary: "#ffffff",
  lightPrimary: "#d3d9e4",
  text: "#21212d",
  primaryText: "#7e8796",
  gray: "#cdcecf",
};
