import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { INSTITUTE, getWhatsAppLink } from "@/lib/data"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Faculty", href: "/faculty" },
  { label: "Test Series", href: "/test-series" },
  { label: "Batches", href: "/batches" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.webp" alt={INSTITUTE.name} className="h-9 w-9 rounded-lg object-contain" />
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight tracking-tight text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Vardhya
            </span>
            <span className="text-[10px] font-medium leading-none text-muted-foreground tracking-wide uppercase">
              Career Institute
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${INSTITUTE.phone}`} className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span className="text-xs">Call Us</span>
            </Button>
          </a>
          <a href={getWhatsAppLink("Hi, I would like to enquire about courses at Vardhya Career Institute.")} target="_blank" rel="noopener noreferrer" className="hidden sm:flex">
            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 text-white">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.526 5.865L.05 23.708a.5.5 0 00.612.612l5.843-1.476A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.79-.5-5.402-1.39l-.388-.223-3.466.877.877-3.466-.223-.388A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              <span className="text-xs">WhatsApp</span>
            </Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2.5 p-4 border-b border-border">
                  <img src="/logo.webp" alt={INSTITUTE.name} className="h-8 w-8 rounded-lg object-contain" />
                  <span className="font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Vardhya</span>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t border-border space-y-2">
                  <a href={`tel:${INSTITUTE.phone}`} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                  <a href={getWhatsAppLink("Hi, I would like to enquire about courses at Vardhya Career Institute.")} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
