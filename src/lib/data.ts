export const INSTITUTE = {
  name: "Vardhya Career Institute",
  shortName: "Vardhya",
  tagline: "Prepare with clarity. Progress with purpose.",
  established: 2014,
  phone: "+91 11 4178 2634",
  whatsapp: "+919810274631",
  whatsappDisplay: "+91 98102 74631",
  email: "connect@vardhyacareer.in",
  admissionsEmail: "admissions@vardhyacareer.in",
  address: "2nd Floor, Meridian House, 18 Pusa Road, New Delhi, Delhi 110005",
  landmark: "Near Karol Bagh Metro",
  officeHours: "Monday–Saturday, 8:00 AM–8:00 PM",
  sundayHours: "Sunday, 9:00 AM–2:00 PM",
  domain: "vardhyacareer.in",
  social: {
    instagram: "https://instagram.com/vardhyacareer",
    youtube: "https://youtube.com/@vardhyacareer",
    telegram: "https://t.me/vardhyacareer",
    facebook: "https://facebook.com/vardhyacareer",
  },
} as const;

export const STATS = [
  { value: "11+", label: "Years of Experience" },
  { value: "18,500+", label: "Students Trained" },
  { value: "24", label: "Expert Faculty" },
  { value: "1,250+", label: "Mock Tests Conducted" },
  { value: "94%", label: "Program Completion Rate" },
  { value: "1,344+", label: "Selections in 2025-26" },
] as const;

export const SSC_COURSES = [
  {
    id: "SSC-CGL-PRIME",
    name: "SSC CGL Prime",
    exam: "SSC CGL",
    duration: "10 Months",
    mode: "Classroom + Online",
    eligibility: "Graduates / Final-year students",
    subjects: ["Quantitative Aptitude", "English", "Reasoning", "General Awareness"],
    classes: "5 days/week",
    dailyDuration: "2.5–3 hours",
    mockTests: "80+",
    topicTests: "180+",
    doubtSessions: "Weekly",
    material: "Printed + Digital",
    fee: 28500,
    installment: true,
    batchSize: "45–55 students",
    popular: true,
  },
  {
    id: "SSC-CGL-ASCEND",
    name: "SSC CGL Ascend",
    exam: "SSC CGL",
    duration: "6 Months",
    mode: "Classroom + Online",
    eligibility: "Students with basic preparation",
    subjects: ["Quant", "English", "Reasoning", "GA"],
    mockTests: "55+",
    topicTests: "120+",
    fee: 21900,
    installment: true,
  },
  {
    id: "SSC-FOUNDATION",
    name: "SSC Foundation",
    exam: "SSC (All)",
    duration: "12 Months",
    mode: "Classroom + Online",
    eligibility: "Beginners",
    subjects: ["Quant", "English", "Reasoning", "GA"],
    classes: "5 days/week",
    mockTests: "90+",
    topicTests: "200+",
    fee: 31500,
    installment: true,
  },
  {
    id: "SSC-CHSL-SPRINT",
    name: "SSC CHSL Sprint",
    exam: "SSC CHSL",
    duration: "6 Months",
    mode: "Classroom + Online",
    subjects: ["English", "Quant", "Reasoning", "General Awareness"],
    mockTests: "60+",
    fee: 19500,
  },
  {
    id: "SSC-MTS-FOCUS",
    name: "SSC MTS Focus",
    exam: "SSC MTS",
    duration: "4 Months",
    mode: "Classroom + Online",
    subjects: ["Numerical Ability", "Reasoning", "English", "General Awareness"],
    mockTests: "40+",
    fee: 13900,
  },
] as const;

export const BANKING_COURSES = [
  {
    id: "BANK-PO-PRO",
    name: "BankEdge Pro",
    exam: "IBPS PO, SBI PO, RRB PO",
    duration: "9 Months",
    mode: "Classroom + Online",
    subjects: ["Quant", "Reasoning", "English", "Banking Awareness", "Current Affairs"],
    classes: "5 days/week",
    mockTests: "75+",
    sectionalTests: "150+",
    currentAffairs: "Weekly",
    interview: true,
    fee: 27500,
    installment: true,
    popular: true,
  },
  {
    id: "BANK-CLERK",
    name: "BankEdge Clerk",
    exam: "IBPS Clerk, SBI Clerk, RRB Clerk",
    duration: "7 Months",
    mode: "Classroom + Online",
    subjects: ["Quant", "Reasoning", "English", "General/Banking Awareness"],
    mockTests: "60+",
    fee: 20500,
  },
  {
    id: "BANK-FOUNDATION",
    name: "Banking Foundation",
    exam: "All Banking Exams",
    duration: "11 Months",
    mode: "Classroom + Online",
    eligibility: "Beginners",
    subjects: ["Quant", "Reasoning", "English", "Banking Awareness"],
    currentAffairs: "Included",
    mockTests: "90+",
    interview: true,
    fee: 30900,
    installment: true,
  },
] as const;

