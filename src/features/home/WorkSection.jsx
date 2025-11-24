import { Link } from 'react-router-dom';
import { PROJECTS } from '@/constants/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';

export default function WorkSection() {
  // Get first 3 projects for preview
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* White accent glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/70">Portfolio</span>
          </div>
          <h2 className="text-display-3 md:text-display-2 font-bold text-white">Our Work</h2>
          <p className="text-white/60 text-xl max-w-lg mx-auto">
            See the precision for yourself.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Link
              to="/projects"
              key={project.id}
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/40 hover:shadow-card-hover">
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
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/projects">
            <Button size="xl" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
