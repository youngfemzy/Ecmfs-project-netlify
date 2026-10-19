import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { about, mission, vision, safety, services, images, vesselConstruction } from './content';
import { Slide, Photo, Squares } from './Motion';

export function PageHeading({title,eyebrow,dark}:{title:string;eyebrow:string;dark?:boolean}){
  return <div className={`page-heading site-container${dark?' page-heading-dark':''}`}>
    <p className="eyebrow"><Squares/>{eyebrow}</p>
    <h1>{title}</h1>
  </div>
}

export function AboutPage(){
  return <>
    <PageHeading title="About ECMFS" eyebrow="ECMFS Shipbuilding"/>

    {/* Intro section */}
    <section className="site-container about-intro">
      <Slide index={0}><Photo src={images.kena} alt="MV KENA on the slipway at the Lekki facility" className="about-intro-photo"/></Slide>
      <Slide index={1}>
        <div className="body-copy">
          {about.map(p=><p key={p.slice(0,30)}>{p}</p>)}
        </div>
      </Slide>
    </section>

    {/* Vessel Construction */}
    <section className="section-navy angled-section vessel-construction-section">
      <div className="site-container two-column">
        <Slide index={0}><Photo src={images.shipyard} alt="Large vessel at the Lagos shipyard"/></Slide>
        <Slide index={1}>
          <p className="eyebrow"><Squares/>Expertise</p>
          <h2>Vessel Construction</h2>
          <div className="body-copy">
            {vesselConstruction.map((p,i)=><p key={i}>{p}</p>)}
          </div>
        </Slide>
      </div>
    </section>

    {/* Unified Mission & Vision Section */}
    <section className="mission-vision-section">
      <div className="mv-angle" />
      <div className="mv-banner">
        OUR VISION &amp; MISSION
      </div>
      <div className="mv-content">
        <div className="mv-panel">
          <h2>Our Mission</h2>
          <p>
            To deliver world class marine-related infrastructure and
            services while maximizing the use of a trained/qualified
            local labor force as well as a local vendor supply
            network to meet a wide range of client needs.
          </p>
        </div>
        <div className="mv-panel">
          <h2>Our Vision</h2>
          <p>
            To realize operational excellence in our field of expertise
            in order to be competitive in the global marketplace, and
            thereby secure a sizeable market share within Nigeria and
            regional market.
          </p>
        </div>
      </div>
    </section>

    {/* Health & Safety */}
    <section className="site-container safety-section">
      <Slide>
        <p className="eyebrow"><Squares/>Corporate responsibility</p>
        <h2>Health, Safety and Environment</h2>
        <p className="large-copy">{safety}</p>
        <Button variant="marine" asChild>
          <Link to="/founder">Meet the Founder <ArrowUpRight/></Link>
        </Button>
      </Slide>
    </section>
  </>;
}

// Re-export dedicated service page components
export { ServicesMapPage as ServicesPage } from './services/ServicesMap';
export { AluminiumSteelUnder85Page as AluminiumSteelPage } from './services/AluminiumSteelUnder85';
export { AluminiumSteelAbove85Page } from './services/AluminiumSteelAbove85';
export { ConcreteFloatsPage } from './services/ConcreteFloats';
export { BoatMaintenancePage } from './services/BoatMaintenance';
export { YachtConstructionPage } from './services/YachtConstruction';


