import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Download, Ship } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { about, mission, vision, safety, services, images, vesselConstruction, founderBio, founderQuote, founderName, founderRole } from './content';
import { Slide, Photo, Squares } from './Motion';

export function PageHeading({ title, eyebrow, dark }: { title: string; eyebrow: string; dark?: boolean }) {
  return <div className={`page-heading site-container${dark ? ' page-heading-dark' : ''}`}>
    <p className="eyebrow"><Squares />{eyebrow}</p>
    <h1>{title}</h1>
  </div>
}

const RC_NUMBER = 'RC No: 1879101';

/** Renders a paragraph, italicising the RC number. */
function AboutCopy({ text }: { text: string }) {
  const parts = text.split(RC_NUMBER);
  if (parts.length === 1) return <>{text}</>;
  return <>
    {parts.map((part, i) => (
      <span key={i}>
        {part}
        {i < parts.length - 1 && <em>{RC_NUMBER}</em>}
      </span>
    ))}
  </>;
}

export function AboutPage() {
  return <>
    {/* Introduction */}
    <section className="ecmfs-introduction">
      <div className="ecmfs-introduction__main">
        <Slide index={0}>
          <h2 className="ecmfs-introduction__heading">Introduction</h2>
          <div className="ecmfs-introduction__copy">
            {about.map((p, i) => <p key={i}><AboutCopy text={p} /></p>)}
          </div>
        </Slide>
      </div>
      <div
        className="ecmfs-introduction__side-image"
        role="img"
        aria-label="MV KENA on the slipway at the ECMFS Lekki shipyard"
      />
    </section>

    {/* Vessel Construction */}
    <section className="section-navy angled-section vessel-construction-section">
      <div className="site-container two-column">
        <Slide index={0}><Photo src={images.shipyard} alt="Large vessel at the Lagos shipyard" /></Slide>
        <Slide index={1}>
          <p className="eyebrow"><Squares />Expertise</p>
          <p className='ecmfs-introduction__heading'>Vessel Construction</p>
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
            regional markets.
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
export { AluminiumSteelUnder85Page as AluminiumSteelPage } from './services/AluminiumSteelUnder85';
export { AluminiumSteelAbove85Page } from './services/AluminiumSteelAbove85';
export { ConcreteFloatsPage } from './services/ConcreteFloats';
export { BoatMaintenancePage } from './services/BoatMaintenance';
export { YachtConstructionPage } from './services/YachtConstruction';


export function FounderPage() {
  return <>
    {/* Brochure Founder Section */}
    <section className="ecmfs-founder">
      {/* Left visual with hero-alt background and founder portrait */}
      <motion.div
        className="ecmfs-founder__visual"
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="ecmfs-founder__label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Founder
        </motion.div>

        <motion.div
          className="ecmfs-founder__portrait"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={images.founder}
            alt="Mr. Okey Nwakwesi — Founder & MD/CEO"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Right biography panel */}
      <motion.div
        className="ecmfs-founder__content"
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ecmfs-founder__bio">
          {founderBio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {p}
            </motion.p>
          ))}

          <motion.p
            className="ecmfs-founder__quote"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            "{founderQuote}".
          </motion.p>

          <motion.div
            className="ecmfs-founder__signature"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ecmfs-founder__name">
              {founderName}
            </span>

            <span className="ecmfs-founder__role">
              {founderRole}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>

    {/* Technical Partners Section with logos from public/img/partners */}
    <section className="founder-partnerships-section">
      <div className="site-container">
        <Slide>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p className="eyebrow" style={{ color: '#ffca05', justifyContent: 'center' }}><Squares />Strategic Alliances</p>
            <h2 style={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Technical Partners
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
        <p className="large-copy">Download our company brochure, vessel brochures, and access key resources about ECMFS Shipbuilding's services, capabilities, and expertise.</p>
      </Slide>

      <div className="resources-grid">
        <Slide className="resource-card" index={0}>
          <div className="resource-icon">
            <Download size={32} />
          </div>
          <div className="resource-info">
            <h3>ECMFS Company Brochure</h3>
            <p>Our comprehensive company brochure covering all services, vessel construction capabilities, concrete float systems, and partnership details.</p>
            <a href="/downloads/ECMFS-brochure.pdf" target="_blank" rel="noopener noreferrer" className="resource-download-btn" download>
              <Download size={16} /> Download Brochure (PDF)
            </a>
          </div>
        </Slide>

        <Slide className="resource-card" index={1}>
          <div className="resource-icon">
            <Ship size={32} />
          </div>
          <div className="resource-info">
            <h3>MV KENA — Vessel Build Specification</h3>
            <p>
              The complete build specification for our maiden vessel, MV KENA.
              Steel hull with aluminium superstructure, 9.85&nbsp;m overall
              length, 200&nbsp;BHP outboard propulsion, and full schedules of
              capacities, wheelhouse, navigation, communications and safety
              equipment.
            </p>
            <a href="/downloads/MV-KENA-Vessel-Build-Specification.pdf" target="_blank" rel="noopener noreferrer" className="resource-download-btn" download>
              <Download size={16} /> Download Specification (PDF)
            </a>
          </div>
        </Slide>
      </div>
    </section>
  </>;
}
