import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // ============================================
  // USER CUSTOMIZATION: Update navigation sections and branding
  // ============================================
  
  // Your name for the navigation brand
  const brandName = "Sarah Chen"; // EDIT: Replace with your name
  
  // Navigation sections - add, remove, or edit as needed
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'coursework', label: 'Coursework' },
    { id: 'clinical-history', label: 'Clinical History' },
    { id: 'research-findings', label: 'Research Findings' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'leadership-experience', label: 'Leadership' },
    { id: 'treatment-plan', label: 'Treatment Plan' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];
  
  // ============================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`glass-panel rounded-2xl border border-white/40 backdrop-blur-xl ${
            isScrolled ? 'bg-white/80 shadow-glass-lg' : 'bg-white/65 shadow-glass'
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-slate-800 text-base sm:text-lg hidden sm:block">
                {brandName}
              </span>
            </div>

            {/* Navigation Links with minimalist underline style */}
            <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap ${
                    activeSection === section.id
                      ? 'text-emerald-600'
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  <span className="relative z-10">{section.label}</span>
                  {/* Simple minimalist underline for active or hovered state */}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-0.5 bg-emerald-600 ${
                      activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
