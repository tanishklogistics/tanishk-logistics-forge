import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Package, Ship, ShieldCheck, Clock, Network, Wrench, Users } from "lucide-react";
import heroImg from "@/assets/hero-logistics.jpg";
import { ServiceCard } from "@/components/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanishk Logistics — Reliable Transport & Container Handling" },
      { name: "description", content: "Professional transport contractor & commission agent services specializing in container handling across Gujarat, India." },
      { property: "og:title", content: "Tanishk Logistics — Reliable Transport & Container Handling" },
      { property: "og:description", content: "Trusted logistics partner for transport contracting, freight coordination and container operations." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "15+", label: "Years of expertise" },
  { value: "1000+", label: "Containers handled" },
  { value: "24/7", label: "Operations support" },
  { value: "100%", label: "On-time commitment" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Trusted Logistics Partner", desc: "Built on transparency, accountability and long-term client relationships." },
  { icon: Clock, title: "Fast & Efficient Execution", desc: "Time-bound dispatch and delivery with proactive status updates." },
  { icon: Network, title: "Strong Transport Network", desc: "Wide network of trucks, drivers and freight partners across India." },
  { icon: Wrench, title: "Container Handling Expertise", desc: "Specialists in safe loading, unloading and yard operations." },
  { icon: Users, title: "Professional Coordination", desc: "Dedicated coordinators ensure smooth client–transporter communication." },
  { icon: Truck, title: "Heavy Transport Ready", desc: "Equipped to manage container-scale freight movement nationwide." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Container port at dusk" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        </div>

        <div className="container-x py-24 md:py-36 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-orange-glow backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-brand" />
              Transport Contractor • Commission Agent
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Reliable Transport &amp;{" "}
              <span className="text-gradient-accent">Container Handling</span> Solutions
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
              Professional transport contractor &amp; commission agent services for seamless logistics
              operations across Gujarat and India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-navy-deep shadow-[var(--shadow-glow)] hover:brightness-105 transition">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="relative border-t border-white/10 bg-navy-deep/80 backdrop-blur">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-orange-glow">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-x py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-orange-brand font-semibold">About Tanishk Logistics</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">
            Driving freight forward with precision and trust.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Headquartered in Galpadar, Gujarat — near one of India's busiest port corridors — Tanishk Logistics
            is a specialist transport contractor and commission agent. We coordinate container movement, freight
            booking and end-to-end transport execution for businesses that depend on punctual, safe delivery.
          </p>
          <p className="mt-3 text-muted-foreground">
            Led by Umesh R. Shah, our team combines deep industry experience with an unwavering commitment to
            reliability — making us a trusted partner for shippers, exporters and freight forwarders.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-navy-deep hover:text-orange-brand transition">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-[var(--gradient-brand)] p-8 shadow-[var(--shadow-elegant)]">
            <div className="h-full w-full rounded-2xl bg-white/5 backdrop-blur border border-white/10 grid place-items-center">
              <div className="text-center text-white">
                <Truck className="h-20 w-20 mx-auto text-orange-glow animate-truck" />
                <p className="mt-4 font-display text-2xl font-bold">Moving India Forward</p>
                <p className="mt-1 text-sm text-white/70">Container • Cargo • Coordination</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-[var(--gradient-accent)] px-5 py-4 shadow-[var(--shadow-glow)] hidden md:block">
            <div className="font-display text-2xl font-extrabold text-navy-deep">Galpadar, Gujarat</div>
            <div className="text-xs text-navy-deep/80 uppercase tracking-widest">NH 8/A • Container corridor</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-brand font-semibold">What we do</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">End-to-end logistics services</h2>
            <p className="mt-4 text-muted-foreground">
              From freight coordination to container handling, we deliver complete transport solutions tailored
              to your operational needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Truck}
              title="Transport Contractor"
              description="End-to-end execution of road freight movements with reliable fleet partners."
              points={["Truck & freight coordination", "End-to-end transport execution", "Logistics movement management"]}
            />
            <ServiceCard
              icon={Package}
              title="Commission Agent"
              description="Trusted intermediary between shippers and transporters for smooth operations."
              points={["Freight coordination", "Booking & negotiation support", "Operational logistics handling"]}
            />
            <ServiceCard
              icon={Ship}
              title="Container Handling"
              description="Specialized container operations at yards, ports and project sites."
              points={["Loading / unloading coordination", "Yard & port handling support", "Safe container movement"]}
            />
          </div>

          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-navy-deep hover:text-orange-brand">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-brand font-semibold">Why choose us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-navy-deep">Built for reliability at scale</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-orange-brand/50 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-brand/10 text-orange-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-navy-deep">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-brand)] p-10 md:p-16 text-white shadow-[var(--shadow-elegant)]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-brand/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Need dependable transport &amp; container handling?</h2>
            <p className="mt-4 text-white/80">
              Talk to our team about your freight requirements. We'll respond with a tailored coordination plan.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-navy-deep shadow-[var(--shadow-glow)]">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+919825031792" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Call +91 98250 31792
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
