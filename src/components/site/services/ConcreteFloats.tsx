import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export function ConcreteFloatsPage() {
  return (
    <section className="ecms-concrete-floats">
      {/* Yellow angled title banner */}
      <h2 className="ecms-concrete-floats__heading">
        Concrete Floats
      </h2>

      {/* Six-card gallery */}
      <div className="ecms-concrete-floats__grid">
        <Link to="/contact" className="ecms-concrete-floats__card">
          <img
            src="/img/concrete-floats/specialty_float.jpg"
            alt="Specialty float"
            loading="lazy"
          />
          <span className="ecms-concrete-floats__caption">
            Specialty Float
          </span>
        </Link>

        <Link to="/contact" className="ecms-concrete-floats__card">
          <img
            src="/img/concrete-floats/wave_attenuator.jpg"
            alt="Wave attenuator"
            loading="lazy"
          />
          <span className="ecms-concrete-floats__caption">
            Wave Attenuator
          </span>
        </Link>

        <Link to="/contact" className="ecms-concrete-floats__card">
          <img
            src="/img/concrete-floats/commercial_structures.jpg"
            alt="Commercial structures"
            loading="lazy"
          />
          <span className="ecms-concrete-floats__caption">
            Commercial Structures
          </span>
        </Link>

        <Link to="/contact" className="ecms-concrete-floats__card">
          <img
            src="/img/concrete-floats/floating_homes.jpg"
            alt="Floating homes"
            loading="lazy"
          />
          <span className="ecms-concrete-floats__caption">
            Floating Homes
          </span>
        </Link>

        <Link to="/contact" className="ecms-concrete-floats__card">
          <img
            src="/img/concrete-floats/marinas.jpg"
            alt="Marinas"
            loading="lazy"
          />
          <span className="ecms-concrete-floats__caption">
            Marinas
          </span>
        </Link>

        <Link to="/contact" className="ecms-concrete-floats__card">
          <img
            src="/img/concrete-floats/yacht_enclosures.jpg"
            alt="Yacht enclosures"
            loading="lazy"
          />
          <span className="ecms-concrete-floats__caption">
            Yacht Enclosures
          </span>
        </Link>
      </div>

      <br />
      <br />

      {/* Engineering info & consultation */}
      <div className="ecms-concrete-info-bar">
        <p>
          Heavy-duty marine concrete flotation platforms engineered for wave attenuation, commercial waterfront architecture, private luxury marinas, and durable offshore structures.
        </p>
        <Link to="/contact" className="ecms-yacht-cta-btn">
          Inquire About Concrete Floats <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
