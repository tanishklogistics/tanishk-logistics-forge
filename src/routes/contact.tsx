import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, User, MessageCircle, Send } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tanishk Logistics" },
      { name: "description", content: "Get in touch with Tanishk Logistics for transport contracting, freight coordination and container handling services in Gujarat." },
      { property: "og:title", content: "Contact Tanishk Logistics" },
      { property: "og:description", content: "Phone, email and address for Tanishk Logistics — Galpadar, Gujarat." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  message: z.string().trim().min(5, "Please share a few details").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setError(null);
    const text = `Hello Tanishk Logistics,%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0A%0A${encodeURIComponent(parsed.data.message)}`;
    window.open(`https://wa.me/919825031792?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <>
      <section className="bg-[var(--gradient-brand)] text-primary-foreground">
        <div className="container-x py-20 md:py-24">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-glow font-semibold">Contact</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold max-w-3xl">Let's coordinate your next shipment.</h1>
          <p className="mt-4 max-w-2xl text-white/80 text-lg">
            Reach out by phone, WhatsApp or the form below. We'll respond quickly with a plan.
          </p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <InfoCard icon={User} label="Contact Person" value="Umesh R. Shah" />
          <InfoCard
            icon={Phone}
            label="Phone"
            value="+91 98250 31792"
            href="tel:+919825031792"
          />
          <InfoCard
            icon={Mail}
            label="Email"
            value="tanishklogistics9@gmail.com"
            href="mailto:tanishklogistics9@gmail.com"
          />
          <InfoCard
            icon={MapPin}
            label="Address"
            value="Survey No. 29/2, Near Renault Showroom, National Highway No. 8/A, Galpadar - 370240, Gujarat, India"
          />
          <a
            href="https://wa.me/919825031792"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white py-4 font-semibold shadow-[var(--shadow-glow)] hover:brightness-105 transition"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-elegant)]">
          <h2 className="text-2xl font-extrabold text-navy-deep">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We'll respond as soon as possible.</p>

          <div className="mt-6 grid gap-4">
            <Field label="Your name">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="input"
                placeholder="Full name"
              />
            </Field>
            <Field label="Phone number">
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="input"
                placeholder="+91 ..."
              />
            </Field>
            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="input resize-none"
                placeholder="Briefly describe your freight or container requirement"
              />
            </Field>

            {error && <p className="text-sm text-destructive">{error}</p>}
            {sent && <p className="text-sm text-orange-brand font-semibold">Opening WhatsApp with your message…</p>}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-navy-deep shadow-[var(--shadow-glow)] hover:brightness-105 transition"
            >
              Send via WhatsApp <Send className="h-4 w-4" />
            </button>
          </div>

          <style>{`
            .input {
              width: 100%;
              border-radius: 0.5rem;
              border: 1px solid var(--border);
              background: var(--background);
              padding: 0.7rem 0.9rem;
              font-size: 0.9rem;
              color: var(--foreground);
              outline: none;
              transition: border-color .15s, box-shadow .15s;
            }
            .input:focus {
              border-color: var(--orange-brand);
              box-shadow: 0 0 0 3px color-mix(in oklab, var(--orange-brand) 20%, transparent);
            }
          `}</style>
        </form>
      </section>

      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
          <iframe
            title="Tanishk Logistics location"
            src="https://www.google.com/maps?q=Galpadar+Gujarat+370240&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:border-orange-brand/50 transition">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--gradient-brand)] text-white shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 font-semibold text-navy-deep">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest font-semibold text-navy-deep/70">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
