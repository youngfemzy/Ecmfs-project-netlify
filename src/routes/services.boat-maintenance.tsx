import { createFileRoute } from '@tanstack/react-router';
import { BoatMaintenancePage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route = createFileRoute('/services/boat-maintenance')({
  head: () => pageHead('Boat Maintenance & Management', 'ECMFS provides comprehensive boat maintenance and vessel management services — OEM-scheduled inspections, crew certification, and statutory survey management.'),
  component: BoatMaintenancePage,
});
