import { createFileRoute } from '@tanstack/react-router';
import { ConcreteFloatsPage } from '@/components/site/services/ConcreteFloats';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/concrete-floats')({
  head: () => pageHead(
    'Concrete Floats',
    'Reinforced concrete floats with expanded polystyrene core for wave attenuators, marinas, floating homes and commercial structures.'
  ),
  component: ConcreteFloatsPage,
});
