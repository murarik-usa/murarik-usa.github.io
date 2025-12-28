import { Heart } from 'lucide-react';

export default function Footer() {
  // ============================================
  // USER CUSTOMIZATION: Update footer information
  // ============================================
  
  // Your name for copyright
  const copyrightName = "Sarah Chen"; // EDIT: Replace with your name
  
  // Footer subtitle
  const footerSubtitle = "Patient Report Theme • Pre-Medical Portfolio"; // EDIT: Update subtitle
  
  // Additional info text
  const additionalInfo = "This portfolio showcases academic achievements and research experience. For inquiries, please use the contact information provided above."; // EDIT: Update additional info
  
  // ============================================

  return (
    <footer className="relative py-8 px-4 border-t border-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-6 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-600">
                © 2025 {copyrightName}. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {footerSubtitle}
              </p>
            </div>

            {/* Built with */}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500 animate-pulse" />
              <span>using</span>
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-slate-200/60 text-center">
            <p className="text-xs text-slate-500">
              {additionalInfo}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
