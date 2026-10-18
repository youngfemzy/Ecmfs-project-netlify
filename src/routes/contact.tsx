import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/site/Contact';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact ECMFS','Contact ECMFS in Lekki, Lagos. Request a quote through WhatsApp for boat construction, concrete floats, maintenance or yacht services.'),component:ContactPage});
