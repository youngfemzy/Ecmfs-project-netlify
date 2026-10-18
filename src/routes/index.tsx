import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/site/Home';
import { pageHead, company } from '@/components/site/content';
export const Route=createFileRoute('/')({head:()=>({...pageHead('ECMFS, Aluminium & Steel Boat Builders','Aluminium and steel boat builders and concrete flotation systems in Lekki, Lagos. Request a quote from ECMFS Shipbuilding.'),scripts:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:company,email:'sales@ecmfsboatsandfloats.com.ng',telephone:'+2348038457735',address:{'@type':'PostalAddress',streetAddress:'#2 Kingsley Odo Close, Lekki Phase One',addressLocality:'Lagos',addressCountry:'NG'}})}]}),component:HomePage});
