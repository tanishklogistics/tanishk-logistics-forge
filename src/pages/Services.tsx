import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Truck, Package, Ship, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Tanishk Logistics</title>
        <meta name="description" content="Transport contractor, commission agent and container handling services from Tanishk Logistics, Gujarat." />
        <meta property="og:title" content="Services — Tanishk Logistics" />
        <meta property="og:description" content="Truck & freight coordination, freight booking, container handling and yard operations." />
      </Helmet>

      <section className="bg-gradient-brand text-primary-foreground">
        <div className="container-x py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-glow font-semibold">Our services</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold max-w-3xl">
            Complete logistics services across transport, freight &amp; containers.
          </h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg">
            We combine fleet coordination, commission agency and container handling expertise to
            deliver a single, reliable logistics partner for your operations.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-6 md:grid-cols-3">
        <ServiceCard
          icon={Truck}
          title="Transport Contractor Services"
          description="End-to-end truck and freight execution with a strong network of partners."
          points={[
            "Truck & freight coordination",
            "End-to-end transport execution",
            "Logistics movement management",
            "Route planning & dispatch",
          ]}
        />
        <ServiceCard
          icon={Package}
          title="Commission Agent Services"
          description="Trusted intermediary between clients and transporters across India."
          points={[
            "Freight coordination",
            "Booking & negotiation support",
            "Operational logistics handling",
            "Transparent rate management",
          ]}
        />
        <ServiceCard
          icon={Ship}
          title="Container Handling Services"
          description="Specialist container operations near the Mundra port corridor."
          points={[
            "Loading / unloading coordination",
            "Yard & port handling support",
            "Safe container movement",
            "Documentation coordination",
          ]}
        />
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">How we work</h2>
            <p className="mt-4 text-muted-foreground">
              A simple, transparent process — from enquiry to safe delivery.
            </p>
          </div>
          <ol className="space-y-5">
            {[
              ["01", "Enquiry & assessment", "Share your freight or container requirement; we evaluate scope, route and timing."],
              ["02", "Coordination plan", "We allocate trucks, brief drivers, and confirm pickup & delivery windows."],
              ["03", "Execution & tracking", "Operations team monitors movement and keeps you informed throughout."],
              ["04", "Safe delivery & closure", "Container/cargo handed over with documentation and confirmation."],
            ].map(([n, t, d]) => (
              <li key={n} className="flex gap-5 rounded-xl bg-card border border-border p-5">
                <div className="font-display text-2xl font-extrabold text-orange-brand w-12 shrink-0">{n}</div>
                <div>
                  <div className="font-bold text-navy-deep">{t}</div>
                  <p className="text-sm text-muted-foreground mt-1">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-white text-center">
          <h2 className="text-3xl font-extrabold">Ready to plan your next movement?</h2>
          <p className="mt-3 text-white/80">Share your requirement — we'll respond with a tailored coordination plan.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-navy-deep">
            Get a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
