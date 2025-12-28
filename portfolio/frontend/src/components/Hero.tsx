import { Activity, Brain, GraduationCap } from 'lucide-react';

export default function Hero() {
  // ============================================
  // USER CUSTOMIZATION: Update your personal information below
  // ============================================
  
  // Your name
  const studentName = "Sarah Chen"; // EDIT: Replace with your name
  
  // Your title/role
  const studentTitle = "Pre-Medical Student"; // EDIT: Replace with your title
  
  // Your focus areas (add or remove as needed)
  const focusAreas = ['Biology', 'Clinical Medicine', 'Surgical Interest', 'Patient Care']; // EDIT: Update your focus areas
  
  // Your GPA status
  const gpaStatus = "Pending"; // EDIT: Replace with your GPA or keep "Pending"
  
  // Your clinical hours
  const clinicalHours = "500+"; // EDIT: Update your clinical hours
  
  // Your bio statement
  const bioStatement = "Dedicated biology student with a passion for clinical medicine and surgical practice. Committed to pursuing an MD to develop exceptional surgical skills and provide compassionate, patient-centered care through hands-on clinical experience."; // EDIT: Write your own bio
  
  // ============================================
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative pt-32">
      {/* Glass morphic container */}
      <div className="max-w-6xl w-full observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/40 shadow-2xl backdrop-blur-xl bg-white/60">
          {/* Header Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <div>
              <p className="text-base font-medium text-slate-500 uppercase tracking-wider">Patient Intake Report</p>
              <p className="text-sm text-slate-400">Case ID: PRE-MED-2025-001</p> {/* EDIT: Update case ID if desired */}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left: Portrait and Name */}
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <div className="relative mb-6">
                {/* EDIT: Replace the placeholder with your own image */}
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-white/60 shadow-xl flex items-center justify-center overflow-hidden">
                  {/* Option 1: Use placeholder icon (current) */}
                  <Brain className="w-32 h-32 text-emerald-400/40" />
                  {/* Option 2: Use your own image - uncomment and add your image path */}
                  {/* <img src="/assets/your-photo.jpg" alt={studentName} className="w-full h-full object-cover" /> */}
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                {studentName}
              </h1>
              <p className="text-slate-600 font-medium mb-4 text-lg">{studentTitle}</p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-base font-medium text-emerald-700">Active Status</span>
              </div>
            </div>

            {/* Right: Stats and Focus Areas */}
            <div className="md:col-span-2 space-y-6">
              {/* Focus Areas */}
              <div>
                <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                  Primary Focus Areas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-5 py-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 text-slate-700 text-base font-medium shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-slate-700">GPA:</span>
                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold">
                      {gpaStatus}
                    </span>
                  </div>
                  <div className="text-base text-slate-600 font-medium">Cumulative GPA</div>
                  <div className="mt-3 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full w-full opacity-30" />
                </div>

                <div className="glass-card p-6 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {clinicalHours}
                  </div>
                  <div className="text-base text-slate-600 font-medium">Clinical Hours</div> {/* EDIT: Update label if needed */}
                  <div className="mt-3 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full w-3/4" />
                </div>
              </div>

              {/* Bio Statement */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border border-emerald-100/60">
                <p className="text-slate-700 leading-relaxed text-base">
                  {bioStatement}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
