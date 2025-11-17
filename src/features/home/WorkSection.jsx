import { Link } from 'react-router-dom';
import { PROJECTS } from '@/constants/content';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function WorkSection() {
  // Get first 3 projects for preview
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground text-lg">
            See the precision for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-secondary/30 border border-border overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10">
                <div className="w-full h-full flex items-center justify-center p-8 relative">
                  <div className="text-center">
                    <p className="text-xl font-semibold mb-2">{project.title}</p>
                    <p className="text-sm text-muted-foreground">{project.service}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-sm font-medium">View Project</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
