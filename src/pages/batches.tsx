import { Link } from "react-router-dom";
import {
  MessageCircle, Calendar, Users, Clock, ArrowRight, Award,
  CreditCard, HelpCircle, GraduationCap, PlayCircle, UserPlus, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import { BATCHES, SCHOLARSHIPS, getWhatsAppLink } from "@/lib/data";

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

function seatBadge(seats: number) {
  if (seats <= 45) return { color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400", label: `${seats} seats left` };
  if (seats <= 50) return { color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400", label: `${seats} seats left` };
  return { color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400", label: `${seats} seats left` };
}

/* ════════════════════════════════════════════════════════
   BATCHES PAGE
   ════════════════════════════════════════════════════════ */
export function BatchesPage() {
  return (
    <>
      <PageHero />
      <UpcomingBatches />
      <BatchCalendar />
      <ScholarshipsSection />
      <ScholarshipTestCTA />
      <AdmissionProcess />
      <PaymentOptions />
      <BatchesCTA />
    </>
  );
}

/* ─── 1. Hero ─── */
function PageHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 section-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Admissions Open</Badge>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Upcoming Batches & Scholarships
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-in-up delay-100">
          Explore our September 2026 batch schedule, reserve your seat, and discover scholarship opportunities.
        </p>
        <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 animate-fade-in-up delay-200">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary-foreground">Batches</span>
        </nav>
      </div>
    </section>
  );
}

/* ─── 2. Upcoming Batches ─── */
function UpcomingBatches() {
  return (
    <Section>
      <SectionHeader
        badge="September 2026"
        title="Upcoming Batches"
        subtitle="All batches follow a structured syllabus with regular mock tests and mentorship"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {BATCHES.map((b, i) => {
          const seat = seatBadge(b.seats);
          const msg = `Hi, I'd like to reserve a seat in the ${b.name} batch (${b.exam}, starting ${b.startDate}).`;
          return (
            <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{b.name}</CardTitle>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${seat.color}`}>
                    {seat.label}
                  </span>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">{b.exam}</Badge>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4 shrink-0" />
                    <span>{b.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="size-4 shrink-0" />
                    <span>Starts {b.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="size-4 shrink-0" />
                    <span>Limited to {b.seats} students</span>
                  </div>
                </div>
                <Separator />
                <Button asChild className="w-full mt-auto">
                  <a href={getWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 size-4" /> Reserve Your Seat
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

/* ─── 3. Batch Calendar ─── */
function BatchCalendar() {
  const daysInMonth = 30;
  const startDay = 2; // Sep 1, 2026 is Tuesday (0=Sun)
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const batchDates: Record<number, string[]> = {};
  BATCHES.forEach((b) => {
    const day = parseInt(b.startDate.split(" ")[0], 10);
    if (!batchDates[day]) batchDates[day] = [];
    batchDates[day].push(b.name);
  });

  const blanks = Array.from({ length: startDay }, (_, i) => <div key={`b-${i}`} />);
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const batches = batchDates[day];
    return (
      <div
        key={day}
        className={`relative p-2 min-h-[60px] rounded-lg border text-sm transition-colors ${
          batches ? "bg-primary/5 border-primary/30" : "border-border/50"
        }`}
      >
        <span className={`font-medium ${batches ? "text-primary" : "text-foreground"}`}>{day}</span>
        {batches?.map((name, j) => (
          <p key={j} className="text-[10px] leading-tight text-primary font-medium mt-0.5 truncate">{name}</p>
        ))}
      </div>
    );
  });

  return (
    <Section muted>
      <SectionHeader
        badge="Schedule"
        title="September 2026 Batch Calendar"
        subtitle="Highlighted dates show batch start days — plan your enrolment accordingly"
      />
      {/* Desktop calendar */}
      <div className="hidden md:block">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {blanks}
          {days}
        </div>
      </div>
      {/* Mobile list */}
      <div className="md:hidden space-y-2">
        {BATCHES.map((b, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <div className="text-center shrink-0 w-12"><p className="text-lg font-bold text-primary">{b.startDate.split(" ")[0]}</p><p className="text-[10px] text-muted-foreground uppercase">Sep</p></div>
            <div><p className="text-sm font-semibold">{b.name}</p><p className="text-xs text-muted-foreground">{b.exam} · {b.timing}</p></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 4. Scholarships ─── */
function ScholarshipsSection() {
  const merit = SCHOLARSHIPS[0];
  const others = SCHOLARSHIPS.slice(1);

  return (
    <Section>
      <SectionHeader
        badge="Financial Support"
        title="Scholarship Programs"
        subtitle="We believe financial constraints should not limit your preparation"
      />
      {/* Merit scholarship with tier table */}
      <Card className="mb-8 border-primary/20 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Award className="size-6 text-primary" /> {merit.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Based on performance in the Vardhya Scholarship Test — open to all aspirants
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-3 px-4 font-semibold text-muted-foreground">Score Range</th><th className="text-left py-3 px-4 font-semibold">Tuition Discount</th></tr></thead>
              <tbody>
                {"tiers" in merit && merit.tiers.map((tier, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4">{tier.range}</td>
                    <td className="py-3 px-4"><Badge variant={i === 0 ? "default" : "secondary"}>{tier.discount}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Other scholarships */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((s, i) => (
          <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="size-5 text-primary" /> {s.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {"description" in s && (
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 5. Scholarship Test CTA ─── */
function ScholarshipTestCTA() {
  return (
    <Section muted>
      <div className="text-center max-w-2xl mx-auto">
        <div className="p-4 rounded-2xl bg-primary/10 text-primary inline-block mb-4">
          <GraduationCap className="size-8" />
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Upcoming Scholarship Test
        </h2>
        <p className="text-muted-foreground mb-2">Score high and earn up to 50% tuition discount on any classroom program.</p>
        <p className="text-sm text-muted-foreground mb-6">
          The next scholarship test is scheduled before the September batch intake.
          Register now to receive the test date, syllabus, and preparation tips.
        </p>
        <Button asChild size="lg" className="text-base">
          <a
            href={getWhatsAppLink("Hi, I'd like to register for the upcoming Vardhya Scholarship Test.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 size-5" /> Register Now
          </a>
        </Button>
      </div>
    </Section>
  );
}

/* ─── 6. Admission Process ─── */
const STEPS = [
  { icon: HelpCircle, title: "Enquire", desc: "Reach out via WhatsApp, phone, or visit the centre for information" },
  { icon: UserPlus, title: "Counselling", desc: "A counsellor helps choose the right course based on your goals" },
  { icon: PlayCircle, title: "Demo Class", desc: "Attend a complimentary demo session to experience our teaching" },
  { icon: CheckCircle, title: "Enroll", desc: "Complete your registration and begin your preparation" },
];

function AdmissionProcess() {
  return (
    <Section>
      <SectionHeader
        badge="How to Join"
        title="Admission Process"
        subtitle="Four simple steps from enquiry to enrolment"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s, i) => (
          <div key={i} className="relative text-center">
            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 py-8">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <div className="relative">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="size-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">{s.desc}</p>
              </CardContent>
            </Card>
            {i < STEPS.length - 1 && (
              <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 size-6 text-muted-foreground/40" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── 7. Payment Options ─── */
const PAYMENT_FEATURES = ["Installment plans available for long-duration programs", "UPI, net banking, debit/credit card accepted", "Cash and demand draft accepted at the centre", "Fee receipts issued for every transaction", "No hidden charges — fee is all-inclusive of material & tests"];

function PaymentOptions() {
  return (
    <Section muted>
      <SectionHeader
        badge="Fees & Payment"
        title="Payment Options"
        subtitle="Flexible payment modes and installment plans for your convenience"
      />
      <div className="max-w-2xl mx-auto">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <CreditCard className="size-5 text-primary" /> Flexible Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {PAYMENT_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

/* ─── 8. CTA ─── */
function BatchesCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 section-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <Calendar className="size-12 text-primary-foreground/30 mx-auto mb-4" />
        <h2
          className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Secure Your Seat Today
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Batches are filling up quickly. Reserve your seat now and take the first step towards your government-exam success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a
              href={getWhatsAppLink("Hi, I'd like to reserve a seat in an upcoming batch. Please share the details.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 size-5" /> Reserve on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/courses">
              <ArrowRight className="mr-2 size-5" /> View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
