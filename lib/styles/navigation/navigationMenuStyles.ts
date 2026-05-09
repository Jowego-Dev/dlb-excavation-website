export const navigationMenuStyles = {
  // Container
  menuContainer: "border-b bg-white shadow-md text-base",

  // Toggle
  menuButton: `
    transition bg-primary text-white rounded-full`,
  menuButtonHover: `
    hover:opacity-80
  `,

  // Item (link)
  itemBase: `
    uppercase
    border-b border-primary
    font-semibold
    transition-colors duration-200
  `,
  itemDefault: `
    text-primary
  `,
  itemHover: `
  hover:bg-primary/10
  `,
  itemActive: `
    text-active
  `,

  // Icon
  iconBase: "h-5 w-5 transition-transform duration-200",
  iconDefault: "text-primary",
  iconActive: "text-active rotate-180",
};
