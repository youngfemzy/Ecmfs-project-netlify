import { createFileRoute } from '@tanstack/react-router';
import { FounderPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route = createFileRoute('/founder')({
  head: () => pageHead('Founder', 'Meet Mr. Okey Nwakwesi, Founder and MD/CEO of ECMFS Shipbuilding — over 18 years of marine and construction expertise.'),
  component: FounderPage,
});