export const RAILWAY_COURSES = [
  {
    id: "RAIL-NTPC",
    name: "RailQuest NTPC",
    exam: "RRB NTPC",
    duration: "7 Months",
    mode: "Classroom + Online",
    subjects: ["Mathematics", "General Intelligence", "General Awareness"],
    mockTests: "65+",
    topicTests: "130+",
    fee: 18900,
    popular: true,
  },
  {
    id: "RAIL-GROUPD",
    name: "RailQuest Group D",
    exam: "RRB Group D",
    duration: "5 Months",
    mode: "Classroom + Online",
    subjects: ["Mathematics", "Reasoning", "General Science", "General Awareness"],
    mockTests: "50+",
    fee: 15900,
  },
  {
    id: "RAIL-FOUNDATION",
    name: "Railway Foundation",
    exam: "RRB NTPC, Group D & selected Railway exams",
    duration: "9 Months",
    mode: "Classroom + Online",
    eligibility: "Beginners",
    subjects: ["Maths", "Reasoning", "General Science", "GA"],
    mockTests: "80+",
    fee: 23500,
    installment: true,
  },
] as const;

export const SHORT_COURSES = [
  { id: "BOOST-QUANT", name: "Quantitative Aptitude Booster", duration: "8 weeks", classes: "4 days/week", topicTests: "40+", fullTests: "12", fee: 6900 },
  { id: "BOOST-ENGLISH", name: "English Score Builder", duration: "8 weeks", focus: "Grammar, vocabulary, comprehension, error detection", practiceSets: "35+", sectionalTests: "10", fee: 6500 },
  { id: "BOOST-REASONING", name: "Reasoning Accelerator", duration: "6 weeks", focus: "SSC + Banking + Railway reasoning", practiceSets: "30+", sectionalTests: "8", fee: 5900 },
  { id: "CURRENT-AFFAIRS", name: "Current Affairs Desk", duration: "6 months", focus: "Banking + SSC + Railway relevant coverage", fee: 3900 },
] as const;

export const FACULTY = [
  { name: "Arvijit Sen", role: "Senior Quantitative Aptitude Faculty", position: "Academic Head – SSC", experience: "13 years", specialization: "Arithmetic, Advanced Mathematics, Data Interpretation", classes: "SSC CGL, Banking, Railway", style: "Concept-first with high-volume problem practice", image: "/faculty-1.webp" },
  { name: "Meher Khatri", role: "English Language Faculty", position: "Senior Faculty", experience: "11 years", specialization: "Grammar, Reading Comprehension, Vocabulary", classes: "SSC + Banking", style: "Editorial analysis and error-detection drills", image: "/faculty-2.webp" },
  { name: "Ronav Bedi", role: "Reasoning Faculty", position: "Senior Faculty", experience: "9 years", specialization: "Puzzles, Seating Arrangement, Logical Reasoning", classes: "Banking + SSC", image: "/faculty-3.webp" },
  { name: "Iraan Vohra", role: "General Awareness Faculty", position: "Senior Faculty", experience: "12 years", specialization: "Static GK, Polity, History, Geography", classes: "SSC + Railway", image: "/faculty-4.webp" },
  { name: "Tavishi Dutta", role: "Banking Awareness Faculty", position: "Academic Head – Banking", experience: "8 years", specialization: "Banking Awareness, Economy, Financial Awareness", classes: "IBPS + SBI + RRB", image: "/faculty-5.webp" },
  { name: "Neeladri Bose", role: "General Science Faculty", position: "Academic Head – Railway", experience: "10 years", specialization: "Physics, Chemistry, Biology for competitive examinations", classes: "Railway + SSC", image: "/faculty-1.webp" },
  { name: "Eshaan Virk", role: "Current Affairs Faculty", position: "Current Affairs Lead", experience: "7 years", specialization: "National Affairs, Economy, Government Schemes, International Events", image: "/faculty-3.webp" },
  { name: "Sairee Malhotra", role: "Student Performance Mentor", position: "Student Mentorship Lead", experience: "6 years", specialization: "Study planning, mock-test analysis and preparation strategy", image: "/faculty-2.webp" },
] as const;

export const RESULTS = [
  { exam: "SSC CGL", count: 286 },
  { exam: "SSC CHSL", count: 174 },
  { exam: "SSC MTS", count: 119 },
  { exam: "IBPS PO", count: 83 },
  { exam: "SBI PO", count: 57 },
  { exam: "IBPS Clerk", count: 112 },
  { exam: "SBI Clerk", count: 76 },
  { exam: "RRB NTPC", count: 148 },
  { exam: "RRB Group D", count: 193 },
  { exam: "Other Govt Exams", count: 96 },
] as const;

