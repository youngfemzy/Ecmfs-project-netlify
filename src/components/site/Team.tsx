import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images, partnership } from './content';
import { PageHeading } from './Corporate';
import { Photo, Slide, Squares } from './Motion';

export type Member = { slug: string; name: string; title: string; photo: string; shortLine: string; bio?: string; timeline?: { year: string; text: string }[]; education?: string; quote?: string; note?: string };

// Only founder — Francis D'Cruz removed per site owner request
export const members: Member[] = [
    {
        slug: 'okey-nwakwesi', name: 'Mr. Okey Nwakwesi', title: 'MD/CEO', photo: images.founder, shortLine: 'Founder', bio: 'Mr. Okey Nwakwesi is the founding director of ECMFS. With almost two decades of work experience in the construction and maritime industries, he is now applying his marine and construction experience to shipbuilding and concrete flotation systems.', timeline: [
            { year: '2004', text: 'Began his career as a Field Engineer with Fymak Marine & Oil Services Nig. Ltd.' },
            { year: '2006', text: "Became Executive Director, Operations after negotiating a contract award from Chevron Nigeria Limited for the construction of two 170 ft x 31 ft Fast Support Intervention Vessels, and represented the company from keel laying through vessel launch at Horizon Shipbuilding Incorporated in Alabama, USA. His contributions to the design and build of the vessels were acknowledged by an inscription on the Built By Plaque, which recognised the owner's representative as a partner in the process." },
            { year: '2009', text: 'Became Managing Director and held the position for four years.' },
            { year: 'Next', text: 'Stepped aside to explore a career within the construction industry, always intending to return to his passion for marine vessel construction.' }
        ], education: 'Degrees in chemical (process) engineering and building services engineering, both awarded at Loughborough University, United Kingdom.', quote: 'It is with great enthusiasm that I look forward to making a mark in the marine asset construction industry in Nigeria, as it is clear that there remains a lot to be done to grow the industry, and I remain bullish about the future prospects.', note: 'Armed with a wealth of experience in the marine and construction industries, which expanded his technical and management knowledge beyond the fields of chemical (process) engineering and building services engineering (both degrees awarded at Loughborough University in the United Kingdom) to mechanical/marine and civil engineering, he is now poised to apply that knowledge to take on the vast challenges within the fields of shipbuilding and concrete flotation systems building.'
    },
];

export function Partnerships() { return <section className="section-navy angled-section partnerships"><div className="site-container"><Slide><p className="eyebrow"><Squares />Technical Partners</p><h2>Shaping Possibilities.<br />Together.</h2><blockquote>{partnership}</blockquote><div className="partner-names"><p>International Marine Flotation Systems Ltd (Vancouver, Canada)</p><p>Forepeak Design LLC</p></div></Slide></div></section> }

export function TeamPage() {
    return <>
        <PageHeading title="Our Team" eyebrow="ECMFS Shipbuilding" />
        <section className="site-container team-section">
            <Slide>
                <p className="large-copy team-intro">Our locally born and bred technical and commercial team brings over 18 years of experience in offshore marine logistics.</p></Slide><div className="team-grid">{members.map((m, i) => <Slide key={m.slug} index={i}><Link className="member-card" to="/team/$slug" params={{ slug: m.slug }}><Photo src={m.photo} alt={m.name} /><div className="member-label"><p className="eyebrow">{m.shortLine}</p><h2>{m.name}</h2><p>{m.title}</p><ArrowUpRight /></div></Link></Slide>)}</div></section><Partnerships /></>
}

export function SpotlightPage({ member }: { member: Member }) { const index = members.findIndex(m => m.slug === member.slug); const prev = members[(index - 1 + members.length) % members.length]; const next = members[(index + 1) % members.length]; return <><section className="spotlight-hero section-navy"><div className={`site-container two-column ${index % 2 ? 'reverse' : ''}`}><Slide index={0}><Photo src={member.photo} alt={member.name} className="portrait" /></Slide><Slide index={1}><p className="eyebrow"><Squares />{member.shortLine}</p><h1>{member.name}</h1><p className="spotlight-title">{member.title}</p></Slide></div></section>{member.bio && <section className="site-container spotlight-section"><Slide><p className="eyebrow"><Squares />About</p><h2>{member.shortLine}</h2><p className="large-copy">{member.bio}</p>{member.note && <p className="body-copy">{member.note}</p>}</Slide></section>}{member.timeline && <section className="timeline-section"><div className="site-container"><h2>Career timeline</h2><div className="timeline">{member.timeline.map((t, i) => <Slide className={`timeline-item ${i % 2 ? 'timeline-right' : ''}`} key={t.year} index={i}><p className="timeline-year">{t.year}</p><p>{t.text}</p></Slide>)}</div></div></section>}{member.education && <section className="site-container spotlight-section"><Slide><h2>Education</h2><p className="large-copy">{member.education}</p></Slide></section>}{member.quote && <section className="section-navy angled-section quote-section"><div className="site-container"><Slide><blockquote>"{member.quote}"</blockquote></Slide></div></section>}<div className="site-container member-navigation"><Button asChild variant="marineText"><Link to="/team"><ArrowLeft />Back to Team</Link></Button><div>{prev && <Button asChild variant="marineText"><Link to="/team/$slug" params={{ slug: prev.slug }}><ArrowLeft />Previous</Link></Button>}{next && <Button asChild variant="marineText"><Link to="/team/$slug" params={{ slug: next.slug }}>Next<ArrowRight /></Link></Button>}</div></div></> }
