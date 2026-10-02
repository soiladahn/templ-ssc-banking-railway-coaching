import { Link } from "react-router-dom";
import {
  ArrowRight, MessageCircle, Trophy, Star,
  ChevronRight, Quote, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import { RESULTS, TOPPERS, INSTITUTE, getWhatsAppLink } from "@/lib/data";

function Section({ children, className = "", muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className={`py-16 md:py-24 ${muted ? "bg-muted/40" : ""} ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 lg:px-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>{children}</div>
    </section>
  );
}

const maxCount = Math.max(...RESULTS.map((r) => r.count));
const totalSelections = RESULTS.reduce((s, r) => s + r.count, 0);

const STORIES = [
  { ...TOPPERS[0], background: "Working professional, first serious attempt", duration: "10 months with SSC CGL Prime" },
  { ...TOPPERS[2], background: "Commerce graduate, switched from MBA prep", duration: "9 months with BankEdge Pro" },
  { ...TOPPERS[5], background: "BSc graduate from a small town in UP", duration: "7 months with RailQuest NTPC" },
];

const YEARLY = [
  { year: "2020-21", selections: 312 }, { year: "2021-22", selections: 478 },
  { year: "2022-23", selections: 614 }, { year: "2023-24", selections: 843 },
  { year: "2024-25", selections: 1087 }, { year: "2025-26", selections: totalSelections },
];
const maxYear = Math.max(...YEARLY.map((y) => y.selections));

const examCategories = [
  { label: "SSC", color: "bg-blue-500", exams: RESULTS.filter((r) => r.exam.startsWith("SSC")) },
  { label: "Banking", color: "bg-emerald-500", exams: RESULTS.filter((r) => ["IBPS PO", "SBI PO", "IBPS Clerk", "SBI Clerk"].includes(r.exam)) },
  { label: "Railway & Others", color: "bg-amber-500", exams: RESULTS.filter((r) => r.exam.startsWith("RRB") || r.exam === "Other Govt Exams") },
];

export function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Results
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {totalSelections.toLocaleString("en-IN")}+ selections in 2025-26 — a record built on disciplined preparation.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">Results</span>
          </nav>
        </div>
      </section>

      {/* Results Overview */}
      <Section>
        <SectionHeader badge="2025-26 Results" title="Selection Overview" subtitle={`Total ${totalSelections.toLocaleString("en-IN")}+ students selected across SSC, Banking & Railway examinations.`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESULTS.map((r, i) => (
            <Card key={r.exam} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${i * 0.05}s` }}>
              <CardContent className="pt-5 pb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{r.exam}</span>
                  <span className="text-lg font-bold gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>{r.count}+</span>
                </div>
                <Progress value={(r.count / maxCount) * 100} className="h-2.5" />
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Toppers Gallery */}
      <Section muted>
        <SectionHeader badge="Toppers" title="Our Top Performers" subtitle="Students who achieved outstanding ranks in national-level examinations." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TOPPERS.map((t, i) => (
            <Card key={i} className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6 pb-5 space-y-2">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.exam}</p>
                <Badge variant="secondary" className="text-xs">{t.result}</Badge>
                <p className="text-[11px] text-muted-foreground">{t.course}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Student Stories */}
      <Section>
        <SectionHeader badge="Journeys" title="Student Success Stories" subtitle="Real preparation journeys — from first mock to final selection." />
        <div className="grid md:grid-cols-3 gap-6">
          {STORIES.map((s, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{s.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{s.exam} · {s.result}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.story}</p>
                <Separator />
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Background</span><span className="font-medium text-right text-xs max-w-[60%]">{s.background}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium text-xs">{s.duration}</span></div>
                  {s.initialScore && (
                    <div className="flex justify-between"><span className="text-muted-foreground">Initial → Final</span><span className="font-medium text-xs">{s.initialScore} → {s.finalScore}</span></div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section muted>
        <SectionHeader badge="In Their Words" title="What Our Students Say" subtitle="Honest feedback from students who prepared with us." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPPERS.filter((t) => "story" in t).map((t, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-5 pb-4 space-y-3">
                <Quote className="h-5 w-5 text-primary/40" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{(t as Record<string, unknown>).story as string}"</p>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.exam} · {t.result}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Year-wise Timeline */}
      <Section>
        <SectionHeader badge="Growth" title="Year-wise Selections" subtitle="Consistent growth in student selections over the years." />
        <div className="max-w-3xl mx-auto space-y-4">
          {YEARLY.map((y, i) => (
            <div key={y.year} className="flex items-center gap-4">
              <span className="text-sm font-semibold w-20 shrink-0 text-right">{y.year}</span>
              <div className="flex-1 relative">
                <Progress value={(y.selections / maxYear) * 100} className="h-8 rounded-lg" />
                <span className="absolute inset-0 flex items-center pl-3 text-xs font-bold text-primary-foreground">
                  {y.selections.toLocaleString("en-IN")}+
                </span>
              </div>
              {i === YEARLY.length - 1 && <Badge className="shrink-0">Latest</Badge>}
            </div>
          ))}
        </div>
      </Section>

      {/* Exam-wise Breakdown */}
      <Section muted>
        <SectionHeader badge="Breakdown" title="Exam-wise Results" subtitle="Selections grouped by examination category." />
        <div className="grid md:grid-cols-3 gap-6">
          {examCategories.map((cat) => {
            const catTotal = cat.exams.reduce((s, e) => s + e.count, 0);
            return (
              <Card key={cat.label} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${cat.color}`} />
                    <CardTitle className="text-lg">{cat.label}</CardTitle>
                  </div>
                  <p className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>{catTotal}+</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  {cat.exams.map((e) => (
                    <div key={e.exam} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{e.exam}</span>
                      <span className="font-semibold">{e.count}+</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Your Success Story Starts Here
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join {INSTITUTE.shortName} and become part of the next batch of successful candidates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href={getWhatsAppLink("Hi, I'd like to know more about joining Vardhya.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/courses"><ArrowRight className="mr-2 h-4 w-4" /> Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
