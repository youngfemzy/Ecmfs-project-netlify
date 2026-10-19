import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/site/Contact';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact ECMFS','Get in touch with ECMFS Shipbuilding in Lekki, Lagos. Contact us via WhatsApp or email about boat construction, concrete floats, maintenance or yacht services.'),component:ContactPage});
