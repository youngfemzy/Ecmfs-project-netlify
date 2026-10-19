import { createFileRoute } from '@tanstack/react-router';
import { AluminiumSteelPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route = createFileRoute('/services/aluminium-steel')({
  head: () => pageHead('Aluminium & Steel Boat Construction', 'ECMFS constructs aluminium and steel marine craft up to 85 ft — interceptors, patrol boats, pilot boats, fire rescue boats and catamaran passenger ferries.'),
  component: AluminiumSteelPage,
});
