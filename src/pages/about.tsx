import { Link } from "react-router-dom";
import {
  ChevronRight, Eye, Rocket, Lightbulb, RotateCcw, Target, Clock,
  BookOpen, CheckCircle, MapPin, Phone, Users, Snowflake, Monitor,
  Armchair, Wifi, Shield, Zap, MessageSquare, HelpCircle, Library,
  PcCase, ArrowRight, Scale, TrendingUp, Crosshair, RefreshCw,
  BarChart3, FileText, UserCheck, CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import { INSTITUTE, CENTRES, FAQS, FACILITIES, getWhatsAppLink } from "@/lib/data";

const FACILITY_ICONS: Record<string, React.ElementType> = {
  snowflake: Snowflake, monitor: Monitor, armchair: Armchair,
  "book-open": BookOpen, "pc-case": PcCase, library: Library,
  "help-circle": HelpCircle, users: Users, wifi: Wifi,
  shield: Shield, zap: Zap, "message-square": MessageSquare,
};

const VALUES = [
  { icon: Crosshair, title: "Clarity", desc: "Every concept broken down until it's fully understood" },
  { icon: RotateCcw, title: "Consistency", desc: "Structured daily routines that build long-term habits" },
  { icon: Clock, title: "Discipline", desc: "Respect for time, syllabi, and committed schedules" },
  { icon: Target, title: "Accuracy", desc: "Precision in problem solving over speed alone" },
  { icon: Scale, title: "Accountability", desc: "Transparent tracking of every student's progress" },
  { icon: TrendingUp, title: "Progress", desc: "Measurable improvement through data-driven practice" },
];

const PHILOSOPHY = [
  { step: 1, label: "Understand", icon: Lightbulb },
  { step: 2, label: "Practise", icon: BookOpen },
  { step: 3, label: "Test", icon: FileText },
  { step: 4, label: "Analyse", icon: BarChart3 },
  { step: 5, label: "Improve", icon: TrendingUp },
  { step: 6, label: "Repeat", icon: RefreshCw },
];

const PROMISES = [
  "Structured, exam-aligned syllabi — no unnecessary detours",
  "Dedicated doubt-solving support six days a week",
  "Performance analytics after every mock test",
  "Small batches with a maximum of 55 students",
  "Printed and digital study material included with every program",
  "Transparent fee structure with installment options",
];

const POLICIES = [
  { title: "Admission Policy", items: ["Admission is open to all graduates and final-year students for PO-level programs", "Eligibility criteria vary by course; foundation batches accept beginners", "Seats are allocated on a first-come, first-served basis", "A scholarship test is available for merit-based fee reductions"] },
  { title: "Attendance Policy", items: ["A minimum 75% attendance is recommended for classroom programs", "Students falling below threshold receive a mentorship call", "Recorded lectures are accessible for online-enrolled students", "Leave requests can be communicated via the student portal"] },
  { title: "Refund Policy", items: ["Full refund available if withdrawal is within 7 days of enrolment", "50% refund for withdrawal within 8–15 days", "No refund after 15 days from the date of enrolment", "Processing takes 10–15 working days from the refund request"] },
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

export function AboutPage() {
  return (
    <>
      {/* ─── 1. Hero ─── */}
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Vardhya Career Institute
          </h1>
          <p className="mt-3 text-primary-foreground/80 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Prepare with clarity. Progress with purpose.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-primary-foreground">About</span>
          </div>
        </div>
      </section>

      {/* ─── 2. Our Story ─── */}
      <Section>
        <SectionHeader badge="Our Story" title="Building Futures Since 2014" subtitle="Over a decade of dedicated coaching for government examination aspirants" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Vardhya Career Institute was founded in 2014 with a single goal: to provide clear, structured, and exam-focused preparation for students aspiring to join India's civil services through SSC, Banking, and Railway examinations.
            </p>
            <p>
              Headquartered in New Delhi, the institute began as a small classroom at Pusa Road and has since grown into a two-centre operation with over 18,500 students trained across multiple exam categories. Our approach has always centred on understanding the exam pattern, practising consistently, and tracking measurable progress.
            </p>
            <p>
              What sets Vardhya apart is not a promise of shortcuts, but a commitment to thorough preparation. From daily topic-wise practice to weekly full-length mocks, from individual doubt sessions to post-test analytics — every element of the program is designed to help students improve at a pace they can sustain.
            </p>
            <p>
              With 1,344+ selections in the latest cycle, 24 expert faculty members, and a program completion rate above 94%, Vardhya continues to earn the trust of aspirants across Delhi and beyond.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="/hero-building.webp" alt="Vardhya Career Institute building" className="w-full h-72 md:h-96 object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Est. {INSTITUTE.established}</p>
              <p className="text-white/80 text-sm">{INSTITUTE.address}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 3. Vision & Mission ─── */}
      <Section muted>
        <SectionHeader badge="Purpose" title="Vision & Mission" subtitle="What drives every decision we make at Vardhya" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-primary/20">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              To be the most trusted and transparent coaching institute for government examinations in India — known not for promises, but for consistent, measurable outcomes in every batch and every exam cycle.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-primary/20">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              To equip every enrolled student with the skills, practice, and confidence to clear their target examination through structured teaching, regular assessment, and personalised mentoring — at an accessible fee.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* ─── 4. Core Values ─── */}
      <Section>
        <SectionHeader badge="Values" title="What We Stand For" subtitle="Six principles that shape every classroom, mock test, and mentoring session" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <Card key={v.title} className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="pt-8 pb-6 px-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── 5. Academic Philosophy ─── */}
      <Section muted>
        <SectionHeader badge="Methodology" title="Our Academic Philosophy" subtitle="A six-step learning cycle that every Vardhya student follows" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PHILOSOPHY.map((p, i) => (
            <div key={p.label} className="relative text-center group">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <p.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-xs font-semibold text-primary">Step {p.step}</span>
              <h4 className="font-bold text-sm mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{p.label}</h4>
              {i < PHILOSOPHY.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-8 -right-3 h-5 w-5 text-muted-foreground/40" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 6. Student Promise ─── */}
      <Section>
        <SectionHeader badge="Promise" title="Our Commitment to You" subtitle="What every student can expect when they enrol at Vardhya" />
        <div className="max-w-2xl mx-auto space-y-4">
          {PROMISES.map((p) => (
            <div key={p} className="flex items-start gap-3 group">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── 7. Our Centres ─── */}
      <Section muted>
        <SectionHeader badge="Locations" title="Our Centres" subtitle="Two campuses in Delhi, built for focused preparation" />
        <div className="grid md:grid-cols-2 gap-8">
          {CENTRES.map((c) => (
            <Card key={c.name} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="bg-primary/5 pb-4">
                <CardTitle className="text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-5 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{c.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleDot className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Landmark: {c.landmark}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">Capacity: {c.capacity} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a href={`tel:${c.contact}`} className="text-primary hover:underline">{c.contact}</a>
                </div>
                <Separator className="my-2" />
                <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Facilities:</span> {c.facilities}</p>
                <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Metro:</span> {c.metro} Metro Station</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── 8. Facilities ─── */}
      <Section>
        <SectionHeader badge="Infrastructure" title="Campus Facilities" subtitle="Modern infrastructure designed for serious exam preparation" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {FACILITIES.map((f) => {
            const Icon = FACILITY_ICONS[f.icon] || BookOpen;
            return (
              <Card key={f.label} className="text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="pt-6 pb-5 px-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{f.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ─── 9. FAQs ─── */}
      <Section muted>
        <SectionHeader badge="FAQs" title="Frequently Asked Questions" subtitle="Everything you need to know before joining Vardhya" />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="faq-0">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ─── 10. Policies ─── */}
      <Section>
        <SectionHeader badge="Policies" title="Institute Policies" subtitle="Transparency in every process" />
        <div className="grid md:grid-cols-3 gap-6">
          {POLICIES.map((p) => (
            <Card key={p.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <UserCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── 11. CTA ─── */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Visit Us Today</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Step inside our campus, meet the faculty, and see how Vardhya prepares aspirants differently. We're just a metro ride away.
          </p>
          <p className="text-sm text-primary-foreground/70 mb-6">
            <MapPin className="inline h-4 w-4 mr-1" />{INSTITUTE.address} · {INSTITUTE.landmark}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INSTITUTE.address)}`} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> Open in Maps
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href={getWhatsAppLink("Hi, I'd like to visit the Vardhya campus.")} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
