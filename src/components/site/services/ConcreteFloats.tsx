import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const floatCards = [
  { src: '/img/concrete-floats/specialty_float.jpg', alt: 'Specialty float', caption: 'Specialty Float' },
  { src: '/img/concrete-floats/wave_attenuator.jpg', alt: 'Wave attenuator', caption: 'Wave Attenuator' },
  { src: '/img/concrete-floats/commercial_structures.jpg', alt: 'Commercial structures', caption: 'Commercial Structures' },
  { src: '/img/concrete-floats/floating_homes.jpg', alt: 'Floating homes', caption: 'Floating Homes' },
  { src: '/img/concrete-floats/marinas.jpg', alt: 'Marinas', caption: 'Marinas' },
  { src: '/img/concrete-floats/yacht_enclosures.jpg', alt: 'Yacht enclosures', caption: 'Yacht Enclosures' },
];

export function ConcreteFloatsPage() {
  return (
    <section className="ecms-concrete-floats">
      {/* Yellow angled title banner */}
      <motion.h2
        className="ecms-concrete-floats__heading"
        initial={{ opacity: 0, y: -25, x: '-50%' }}
        whileInView={{ opacity: 1, y: 0, x: '-50%' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Concrete Floats
      </motion.h2>

      {/* Six-card gallery */}
      <div className="ecms-concrete-floats__grid">
        {floatCards.map((card, i) => (
          <MotionLink
            key={card.src}
            to="/contact"
            className="ecms-concrete-floats__card"
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
            <span className="ecms-concrete-floats__caption">{card.caption}</span>
          </MotionLink>
        ))}
      </div>

      <br />
      <br />

      {/* Engineering info & consultation */}
      <motion.div
        className="ecms-concrete-info-bar"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>
          Heavy-duty marine concrete flotation platforms engineered for wave attenuation, commercial waterfront architecture, private luxury marinas, and durable offshore structures.
        </p>
        <Link to="/contact" className="ecms-yacht-cta-btn">
          Inquire About Concrete Floats <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
