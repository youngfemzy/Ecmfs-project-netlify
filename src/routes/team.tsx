import { createFileRoute } from '@tanstack/react-router';
import { TeamPage } from '@/components/site/Team';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/team')({head:()=>pageHead('Our Team and Technical Partners',"Meet Mr. Okey Nwakwesi and Francis D'Cruz, and learn about ECMFS technical partnerships."),component:TeamPage});
