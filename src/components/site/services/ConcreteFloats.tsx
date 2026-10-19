import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '../content';
import { Slide, Squares, Photo } from '../Motion';

export function ConcreteFloatsPage(){
  const s = services[1];
  return (
    <div className="service-individual-page">
      <div className="service-page-hero concrete-hero" style={{ backgroundImage: `url(${s.photo})` }}>
        <div className="service-page-hero-overlay"/>
        <div className="site-container service-page-hero-content">
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding Services</p>
          <h1>Concrete Floats</h1>
        </div>
      </div>

      {/* Floating Concrete Foundations description */}
      <section className="section-navy concrete-description-section">
        <div className="site-container two-column">
          <Slide index={0}>
            <div className="body-copy">
              <h2 className="section-title-blue">Floating Concrete Foundations</h2>
              {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Slide>
          <Slide index={1}>
            <Photo src="/img/concrete-floats/marinas.jpg" alt="Marina concrete flotation system" />
          </Slide>
        </div>
      </section>

      {/* Concrete floats applications gallery */}
      <section className="site-container concrete-gallery-section">
        <Slide>
          <p className="eyebrow"><Squares/>Engineered Applications</p>
          <h2>Concrete Flotation Solutions</h2>
        </Slide>
        <div className="concrete-grid">
          {[
            ["/img/ref-marina-structure.jpg", "SPECIALTY FLOAT"],
            ["/img/ref-pilot2.jpg", "WAVE ATTENUATOR"],
            ["/img/concrete-floats/floating-homes.jpg", "COMMERCIAL STRUCTURES"],
            ["/img/kena-water.jpg", "FLOATING HOMES"],
            ["/img/concrete-floats/marinas.jpg", "MARINAS"],
            ["/img/ref-barge.jpg", "YACHT ENCLOSURES"],
          ].map(([src, label]) => (
            <Slide key={label} className="concrete-card">
              <img src={src} alt={label} loading="lazy" />
              <span className="concrete-label">{label}</span>
            </Slide>
          ))}
        </div>

        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <Button variant="marine" asChild>
            <Link to="/contact">Plan Your Waterfront Float Project <ArrowUpRight /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