export const TOPPERS = [
  { name: "Kavyaan Batra", exam: "SSC CGL", result: "AIR 47", course: "SSC CGL Prime", story: "Vardhya gave my preparation a much clearer structure. The mock analysis was particularly useful because I could see exactly where I was losing marks rather than simply looking at my overall score.", initialScore: "118/200", finalScore: "169/200" },
  { name: "Ojasvi Rane", exam: "SSC CGL", result: "AIR 83", course: "SSC CGL Prime", story: "I joined after preparing on my own for almost a year. The biggest difference was the consistency. The weekly tests and revision schedule helped me stop studying randomly." },
  { name: "Rishika Dey", exam: "IBPS PO", result: "AIR 64", course: "BankEdge Pro", story: "The banking faculty handled puzzles and DI particularly well. I also found the current-affairs sessions much easier to follow than studying monthly PDFs on my own.", initialScore: "54/100", finalScore: "82/100" },
  { name: "Anvay Khurana", exam: "SBI PO", result: "AIR 91", course: "BankEdge Pro" },
  { name: "Vihana Arora", exam: "IBPS Clerk", result: "AIR 38", course: "BankEdge Clerk" },
  { name: "Reyansh Bedi", exam: "RRB NTPC", result: "AIR 72", course: "RailQuest NTPC", story: "The railway batch was very practice-oriented. We solved a large number of previous-year questions, and the teachers explained shortcuts only after making sure we understood the basic method.", initialScore: "62/100", finalScore: "84/100" },
  { name: "Ahana Suri", exam: "RRB NTPC", result: "AIR 119", course: "RailQuest NTPC", story: "I appreciated the smaller batch size. Doubts could actually be discussed during class, and the mentors followed up when mock scores started dropping." },
  { name: "Eshita Bahl", exam: "SSC CHSL", result: "AIR 51", course: "SSC CHSL Sprint" },
  { name: "Pradyun Mehta", exam: "SSC CGL", result: "AIR 116", course: "SSC CGL Ascend" },
  { name: "Dhruvansh Kapur", exam: "RRB Group D", result: "Selected", course: "RailQuest Group D" },
] as const;

export const BATCHES = [
  { name: "Aster 26", exam: "SSC CGL", timing: "7:00 AM–9:30 AM", startDate: "1 Sep 2026", seats: 52 },
  { name: "Nivara 26", exam: "SSC CGL", timing: "5:30 PM–8:00 PM", startDate: "7 Sep 2026", seats: 48 },
  { name: "Elara 26", exam: "Banking PO", timing: "7:30 AM–10:00 AM", startDate: "2 Sep 2026", seats: 45 },
  { name: "Veyra 26", exam: "Banking Clerk", timing: "4:30 PM–7:00 PM", startDate: "9 Sep 2026", seats: 50 },
  { name: "Orin 26", exam: "Railway NTPC", timing: "6:00 PM–8:30 PM", startDate: "4 Sep 2026", seats: 55 },
  { name: "Avira 26", exam: "Railway Group D", timing: "8:00 AM–10:00 AM", startDate: "12 Sep 2026", seats: 50 },
  { name: "Selene Foundation", exam: "SSC Foundation", timing: "10:30 AM–1:00 PM", startDate: "14 Sep 2026", seats: 45 },
] as const;

export const TEST_SERIES = [
  {
    name: "SSC CGL Test Series",
    fee: 1499,
    features: ["30 Full-Length Tier-I Tests", "20 Advanced Quant Tests", "20 English Tests", "20 Reasoning Tests", "20 General Awareness Tests", "15 Previous-Year Simulations", "Detailed performance analytics", "All-India ranking"],
  },
  {
    name: "Banking Test Series",
    fee: 1799,
    features: ["25 PO Mains/Prelims simulations", "20 Clerk-level tests", "40 sectional tests", "12 current-affairs quizzes", "10 banking-awareness tests", "Detailed solutions"],
  },
  {
    name: "Railway Test Series",
    fee: 1299,
    features: ["25 NTPC tests", "20 Group D tests", "30 sectional tests", "10 previous-year simulations", "Performance analytics"],
  },
] as const;

export const EVENTS = [
  { name: "Vardhya SSC Open Mock 2026", date: "23 August 2026", mode: "Online + Classroom", fee: "Free" },
  { name: "Banking 90-Day Strategy Workshop", date: "30 August 2026", time: "11:00 AM", fee: "Free with registration" },
  { name: "Railway NTPC Mega Practice Session", date: "6 September 2026", time: "10:00 AM", fee: "Free" },
] as const;

