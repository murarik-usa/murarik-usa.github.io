import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface HistoryEntry {
  date: string;
  title: string;
  institution: string;
  type: 'education' | 'achievement';
}

const getIcon = (type: string) => {
  switch (type) {
    case 'education':
      return GraduationCap;
    case 'achievement':
      return Award;
    default:
      return BookOpen;
  }
};

export default function ClinicalHistory() {
  // ============================================
  // USER CUSTOMIZATION: Update your educational history below
  // ============================================
  
  // Add, remove, or edit history entries as needed
  const historyData: HistoryEntry[] = [
    {
      date: '2022 - Present', // EDIT: Your dates
      title: 'Bachelor of Science in Biology', // EDIT: Your degree/achievement
      institution: 'Stanford University', // EDIT: Your institution
      type: 'education', // Options: 'education' or 'achievement'
    },
    {
      date: 'December 2023',
      title: 'Dean\'s List Recognition',
      institution: 'Stanford University',
      type: 'achievement',
    },
    {
      date: '2021 - 2022',
      title: 'Pre-Medical Foundation Studies',
      institution: 'Stanford University',
      type: 'education',
    },
    // Add more entries here as needed
  ];
  
  // Section subtitle
  const sectionSubtitle = "Educational Timeline"; // EDIT: Update subtitle if desired
  
  // ============================================

  return (
    <section id="clinical-history" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Clinical History
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Timeline Cards */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
          <div className="space-y-4">
            {historyData.map((entry, index) => {
              const Icon = getIcon(entry.type);

              return (
                <div
                  key={index}
                  className="glass-panel rounded-xl border-l-4 border-l-emerald-500 border-t border-r border-b border-white/40 bg-white/60 backdrop-blur-xl transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-6 py-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Date Badge */}
                      <div className="mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold transition-all duration-300">
                          {entry.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 transition-colors duration-300">
                        {entry.title}
                      </h3>

                      {/* Institution */}
                      <p className="text-emerald-600 font-semibold text-base transition-all duration-300">{entry.institution}</p>
                    </div>
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
