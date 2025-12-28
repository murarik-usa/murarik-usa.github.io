import { Code, Award } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

const getIconComponent = (iconName: string) => {
  return Code;
};

export default function Diagnostics() {
  // ============================================
  // USER CUSTOMIZATION: Update your skills below
  // ============================================
  
  // Add, remove, or edit skills as needed
  const skillsData: Skill[] = [
    { 
      name: 'Python (NumPy, Pandas, SciPy)', // EDIT: Your skill name
      category: 'Programming Languages', // EDIT: Category
      proficiency: 95, // EDIT: Proficiency level (0-100)
      icon: 'code' 
    },
    { 
      name: 'Microsoft Office Apps (Excel, Word, PowerPoint)', 
      category: 'Productivity Tools', 
      proficiency: 92, 
      icon: 'code' 
    },
    // Add more skills here as needed
  ];
  
  // Certifications list
  const certifications = [
    'Python for Data Science (Coursera)', // EDIT: Your certifications
    'Advanced Microsoft Excel',
    // Add more certifications here
  ];
  
  // Section subtitle
  const sectionSubtitle = "Software Proficiency & Technical Competencies"; // EDIT: Update subtitle
  
  // ============================================

  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  return (
    <section id="diagnostics" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-12 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <Code className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Diagnostics
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skillsData.filter((s) => s.category === category);

            return (
              <div
                key={category}
                className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-12"
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl">
                  {/* Category Header */}
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                    {category}
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {categorySkills.map((skill, index) => {
                      const IconComponent = getIconComponent(skill.icon);

                      return (
                        <div
                          key={index}
                          className="p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60"
                          style={{ transitionDelay: `${index * 75}ms` }}
                        >
                          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                            <div className="p-3 rounded-lg bg-emerald-100/80 flex-shrink-0">
                              <IconComponent className="w-8 h-8 text-emerald-600" />
                            </div>
                            <div className="flex-1 min-w-0 w-full">
                              <h4 className="font-semibold text-slate-800 text-base mb-3">{skill.name}</h4>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.proficiency}%` }}
                                  />
                                </div>
                                <span className="text-sm font-bold text-emerald-600 min-w-[3rem] text-right">{skill.proficiency}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-12 mt-8">
          <div className="glass-panel p-8 rounded-2xl border border-white/40 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-emerald-600" />
              Certifications & Training
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 text-base text-slate-700 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200/60"
                  style={{ transitionDelay: `${i * 75}ms` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
