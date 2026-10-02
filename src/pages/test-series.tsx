import { Link } from "react-router-dom";
import {
  MessageCircle, CheckCircle, FileText, PlayCircle, ArrowRight,
  BarChart3, Globe, Tag, BookOpen, Clock, FlaskConical, LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import {
  TEST_SERIES, FREE_RESOURCES, FREE_CLASSES, getWhatsAppLink,
} from "@/lib/data";

const fmt = (fee: number) => `₹${fee.toLocaleString("en-IN")}`;

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

/* ════════════════════════════════════════════════════════
   TEST SERIES PAGE
   ════════════════════════════════════════════════════════ */
export function TestSeriesPage() {
  return (
    <>
      <PageHero />
      <TestSeriesCards />
      <TestSeriesFeatures />
      <FreeDownloads />
      <FreeWeeklyClasses />
      <StudyMaterialOverview />
      <TestSeriesCTA />
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
        <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Practice & Resources</Badge>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Test Series & Resources
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-in-up delay-100">
          Practice with exam-simulated tests, track your performance with detailed analytics, and access free study material.
        </p>
        <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 animate-fade-in-up delay-200">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary-foreground">Test Series</span>
        </nav>
      </div>
    </section>
  );
}

/* ─── 2. Test Series Cards ─── */
function TestSeriesCards() {
  return (
    <Section>
      <SectionHeader
        badge="Test Series"
        title="Choose Your Test Series"
        subtitle="Exam-pattern tests with detailed solutions and performance analytics"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEST_SERIES.map((ts, i) => {
          const msg = `Hi, I'd like to purchase the ${ts.name} (${fmt(ts.fee)}).`;
          return (
            <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{ts.name}</CardTitle>
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {fmt(ts.fee)}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-4">
                <Separator />
                <ul className="space-y-2.5 flex-1">
                  {ts.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <a href={getWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 size-4" /> Buy Now
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

/* ─── 3. Test Series Features ─── */
const TS_FEATURES = [
  { icon: BarChart3, title: "Performance Analytics", desc: "Track accuracy, speed, and improvement across every test attempt" },
  { icon: Globe, title: "All-India Ranking", desc: "See where you stand among thousands of aspirants nationwide" },
  { icon: Tag, title: "Difficulty Tagging", desc: "Questions tagged by difficulty level so you know where to focus" },
  { icon: BookOpen, title: "Detailed Solutions", desc: "Step-by-step solutions with shortcuts and alternative methods" },
  { icon: FlaskConical, title: "Previous-Year Simulations", desc: "Solve real exam papers in a timed, simulated environment" },
  { icon: LayoutGrid, title: "Sectional Tests", desc: "Subject-wise and topic-wise tests for targeted preparation" },
];

function TestSeriesFeatures() {
  return (
    <Section muted>
      <SectionHeader
        badge="Why Choose Us"
        title="Test Series Features"
        subtitle="Every test series is designed to replicate the actual exam experience"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TS_FEATURES.map((f, i) => (
          <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center py-8">
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <f.icon className="size-7" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 4. Free Downloads ─── */
function FreeDownloads() {
  return (
    <Section>
      <SectionHeader
        badge="Free Resources"
        title="Free Study Material"
        subtitle="Download previous-year papers, formula sheets, and revision notes — completely free"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {FREE_RESOURCES.map((r, i) => (
          <Card key={i} className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <FileText className="size-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug truncate">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">PDF Download</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => alert(`Download for "${r.name}" will be available soon.`)}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 5. Free Weekly Classes ─── */
function FreeWeeklyClasses() {
  return (
    <Section muted>
      <SectionHeader
        badge="Free Classes"
        title="Free Weekly Classes"
        subtitle="Join our complimentary weekly sessions — open to all aspirants"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FREE_CLASSES.map((cls, i) => (
          <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                <PlayCircle className="size-6" />
              </div>
              <div>
                <h3 className="font-semibold">{cls}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                  <Clock className="size-3.5" /> Every week · Free for all
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 6. Study Material Overview ─── */
const MATERIAL_BREAKDOWN = [
  {
    category: "SSC Programs",
    volumes: [
      "Quantitative Aptitude — 4 volumes",
      "English Language — 3 volumes",
      "General Intelligence & Reasoning — 3 volumes",
      "General Awareness — 4 volumes",
      "Previous-Year Compilations — 5 volumes",
    ],
  },
  {
    category: "Banking Programs",
    volumes: [
      "Quantitative Aptitude Module",
      "Reasoning Ability Module",
      "English Language Module",
      "Banking & Financial Awareness Module",
      "Current Affairs Module",
      "Interview Preparation Guide",
      "Sectional Practice Module",
    ],
  },
  {
    category: "Railway Programs",
    volumes: [
      "Mathematics Module",
      "General Intelligence & Reasoning Module",
      "General Science Module",
      "General Awareness Module",
      "Previous-Year Question Bank",
    ],
  },
];

function StudyMaterialOverview() {
  return (
    <Section>
      <SectionHeader
        badge="Study Material"
        title="What's Included in Course Material"
        subtitle="Every enrolled student receives comprehensive printed and digital material"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MATERIAL_BREAKDOWN.map((m, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="size-5 text-primary" />
                {m.category}
              </CardTitle>
              <Badge variant="secondary" className="w-fit text-xs">{m.volumes.length} {m.category === "SSC Programs" ? "volumes" : "modules"}</Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {m.volumes.map((v, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{v}</span>
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

/* ─── 7. CTA ─── */
function TestSeriesCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 section-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <BarChart3 className="size-12 text-primary-foreground/30 mx-auto mb-4" />
        <h2
          className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Boost Your Preparation
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Combine structured courses with our test series and free resources for a complete preparation strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link to="/courses">
              <ArrowRight className="mr-2 size-5" /> Explore Courses
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href={getWhatsAppLink("Hi, I'd like to know more about the test series and study resources.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-5" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
