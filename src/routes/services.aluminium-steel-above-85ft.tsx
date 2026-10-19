import { createFileRoute } from '@tanstack/react-router';
import { AluminiumSteelAbove85Page } from '@/components/site/services/AluminiumSteelAbove85';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/aluminium-steel-above-85ft')({
  head: () => pageHead(
    'Aluminium & Steel Boat Construction Above 85ft',
    'ECMFS large vessel construction above 85 ft — fast support intervention vessels, offshore crafts and commercial marine assets at Apapa partner shipyard.'
  ),
  component: AluminiumSteelAbove85Page,
});
