import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

export default function SocialPosts() {
  // ============================================
  // USER CUSTOMIZATION: Update your social media posts below
  // ============================================
  
  // LinkedIn Post Information
  const linkedinHandle = "@sarahchen"; // EDIT: Your LinkedIn handle
  const linkedinPostTitle = "Latest Research on Neural Pathways"; // EDIT: Your LinkedIn post title/brief
  const linkedinPostImage = "/assets/generated/neural-network-green.dim_400x300.png"; // EDIT: Replace with your LinkedIn post image
  const linkedinPostUrl = "https://linkedin.com"; // EDIT: Your LinkedIn post URL
  
  // Instagram Post Information
  const instagramHandle = "@sarahchen_neuro"; // EDIT: Your Instagram handle
  const instagramPostTitle = "Lab Life & Research Updates"; // EDIT: Your Instagram post brief description
  const instagramPostImage = "/assets/generated/microscope-icon-green-transparent.dim_150x150.png"; // EDIT: Replace with your Instagram post image
  const instagramPostUrl = "https://instagram.com"; // EDIT: Your Instagram post URL
  
  // Section subtitle
  const sectionSubtitle = "Recent Updates & Highlights"; // EDIT: Update subtitle
  
  // ============================================
  // INTEGRATION NOTES:
  // - To update posts: Simply edit the titles, images, and URLs above
  // - For dynamic updates: Consider fetching from an API and updating these values
  // - Keep image paths pointing to your actual post thumbnails
  // ============================================

  return (
    <section id="posts" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-12 text-center">
          <div className="inline-flex items-center gap-4 mb-3">
            <img 
              src="/assets/generated/posts-icon-green-transparent.dim_150x150.png" 
              alt="Posts icon" 
              className="w-16 h-16"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Latest Social Posts
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Social Posts Grid - Simplified Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LinkedIn Post Panel */}
          <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
            <div className="glass-panel p-6 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl h-full">
              {/* LinkedIn Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-emerald-200/50">
                <div className="p-2.5 rounded-lg bg-emerald-100/80">
                  <SiLinkedin className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800">LinkedIn</h3>
                  <p className="text-slate-600 text-sm">{linkedinHandle}</p>
                </div>
              </div>

              {/* LinkedIn Post Preview */}
              <div className="space-y-4">
                {/* Post Thumbnail */}
                <div className="relative overflow-hidden rounded-xl border border-emerald-200/40 bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
                  <img
                    src={linkedinPostImage}
                    alt="LinkedIn post preview"
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Post Title */}
                <div className="px-2">
                  <p className="text-slate-800 font-semibold text-base leading-relaxed">
                    {linkedinPostTitle}
                  </p>
                </div>

                {/* View Post Link */}
                <a
                  href={linkedinPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700"
                >
                  <span>View on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Post Panel */}
          <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8" style={{ transitionDelay: '100ms' }}>
            <div className="glass-panel p-6 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl h-full">
              {/* Instagram Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-emerald-200/50">
                <div className="p-2.5 rounded-lg bg-emerald-100/80">
                  <SiInstagram className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800">Instagram</h3>
                  <p className="text-slate-600 text-sm">{instagramHandle}</p>
                </div>
              </div>

              {/* Instagram Post Preview */}
              <div className="space-y-4">
                {/* Post Thumbnail */}
                <div className="relative overflow-hidden rounded-xl border border-emerald-200/40 bg-gradient-to-br from-emerald-50/50 to-teal-50/50">
                  <img
                    src={instagramPostImage}
                    alt="Instagram post preview"
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Post Title */}
                <div className="px-2">
                  <p className="text-slate-800 font-semibold text-base leading-relaxed">
                    {instagramPostTitle}
                  </p>
                </div>

                {/* View Post Link */}
                <a
                  href={instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700"
                >
                  <span>View on Instagram</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
