import { SERVICES } from '@/constants/content';
import ServicePageTemplate from './ServicePageTemplate';

export default function PrototypingPage() {
  const service = SERVICES.find((s) => s.id === '3d-prototyping');

  return <ServicePageTemplate service={service} />;
}
