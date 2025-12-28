import { Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery() {
  // ============================================
  // USER CUSTOMIZATION: Replace with your own images
  // ============================================
  
  // Replace these image paths with your own photos
  // Upload your images to the /public/assets folder and update the paths below
  const galleryImages: GalleryImage[] = [
    {
      src: '/assets/generated/gallery-photo-1-uniform.dim_400x400.jpg', // EDIT: Replace with your image path
      alt: 'Gallery photo 1', // EDIT: Update alt text
    },
    {
      src: '/assets/generated/gallery-photo-3-uniform.dim_400x400.jpg',
      alt: 'Gallery photo 3',
    },
    {
      src: '/assets/generated/gallery-photo-4-uniform.dim_400x400.jpg',
      alt: 'Gallery photo 4',
    },
    {
      src: '/assets/generated/gallery-photo-5-uniform.dim_400x400.jpg',
      alt: 'Gallery photo 5',
    },
    {
      src: '/assets/generated/gallery-photo-6-uniform.dim_400x400.jpg',
      alt: 'Gallery photo 6',
    },
    // Add more images here as needed
  ];
  
  // Section subtitle
  const sectionSubtitle = "Visual Showcase & Moments"; // EDIT: Update subtitle
  
  // ============================================

  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Minimalist and Modern */}
        <div className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8 mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <ImageIcon className="w-12 h-12 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
              Gallery
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-medium">{sectionSubtitle}</p>
        </div>

        {/* Gallery Grid - Uniform sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="observe-section opacity-0 transition-all duration-1000 ease-out translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/40 backdrop-blur-xl bg-white/60 shadow-lg transition-all duration-500">
                {/* Green-tinted overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 z-10" />
                
                {/* Glassmorphic border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/20 transition-all duration-500 z-20 pointer-events-none" />

                {/* Image container - uniform square aspect ratio */}
                <div className="relative overflow-hidden aspect-square">
                  {/* Loading placeholder */}
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 animate-pulse flex items-center justify-center">
                      <ImageIcon className="w-16 h-16 text-emerald-300" />
                    </div>
                  )}

                  {/* Actual image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    onLoad={() => handleImageLoad(index)}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
