import { createFileRoute } from '@tanstack/react-router';
import { NotFoundPage } from '@/components/site/Layout';
import { pageHead } from '@/components/site/content';
export const Route=createFileRoute('/$')({head:()=>({...pageHead('Page not found','This ECMFS page could not be found.'),meta:[...pageHead('Page not found','This ECMFS page could not be found.').meta,{name:'robots',content:'noindex'}]}),component:NotFoundPage});
