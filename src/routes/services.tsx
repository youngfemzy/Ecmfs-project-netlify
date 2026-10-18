import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/services')({head:()=>pageHead('Marine Construction Services','Aluminium and steel boat construction, floating concrete foundations, boat maintenance and management, and yacht construction and brokering.'),component:ServicesPage});
