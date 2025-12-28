import { Mail, Phone, MapPin } from 'lucide-react';
import { SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Contact() {
  // ============================================
  // USER CUSTOMIZATION: Update your contact information below
  // ============================================
  
  // Direct contact information
  const email = "sarah.chen@stanford.edu"; // EDIT: Your email
  const phone = "+1 (650) 555-0123"; // EDIT: Your phone number
  const location = "Stanford, CA 94305"; // EDIT: Your location
  
  // Social media links
  const linkedinUrl = "https://linkedin.com"; // EDIT: Your LinkedIn URL
  const linkedinHandle = "linkedin.com/in/sarahchen"; // EDIT: Your LinkedIn handle
  const instagramUrl = "https://instagram.com"; // EDIT: Your Instagram URL
  const instagramHandle = "@sarahchen_neuro"; // EDIT: Your Instagram handle
  
  // Availability note
  const availabilityNote = "Open to research collaborations, mentorship opportunities, and professional networking. Response time: 24-48 hours."; // EDIT: Your availability note
  
  // Call to action
  const ctaTitle = "Let's Collaborate"; // EDIT: CTA title
  const ctaDescription = "Interested in discussing research opportunities, neuroscience projects, or academic collaborations? I'd love to hear from you."; // EDIT: CTA description
  
  // Section subtitle
  const sectionSubtitle = "Get in Touch"; // EDIT: Update subtitle
  
  // ============================================

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <Mail className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Contact Information
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Details */}
          <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl h-full transition-all duration-500">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60 transition-all duration-300">
                  <div className="p-4 rounded-lg bg-emerald-100/80 flex-shrink-0">
                    <Mail className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-slate-700 mb-1">Email</p>
                    <p className="text-slate-600 text-base break-words">{email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60 transition-all duration-300">
                  <div className="p-4 rounded-lg bg-emerald-100/80 flex-shrink-0">
                    <Phone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-slate-700 mb-1">Phone</p>
                    <p className="text-slate-600 text-base">{phone}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60 transition-all duration-300">
                  <div className="p-4 rounded-lg bg-emerald-100/80 flex-shrink-0">
                    <MapPin className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-slate-700 mb-1">Location</p>
                    <p className="text-slate-600 text-base">{location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8" style={{ transitionDelay: '100ms' }}>
            <div className="glass-panel p-8 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl h-full transition-all duration-500">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Connect Online</h3>
              <div className="space-y-4">
                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60 transition-all duration-300"
                >
                  <div className="p-4 rounded-lg bg-emerald-100/80 flex-shrink-0">
                    <SiLinkedin className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-slate-700 mb-1">LinkedIn</p>
                    <p className="text-slate-600 text-base break-words">{linkedinHandle}</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/60 transition-all duration-300"
                >
                  <div className="p-4 rounded-lg bg-pink-100/80 flex-shrink-0">
                    <SiInstagram className="w-8 h-8 text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-slate-700 mb-1">Instagram</p>
                    <p className="text-slate-600 text-base break-words">{instagramHandle}</p>
                  </div>
                </a>
              </div>

              {/* Availability Note */}
              <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm border border-emerald-100/60">
                <p className="text-base text-slate-700 leading-relaxed">
                  <span className="font-semibold">Availability:</span> {availabilityNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mt-8" style={{ transitionDelay: '200ms' }}>
          <div className="glass-panel p-8 rounded-2xl border border-white/40 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 backdrop-blur-xl text-center transition-all duration-500">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">{ctaTitle}</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-base">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg transition-all duration-300 text-base hover:shadow-xl hover:from-emerald-600 hover:to-teal-700">
                Send Message
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 text-slate-700 font-semibold transition-all duration-300 text-base hover:bg-white/90 hover:shadow-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
