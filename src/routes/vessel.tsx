import { createFileRoute } from '@tanstack/react-router';
import { VesselPage } from '@/components/site/Vessel';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/vessel')({head:()=>pageHead('MV KENA','Explore the specifications of MV KENA, launched in April 2023, with primary functions of floating debris removal and river mapping.'),component:VesselPage});
