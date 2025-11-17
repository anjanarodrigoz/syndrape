import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ServiceCard({ title, description, link, image }) {
  return (
    <Card className="group h-full transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={link}>
          <Button
            variant="ghost"
            className="group/btn p-0 h-auto font-medium text-accent hover:text-accent/80"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
