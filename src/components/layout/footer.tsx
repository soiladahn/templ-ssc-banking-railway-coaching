import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { INSTITUTE } from "@/lib/data"

const QUICK_LINKS = [
  { label: "SSC Courses", href: "/courses" },
  { label: "Banking Courses", href: "/courses" },
  { label: "Railway Courses", href: "/courses" },
  { label: "Test Series", href: "/test-series" },
  { label: "Results", href: "/results" },
  { label: "Upcoming Batches", href: "/batches" },
]

const RESOURCES = [
  { label: "Free Downloads", href: "/test-series" },
  { label: "Faculty", href: "/faculty" },
  { label: "Scholarships", href: "/batches" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/about" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/logo.webp" alt={INSTITUTE.name} className="h-10 w-10 rounded-lg object-contain brightness-200" />
              <div>
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Vardhya</h3>
                <p className="text-xs opacity-80">Career Institute</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">{INSTITUTE.tagline}</p>
            <div className="flex gap-3">
              {[
                { href: INSTITUTE.social.instagram, label: "Instagram", icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
                { href: INSTITUTE.social.youtube, label: "YouTube", icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
                { href: INSTITUTE.social.telegram, label: "Telegram", icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
                { href: INSTITUTE.social.facebook, label: "Facebook", icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Resources</h4>
            <ul className="space-y-2.5">
              {RESOURCES.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <span className="opacity-80">{INSTITUTE.address}</span>
              </li>
              <li className="flex gap-2.5 text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <a href={`tel:${INSTITUTE.phone}`} className="opacity-80 hover:opacity-100">{INSTITUTE.phone}</a>
              </li>
              <li className="flex gap-2.5 text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <a href={`mailto:${INSTITUTE.email}`} className="opacity-80 hover:opacity-100">{INSTITUTE.email}</a>
              </li>
              <li className="flex gap-2.5 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <div className="opacity-80">
                  <p>{INSTITUTE.officeHours}</p>
                  <p>{INSTITUTE.sundayHours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} {INSTITUTE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:opacity-100">Privacy Policy</Link>
            <Link to="/about" className="hover:opacity-100">Terms of Service</Link>
            <Link to="/about" className="hover:opacity-100">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
