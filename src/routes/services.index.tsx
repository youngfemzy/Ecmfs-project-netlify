import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/services/')({
  beforeLoad: () => {
    throw redirect({ to: '/services/aluminium-steel' });
  },
  component: () => null,
});
