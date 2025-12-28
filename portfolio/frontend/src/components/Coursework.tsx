import { BookOpen, Microscope, FlaskConical, Dna } from 'lucide-react';

interface Course {
  code: string;
  title: string;
  icon: typeof Microscope;
}

export default function Coursework() {
  // ============================================
  // USER CUSTOMIZATION: Update your coursework below
  // ============================================
  
  // Add, remove, or edit courses as needed
  const courses: Course[] = [
    {
      code: 'BIO 101', // EDIT: Your course code
      title: 'Molecular & Cellular Biology', // EDIT: Your course title
      icon: Microscope, // EDIT: Choose icon (Microscope, FlaskConical, Dna, BookOpen)
    },
    {
      code: 'BIO 205',
      title: 'Human Anatomy & Physiology',
      icon: FlaskConical,
    },
    {
      code: 'BIO 310',
      title: 'Genetics & Genomics',
      icon: Dna,
    },
    {
      code: 'BIO 420',
      title: 'Advanced Biochemistry',
      icon: FlaskConical,
    },
    // Add more courses here as needed
  ];
  
  // Section subtitle
  const sectionSubtitle = "Biology Focus - Spring 2025"; // EDIT: Update semester/focus
  
  // ============================================

  return (
    <section id="coursework" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Current Coursework
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Coursework Grid - No hover effects */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-xl border border-white/40 bg-white/60 backdrop-blur-xl transition-all duration-500"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                        {course.code}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-800 leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
