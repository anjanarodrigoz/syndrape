import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        className="group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-square bg-secondary/50 relative overflow-hidden">
          {/* Placeholder for project image */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/30">
            <div className="text-center p-6">
              <p className="text-lg font-semibold mb-2">{project.title}</p>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-sm font-medium">View Details</p>
          </div>
        </div>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-card border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <div className="aspect-video bg-secondary/50 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-2xl font-semibold mb-2">{project.title}</p>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="text-lg font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service</p>
                  <p className="text-lg font-medium">{project.service}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Details</p>
                  <p className="text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
