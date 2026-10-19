import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { images, vesselConstruction } from '../content';
import { Slide, Squares, Photo } from '../Motion';

export function AluminiumSteelAbove85Page() {
  return (

    <div className="service-individual-page">
      <div className="service-page-hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="service-page-hero-overlay" />
        <motion.div
          className="site-container service-page-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><Squares />ECMFS Shipbuilding Services</p>
          <h1>Aluminium & Steel Boat Construction Above 85ft</h1>
        </motion.div>
      </div>

      <section className="site-container service-detail-section">
        <div className="two-column">
          <Slide index={0}>
            <div className="body-copy service-body">
              <p className="eyebrow"><Squares />Deepwater & Commercial Vessels</p>
              <h2>Large Vessel Capabilities Above 85ft</h2>
              {vesselConstruction.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Slide>
          <Slide index={1}>
            <Photo src={images.shipyard} alt="Large marine vessel construction at partner facility" />
          </Slide>
        </div>
      </section>

      {/* Strategic Regional Hub & Partnership section */}
      <section className="section-navy angled-section" style={{ paddingBlock: 'calc(3.5vw + 4rem) 5rem' }}>
        <div className="site-container">
          <Slide>
            <p className="eyebrow"><Squares />Apapa Partner Shipyard Facility</p>
            <h2>Large Scale Commercial Marine Assets</h2>
            <div className="body-copy" style={{ maxWidth: '60rem', marginTop: '1.5rem' }}>
              <p>
                Marine assets over 85 feet in length are constructed at our partner shipyard sites located in the Apapa port area of Lagos. The West African region is a hub for coastal and deep offshore maritime activity, driven primarily by offshore oil and gas developments and the regional economy.
              </p>
              <p>
                ECMFS provides locally constructed marine assets built in accordance with applicable design codes and international Class rules (Lloyd's Register, ABS, Bureau Veritas, DNV), offering unbeatable delivery timelines and pricing without any compromise in structural or engineering quality.
              </p>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <Button variant="marine" asChild>
                <Link to="/contact">Get in Touch Regarding Large Builds <ArrowUpRight /></Link>
              </Button>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
}
