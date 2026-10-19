import { createFileRoute } from '@tanstack/react-router';
import { YachtConstructionPage } from '@/components/site/services/YachtConstruction';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/yacht-construction')({
  head: () => pageHead(
    'Yacht Construction & Brokering',
    'Mini-yachts and luxury yachts in partnership with Forepeak Design LLC and Sunseeker Yachts — custom designs, delivery and management.'
  ),
  component: YachtConstructionPage,
});
