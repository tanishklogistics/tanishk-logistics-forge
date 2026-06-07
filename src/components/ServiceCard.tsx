import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  points,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="group relative rounded-2xl bg-card border border-border p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-accent opacity-80" />
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-elegant)]">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-navy-deep">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-navy-deep/80">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-brand" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
