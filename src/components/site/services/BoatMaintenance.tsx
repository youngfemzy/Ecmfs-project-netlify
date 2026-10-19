import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '../content';
import { Slide, Squares, Photo } from '../Motion';

export function BoatMaintenancePage(){
  const s = services[2];
  return (
    <div className="service-individual-page">
      <div className="service-page-hero maintenance-hero">
        <div className="service-page-hero-overlay"/>
        <div className="site-container service-page-hero-content">
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding Services</p>
          <h1>Boat Maintenance & Management</h1>
        </div>
      </div>

      <section className="section-teal maintenance-content-section">
        <div className="site-container two-column">
          <Slide index={0}>
            <div className="body-copy">
              <p className="eyebrow-yellow"><Squares/>Full Lifecycle Care</p>
              <h2>Maintenance Strategy & Fleet Management</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <Button variant="marine" asChild>
                  <Link to="/contact">Request Maintenance Support <ArrowUpRight /></Link>
                </Button>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <Photo src={s.photo} alt={s.alt} />
          </Slide>
        </div>
      </section>
    </div>
  );
}
