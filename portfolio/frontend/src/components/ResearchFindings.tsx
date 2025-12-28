import { Microscope, Beaker } from 'lucide-react';

export default function ResearchFindings() {
  // ============================================
  // USER CUSTOMIZATION: Update your research information below
  // ============================================
  
  // Research status message
  const researchTitle = "Research in Progress"; // EDIT: Update title
  const researchDescription = "Currently conducting research and gathering data. Detailed findings and publications will be available soon."; // EDIT: Update description
  const statusLabel = "Active Research Phase"; // EDIT: Update status label
  
  // Section subtitle
  const sectionSubtitle = "Laboratory Experience & Research Projects"; // EDIT: Update subtitle
  
  // ============================================

  return (
    <section id="research-findings" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <Microscope className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Research Findings
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Research in Progress Placeholder */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl text-center transition-all duration-500">
            <div className="flex flex-col items-center gap-6">
              {/* Icon */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg transition-all duration-500">
                <Beaker className="w-16 h-16 text-white" />
              </div>

              {/* Message */}
              <div className="space-y-3 transition-all duration-500">
                <h3 className="text-2xl font-bold text-slate-800 transition-colors duration-300">{researchTitle}</h3>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  {researchDescription}
                </p>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-3 mt-4 transition-all duration-300">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-600">{statusLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
