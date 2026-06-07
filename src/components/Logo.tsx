import logoUrl from "@/assets/tanishk-logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoUrl} alt="Tanishk Logistics" className={className} />;
}
