import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="bg-white inline-flex p-2 rounded-md">
            <Logo className="h-14 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Reliable Transport &amp; Container Handling Solutions. Professional transport contractor and commission agent services for seamless logistics operations.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-orange-brand">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-orange-brand">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-brand">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-brand">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-orange-brand">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-orange-brand" /><a href="tel:+919825031792">+91 98250 31792</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-orange-brand" /><a href="mailto:tanishklogistics9@gmail.com">tanishklogistics9@gmail.com</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-orange-brand" /><span>Survey No. 29/2, Near Renault Showroom, NH 8/A, Galpadar - 370240, Gujarat, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Tanishk Logistics. All rights reserved.</p>
          <p>Proprietor: Umesh R. Shah</p>
        </div>
      </div>
    </footer>
  );
}
