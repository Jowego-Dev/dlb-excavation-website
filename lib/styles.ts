// General
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-3 focus-visible:ring-offset-white";

export const navbarStyles = {
  container: "border-b bg-white shadow-md",
  link: `text-primary font-semibold transition hover:text-secondary ${focusRing}`,
  activeLink: "text-accent hover:text-secondary",
  ctaButton: `bg-primary text-white text-sm font-semibold rounded-lg text-center transition 
   shadow-md hover:shadow-sm hover:opacity-80 ${focusRing}`,
};

export const mobileMenuStyles = {
  menuContainer: "border-b bg-white shadow-md",
  menuButton: `transition bg-primary text-white hover:opacity-80 rounded-full ${focusRing}`,
  link: `border-b border-secondary font-semibold text-primary hover:bg-secondary/10 ${focusRing}`,
  activeLink: "text-accent",
  linkIcon: "text-primary",
  activeLinkIcon: "text-accent",
  bottomContainer: "border-t border-secondary",
  ctaButton: `bg-primary text-white text-sm font-semibold rounded-lg text-center transition 
   shadow-md hover:shadow-sm hover:opacity-80 ${focusRing}`,
};

export const languageSwitcher = {
  container: `text-sm ${focusRing} z-51`,
  button: `text-secondary hover:text-primary hover:cursor-pointer transition ${focusRing}`,
  activeLanguage: "text-accent font-semibold",
  menu: `border border-secondary bg-white shadoow-md overflow-hidden rounded-md`,
  menuItem: `hover:bg-zinc-100 transition ${focusRing}`,
  abreviation: "text-xs font-semibold text-secondary",
  label: "text-primary",
  checkIcon: "text-accent",
};

export const footerStyles = {
  container: "bg-primary text-white text-sm",
  socialIcon: `text-accent/80 hover:text-accent transition-colors hover:bg-white/10 ${focusRing} rounded-md`,
  link: "text-white hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  title: "border-b text-lg font-semibold border-accent",
  contactIcon: "text-accent",
  bottomContainer: "border-t border-accent",
};
