interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ number, eyebrow, title, description }: SectionHeadingProps) {
  return <div className="mb-10 md:mb-12">
    <div className="mb-4 flex items-center gap-3 text-xs font-medium text-muted-foreground">
      <span className="font-mono text-accent">{number}</span><span className="h-px w-8 bg-border" /><span>{eyebrow}</span>
    </div>
    <h2 className="font-display text-3xl font-medium leading-tight text-foreground md:text-4xl">{title}</h2>
    {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>}
  </div>;
}