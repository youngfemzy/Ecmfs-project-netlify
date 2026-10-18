import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/site/Corporate';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/about')({head:()=>pageHead('About ECMFS','Learn about ECMFS, a wholly Nigerian owned marine construction company, its mission, vision and commitment to health, safety and environment.'),component:AboutPage});