export const CENTRES = [
  { name: "Vardhya Pusa Road Centre", address: "2nd Floor, Meridian House, 18 Pusa Road, New Delhi, Delhi 110005", landmark: "Near Karol Bagh Metro", metro: "Karol Bagh", facilities: "Classrooms, Study Hall, Doubt Desk, Computer Lab", capacity: 420, contact: "+91 11 4178 2634" },
  { name: "Vardhya East Delhi Centre", address: "3rd Floor, Aster Plaza, 12 Vikas Marg, Laxmi Nagar, Delhi 110092", landmark: "Near Laxmi Nagar Metro", metro: "Laxmi Nagar", facilities: "Classrooms, Study Hall, Test Lab", capacity: 360, contact: "+91 11 4612 8750" },
] as const;

export const SCHOLARSHIPS = [
  { name: "Vardhya Merit Scholarship", tiers: [{ range: "90%+ in scholarship test", discount: "50%" }, { range: "80–89%", discount: "30%" }, { range: "70–79%", discount: "20%" }, { range: "60–69%", discount: "10%" }] },
  { name: "Vardhya Restart Scholarship", description: "For repeat aspirants who have previously appeared for the target examination." },
  { name: "Vardhya Women Aspirant Scholarship", description: "10% tuition scholarship for eligible classroom programs." },
  { name: "Vardhya Early Enrolment Scholarship", description: "Up to 10% for selected batches before the enrolment deadline." },
] as const;

export const FAQS = [
  { q: "Which exams does Vardhya prepare students for?", a: "Vardhya offers preparation programs for SSC, Banking and Railway recruitment examinations, including SSC CGL, SSC CHSL, SSC MTS, IBPS PO, SBI PO, IBPS Clerk, SBI Clerk, RRB NTPC and RRB Group D." },
  { q: "Are classes available online?", a: "Yes. Selected programs are available through live online classes along with recorded access." },
  { q: "Can beginners join?", a: "Yes. Foundation programs are specifically designed for students starting their competitive-exam preparation." },
  { q: "Are mock tests included?", a: "Mock-test access varies by program. Full programs generally include both sectional and full-length tests." },
  { q: "Is study material provided?", a: "Yes. Enrolled students receive course-specific printed and digital study material." },
  { q: "Are doubt classes available?", a: "Yes. Doubt-solving sessions are conducted throughout the week, with additional sessions before major examinations." },
  { q: "Does Vardhya provide interview preparation?", a: "Interview preparation is included in selected Banking programs, particularly PO-level courses." },
  { q: "Is there an installment option?", a: "Installment payment is available for selected long-duration programs." },
  { q: "Can students attend a demo class?", a: "Yes. Demo classes are available for selected programs and batches." },
  { q: "What languages are used in classes?", a: "Classes are conducted primarily in English, Hindi and Hinglish depending on the subject and batch." },
] as const;

export const NOTICES = [
  "SSC CGL Prime September Batch registrations are now open.",
  "Free SSC Open Mock Test scheduled for 23 August 2026.",
  "Banking current-affairs classes for the August cycle are now available.",
  "Railway NTPC practice marathon registrations are open.",
  "Scholarship test registrations are available for September foundation batches.",
] as const;

export const FREE_RESOURCES = [
  { name: "SSC CGL Previous-Year Question Bank", type: "download" },
  { name: "Banking Current Affairs Capsule", type: "download" },
  { name: "Railway General Science Notes", type: "download" },
  { name: "Quantitative Aptitude Formula Sheet", type: "download" },
  { name: "English Grammar Revision Sheet", type: "download" },
  { name: "Monthly Current Affairs Digest", type: "download" },
  { name: "SSC Vocabulary Builder", type: "download" },
] as const;

export const FREE_CLASSES = [
  "Sunday Quant Clinic",
  "Current Affairs Roundup",
  "Weekly Reasoning Challenge",
  "English Error Detection Hour",
  "Railway GK Practice Session",
] as const;

export const FACILITIES = [
  { icon: "snowflake", label: "Air-Conditioned Classrooms" },
  { icon: "monitor", label: "Digital Teaching Boards" },
  { icon: "armchair", label: "Individual Student Seating" },
  { icon: "book-open", label: "Dedicated Study Hall" },
  { icon: "pc-case", label: "Computer-Based Test Lab" },
  { icon: "library", label: "Library & Reference Section" },
  { icon: "help-circle", label: "Doubt-Solving Desk" },
  { icon: "users", label: "Faculty Consultation Rooms" },
  { icon: "wifi", label: "Wi-Fi Enabled Campus" },
  { icon: "shield", label: "CCTV-Monitored Areas" },
  { icon: "zap", label: "Power Backup" },
  { icon: "message-square", label: "Reception & Counselling" },
] as const;

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${INSTITUTE.whatsapp}?text=${encodeURIComponent(message)}`;
}
