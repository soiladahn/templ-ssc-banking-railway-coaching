import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Target, BookOpen, Users, Award, Clock, HeadphonesIcon, ChevronLeft,
  ChevronRight, ArrowRight, Phone, MessageCircle, MapPin, Star,
  Download, Snowflake, Monitor, Armchair, Wifi,
  Shield, Zap, MessageSquare, HelpCircle, Library, PcCase, Calendar,
  CheckCircle, Trophy, Quote, Gift, PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/section-header";
import { useInView } from "@/hooks/use-in-view";
import {
  INSTITUTE, STATS, SSC_COURSES, BANKING_COURSES, RAILWAY_COURSES,
  FACULTY, RESULTS, TOPPERS, BATCHES, TEST_SERIES, EVENTS, CENTRES,
  SCHOLARSHIPS, FAQS, NOTICES, FREE_RESOURCES, FREE_CLASSES,
  FACILITIES, getWhatsAppLink,
} from "@/lib/data";

const HERO_SLIDES = [
  { image: "/hero-classroom.webp", title: "Prepare with Clarity", sub: "Structured coaching for SSC, Banking & Railway exams" },
  { image: "/hero-building.webp", title: "Progress with Purpose", sub: "11+ years of shaping government-exam achievers" },
  { image: "/hero-students.webp", title: "Achieve with Confidence", sub: "1,344+ selections and counting" },
];

const WHY_US = [
  { icon: Target, title: "Exam-Focused Curriculum", desc: "Every topic mapped to actual exam patterns and weightage" },
  { icon: BookOpen, title: "Structured Practice", desc: "Daily assignments, weekly tests, and monthly full-length mocks" },
  { icon: Users, title: "Small Batches", desc: "45–55 students per batch for personalized attention" },
  { icon: Award, title: "Comprehensive Mock Tests", desc: "1,250+ mock tests with detailed performance analytics" },
  { icon: Clock, title: "Performance Tracking", desc: "Weekly progress reports and one-on-one mentoring sessions" },
  { icon: HeadphonesIcon, title: "Doubt Support", desc: "Dedicated doubt desk and faculty consultation throughout the week" },
];

const VALUES = ["Clarity", "Consistency", "Discipline", "Accuracy", "Accountability", "Progress"];

const FACILITY_ICONS: Record<string, React.ElementType> = {
  snowflake: Snowflake, monitor: Monitor, armchair: Armchair,
  "book-open": BookOpen, "pc-case": PcCase, library: Library,
  "help-circle": HelpCircle, users: Users, wifi: Wifi,
  shield: Shield, zap: Zap, "message-square": MessageSquare,
};

const fmt = (fee: number) => `₹${fee.toLocaleString("en-IN")}`;

/* ─── Reusable wrapper for scroll-animated sections ─── */
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
   HOMEPAGE
   ════════════════════════════════════════════════════════ */
export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <NoticeTicker />
      <StatsCounter />
      <AboutPreview />
      <CoursesOverview />
      <WhyChooseUs />
      <ResultsPreview />
      <ToppersShowcase />
      <FacultyPreview />
      <UpcomingBatches />
      <TestSeriesPreview />
      <EventsSection />
      <FacilitiesSection />
      <ScholarshipsPreview />
      <FreeResources />
      <CentresSection />
      <TestimonialsCarousel />
      <FAQPreview />
      <CTABanner />
    </>
  );
}

