import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export function ServicesMapPage() {
  return (
    <section className="ecms-service-map">
      <motion.div
        className="ecms-service-map__heading"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        OUR SERVICES
      </motion.div>

      <div className="ecms-service-map__canvas">
        {/* Directional connectors with arrowheads */}
        <motion.svg
          className="ecms-service-map__connectors"
          viewBox="0 0 1050 700"
          preserveAspectRatio="none"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Center to top */}
          <line x1="525" y1="350" x2="525" y2="177" />
          <path className="arrow" d="M525 166 L517 181 L533 181 Z" />

          {/* Center to bottom */}
          <line x1="525" y1="350" x2="525" y2="612" />
          <path className="arrow" d="M525 624 L517 609 L533 609 Z" />

          {/* Center to left */}
          <line x1="430" y1="350" x2="270" y2="350" />
          <path className="arrow" d="M258 350 L273 342 L273 358 Z" />

          {/* Center to right */}
          <line x1="620" y1="350" x2="780" y2="350" />
          <path className="arrow" d="M792 350 L777 342 L777 358 Z" />

          {/* Branch linking the two left-side services */}
          <path d="M270 350 H310 V473 H270" />
          <path className="arrow" d="M258 473 L273 465 L273 481 Z" />
        </motion.svg>

        {/* Top service: Concrete Floats */}
        <MotionLink
          to="/services/concrete-floats"
          className="ecms-service-map__service ecms-service-map__service--top ecms-service-link"
          initial={{ opacity: 0, y: -25, x: '-50%' }}
          whileInView={{ opacity: 1, y: 0, x: '-50%' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Concrete Floats</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </MotionLink>

        {/* Left service 1: Under 85ft */}
        <MotionLink
          to="/services/aluminium-steel"
          hash="under-85ft"
          className="ecms-service-map__service ecms-service-map__service--left-one ecms-service-link"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Aluminum and steel boat construction under 85ft</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </MotionLink>

        {/* Left service 2: Above 85ft */}
        <MotionLink
          to="/services/aluminium-steel"
          hash="above-85ft"
          className="ecms-service-map__service ecms-service-map__service--left-two ecms-service-link"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Aluminium and steel boat construction above 85ft</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </MotionLink>

        {/* Center logo */}
        <motion.div
          className="ecms-service-map__center"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/img/mainlogo.png"
            alt="ECMFS Shipbuilding Logo"
            className="ecms-service-map__center-logo"
          />
        </motion.div>

        {/* Right service: Boat maintenance and management */}
        <MotionLink
          to="/services/boat-maintenance"
          className="ecms-service-map__service ecms-service-map__service--right ecms-service-link"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Boat maintenance and management</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </MotionLink>

        {/* Bottom service: Yacht construction and brokering */}
        <MotionLink
          to="/services/yacht-construction"
          className="ecms-service-map__service ecms-service-map__service--bottom ecms-service-link"
          initial={{ opacity: 0, y: 25, x: '-50%' }}
          whileInView={{ opacity: 1, y: 0, x: '-50%' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Yacht construction and brokering</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </MotionLink>
      </div>
    </section>
  );
}
