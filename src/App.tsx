import { Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { HomePage } from "@/pages/home"
import { CoursesPage } from "@/pages/courses"
import { ResultsPage } from "@/pages/results"
import { FacultyPage } from "@/pages/faculty"
import { TestSeriesPage } from "@/pages/test-series"
import { BatchesPage } from "@/pages/batches"
import { AboutPage } from "@/pages/about"
import { ContactPage } from "@/pages/contact"

export default function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/test-series" element={<TestSeriesPage />} />
          <Route path="/batches" element={<BatchesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
