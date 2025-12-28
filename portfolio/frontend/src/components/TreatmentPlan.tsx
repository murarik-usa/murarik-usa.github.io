import { Target, GraduationCap, Stethoscope, Lightbulb } from 'lucide-react';

export default function TreatmentPlan() {
  // ============================================
  // USER CUSTOMIZATION: Update your future goals below
  // ============================================
  
  // MD Program Goals
  const mdProgramDescription = "Pursuing medical school to develop clinical expertise and surgical skills. Target enrollment: Fall 2026."; // EDIT: Your MD program goals
  const mdProgramGoals = [
    "Complete MCAT with competitive score (Target: 520+)", // EDIT: Your goals
    "Gain extensive clinical exposure through shadowing and volunteering",
    "Build surgical observation experience in operating rooms",
    // Add more goals as needed
  ];
  
  // Surgical Interests
  const surgicalDescription = "Focusing on surgical specialties with emphasis on hands-on clinical practice and patient care."; // EDIT: Your surgical interests
  const surgicalSpecialties = [
    'Neurosurgery', // EDIT: Your specialties
    'General Surgery',
    'Orthopedic Surgery',
    // Add more specialties as needed
  ];
  
  // Vision Statement
  const visionStatements = [
    "My ultimate goal is to become a skilled surgeon who provides exceptional patient care through clinical excellence and surgical precision. I envision a career focused on direct patient interaction, performing complex surgical procedures, and continuously refining my technical skills.", // EDIT: Your vision
    "Through dedicated clinical training and hands-on surgical experience, I aim to develop expertise in advanced surgical techniques while maintaining a patient-centered approach that prioritizes compassionate care and optimal outcomes for every individual I treat.",
    // Add more paragraphs as needed
  ];
  const visionQuote = "Committed to surgical excellence and compassionate patient care."; // EDIT: Your quote
  
  // Timeline
  const timeline = [
    { year: '2025', milestone: 'Complete B.S. Biology' }, // EDIT: Your timeline
    { year: '2026', milestone: 'Begin MD Program' },
    { year: '2030', milestone: 'Medical School Graduation' },
    { year: '2030+', milestone: 'Surgical Residency' },
    // Add more milestones as needed
  ];
  
  // Section subtitle
  const sectionSubtitle = "Future Goals & Career Trajectory"; // EDIT: Update subtitle
  
  // ============================================

  return (
    <section id="treatment-plan" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <Target className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Treatment Plan
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Main Goals Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* MD Program */}
          <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
            <div className="glass-panel h-full p-8 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl transition-all duration-500">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg inline-block mb-6 transition-all duration-300">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-colors duration-300">MD Program</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                {mdProgramDescription}
              </p>
              <div className="space-y-3">
                {mdProgramGoals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0 transition-all duration-300" />
                    <p className="text-base text-slate-700">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specialty Focus */}
          <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8" style={{ transitionDelay: '100ms' }}>
            <div className="glass-panel h-full p-8 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl transition-all duration-500">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg inline-block mb-6 transition-all duration-300">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-colors duration-300">Surgical Interests</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                {surgicalDescription}
              </p>
              <div className="space-y-3">
                {surgicalSpecialties.map((specialty, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 transition-all duration-500"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <p className="font-semibold text-slate-800 text-base transition-colors duration-300">{specialty}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement - Static with no effects */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8" style={{ transitionDelay: '200ms' }}>
          <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/40 bg-gradient-to-br from-white/70 to-emerald-50/70 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Vision Statement</h3>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Long-term Career Objectives</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              {visionStatements.map((statement, i) => (
                <p key={i}>{statement}</p>
              ))}
              <p className="font-semibold text-emerald-700 text-lg">
                "{visionQuote}"
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mt-8" style={{ transitionDelay: '300ms' }}>
          <div className="glass-panel p-6 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl transition-all duration-500">
            <h3 className="text-xl font-bold text-slate-800 mb-6 transition-all duration-300">Projected Timeline</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeline.map((item, i) => (
                <div 
                  key={i} 
                  className="text-center p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60 transition-all duration-500"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-2 transition-all duration-300">{item.year}</div>
                  <div className="text-sm sm:text-base text-slate-600">{item.milestone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
