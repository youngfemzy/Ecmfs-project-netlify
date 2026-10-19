import { createFileRoute } from '@tanstack/react-router';
import { ResourcesPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route = createFileRoute('/resources')({
  head: () => pageHead('Resources', 'Download the ECMFS company brochure and access key resources about our marine construction services and capabilities.'),
  component: ResourcesPage,
});
