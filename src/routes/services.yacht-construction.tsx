import { createFileRoute } from '@tanstack/react-router';
import { YachtConstructionPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route = createFileRoute('/services/yacht-construction')({
  head: () => pageHead('Yacht Construction & Brokering', 'ECMFS offers mini-yacht designs and luxury yacht brokering in Lagos — 42ft sports fisherman yachts, 50ft sporting yachts, and more.'),
  component: YachtConstructionPage,
});
