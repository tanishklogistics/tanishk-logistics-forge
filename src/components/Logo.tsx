import logo from "@/assets/tanishk-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logo.url} alt="Tanishk Logistics" className={className} />;
}
