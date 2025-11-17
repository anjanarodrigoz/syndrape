import { SERVICES } from '@/constants/content';
import ServicePageTemplate from './ServicePageTemplate';

export default function GenerativeAIPage() {
  const service = SERVICES.find((s) => s.id === 'generative-ai');

  return <ServicePageTemplate service={service} />;
}
