import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { about, mission, vision, safety, services, images, vesselConstruction } from './content';
import { Slide, Photo, Squares } from './Motion';

export function PageHeading({ title, eyebrow, dark }: { title: string; eyebrow: string; dark?: boolean }) {
  return <div className={`page-heading site-container${dark ? ' page-heading-dark' : ''}`}>
    <p className="eyebrow"><Squares />{eyebrow}</p>
    <h1>{title}</h1>
  </div>
}

export function AboutPage() {
  return <>
    <PageHeading title="About ECMFS" eyebrow="ECMFS Shipbuilding" />

    {/* Intro section */}
    <section className="site-container about-intro">
      <Slide index={0}><Photo src={images.kena} alt="MV KENA on the slipway at the Lekki facility" className="about-intro-photo" /></Slide>
      <Slide index={1}>
        <div className="body-copy">
          {about.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
        </div>
      </Slide>
    </section>

    {/* Vessel Construction */}
    <section className="section-navy angled-section vessel-construction-section">
      <div className="site-container two-column">
        <Slide index={0}><Photo src={images.shipyard} alt="Large vessel at the Lagos shipyard" /></Slide>
        <Slide index={1}>
          <p className="eyebrow"><Squares />Expertise</p>
          <h2 >Vessel Construction</h2>
          <div className="body-copy">
            {vesselConstruction.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Slide>
      </div>
    </section>

    {/* Unified Mission & Vision Section */}
    <section className="mission-vision-section">
      <div className="mv-angle" />
      <motion.div
        className="mv-banner"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        OUR VISION &amp; MISSION
      </motion.div>
      <div className="mv-content">
        <motion.div
          className="mv-panel"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Our Mission</h2>
          <p>
            To deliver world class marine-related infrastructure and
            services while maximizing the use of a trained/qualified
            local labor force as well as a local vendor supply
            network to meet a wide range of client needs.
          </p>
        </motion.div>
        <motion.div
          className="mv-panel"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Our Vision</h2>
          <p>
            To realize operational excellence in our field of expertise
            in order to be competitive in the global marketplace, and
            thereby secure a sizeable market share within Nigeria and
            regional market.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Health, Safety & Environment — brochure layout */}
    <section className="ecmfs-hse">
      {/* Hero image banner */}
      <div className="ecmfs-hse__hero">
        <motion.div
          className="ecmfs-hse__top-label"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Health, Safety &amp; Environment
        </motion.div>
        <motion.div
          className="ecmfs-hse__title-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="ecmfs-hse__title">Corporate Responsibility — Health, Safety and Environment</h2>
        </motion.div>
      </div>

      {/* Teal content area */}
      <div className="ecmfs-hse__content">
        <div className="ecmfs-hse__content-inner">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            We consider the protection and observance of HSE as a corporate
            responsibility that guides our decision-making across all levels
            of the organization.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Our employees carry out their work with full and proper regard
            for their own health and safety and those of other persons who
            may be affected by their activities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            We strive to responsibly manage and minimize the impact of our
            business activities on the environment, and we do so by
            implementing the concept of circular economy across all levels
            of our operations.
          </motion.p>
          <motion.div
            className="ecmfs-hse__cta"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button variant="marine" asChild>
              <Link to="/founder">Meet the Founder <ArrowUpRight /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
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


export function FounderPage() {
  return <>
    {/* Brochure Founder Section */}
    <section className="ecmfs-founder">
      {/* Left grayscale visual */}
      <div className="ecmfs-founder__visual">
        <div className="ecmfs-founder__label">Founder</div>

        <div className="ecmfs-founder__portrait">
          <img
            src={images.founder}
            alt="Mr. Okechukwu Nwakwesi — Founder & MD/CEO"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right biography panel */}
      <div className="ecmfs-founder__content">
        <div className="ecmfs-founder__bio">
          <p>
            Okey Nwakwesi started his career as a Field Engineer in 2004
            with Fymak Marine &amp; Oil Services Nig. Ltd. He became Executive
            Director - Operations in 2006 after successfully negotiating
            a contract award from Chevron Nigeria Limited for the
            construction of two 170ft x 31ft Fast Support Intervention
            Vessels. He went on to represent the company from commencement
            (keel laying) of construction through to completion (Vessel
            launch) at Horizon Shipbuilding Incorporated in Alabama, USA.
          </p>

          <p>
            The value of his contributions to the vessels design and build
            was duly acknowledged as evidenced by an inscription on the
            Built By Plaque, which recognised the Owner representative as
            a partner in the process.
          </p>

          <p>
            Mr Okey Nwakwesi eventually rose to the position of Managing
            Director in 2009, a position he held for four years prior to
            making the decision to step aside in order to explore a career
            within the construction industry, but always with the intent
            to return to his passion for marine vessel construction.
          </p>

          <p>
            Armed with a wealth of experience in the marine and construction
            industries, which expanded his technical and management
            knowledge beyond the fields of process engineering and building
            services engineering (both degrees awarded at Loughborough
            University in the United Kingdom) to mechanical/marine and civil
            engineering, he is now poised to apply that knowledge to take
            on the vast challenges within the fields of shipbuilding and
            concrete flotation systems building.
          </p>

          <p className="ecmfs-founder__quote">
            "It is with great enthusiasm that I look forward to making a mark
            in the marine asset construction industry in Nigeria, as it is
            clear that there remains a lot to be done to grow the industry,
            and I remain bullish about the future prospects".
          </p>

          <div className="ecmfs-founder__signature">
            <span className="ecmfs-founder__name">
              Mr. Okechukwu Nwakwesi
            </span>

            <span className="ecmfs-founder__role">
              MD/CEO ECMFS Shipyard
            </span>

            {/* Decorative signature */}
            <svg
              className="ecmfs-founder__sign"
              viewBox="0 0 140 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 25 C32 4, 66 8, 122 4
                   C98 16, 65 21, 29 27
                   C53 26, 85 21, 104 25
                   L43 34 L74 35 L66 39"
                stroke="currentColor"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    {/* Technical Partners Section with logos from public/img/partners */}
    <section className="founder-partnerships-section">
      <div className="site-container">
        <Slide>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p className="eyebrow" style={{ color: '#ffca05' }}><Squares />Strategic Alliances</p>
            <h2 style={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Technical Partners &amp; Affiliates
            </h2>
            <p style={{ color: '#c3d5ea', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Our value proposition is underpinned by robust international partnerships with leading naval architects, marine engineers, and global boat builders.
            </p>
          </div>

          <div className="partner-logos-grid">
            <div className="partner-logo-card">
              <img src={images.partnerIcarus} alt="Icarus Marine partner logo" />
            </div>
            <div className="partner-logo-card">
              <img src={images.partnerMirine} alt="Mirine partner logo" />
            </div>
            <div className="partner-logo-card">
              <img src={images.partnerMf} alt="International Marine Flotation Systems partner logo" />
            </div>
          </div>


        </Slide>
      </div>
    </section>
  </>;
}

export function ResourcesPage() {
  return <>
    <PageHeading title="Resources" eyebrow="ECMFS Shipbuilding" />
    <section className="site-container resources-section">
      <Slide>
        <p className="eyebrow"><Squares />Downloads & Media</p>
        <h2>Company Resources</h2>
        <p className="large-copy">Download our company brochure and access key resources about ECMFS Shipbuilding's services, capabilities, and expertise.</p>
      </Slide>

      <div className="resources-grid">
        <Slide className="resource-card">
          <div className="resource-icon">
            <Download size={32} />
          </div>
          <div className="resource-info">
            <h3>ECMFS Company Profile & Brochure</h3>
            <p>Our comprehensive company brochure covering all services, vessel construction capabilities, concrete float systems, and partnership details.</p>
            <a href="/downloads/ECMFS-brochure.pdf" target="_blank" rel="noopener noreferrer" className="resource-download-btn" download>
              <Download size={16} /> Download Brochure (PDF)
            </a>
          </div>
        </Slide>
      </div>
    </section>
  </>;
}
