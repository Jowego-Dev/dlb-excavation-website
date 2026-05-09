import { focusRing } from "../styles";

export const languageSwitcherStyles = {
  // Container (no focus here)
  container: "relative z-51 text-sm",

  // Button
  buttonBase: `transition-colors duration-200 ${focusRing}`,
  buttonDefault: "text-text",
  buttonHover: "hover:text-primary cursor-pointer",

  // Active language (EN / FR)
  languageBase: "uppercase flex",
  languageActive: "text-active font-semibold",

  // Dropdown menu
  menu: `border border-secondary bg-white shadow-md overflow-hidden`,

  // Menu item
  itemBase: `text-base transition-colors duration-200 ${focusRing}`,
  itemHover: "hover:bg-zinc-100",

  // Text styles
  abbreviation: "text-xs font-semibold text-secondary",
  label: "text-primary",

  // Icon
  checkIcon: "text-active",
};
