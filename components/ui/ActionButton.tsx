import {
  buttonBase,
  buttonVariants,
  ButtonVariant,
} from "@/lib/styles/components/buttonStyles";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: ButtonVariant;
};

export default function ActionButton({
  children,
  href,
  onClick,
  className,
  variant = "outline",
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={`
        flex items-center justify-center
        px-5 py-4 lg:px-5 lg:py-3
        
        ${buttonBase}
        ${buttonVariants[variant]}
        ${className}
      `}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        px-5 py-4 lg:px-5 lg:py-3
        
        ${buttonBase}
        ${buttonVariants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
