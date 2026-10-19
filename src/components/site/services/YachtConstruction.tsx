import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '../content';
import { Slide, Squares } from '../Motion';

export function YachtConstructionPage(){
  const s = services[3];
  return (
    <div className="service-individual-page">
      <div className="service-page-hero yacht-hero" style={{ backgroundImage: `url(${s.photo})` }}>
        <div className="service-page-hero-overlay"/>
        <div className="site-container service-page-hero-content">
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding Services</p>
          <h1>Yacht Construction & Brokering</h1>
        </div>
      </div>

      <section className="site-container yacht-content-section">
        <div className="two-column">
          <Slide index={0}>
            <div className="body-copy">
              <p className="eyebrow-yellow"><Squares/>Luxury & Performance</p>
              <h2>Bespoke Yacht Construction & Brokering</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <Button variant="marine" asChild>
                  <Link to="/contact">Consult With Our Yacht Specialists <ArrowUpRight /></Link>
                </Button>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="yacht-image-grid">
              <img src="/img/ref-catamaran.jpg" alt="Main deck layout yacht" loading="lazy" />
              <img src="/img/ref-patrol.jpg" alt="42ft sports fisherman mini-yacht" loading="lazy" />
              <img src="/img/kena-water.jpg" alt="50ft sporting yacht" loading="lazy" />
              <img src="/img/ref-pilot1.jpg" alt="Below deck layout" loading="lazy" />
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
}
