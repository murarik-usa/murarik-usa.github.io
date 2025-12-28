import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Coursework from './components/Coursework';
import ClinicalHistory from './components/ClinicalHistory';
import ResearchFindings from './components/ResearchFindings';
import Gallery from './components/Gallery';
import Diagnostics from './components/Diagnostics';
import LeadershipExperience from './components/LeadershipExperience';
import TreatmentPlan from './components/TreatmentPlan';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Enhanced intersection observer for scroll animations with parallax-like effects
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Add parallax class for enhanced motion
            entry.target.classList.add('parallax-active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.observe-section');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements with enhanced animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-200/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      {/* Sticky Navigation */}
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <Coursework />
        <ClinicalHistory />
        <ResearchFindings />
        <Diagnostics />
        <LeadershipExperience />
        <TreatmentPlan />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
