import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-gold text-xs font-semibold uppercase tracking-[0.2em] font-sans mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}