export function FounderPage(){
  return <>
    <section className="section-navy founder-hero">
      <div className="site-container two-column">
        <Slide index={0}>
          <div className="founder-portrait-wrap">
            <img src={images.founder} alt="Mr. Okey Nwakwesi — Founder & MD/CEO" className="founder-portrait"/>
          </div>
        </Slide>
        <Slide index={1}>
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding</p>
          <h1>Mr. Okey Nwakwesi</h1>
          <p className="founder-title">Founder & Managing Director / CEO</p>
          <p className="large-copy">Mr. Okey Nwakwesi is the founding director of ECMFS. With almost two decades of work experience in the construction and maritime industries, he is now applying his marine and construction experience to shipbuilding and concrete flotation systems.</p>
        </Slide>
      </div>
    </section>

    {/* Career narrative from brochure slides 15-16 */}
    <section className="site-container founder-bio-section">
      <Slide>
        <p className="eyebrow"><Squares/>Background</p>
        <h2>About the Founder</h2>
        <div className="body-copy founder-body">
          <p>Armed with a wealth of experience in the marine and construction industries, which expanded his technical and management knowledge beyond the fields of chemical (process) engineering and building services engineering (both degrees awarded at Loughborough University in the United Kingdom) to mechanical/marine and civil engineering, Mr. Nwakwesi is now poised to apply that knowledge to take on the vast challenges within the fields of shipbuilding and concrete flotation systems building.</p>
        </div>
      </Slide>
    </section>

    {/* Career timeline */}
    <section className="timeline-section">
      <div className="site-container">
        <Slide><h2>Career Timeline</h2></Slide>
        <div className="timeline">
          {[
            {year:'2004', text:'Began his career as a Field Engineer with Fymak Marine & Oil Services Nig. Ltd.'},
            {year:'2006', text:"Became Executive Director, Operations after negotiating a contract award from Chevron Nigeria Limited for the construction of two 170 ft x 31 ft Fast Support Intervention Vessels, and represented the company from keel laying through vessel launch at Horizon Shipbuilding Incorporated in Alabama, USA. His contributions to the design and build of the vessels were acknowledged by an inscription on the Built By Plaque, which recognised the owner's representative as a partner in the process."},
            {year:'2009', text:'Became Managing Director and held the position for four years.'},
            {year:'Next', text:'Stepped aside to explore a career within the construction industry, always intending to return to his passion for marine vessel construction.'},
          ].map((t,i)=>(
            <Slide className={`timeline-item ${i%2?'timeline-right':''}`} key={t.year} index={i}>
              <p className="timeline-year">{t.year}</p>
              <p>{t.text}</p>
            </Slide>
          ))}
        </div>
      </div>
    </section>

    {/* Education */}
    <section className="site-container spotlight-section">
      <Slide>
        <p className="eyebrow"><Squares/>Academic Background</p>
        <h2>Education</h2>
        <p className="large-copy">Degrees in chemical (process) engineering and building services engineering, both awarded at Loughborough University, United Kingdom.</p>
      </Slide>
    </section>

    {/* Quote */}
    <section className="section-navy angled-section quote-section">
      <div className="site-container">
        <Slide>
          <blockquote>"It is with great enthusiasm that I look forward to making a mark in the marine asset construction industry in Nigeria, as it is clear that there remains a lot to be done to grow the industry, and I remain bullish about the future prospects."</blockquote>
        </Slide>
      </div>
    </section>

    {/* Partners section with new logos */}
    <section className="section-navy angled-section partnerships">
      <div className="site-container">
        <Slide>
          <p className="eyebrow"><Squares/>Technical Partners</p>
          <h2>Shaping Possibilities.<br/>Together.</h2>
          <blockquote>Our value proposition is underpinned by our strong partnerships with industry professionals in the fields of naval architecture, marine engineering, civil engineering, and concrete float system design and build.</blockquote>
          <div className="partner-logos">
            <img src={images.partnerIcarus} alt="Icarus partner logo" className="partner-logo"/>
            <img src={images.partnerMirine} alt="Mirine partner logo" className="partner-logo"/>
            <img src={images.partnerMf} alt="MF partner logo" className="partner-logo"/>
          </div>
          <div className="partner-names">
            <p>International Marine Flotation Systems Ltd (Vancouver, Canada)</p>
            <p>Forepeak Design LLC</p>
          </div>
        </Slide>
      </div>
    </section>
  </>;
}

export function ResourcesPage(){
  return <>
    <PageHeading title="Resources" eyebrow="ECMFS Shipbuilding"/>
    <section className="site-container resources-section">
      <Slide>
        <p className="eyebrow"><Squares/>Downloads & Media</p>
        <h2>Company Resources</h2>
        <p className="large-copy">Download our company brochure and access key resources about ECMFS Shipbuilding's services, capabilities, and expertise.</p>
      </Slide>

      <div className="resources-grid">
        <Slide className="resource-card">
          <div className="resource-icon">
            <Download size={32}/>
          </div>
          <div className="resource-info">
            <h3>ECMFS Company Profile & Brochure</h3>
            <p>Our comprehensive company brochure covering all services, vessel construction capabilities, concrete float systems, and partnership details.</p>
            <a href="/downloads/ECMFS-brochure.pdf" target="_blank" rel="noopener noreferrer" className="resource-download-btn" download>
              <Download size={16}/> Download Brochure (PDF)
            </a>
          </div>
        </Slide>
      </div>
    </section>
  </>;
}
