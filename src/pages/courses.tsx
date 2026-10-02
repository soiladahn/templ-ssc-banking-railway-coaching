import { Link } from "react-router-dom";
import {
  MessageCircle, Phone, Users,
  CheckCircle, GraduationCap, HelpCircle, BarChart3, FileText,
  Briefcase, Train, Landmark, Zap, CalendarCheck, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import {
  INSTITUTE, SSC_COURSES, BANKING_COURSES, RAILWAY_COURSES,
  SHORT_COURSES, getWhatsAppLink,
} from "@/lib/data";

const fmt = (fee: number) => `₹${fee.toLocaleString("en-IN")}`;

/* ─── Reusable scroll-animated section ─── */
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

/* ─── Detail row helper ─── */
function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

/* ─── Full course card (SSC / Banking / Railway) ─── */
function CourseDetailCard({ c }: { c: typeof SSC_COURSES[number] | typeof BANKING_COURSES[number] | typeof RAILWAY_COURSES[number] }) {
  const msg = `Hi, I'd like to know more about the ${c.name} program.`;
  return (
    <Card id={c.id} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{c.name}</CardTitle>
          {"popular" in c && c.popular && <Badge className="shrink-0">Popular</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{c.exam}</p>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        {/* Subjects */}
        <div className="flex flex-wrap gap-1.5">
          {c.subjects.map((s) => (
            <Badge key={s} variant="secondary" className="text-[11px] font-normal">{s}</Badge>
          ))}
        </div>
        <Separator />
        {/* Details */}
        <div className="space-y-2">
          <Row label="Duration" value={c.duration} />
          <Row label="Mode" value={c.mode} />
          {"classes" in c && c.classes && <Row label="Classes" value={c.classes} />}
          {"eligibility" in c && c.eligibility && <Row label="Eligibility" value={c.eligibility} />}
          {"batchSize" in c && c.batchSize && <Row label="Batch Size" value={c.batchSize} />}
          <Row label="Mock Tests" value={c.mockTests} />
          {"topicTests" in c && c.topicTests && <Row label="Topic Tests" value={c.topicTests} />}
          {"sectionalTests" in c && !!(c as Record<string, unknown>).sectionalTests && (
            <Row label="Sectional Tests" value={String((c as Record<string, unknown>).sectionalTests)} />
          )}
          {"interview" in c && !!(c as Record<string, unknown>).interview && (
            <Row label="Interview Prep" value={<Badge variant="outline" className="text-[10px]">Included</Badge>} />
          )}
          {"currentAffairs" in c && !!(c as Record<string, unknown>).currentAffairs && (
            <Row label="Current Affairs" value={String((c as Record<string, unknown>).currentAffairs)} />
          )}
        </div>
        <Separator />
        {/* Fee & CTA */}
        <div className="mt-auto space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{fmt(c.fee)}</span>
            {"installment" in c && c.installment && (
              <span className="text-xs text-muted-foreground">EMI available</span>
            )}
          </div>
          <Button asChild className="w-full">
            <a href={getWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-4" /> Enquire Now
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Short-course compact card ─── */
function ShortCourseCard({ c }: { c: typeof SHORT_COURSES[number] }) {
  const msg = `Hi, I'd like to know more about the ${c.name} program.`;
  return (
    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{c.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{c.duration}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {"classes" in c && c.classes && <Row label="Classes" value={c.classes} />}
        {"focus" in c && c.focus && (
          <p className="text-xs text-muted-foreground leading-relaxed">{c.focus}</p>
        )}
        {"topicTests" in c && c.topicTests && <Row label="Topic Tests" value={c.topicTests} />}
        {"practiceSets" in c && c.practiceSets && <Row label="Practice Sets" value={c.practiceSets} />}
        {"sectionalTests" in c && c.sectionalTests && <Row label="Sectional Tests" value={c.sectionalTests} />}
        {"fullTests" in c && c.fullTests && <Row label="Full Tests" value={c.fullTests} />}
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{fmt(c.fee)}</span>
          <Button asChild size="sm">
            <a href={getWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1 size-3" /> Enquire
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ════════════════════════════════════════════════════════
   COURSES PAGE
   ════════════════════════════════════════════════════════ */
export function CoursesPage() {
  return (
    <>
      <PageHero />
      <CourseCategories />
      <CompareCourses />
      <StudyMaterial />
      <StudentSupport />
      <CourseCTA />
    </>
  );
}

/* ─── 1. Page Hero ─── */
function PageHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 section-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Programs</Badge>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Courses
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-in-up delay-100">
          Comprehensive coaching programs for SSC, Banking & Railway examinations — designed for every preparation stage.
        </p>
        <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 animate-fade-in-up delay-200">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary-foreground">Courses</span>
        </nav>
      </div>
    </section>
  );
}

/* ─── 2. Course Categories (Tabs) ─── */
function CourseCategories() {
  return (
    <Section>
      <SectionHeader badge="Explore" title="Choose Your Program" subtitle="Select an exam category to view all available courses" />
      <Tabs defaultValue="ssc" className="w-full">
        <TabsList className="mx-auto mb-10 flex-wrap h-auto gap-1">
          <TabsTrigger value="ssc" className="gap-1.5"><Landmark className="size-4" /> SSC Programs</TabsTrigger>
          <TabsTrigger value="banking" className="gap-1.5"><Briefcase className="size-4" /> Banking Programs</TabsTrigger>
          <TabsTrigger value="railway" className="gap-1.5"><Train className="size-4" /> Railway Programs</TabsTrigger>
          <TabsTrigger value="short" className="gap-1.5"><Zap className="size-4" /> Short-Term</TabsTrigger>
        </TabsList>

        <TabsContent value="ssc">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SSC_COURSES.map((c) => <CourseDetailCard key={c.id} c={c} />)}
          </div>
        </TabsContent>

        <TabsContent value="banking">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BANKING_COURSES.map((c) => <CourseDetailCard key={c.id} c={c} />)}
          </div>
        </TabsContent>

        <TabsContent value="railway">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RAILWAY_COURSES.map((c) => <CourseDetailCard key={c.id} c={c} />)}
          </div>
        </TabsContent>

        <TabsContent value="short">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHORT_COURSES.map((c) => <ShortCourseCard key={c.id} c={c} />)}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}

/* ─── 3. Compare Courses ─── */
const COMPARISONS = [
  { label: "Exam Body", ssc: "Staff Selection Commission", banking: "IBPS / SBI / RBI", railway: "Railway Recruitment Board" },
  { label: "Key Exams", ssc: "CGL, CHSL, MTS", banking: "PO, Clerk, SO", railway: "NTPC, Group D, ALP" },
  { label: "Subjects", ssc: "Quant, English, Reasoning, GA", banking: "Quant, Reasoning, English, Banking Awareness", railway: "Maths, Reasoning, General Science, GA" },
  { label: "Duration", ssc: "4–12 Months", banking: "7–11 Months", railway: "5–9 Months" },
  { label: "Fee Range", ssc: `${fmt(13900)}–${fmt(31500)}`, banking: `${fmt(20500)}–${fmt(30900)}`, railway: `${fmt(15900)}–${fmt(23500)}` },
  { label: "Interview", ssc: "No", banking: "Yes (PO)", railway: "No" },
];

function CompareCourses() {
  return (
    <Section muted>
      <SectionHeader badge="Compare" title="SSC vs Banking vs Railway" subtitle="Understand the key differences between exam categories" />
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-40">Feature</th>
              <th className="text-left py-3 px-4 font-semibold">SSC</th>
              <th className="text-left py-3 px-4 font-semibold">Banking</th>
              <th className="text-left py-3 px-4 font-semibold">Railway</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISONS.map((row, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 font-medium text-muted-foreground">{row.label}</td>
                <td className="py-3 px-4">{row.ssc}</td>
                <td className="py-3 px-4">{row.banking}</td>
                <td className="py-3 px-4">{row.railway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile cards */}
      <div className="md:hidden grid gap-4">
        {(["ssc", "banking", "railway"] as const).map((cat) => (
          <Card key={cat}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base capitalize">{cat === "ssc" ? "SSC" : cat === "banking" ? "Banking" : "Railway"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {COMPARISONS.map((row, i) => (
                <Row key={i} label={row.label} value={row[cat]} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 4. Study Material ─── */
const MATERIALS = [
  { category: "SSC Programs", icon: Landmark, items: ["Printed chapter-wise notes", "Topic-wise practice sheets", "Previous-year question compilations", "Monthly current affairs capsule", "Formula & shortcut booklet"] },
  { category: "Banking Programs", icon: Briefcase, items: ["Printed study modules", "Banking awareness handbook", "Weekly current affairs digest", "Sectional practice booklets", "Interview preparation guide"] },
  { category: "Railway Programs", icon: Train, items: ["Printed study material", "General Science reference notes", "Previous-year question bank", "Monthly current affairs sheet", "Practice problem sets"] },
];

function StudyMaterial() {
  return (
    <Section>
      <SectionHeader badge="Resources" title="Study Material Included" subtitle="Every program comes with comprehensive study material — printed and digital" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MATERIALS.map((m, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <m.icon className="size-5 text-primary" /> {m.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 5. Student Support ─── */
const SUPPORT_SERVICES = [
  { icon: HelpCircle, title: "Doubt Desk", desc: "Dedicated doubt-solving sessions throughout the week with subject faculty" },
  { icon: Users, title: "Mentor Sessions", desc: "One-on-one mentoring for study planning, time management, and strategy" },
  { icon: BarChart3, title: "Mock Analysis", desc: "Detailed performance reports after every full-length mock test" },
  { icon: CalendarCheck, title: "Progress Tracking", desc: "Weekly progress reports tracking accuracy, speed, and improvement" },
  { icon: FileText, title: "Revision Support", desc: "Structured revision schedules and quick-reference material before exams" },
  { icon: Award, title: "Motivational Workshops", desc: "Regular sessions on exam temperament, stress management, and focus" },
];

function StudentSupport() {
  return (
    <Section muted>
      <SectionHeader badge="Support" title="Student Support Services" subtitle="Preparation goes beyond classes — we support every step of the journey" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPORT_SERVICES.map((s, i) => (
          <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center py-8">
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <s.icon className="size-7" />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 6. CTA ─── */
function CourseCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 section-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <GraduationCap className="size-12 text-primary-foreground/30 mx-auto mb-4" />
        <h2
          className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Need Help Choosing the Right Course?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Our counsellors can help you pick the best program based on your background,
          target exam, and preparation timeline. Get a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a href={getWhatsAppLink("Hi, I need help choosing the right course. Can you guide me?")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-5" /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href={`tel:${INSTITUTE.phone}`}>
              <Phone className="mr-2 size-5" /> Call {INSTITUTE.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
