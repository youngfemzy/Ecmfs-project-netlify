import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export function ServicesMapPage(){
  return (
    <section className="ecms-service-map">
      <div className="ecms-service-map__heading">OUR SERVICES</div>

      <div className="ecms-service-map__canvas">
        {/* Directional connectors with arrowheads */}
        <svg
          className="ecms-service-map__connectors"
          viewBox="0 0 1050 700"
          preserveAspectRatio="none"
          aria-hidden="true"
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
        </svg>

        {/* Top service: Concrete Floats */}
        <Link
          to="/services/concrete-floats"
          className="ecms-service-map__service ecms-service-map__service--top ecms-service-link"
        >
          <span>Concrete Floats</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </Link>

        {/* Left service 1: Under 85ft */}
        <Link
          to="/services/aluminium-steel"
          hash="under-85ft"
          className="ecms-service-map__service ecms-service-map__service--left-one ecms-service-link"
        >
          <span>Aluminum and steel boat construction under 85ft</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </Link>

        {/* Left service 2: Above 85ft */}
        <Link
          to="/services/aluminium-steel"
          hash="above-85ft"
          className="ecms-service-map__service ecms-service-map__service--left-two ecms-service-link"
        >
          <span>Aluminium and steel boat construction above 85ft</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </Link>

        {/* Center logo */}
        <div className="ecms-service-map__center">
          <img
            src="/img/mainlogo.png"
            alt="ECMFS Shipbuilding Logo"
            className="ecms-service-map__center-logo"
          />
        </div>

        {/* Right service: Boat maintenance and management */}
        <Link
          to="/services/boat-maintenance"
          className="ecms-service-map__service ecms-service-map__service--right ecms-service-link"
        >
          <span>Boat maintenance and management</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </Link>

        {/* Bottom service: Yacht construction and brokering */}
        <Link
          to="/services/yacht-construction"
          className="ecms-service-map__service ecms-service-map__service--bottom ecms-service-link"
        >
          <span>Yacht construction and brokering</span>
          <ArrowUpRight size={18} className="service-cta-arrow" />
        </Link>
      </div>
    </section>
  );
}
