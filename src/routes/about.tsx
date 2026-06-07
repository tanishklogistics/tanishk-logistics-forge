import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tanishk Logistics" },
      { name: "description", content: "Tanishk Logistics is a Gujarat-based transport contractor and commission agent specializing in container handling and freight coordination." },
      { property: "og:title", content: "About Tanishk Logistics" },
      { property: "og:description", content: "Trusted transport contractor & commission agent — specialist in container handling." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", text: "Deliver dependable, on-time transport and container handling services that empower our clients' operations." },
  { icon: Eye, title: "Vision", text: "To be Gujarat's most trusted logistics coordination partner for container and heavy transport movement." },
  { icon: HeartHandshake, title: "Values", text: "Reliability, transparency and long-term partnerships built on consistent execution." },
];

const highlights = [
  "Specialist in container handling & coordination",
  "Strong network of trucks and freight partners",
  "Strategically located on NH 8/A near Mundra corridor",
  "Owner-led service with direct accountability",
  "Disciplined operational coordination",
  "Trusted by shippers, exporters and freight forwarders",
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-brand text-primary-foreground">
        <div className="container-x py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-glow font-semibold">About us</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold max-w-3xl">
            Specialists in transport contracting &amp; container handling.
          </h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg">
            Tanishk Logistics is a Gujarat-based transport contractor and commission agent led by
            Umesh R. Shah. We coordinate end-to-end freight movement and container operations for
            businesses that demand precision, reliability and safety.
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-24 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-navy-deep">Who we are</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              Headquartered near the Mundra port corridor on National Highway 8/A, Tanishk Logistics
              operates at the heart of one of India's most active container movement zones. From this
              vantage point, we manage transport contracts, broker freight bookings as a commission
              agent, and coordinate container handling for shippers and forwarders.
            </p>
            <p>
              Our approach is simple: take ownership, communicate clearly, and execute with discipline.
              Every shipment is treated as a commitment — coordinated by experienced hands and tracked
              until safe delivery.
            </p>
            <p>
              Whether you need a single container moved or a recurring freight contract managed, our
              team builds the operational rhythm you can rely on.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-secondary/50 p-8">
          <h3 className="font-display font-bold text-navy-deep text-xl">What sets us apart</h3>
          <ul className="mt-5 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 text-navy-deep">
                <CheckCircle2 className="h-5 w-5 text-orange-brand shrink-0 mt-0.5" />
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card p-7 border border-border">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent text-navy-deep">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-navy-deep text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-white text-center">
          <h2 className="text-3xl font-extrabold">Let's move your freight, together.</h2>
          <p className="mt-3 text-white/80">Reach out and we'll get back with a tailored plan.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-navy-deep">
            Contact Tanishk Logistics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
