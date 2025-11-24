import { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '@/constants/content';
import ProjectCard from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />

        {/* White accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/70">Portfolio</span>
            </div>
            <h1 className="text-display-2 md:text-display-1 font-bold text-white">Our Work</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Explore our portfolio of precision-engineered digital fashion solutions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-white/10 bg-black sticky top-[72px] z-30 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {PROJECT_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'secondary'}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all ${activeCategory === category.id ? '' : 'bg-white/5 border-white/10'}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

        <div className="container mx-auto px-6 relative z-10">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
