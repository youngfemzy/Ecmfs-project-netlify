import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { vesselConstruction, images } from '../content';

const boatCards = [
  { src: '/img/ref-interceptor.jpg', alt: '40ft interceptor security boat', caption: '40ft Interceptor Security Boat' },
  { src: '/img/ref-patrol.jpg', alt: '29ft police patrol boat', caption: '29ft Police Patrol Boat' },
  { src: '/img/ref-catamaran.jpg', alt: '85ft catamaran passenger ferry', caption: '85ft Catamaran Passenger Ferry' },
  { src: '/img/ref-pilot1.jpg', alt: '55ft pilot boat', caption: '55ft Pilot Boat' },
  { src: '/img/ref-firefighting1.jpg', alt: '55ft fire rescue boat', caption: '55ft Fire Rescue Boat' },
  { src: '/img/ref-firefighting2.jpg', alt: '36ft police patrol boat', caption: '36ft Police Patrol Boat' },
  { src: '/img/ref-ferry.jpg', alt: '78ft catamaran passenger ferry', caption: '78ft Catamaran Passenger Ferry' },
];

export function AluminiumSteelUnder85Page() {
  return (
    <section className="ecms-boat-gallery">
      <br />
      <br />
      {/* Blue title bar for under 85ft */}
      <motion.h2
        id="under-85ft"
        className="ecms-boat-gallery__heading"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Aluminum and Steel Boat Construction Under 85ft
      </motion.h2>

      {/* 3-column boat gallery matching brochure slide */}
      <div className="ecms-boat-gallery__grid">
        {boatCards.map((card, i) => (
          <motion.div
            key={card.src}
            className="ecms-boat-gallery__card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: (i % 3) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img src={card.src} alt={card.alt} loading="lazy" />
            <span className="ecms-boat-gallery__caption">{card.caption}</span>
          </motion.div>
        ))}
      </div>

      {/* Above 85ft Section on the SAME page as requested */}
      <motion.h2
        id="above-85ft"
        className="ecms-boat-gallery__heading ecms-boat-gallery__heading--navy"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Aluminium &amp; Steel Boat Construction Above 85ft
      </motion.h2>

      <div className="ecms-boat-above">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Above 85ft</h3>
            {vesselConstruction.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div style={{ marginTop: '2rem' }}>
              <Button variant="marine" asChild>
                <Link to="/contact">Get in Touch Regarding Custom Builds <ArrowUpRight /></Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={images.shipyard}
              alt="Large vessel construction at partner facility"
              style={{ width: '100%', height: 'auto', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
