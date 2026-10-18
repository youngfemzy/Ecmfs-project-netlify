import { createFileRoute, notFound } from '@tanstack/react-router';
import { members, SpotlightPage } from '@/components/site/Team';
import { pageHead } from '@/components/site/content';
import { NotFoundPage } from '@/components/site/Layout';
export const Route=createFileRoute('/team_/$slug')({loader:({params})=>{const member=members.find(m=>m.slug===params.slug);if(!member)throw notFound();return member},head:({loaderData})=>pageHead(loaderData?.name??'Page not found',loaderData?`${loaderData.name}, ${loaderData.title}. ${loaderData.shortLine} at ECMFS Shipbuilding.`:'This ECMFS page could not be found.'),component:MemberPage,notFoundComponent:NotFoundPage});
function MemberPage(){const member=Route.useLoaderData();return <SpotlightPage member={member}/>}
