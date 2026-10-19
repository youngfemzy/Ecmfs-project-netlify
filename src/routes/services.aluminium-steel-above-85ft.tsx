import { createFileRoute } from '@tanstack/react-router';
import { AluminiumSteelUnder85Page } from '@/components/site/services/AluminiumSteelUnder85';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/aluminium-steel-above-85ft')({
  head: () => pageHead(
    'Aluminium & Steel Boat Construction',
    'ECMFS boat construction under and above 85ft — interceptors, patrol boats, pilot craft, fire rescue boats and commercial vessels.'
  ),
  component: AluminiumSteelUnder85Page,
});
