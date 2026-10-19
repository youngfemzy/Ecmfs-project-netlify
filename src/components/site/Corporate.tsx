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
      <Slide index={0}><Photo src={images.kena} alt="MV KENA on the slipway at the Lekki facility"/></Slide>
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

    {/* Mission & Vision */}
    {([
      ["Mission", mission, images.hero, "Vessel at the Lagos shipyard under the travel lift"],
      ["Vision", vision, images.kenaWater, "MV KENA underway on the water"],
    ] as const).map(([title, text, src, alt], i)=>(
      <section className={`angled-section ${i%2 ? 'section-mist' : 'section-crimson'}`} key={title}>
        <div className={`site-container two-column ${i%2 ? 'reverse' : ''}`}>
          <Slide index={i*2}><Photo src={src} alt={alt}/></Slide>
          <Slide index={i*2+1}>
            <p className="eyebrow"><Squares/>ECMFS</p>
            <h2>Our {title}</h2>
            <p className="large-copy">{text}</p>
          </Slide>
        </div>
      </section>
    ))}

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

export function ServicesPage(){
  return <>
    {/* Services hub — visual overview matching brochure slide 7 */}
    <section className="services-hub">
      <div className="services-hub-bg">
        <img src={images.shipyard} alt="ECMFS shipyard" className="services-hub-image"/>
        <div className="services-hub-overlay"/>
      </div>
      <div className="site-container services-hub-content">
        <div className="services-hub-header">
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding</p>
          <h1>Our Services</h1>
        </div>
        {/* Hub diagram */}
        <div className="services-hub-diagram">
          <div className="hub-center">
            <img src={images.logo} alt="ECMFS logo"/>
          </div>
          {services.map((s, i) => (
            <Slide key={s.title} index={i} className={`hub-card hub-card-${i}`}>
              <Link to={[
                '/services/aluminium-steel',
                '/services/concrete-floats',
                '/services/boat-maintenance',
                '/services/yacht-construction',
              ][i] as any} className="hub-link">
                <span>{s.title}</span>
                <ArrowUpRight size={16}/>
              </Link>
            </Slide>
          ))}
        </div>
      </div>
    </section>

    {/* Service detail sections */}
    {services.map((s,i)=>(
      <section className={`service-section ${i%2?'section-navy angled-section':'section-mist'}`} key={s.title}>
        <div className={`site-container two-column ${i%2?'reverse':''}`}>
          <Slide index={i*2} className="service-photo"><Photo src={s.photo} alt={s.alt}/></Slide>
          <Slide index={i*2+1}>
            <p className="eyebrow"><Squares/>{(s as any).label??'ECMFS'}</p>
            <h2>{s.title}</h2>
            <div className="body-copy">
              {s.paragraphs.map((p,j)=>(
                <div key={j}>
                  <p>{p}</p>
                  {j===0&&(s as any).range&&<><h3>Our range</h3><p>{(s as any).range}</p></>}
                </div>
              ))}
            </div>
            {(s as any).chips&&(
              <div className="service-chips">
                {(s as any).chips.map((c:string,j:number)=>(
                  <Slide key={c} index={j}><span>{c}</span></Slide>
                ))}
              </div>
            )}
          </Slide>
        </div>
        {(s as any).extra&&(
          <Slide className="site-container larger-vessels">
            <h3>Larger vessels, above 85 ft</h3>
            <p>{(s as any).extra}</p>
          </Slide>
        )}
      </section>
    ))}
  </>;
}

// Individual service pages
export function AluminiumSteelPage(){
  const s = services[0];
  return <>
    <div className="service-page-hero" style={{backgroundImage:`url(${s.photo})`}}>
      <div className="service-page-hero-overlay"/>
      <div className="site-container service-page-hero-content">
        <p className="eyebrow"><Squares/>ECMFS Services</p>
        <h1>{s.title}</h1>
      </div>
    </div>
    <section className="site-container service-detail-section">
      <Slide>
        <div className="body-copy service-body">
          {s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}
          <h3>Our range includes:</h3>
          <p>{(s as any).range}</p>
        </div>
      </Slide>
    </section>
    {/* Photo gallery for aluminium page */}
    <section className="section-navy angled-section aluminium-gallery">
      <div className="site-container">
        <Slide><p className="eyebrow"><Squares/>Reference vessels</p><h2>Aluminium & Steel Boat Construction under 85ft</h2></Slide>
        <div className="vessel-reference-grid">
          {[
            ["/img/ref-interceptor.jpg","40FT INTERCEPTOR SECURITY BOAT"],
            ["/img/ref-patrol.jpg","29FT POLICE PATROL BOAT"],
            ["/img/ref-catamaran.jpg","85FT CATAMARAN PASSENGER FERRY"],
            ["/img/ref-pilot1.jpg","55FT PILOT BOAT"],
            ["/img/ref-firefighting1.jpg","55FT FIRE RESCUE BOAT"],
            ["/img/ref-firefighting2.jpg","36FT POLICE PATROL BOAT"],
            ["/img/ref-ferry.jpg","78FT CATAMARAN PASSENGER FERRY"],
          ].map(([src, label])=>(
            <Slide key={label} className="vessel-ref-card">
              <img src={src} alt={label} loading="lazy"/>
              <span className="vessel-ref-label">{label}</span>
            </Slide>
          ))}
        </div>
      </div>
    </section>
    {(s as any).extra&&<section className="site-container larger-vessels"><Slide><h2>Larger vessels, above 85 ft</h2><p>{(s as any).extra}</p></Slide></section>}
  </>;
}

