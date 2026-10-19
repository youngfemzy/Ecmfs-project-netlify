import { createFileRoute } from '@tanstack/react-router';
import { BoatMaintenancePage } from '@/components/site/services/BoatMaintenance';
import { pageHead } from '@/components/site/content';

export const Route = createFileRoute('/services/boat-maintenance')({
  head: () => pageHead(
    'Boat Maintenance & Management',
    'Routine maintenance schedules, hull cleaning, mechanical repairs, statutory surveys, and vessel management by certified marine engineers.'
  ),
  component: BoatMaintenancePage,
});
