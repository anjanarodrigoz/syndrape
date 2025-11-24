import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-card-hover card-hover">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</p>
            <p className="text-white/60">{project.service}</p>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* White glow on hover */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-white/30 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#141414] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="aspect-video rounded-2xl mb-8 overflow-hidden border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm text-white/50 mb-1">Client</p>
                    <p className="text-lg font-medium text-white">{project.client}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm text-white/50 mb-1">Service</p>
                    <p className="text-lg font-medium text-primary">{project.service}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/50 mb-2">Project Details</p>
                  <p className="text-base leading-relaxed text-white/70">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
