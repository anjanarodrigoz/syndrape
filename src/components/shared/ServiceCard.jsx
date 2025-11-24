import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, link, image }) {
  return (
    <Link to={link} className="block group">
      <div className="relative rounded-3xl bg-[#252528] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/40 hover:shadow-card-hover card-hover">
        {/* Image container with overlay */}
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#252528] via-transparent to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-8 pt-6 space-y-4">
          <h3 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/60 text-base leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Learn more link */}
          <div className="flex items-center gap-2 text-primary font-medium pt-2 group/link">
            <span className="group-hover:underline">Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>

        {/* White accent glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-white/20 blur-[80px]" />
        </div>
      </div>
    </Link>
  );
}
