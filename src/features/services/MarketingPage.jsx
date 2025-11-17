import { SERVICES } from '@/constants/content';
import ServicePageTemplate from './ServicePageTemplate';

export default function MarketingPage() {
  const service = SERVICES.find((s) => s.id === 'marketing-content');

  return <ServicePageTemplate service={service} />;
}
