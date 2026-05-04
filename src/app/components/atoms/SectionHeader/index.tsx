interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  kicker?: string;
}

export default function SectionHeader({ label, title, kicker }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3.5 mb-6 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
        <span>{label}</span>
        <span className="flex-1 h-px bg-line" />
      </div>
      <h2 className="font-display font-normal text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.02em] text-text">
        {title}
      </h2>
      {kicker ? (
        <p className="mt-4.5 text-[17px] leading-[1.6] text-dim max-w-155">
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
