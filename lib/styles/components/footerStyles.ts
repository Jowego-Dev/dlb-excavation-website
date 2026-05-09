import { focusRing } from "../styles";

const headingTextColor = "text-white";
const descriptionTextColor = "text-white/80";
const accentTextColor = "text-accent";
const mutedTextColor = "text-white/60";

export const footerStyles = {
  ctaBanner: {
    container: "bg-primary border-b border-accent",
    marketingLine: `text-3xl font-semibold text-center lg:text-left ${headingTextColor}`,
    maketingSubLine: `text-xl text-center lg:text-left ${headingTextColor}`,
    phone: `text-lg font-semibold hover:text-accent ${headingTextColor}`,
    phoneIcon: "text-accent",
  },

  container: "bg-primary",
  divider: "bg-accent",

  brand: {
    description: `text-center text-lg leading-6 ${descriptionTextColor}`,
    social: {
      container: `text-lg hover:text-accent transition-colors ${descriptionTextColor}`,
      icon: "rounded-full bg-accent text-primary",
      description: `text-lg hover:${accentTextColor} transition-colors ${descriptionTextColor}`,
      name: accentTextColor,
    },
  },

  accordion: {
    border: "border-accent",
    icon: "text-accent",
  },

  infoItem: {
    icon: {
      container: "rounded-full border-2 border-accent",
      icon: "text-accent",
    },
    content: `text-lg font-semibold leading-relaxed ${descriptionTextColor}`,
  },

  navlist: {
    item: "text-base text-white/90 transition-colors hover:text-accent",
    icon: "text-accent transition-transform group-hover:translate-x-1",
  },

  heading: `text-xl font-bold uppercase tracking-wide ${headingTextColor}`,

  copyRightBar: {
    container: `border-t border-white/10 text-base text-white/60 text-center ${mutedTextColor}`,
    content: "lg:text-left",
    createdBy: `${accentTextColor} hover:${descriptionTextColor}`,
  },
};
