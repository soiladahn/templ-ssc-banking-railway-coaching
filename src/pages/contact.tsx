import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight, Phone, MessageCircle, Mail, MapPin, Clock,
  Send, Users, ArrowRight, CheckCircle, ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import { INSTITUTE, CENTRES, getWhatsAppLink } from "@/lib/data";

const EXAM_OPTIONS = [
  "SSC CGL", "SSC CHSL", "SSC MTS", "IBPS PO", "SBI PO",
  "IBPS Clerk", "SBI Clerk", "RRB NTPC", "RRB Group D", "Other",
];

const MODE_OPTIONS = ["Classroom", "Online", "Both"];

const WA_QUICK = [
  { label: "Course Enquiry", msg: "Hi, I'd like to know more about your courses." },
  { label: "Demo Class", msg: "Hi, I'd like to attend a demo class at Vardhya." },
  { label: "Fee Details", msg: "Hi, could you share the fee details for your programs?" },
  { label: "Scholarship Info", msg: "Hi, I'd like information about scholarship options." },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: INSTITUTE.social.instagram, svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  { label: "YouTube", href: INSTITUTE.social.youtube, svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
  { label: "Facebook", href: INSTITUTE.social.facebook, svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
  { label: "Telegram", href: INSTITUTE.social.telegram, svg: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
];

function Section({ children, className = "", muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className={`py-16 md:py-24 ${muted ? "bg-muted/40" : ""} ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 lg:px-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        {children}
      </div>
    </section>
  );
}

export function ContactPage() {
  const [formState, setFormState] = useState({ name: "", mobile: "", email: "", city: "", exam: "", mode: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => setFormState((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── 1. Hero ─── */}
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In Touch
          </h1>
          <p className="mt-3 text-primary-foreground/80 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We're here to answer every question about your preparation journey
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-primary-foreground">Contact</span>
          </div>
        </div>
      </section>

      {/* ─── 2. Contact Info Cards ─── */}
      <Section>
        <SectionHeader badge="Reach Us" title="Contact Information" subtitle="Multiple ways to connect with the Vardhya team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Phone, title: "Call Us", value: INSTITUTE.phone, href: `tel:${INSTITUTE.phone}`, sub: "Mon–Sat, 8 AM – 8 PM" },
            { icon: MessageCircle, title: "WhatsApp", value: INSTITUTE.whatsappDisplay, href: getWhatsAppLink("Hi, I'd like to connect with Vardhya."), sub: "Quick replies, anytime" },
            { icon: Mail, title: "Email", value: INSTITUTE.email, href: `mailto:${INSTITUTE.email}`, sub: "We reply within 24 hours" },
            { icon: MapPin, title: "Visit Us", value: INSTITUTE.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INSTITUTE.address)}`, sub: INSTITUTE.landmark },
          ].map((c) => (
            <a key={c.title} href={c.href} target={c.title === "Visit Us" ? "_blank" : undefined} rel={c.title === "Visit Us" ? "noopener noreferrer" : undefined} className="block group">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-primary/10">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <c.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed break-all">{c.value}</p>
                  <p className="text-muted-foreground/70 text-[11px] mt-1">{c.sub}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* ─── 3. Enquiry Form ─── */}
      <Section muted>
        <SectionHeader badge="Enquiry" title="Send Us a Message" subtitle="Fill in the form and our counselling team will get back to you" />
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <Card className="text-center py-12">
              <CardContent className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Thank You!</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  Thank you for your message! Our team will get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setFormState({ name: "", mobile: "", email: "", city: "", exam: "", mode: "", message: "" }); }}>
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" value={formState.name} onChange={(e) => handleChange("name", e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input id="mobile" type="tel" placeholder="+91 98XXX XXXXX" value={formState.mobile} onChange={(e) => handleChange("mobile", e.target.value)} required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" value={formState.email} onChange={(e) => handleChange("email", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Your city" value={formState.city} onChange={(e) => handleChange("city", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Target Examination</Label>
                      <Select value={formState.exam} onValueChange={(v) => handleChange("exam", v)}>
                        <SelectTrigger><SelectValue placeholder="Select exam" /></SelectTrigger>
                        <SelectContent>
                          {EXAM_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Mode</Label>
                      <Select value={formState.mode} onValueChange={(v) => handleChange("mode", v)}>
                        <SelectTrigger><SelectValue placeholder="Select mode" /></SelectTrigger>
                        <SelectContent>
                          {MODE_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={4} placeholder="Tell us about your preparation goals, questions, or anything else..." value={formState.message} onChange={(e) => handleChange("message", e.target.value)} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>

      {/* ─── 4. WhatsApp Quick Connect ─── */}
      <Section>
        <SectionHeader badge="Quick Connect" title="Message Us on WhatsApp" subtitle="Tap a button below to start a conversation instantly" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {WA_QUICK.map((w) => (
            <Button key={w.label} variant="outline" className="h-auto py-4 flex flex-col gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all" asChild>
              <a href={getWhatsAppLink(w.msg)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium">{w.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </Section>

      {/* ─── 5. Centre Locations ─── */}
      <Section muted>
        <SectionHeader badge="Locations" title="Our Centres" subtitle="Visit the campus nearest to you" />
        <div className="grid md:grid-cols-2 gap-8">
          {CENTRES.map((c) => (
            <Card key={c.name} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="bg-primary/5 pb-4">
                <CardTitle className="text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-5 space-y-3 text-sm">
                <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">{c.address}</span></div>
                <div className="flex items-center gap-2"><ExternalLink className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground">Landmark: {c.landmark}</span></div>
                <div className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground">Metro: {c.metro}</span></div>
                <Separator />
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary shrink-0" /><span className="text-muted-foreground">{INSTITUTE.officeHours}</span></div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-muted-foreground/50 shrink-0" /><span className="text-muted-foreground">{INSTITUTE.sundayHours}</span></div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /><a href={`tel:${c.contact}`} className="text-primary hover:underline">{c.contact}</a></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── 6. Office Hours ─── */}
      <Section>
        <SectionHeader badge="Hours" title="When We're Available" subtitle="Plan your visit or call during our working hours" />
        <div className="max-w-lg mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium text-sm">Monday – Saturday</span>
                </div>
                <Badge variant="secondary" className="text-xs">8:00 AM – 8:00 PM</Badge>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground/60" />
                  <span className="font-medium text-sm">Sunday</span>
                </div>
                <Badge variant="outline" className="text-xs">9:00 AM – 2:00 PM</Badge>
              </div>
              <p className="text-xs text-muted-foreground text-center pt-2">WhatsApp messages are attended to every day, including Sundays and holidays.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ─── 7. Social Media ─── */}
      <Section muted>
        <SectionHeader badge="Follow Us" title="Connect on Social Media" subtitle="Stay updated with exam tips, results, and free resources" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-primary/10">
                <CardContent className="pt-6 pb-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {s.svg}
                  </div>
                  <p className="text-sm font-medium">{s.label}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* ─── 8. Community ─── */}
      <Section>
        <SectionHeader badge="Community" title="Vardhya Aspirant Circle" subtitle="Join 3,000+ aspirants on our free WhatsApp community" />
        <div className="max-w-xl mx-auto text-center">
          <Card className="border-primary/20">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Vardhya Aspirant Circle</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                A free WhatsApp community where aspirants share daily current affairs, solve doubts together, discuss mock-test strategies, and access exclusive Vardhya updates.
              </p>
              <Button size="lg" asChild>
                <a href={getWhatsAppLink("Hi, I'd like to join the Vardhya Aspirant Circle community.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Join the Community
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ─── 9. CTA ─── */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>We'd Love to Hear From You</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Whether you have a question about courses, fees, demo classes, or anything else — our team is ready to help. Reach out today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href={`tel:${INSTITUTE.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href={getWhatsAppLink("Hi, I have a question about Vardhya.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
