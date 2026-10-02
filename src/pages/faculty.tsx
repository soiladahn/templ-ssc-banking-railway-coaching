import { Link } from "react-router-dom";
import {
  ArrowRight, MessageCircle, ChevronRight, BookOpen, Users,
  Target, BarChart3, ClipboardCheck, Brain, Repeat,
  GraduationCap, Award, Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import { FACULTY, INSTITUTE, getWhatsAppLink } from "@/lib/data";

function Section({ children, className = "", muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className={`py-16 md:py-24 ${muted ? "bg-muted/40" : ""} ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 lg:px-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>{children}</div>
    </section>
  );
}

const LEADERSHIP = [
  { name: "Arvijit Sen", title: "Academic Head – SSC", focus: "SSC CGL, CHSL & MTS strategy" },
  { name: "Tavishi Dutta", title: "Academic Head – Banking", focus: "IBPS, SBI & RRB Banking programs" },
  { name: "Neeladri Bose", title: "Academic Head – Railway", focus: "RRB NTPC & Group D programs" },
  { name: "Sairee Malhotra", title: "Student Mentorship Lead", focus: "Performance tracking & study planning" },
];

const METHODOLOGY = [
  { icon: Brain, label: "Understand", desc: "Concept clarity first" },
  { icon: BookOpen, label: "Practise", desc: "Structured problem sets" },
  { icon: ClipboardCheck, label: "Test", desc: "Timed assessments" },
  { icon: BarChart3, label: "Analyse", desc: "Performance review" },
  { icon: Target, label: "Improve", desc: "Targeted revision" },
  { icon: Repeat, label: "Repeat", desc: "Continuous cycle" },
];

const WHY_FACULTY = [
  { icon: Clock, title: "13+ Yrs Avg Experience", desc: "Our faculty brings over a decade of teaching experience in competitive examinations." },
  { icon: Award, title: "Subject Experts", desc: "Each faculty member specialises in their domain — no generalist teaching." },
  { icon: Users, title: "Small Batch Focus", desc: "Batches of 45-55 ensure personal attention and doubt resolution." },
  { icon: ClipboardCheck, title: "Regular Assessment", desc: "Weekly tests and mock analysis to track every student's progress." },
];

export function FacultyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Our Faculty
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {FACULTY.length} dedicated educators with deep expertise in SSC, Banking & Railway examination preparation.
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-foreground">Faculty</span>
          </nav>
        </div>
      </section>

      {/* Faculty Grid */}
      <Section>
        <SectionHeader badge="Our Team" title="Faculty Members" subtitle="Experienced educators who bring subject expertise and exam insight to every classroom." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FACULTY.map((f, i) => (
            <Card key={i} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardHeader className="pb-3 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-base">{f.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{f.role}</p>
                <Badge variant="outline" className="mt-1 text-[10px] mx-auto">{f.position}</Badge>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-2 pt-0">
                <Separator />
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Experience</span><span className="font-medium text-xs">{f.experience}</span></div>
                  <div className="flex justify-between gap-2"><span className="text-muted-foreground shrink-0">Specialization</span><span className="font-medium text-xs text-right">{f.specialization}</span></div>
                  {"classes" in f && f.classes && <div className="flex justify-between"><span className="text-muted-foreground">Classes</span><span className="font-medium text-xs">{f.classes}</span></div>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Academic Leadership */}
      <Section muted>
        <SectionHeader badge="Leadership" title="Academic Team" subtitle="The leadership team that designs curriculum and oversees program quality." />
        <div className="max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-t border-b">
                  <th className="border px-4 py-3 text-left font-bold text-sm">Name</th>
                  <th className="border px-4 py-3 text-left font-bold text-sm">Designation</th>
                  <th className="border px-4 py-3 text-left font-bold text-sm hidden sm:table-cell">Focus Area</th>
                </tr>
              </thead>
              <tbody>
                {LEADERSHIP.map((l, i) => (
                  <tr key={i} className="border-t even:bg-muted/50">
                    <td className="border px-4 py-3 text-sm font-semibold">{l.name}</td>
                    <td className="border px-4 py-3 text-sm text-muted-foreground">{l.title}</td>
                    <td className="border px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">{l.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Teaching Methodology */}
      <Section>
        <SectionHeader badge="Methodology" title="How We Teach" subtitle="A continuous, structured cycle that builds mastery through repetition and analysis." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {METHODOLOGY.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{step.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                {i < METHODOLOGY.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-5 h-4 w-4 text-muted-foreground/40" />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Every topic follows this cycle — ensuring no concept is left incomplete.
        </p>
      </Section>

      {/* Why Our Faculty */}
      <Section muted>
        <SectionHeader badge="Advantage" title="Why Our Faculty" subtitle="What sets the Vardhya teaching team apart from the rest." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_FACULTY.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6 pb-5 space-y-3">
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Academic Approach */}
      <Section>
        <SectionHeader badge="Approach" title="Our Academic Philosophy" subtitle="Built on two principles — concept clarity and exam-oriented practice." />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 pb-5 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Concept Clarity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every topic is taught from fundamentals before progressing to exam-level difficulty. We ensure students understand the 'why' behind every method — not just the shortcut. This builds a foundation that holds across different question patterns and exam formats.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 pb-5 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Exam-Oriented Practice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                After concepts are clear, students move into intensive practice — timed topic tests, sectional tests and full-length mocks. Each mock is followed by a detailed analysis session where faculty identify weak areas and assign targeted revision.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Learn from the Best
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Begin your preparation with {INSTITUTE.shortName}'s experienced faculty and structured programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href={getWhatsAppLink("Hi, I'd like to know more about the faculty and programs at Vardhya.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/courses"><ArrowRight className="mr-2 h-4 w-4" /> View Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