export function ConcreteFloatsPage(){
  const s = services[1];
  return <>
    <div className="service-page-hero concrete-hero" style={{backgroundImage:`url(${s.photo})`}}>
      <div className="service-page-hero-overlay"/>
      <div className="site-container service-page-hero-content">
        <p className="eyebrow"><Squares/>ECMFS Services</p>
        <h1>Concrete Floats</h1>
      </div>
    </div>
    {/* Floating Concrete Foundations description section */}
    <section className="section-navy concrete-description-section">
      <div className="site-container two-column">
        <Slide index={0}>
          <div className="body-copy">
            <h2 className="section-title-blue">Floating Concrete Foundations</h2>
            {s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}
          </div>
        </Slide>
        <Slide index={1}><Photo src="/img/concrete-floats/marinas.jpg" alt="Marina — concrete float system"/></Slide>
      </div>
    </section>
    {/* Concrete floats image grid */}
    <section className="site-container concrete-gallery-section">
      <Slide><p className="eyebrow"><Squares/>Applications</p><h2>Concrete Floats</h2></Slide>
      <div className="concrete-grid">
        {[
          ["/img/ref-marina-structure.jpg","SPECIALTY FLOAT"],
          ["/img/ref-pilot2.jpg","WAVE ATTENUATOR"],
          ["/img/concrete-floats/floating-homes.jpg","COMMERCIAL STRUCTURES"],
          ["/img/kena-water.jpg","FLOATING HOMES"],
          ["/img/concrete-floats/marinas.jpg","MARINAS"],
          ["/img/ref-barge.jpg","YACHT ENCLOSURES"],
        ].map(([src, label])=>(
          <Slide key={label} className="concrete-card">
            <img src={src} alt={label} loading="lazy"/>
            <span className="concrete-label">{label}</span>
          </Slide>
        ))}
      </div>
    </section>
  </>;
}

export function BoatMaintenancePage(){
  const s = services[2];
  return <>
    <div className="service-page-hero maintenance-hero">
      <div className="service-page-hero-overlay"/>
      <div className="site-container service-page-hero-content">
        <p className="eyebrow"><Squares/>ECMFS Services</p>
        <h1>Boat Maintenance & Management</h1>
      </div>
    </div>
    <section className="section-teal maintenance-content-section">
      <div className="site-container two-column">
        <Slide index={0}>
          <div className="body-copy">
            <p className="eyebrow-yellow"><Squares/>BOAT MAINTENANCE & MANAGEMENT</p>
            {s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}
          </div>
        </Slide>
        <Slide index={1}><Photo src={s.photo} alt={s.alt}/></Slide>
      </div>
    </section>
  </>;
}

export function YachtConstructionPage(){
  const s = services[3];
  return <>
    <div className="service-page-hero yacht-hero" style={{backgroundImage:`url(${s.photo})`}}>
      <div className="service-page-hero-overlay"/>
      <div className="site-container service-page-hero-content">
        <p className="eyebrow"><Squares/>ECMFS Services</p>
        <h1>Yacht Construction & Brokering</h1>
      </div>
    </div>
    <section className="site-container yacht-content-section">
      <div className="two-column">
        <Slide index={0}>
          <div className="body-copy">
            <p className="eyebrow-yellow"><Squares/>YACHT CONSTRUCTION AND BROKERING</p>
            {s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}
          </div>
        </Slide>
        <Slide index={1}>
          <div className="yacht-image-grid">
            <img src="/img/ref-catamaran.jpg" alt="Main deck layout yacht" loading="lazy"/>
            <img src="/img/ref-patrol.jpg" alt="42ft sports fisherman mini-yacht" loading="lazy"/>
            <img src="/img/kena-water.jpg" alt="50ft sporting yacht" loading="lazy"/>
            <img src="/img/ref-pilot1.jpg" alt="Below deck layout" loading="lazy"/>
          </div>
        </Slide>
      </div>
    </section>
  </>;
}

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