/* ─── 1. Hero Carousel ─── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Since {INSTITUTE.established}</Badge>
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {INSTITUTE.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-2 animate-fade-in-up delay-100">
            {HERO_SLIDES[current].title}
          </p>
          <p className="text-sm md:text-base text-white/70 mb-8 animate-fade-in-up delay-200">
            {HERO_SLIDES[current].sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up delay-300">
            <Button asChild size="lg" className="text-base">
              <Link to="/courses">Explore Courses <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <a href={getWhatsAppLink("Hi, I'd like to book a free demo class.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 size-4" /> Book Free Demo
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white transition">
        <ChevronLeft className="size-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white transition">
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

/* ─── Notice Ticker ─── */
function NoticeTicker() {
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]">
        {[...NOTICES, ...NOTICES].map((n, i) => (
          <span key={i} className="mx-8 text-sm font-medium flex items-center gap-2">
            <Star className="size-3 flex-shrink-0" /> {n}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ─── 2. Stats Counter ─── */
function StatsCounter() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-12 md:py-16 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((s, i) => (
            <Card key={i} className={`text-center py-6 hover:shadow-lg transition-shadow ${inView ? "animate-counter" : "opacity-0"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 3. About Preview ─── */
function AboutPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeader badge="About Us" title={`Welcome to ${INSTITUTE.name}`} subtitle={INSTITUTE.tagline} align="left" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Established in {INSTITUTE.established}, Vardhya Career Institute has helped over 18,500 students prepare
            for competitive government examinations. Our approach focuses on structured learning, consistent practice,
            and individual progress tracking — making exam preparation methodical rather than overwhelming.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {VALUES.map((v) => (
              <div key={v} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle className="size-4 text-primary flex-shrink-0" /> {v}
              </div>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link to="/about">Learn More <ArrowRight className="ml-2 size-4" /></Link>
          </Button>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/hero-building.webp" alt="Vardhya Campus" className="w-full h-72 lg:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>
    </Section>
  );
}

/* ─── 4. Courses Overview ─── */
function CourseCard({ c }: { c: { name: string; exam: string; duration: string; fee: number; id: string; popular?: boolean } }) {
  return (
    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{c.name}</CardTitle>
          {c.popular && <Badge variant="secondary" className="text-[10px]">Popular</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{c.exam}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Duration</span>
          <span className="font-medium">{c.duration}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Fee</span>
          <span className="font-semibold text-primary">{fmt(c.fee)}</span>
        </div>
        <Separator />
        <Button asChild variant="ghost" size="sm" className="w-full">
          <Link to={`/courses#${c.id}`}>View Details <ArrowRight className="ml-1 size-3" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function CoursesOverview() {
  return (
    <Section muted>
      <SectionHeader badge="Programs" title="Our Courses" subtitle="Comprehensive coaching for India's top government examinations" />
      <Tabs defaultValue="ssc" className="w-full">
        <TabsList className="mx-auto mb-8">
          <TabsTrigger value="ssc">SSC</TabsTrigger>
          <TabsTrigger value="banking">Banking</TabsTrigger>
          <TabsTrigger value="railway">Railway</TabsTrigger>
        </TabsList>
        <TabsContent value="ssc">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SSC_COURSES.slice(0, 3).map((c) => <CourseCard key={c.id} c={c} />)}
          </div>
        </TabsContent>
        <TabsContent value="banking">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BANKING_COURSES.slice(0, 3).map((c) => <CourseCard key={c.id} c={c} />)}
          </div>
        </TabsContent>
        <TabsContent value="railway">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RAILWAY_COURSES.slice(0, 3).map((c) => <CourseCard key={c.id} c={c} />)}
          </div>
        </TabsContent>
      </Tabs>
      <div className="text-center mt-8">
        <Button asChild><Link to="/courses">View All Courses <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 5. Why Choose Us ─── */
function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader badge="Why Vardhya" title="Why Choose Us" subtitle="A preparation system built around discipline, feedback, and results" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_US.map((item, i) => (
          <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center py-8">
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-7" />
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-2">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 6. Results Preview ─── */
function ResultsPreview() {
  const total = RESULTS.reduce((s, r) => s + r.count, 0);
  return (
    <Section muted>
      <SectionHeader badge="Results" title="Our Track Record" subtitle={`${total.toLocaleString("en-IN")}+ selections across government examinations`} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {RESULTS.map((r, i) => (
          <Card key={i} className="text-center py-5 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="text-xl md:text-2xl font-bold text-primary">{r.count}</div>
              <p className="text-xs text-muted-foreground mt-1">{r.exam}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/results">View Detailed Results <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 7. Toppers Showcase ─── */
function ToppersShowcase() {
  return (
    <Section>
      <SectionHeader badge="Achievers" title="Our Toppers" subtitle="Students who excelled with structured preparation" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {TOPPERS.slice(0, 5).map((t, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow text-center py-6">
            <CardContent className="p-0 flex flex-col items-center gap-3">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">{t.name}</h3>
              <Badge variant="secondary">{t.result}</Badge>
              <p className="text-xs text-muted-foreground">{t.exam}</p>
              {"story" in t && (
                <p className="text-xs text-muted-foreground italic line-clamp-3 px-2">"{(t as typeof TOPPERS[number] & { story: string }).story.slice(0, 100)}…"</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/results">See All Toppers <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 8. Faculty Preview ─── */
function FacultyPreview() {
  return (
    <Section muted>
      <SectionHeader badge="Faculty" title="Learn from the Best" subtitle="Experienced educators who understand what competitive exams demand" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FACULTY.slice(0, 4).map((f, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img src={f.image} alt={f.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <CardContent className="text-center pt-4">
              <h3 className="font-semibold">{f.name}</h3>
              <p className="text-sm text-primary">{f.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{f.experience} experience</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/faculty">Meet All Faculty <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 9. Upcoming Batches ─── */
function UpcomingBatches() {
  return (
    <Section>
      <SectionHeader badge="Admissions" title="Upcoming Batches" subtitle="Enrol early to secure your seat in the next cycle" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BATCHES.slice(0, 6).map((b, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="size-4 text-primary" /> {b.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Exam</span><span className="font-medium">{b.exam}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Timing</span><span>{b.timing}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Starts</span><span className="font-medium text-primary">{b.startDate}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Seats</span><span>{b.seats}</span></div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild><Link to="/batches">View All Batches <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 10. Test Series Preview ─── */
function TestSeriesPreview() {
  return (
    <Section muted>
      <SectionHeader badge="Practice" title="Online Test Series" subtitle="Full-length mocks and sectional tests with performance analytics" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEST_SERIES.map((ts, i) => (
          <Card key={i} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-base">{ts.name}</CardTitle>
              <p className="text-xl font-bold text-primary">{fmt(ts.fee)}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ts.features.slice(0, 4).map((f, j) => (
                  <li key={j} className="text-sm flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/test-series">Explore Test Series <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 11. Events ─── */
function EventsSection() {
  return (
    <Section>
      <SectionHeader badge="Events" title="Upcoming Events" subtitle="Free workshops, mock tests, and practice sessions" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EVENTS.map((e, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">{e.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="size-4" /> {e.date}</div>
              <Badge variant="outline">{e.fee}</Badge>
              <div className="pt-2">
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/contact">Register Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─── 12. Facilities ─── */
function FacilitiesSection() {
  return (
    <Section muted>
      <SectionHeader badge="Infrastructure" title="Our Facilities" subtitle="A learning environment designed for focus and productivity" />
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {FACILITIES.map((f, i) => {
            const Icon = FACILITY_ICONS[f.icon] || BookOpen;
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border hover:shadow-sm transition-shadow">
                <Icon className="size-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/computer-lab.webp" alt="Computer Lab" className="rounded-xl w-full h-40 object-cover shadow" />
          <img src="/library.webp" alt="Library" className="rounded-xl w-full h-40 object-cover shadow" />
        </div>
      </div>
    </Section>
  );
}

/* ─── 13. Scholarships Preview ─── */
function ScholarshipsPreview() {
  return (
    <Section>
      <SectionHeader badge="Financial Aid" title="Scholarships" subtitle="Making quality preparation accessible to every aspirant" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SCHOLARSHIPS.map((s, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow text-center py-6">
            <CardContent className="flex flex-col items-center gap-3 p-0">
              <div className="p-3 rounded-full bg-primary/10"><Gift className="size-6 text-primary" /></div>
              <h3 className="font-semibold text-sm px-2">{s.name}</h3>
              {"description" in s && <p className="text-xs text-muted-foreground px-4">{s.description}</p>}
              {"tiers" in s && (
                <p className="text-xs text-muted-foreground px-4">
                  Up to {s.tiers[0].discount} fee waiver based on scholarship test performance
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/batches">Apply for Scholarship <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 14. Free Resources ─── */
function FreeResources() {
  return (
    <Section muted>
      <SectionHeader badge="Free" title="Free Resources & Classes" subtitle="Start practising before you enrol" />
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Download className="size-5 text-primary" /> Downloadable Resources</h3>
          <div className="space-y-2">
            {FREE_RESOURCES.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:shadow-sm transition-shadow">
                <Download className="size-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><PlayCircle className="size-5 text-primary" /> Free Weekly Classes</h3>
          <div className="space-y-2">
            {FREE_CLASSES.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:shadow-sm transition-shadow">
                <PlayCircle className="size-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/test-series">Explore All Resources <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 15. Centres ─── */
function CentresSection() {
  return (
    <Section>
      <SectionHeader badge="Locations" title="Our Centres" subtitle="Visit us for a campus tour and free counselling session" />
      <div className="grid sm:grid-cols-2 gap-6">
        {CENTRES.map((c, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><MapPin className="size-5 text-primary" /> {c.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">{c.address}</p>
              <p className="text-muted-foreground">Landmark: {c.landmark}</p>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Capacity</span>
                <span className="font-medium">{c.capacity} students</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contact</span>
                <a href={`tel:${c.contact}`} className="font-medium text-primary">{c.contact}</a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline"><Link to="/contact">Get Directions <ArrowRight className="ml-2 size-4" /></Link></Button>
      </div>
    </Section>
  );
}

/* ─── 16. Testimonials Carousel ─── */
function TestimonialsCarousel() {
  const withStories = TOPPERS.filter((t): t is typeof TOPPERS[number] & { story: string } => "story" in t);
  const [idx, setIdx] = useState(0);

  return (
    <Section muted>
      <SectionHeader badge="Testimonials" title="What Our Students Say" subtitle="Real feedback from students who prepared with Vardhya" />
      <div className="max-w-3xl mx-auto relative">
        <Card className="py-10 px-6 md:px-10 text-center">
          <CardContent className="p-0">
            <Quote className="size-8 text-primary/30 mx-auto mb-4" />
            <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed mb-6">
              "{withStories[idx].story}"
            </p>
            <h4 className="font-semibold">{withStories[idx].name}</h4>
            <p className="text-sm text-primary">{withStories[idx].exam} — {withStories[idx].result}</p>
          </CardContent>
        </Card>
        <div className="flex justify-center gap-3 mt-6">
          <Button variant="outline" size="icon-sm" onClick={() => setIdx((i) => (i - 1 + withStories.length) % withStories.length)}>
            <ChevronLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-1.5">
            {withStories.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`size-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-muted-foreground/30"}`} />
            ))}
          </div>
          <Button variant="outline" size="icon-sm" onClick={() => setIdx((i) => (i + 1) % withStories.length)}>
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* ─── 17. FAQ Preview ─── */
function FAQPreview() {
  return (
    <Section>
      <SectionHeader badge="FAQs" title="Frequently Asked Questions" subtitle="Quick answers to common queries about our programs" />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.slice(0, 5).map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm md:text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <Button asChild variant="outline"><Link to="/about">View All FAQs <ArrowRight className="ml-2 size-4" /></Link></Button>
        </div>
      </div>
    </Section>
  );
}

/* ─── 18. CTA Banner ─── */
function CTABanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 section-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2
          className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Start Your Preparation Today
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Join thousands of aspirants who chose structured preparation over random studying.
          Take the first step towards your government job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a href={getWhatsAppLink("Hi, I'd like to know more about upcoming batches.")} target="_blank" rel="noopener noreferrer">
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
