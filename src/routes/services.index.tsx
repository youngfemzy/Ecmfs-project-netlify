import { createFileRoute } from '@tanstack/react-router';
import { ServicesMapPage } from '@/components/site/services/ServicesMap';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/')({
  head: () => pageHead(
    'Our Services',
    'ECMFS shipbuilding services: Aluminium & steel boat construction under and above 85ft, concrete floats, boat maintenance and management, and yacht construction and brokering.'
  ),
  component: ServicesMapPage,
});
