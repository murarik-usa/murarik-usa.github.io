import { Users } from 'lucide-react';

export default function LeadershipExperience() {
  // ============================================
  // USER CUSTOMIZATION: Update your leadership experience below
  // ============================================
  
  // Leadership role details
  const leadershipDate = "2023 - Present"; // EDIT: Your dates
  const leadershipTitle = "Pre-Medical Society - Peer Mentor"; // EDIT: Your role title
  const leadershipInstitution = "Stanford University"; // EDIT: Your organization/institution
  
  // Section subtitle
  const sectionSubtitle = "Community Involvement & Mentorship"; // EDIT: Update subtitle
  
  // ============================================

  return (
    <section id="leadership-experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-12 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <Users className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Leadership Experience
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Leadership Entry */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-12">
          <div className="glass-panel rounded-xl border-l-4 border-l-emerald-500 border-t border-r border-b border-white/40 bg-white/60 backdrop-blur-xl transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-6 py-5">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Date Badge */}
                <div className="mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold transition-all duration-300">
                    {leadershipDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 transition-colors duration-300">
                  {leadershipTitle}
                </h3>

                {/* Institution */}
                <p className="text-emerald-600 font-semibold text-base transition-all duration-300">
                  {leadershipInstitution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
