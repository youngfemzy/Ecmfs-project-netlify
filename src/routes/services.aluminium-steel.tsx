import { createFileRoute } from '@tanstack/react-router';
import { AluminiumSteelUnder85Page } from '@/components/site/services/AluminiumSteelUnder85';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/aluminium-steel')({
  head: () => pageHead(
    'Aluminium & Steel Boat Construction Under 85ft',
    'ECMFS constructs aluminium and steel marine craft up to 85 ft — interceptors, patrol boats, pilot boats, fire rescue boats and catamaran passenger ferries.'
  ),
  component: AluminiumSteelUnder85Page,
});
