import { createFileRoute } from '@tanstack/react-router';
import { ConcreteFloatsPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route = createFileRoute('/services/concrete-floats')({
  head: () => pageHead('Concrete Floats', 'ECMFS is licensed to manufacture reinforced concrete floats — specialty floats, wave attenuators, marinas, floating homes, and more for the Nigerian market.'),
  component: ConcreteFloatsPage,
});
