// Images served from /public/img/ — replace any file at the same path without touching code
export const images = {
  // Hero background — MV under the travel lift in Lagos shipyard (brochure cover)
  hero:      "/img/hero-alt.jpg",
  // MV KENA on the slipway beside palm trees
  kena:      "/img/kena.jpg",
  // MV KENA underway on the water
  kenaWater: "/img/kena-water.jpg",
  // Large ship at the Lagos shipyard — vessel construction context
  shipyard:  "/img/hero.jpg",
  // Founder portrait
  founder:   "/img/founder.jpg",
  // Francis D'Cruz portrait (small, ~146 px wide; use avatar size)
  francis:   "/img/francis.jpg",
  // Floating home — concrete flotation systems context
  floats:    "/img/ref-floating-home.jpg",
  // Logo mark (same file used for favicon)
  logo:      "/favicon.png",
};
export const company = "Eco-Construct Marine Flotation Systems (ECMFS) Nig. Ltd";
export const whatsapp = "https://wa.me/2348038457735";
export const partnership = "Our value proposition is underpinned by our strong partnerships with industry professionals in the fields of naval architecture, marine engineering, civil engineering, and concrete float system design and build.";
export const about = [
"Eco-Construct Marine Flotation Systems (ECMFS) Nig. Ltd (RC No: 1879101) is registered under the laws of the Federal Republic of Nigeria to provide lightweight building construction and marine related services. The company is wholly Nigerian owned and was incorporated under the Companies and Allied Matters Act 2020 on 4 January 2022. ECMFS is affiliated with two long established companies: Eco-Building Systems Nig. Ltd, which specialises in lightweight building construction, and Fymak Marine & Oil Services Nig. Ltd, which provides offshore marine logistics services to the International Oil Companies operating within the Gulf of Guinea.",
"With almost two decades of work experience in both the construction and maritime industries, the founding director, Mr. Okey Nwakwesi, realised that sustained growth in both core competencies required developing capacity in marine vessel construction and deploying innovative concrete flotation systems for the development of shorelines and inland water bodies."
];
export const mission = "To deliver world class marine related infrastructure and services while maximizing the use of a trained and qualified local labor force as well as a local vendor supply network to meet a wide range of client needs.";
export const vision = "To realize operational excellence in our field of expertise in order to be competitive in the global marketplace, and thereby secure a sizable market share within Nigeria and regional markets.";
export const safety = "We treat the protection and observance of health, safety and environment as a corporate responsibility that guides decisions at all levels of the organisation. Our employees work with full regard for their own health and safety and that of others affected by their activities, and we manage and minimise our environmental impact by applying the circular economy concept across our operations.";
export const services = [
{title: "Aluminium & Steel Boat Construction", label: "Up to 85 ft", photo: images.shipyard, alt: "Large vessel at the Lagos shipyard", paragraphs: [
"From our facility in the heart of Lekki Peninsula, ECMFS can construct steel and aluminium craft of up to 85 feet in length, from keel laying to final launch and acceptance trials. The build process uses laser precision cut plates and profiles and type approved fittings with marine outfitting, procured through a local and international supply chain of vendors across Africa, Europe, Canada and the United States. We look forward to working with you from design stage to final delivery on newbuild and retrofit aluminium and steel vessels.",
"Our locally born and bred technical and commercial team brings over 18 years of experience in offshore marine logistics, including managing aluminium Fast Support Intervention Vessels and working with shipbuilders during construction of two 170 ft x 31 ft vessels at a shipyard in Alabama, USA."], range: "Interceptor security boats, police patrol boats, pilot boats, fire fighting and rescue boats, and catamaran passenger ferries, from 29 ft to 85 ft.", extra: "Vessels over 85 feet in length can be built at partner sites in the Apapa area. The West African region is a hub for coastal and deep offshore maritime activity, driven mainly by offshore oil and gas and a dependency on imported commodities, and Nigeria's inland water routes for dry bulk and liquid cargo are yet to be fully harnessed. ECMFS aims to be part of the solution by providing locally constructed marine assets that are fit for purpose and use cutting edge technology, creating jobs."},
{title: "Floating Concrete Foundations", photo: images.floats, alt: "Floating home on the water — concrete flotation system", paragraphs: ["Our technical partner, International Marine Floatation Systems Ltd (Vancouver, Canada), has since 1983 refined the design, construction and delivery of reinforced concrete floats with an expanded polystyrene core for a range of applications. After a two year campaign, ECMFS met the qualification criteria to be licensed for local manufacture of the partner's suite of products for the Nigerian market."], chips: ["Specialty floats", "Wave attenuators", "Commercial structures", "Floating homes", "Marinas", "Yacht enclosures"]},
{title: "Boat Maintenance & Management", photo: images.kenaWater, alt: "MV KENA underway on the water", paragraphs: ["Routine maintenance follows the Original Equipment Manufacturer's scheduled inspections. A newbuild contract includes a maintenance contract for the period of the manufacturer's warranty on the vessel's hull and machinery. Owners of third party aluminium or steel vessels can hand over maintenance to ECMFS after an assessment of the vessel's condition. Routine crew review and certification keeps crews prepared for regulatory inspections, and, subject to client approval, our management team liaises with flag state administrators (NIWA, LASWA, NIMASA) and class societies (ABS, Lloyd's, Bureau Veritas) to schedule statutory surveys."]},
{title: "Yacht Construction & Brokering", photo: images.kena, alt: "MV KENA — example of ECMFS construction quality", paragraphs: ["In the Lagos metropolis, time on the water has become a popular part of leisure. With our yacht design and fabrication partner, Forepeak Design LLC, ECMFS offers mini yacht designs including a 42 ft sports fisherman mini yacht and a 50 ft sporting yacht. For larger, more exclusive yachts we work with luxury yacht brands and can assist with deliveries, developing jetties and jetty approaches, and day to day management and maintenance."]}
];
export const specs = [
["Dimensions", "32 ft (L) x 14 ft (W)"],
["Design draft", "1.9 ft"],
["Construction", "Steel pontoons with aluminium superstructure"],
["Propulsion", "1 x 200 hp Oxe Diesel XXL outboard engine"],
["Steering gear", "1 x Seastar 1.7 Cu.in hydraulic helm pump with HC5345 cylinder"],
["Navigation and communication", "Garmin EchoMap UHD 93SV (chart plotter and echo sounder), 2 x Icom M330 fixed VHF, 2 x portable Horizon HX400 hand held VHF"],
["Onboard power", "12 VDC supply using a battery bank of 4 x 120 AH"],
["Battery charging", "Oxe engine alternator and Sterling Power Procharge Ultra 60A"],
["Primary functions", "Removal of floating debris and river mapping"],
["Secondary functions", "Light towing operations and surveillance"],
["Launch date", "April 2023"]
] as const;
// Gallery: confirmed ECMFS photos only
export const gallery = [
  [images.kena,      "MV KENA on the slipway at the Lekki facility"],
  [images.hero,      "Vessel at the Lagos shipyard under the travel lift"],
  [images.kenaWater, "MV KENA underway — April 2023 launch"],
  [images.shipyard,  "Large vessel at the Lagos Nigeria shipyard"],
] as const;
export function pageHead(title: string, description: string) {
 return { meta: [{title: `${title} | ECMFS Shipbuilding`},{name:"description",content:description},{property:"og:title",content:`${title} | ECMFS Shipbuilding`},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}] };
}
