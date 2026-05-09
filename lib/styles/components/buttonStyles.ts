import { focusRing } from "../styles";

export const buttonBase = `
    uppercase
    text-center
    text-md
    font-semibold 
    transition-all 
    duration-200 
    shadow-[0_8px_25px_rgba(0,0,0,0.3)]
    hover:opacity-90
    hover:-translate-y-[1px]
    active:translate-y-0 
    ${focusRing}
  `;

// buttonStyles.ts
export const buttonVariants = {
  cta: `bg-cta text-black`,
  outline: `border border-white text-white hover:bg-white/10`,
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
