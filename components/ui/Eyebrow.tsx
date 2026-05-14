type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3">
      <span aria-hidden className="h-px w-8 bg-accent/60" />

      <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-700 sm:text-sm">
        {children}
      </span>

      <span aria-hidden className="h-px w-8 bg-accent/60" />
    </div>
  );
}
