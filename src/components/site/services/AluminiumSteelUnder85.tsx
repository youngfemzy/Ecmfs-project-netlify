import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '../content';
import { Slide, Squares } from '../Motion';

export function AluminiumSteelUnder85Page(){
  const s = services[0];
  return (
    <div className="service-individual-page">
      <div className="service-page-hero" style={{ backgroundImage: `url(${s.photo})` }}>
        <div className="service-page-hero-overlay"/>
        <div className="site-container service-page-hero-content">
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding Services</p>
          <h1>Aluminium & Steel Boat Construction Under 85ft</h1>
        </div>
      </div>

      <section className="site-container service-detail-section">
        <Slide>
          <div className="body-copy service-body">
            <p>
              From our facility in the heart of Lekki Peninsula, ECMFS constructs steel and aluminium marine crafts of up to 85 feet in length, from keel laying to final launch and acceptance trials.
            </p>
            <p>
              The build process uses laser precision-cut plates and profiles, type-approved fittings, and state-of-the-art marine outfitting procured through our robust local and international supply chains across Africa, Europe, Canada, and the United States.
            </p>
            <h3>Our range includes:</h3>
            <p className="large-copy">
              Interceptor security boats, police patrol boats, pilot boats, firefighting and rescue boats, workboats, and catamaran passenger ferries (from 29 ft up to 85 ft).
            </p>
          </div>
        </Slide>
      </section>

      {/* Reference vessels gallery */}
      <section className="section-navy angled-section aluminium-gallery">
        <div className="site-container">
          <Slide>
            <p className="eyebrow"><Squares/>Reference Vessels</p>
            <h2>Proven Craft Capabilities Under 85ft</h2>
          </Slide>
          <div className="vessel-reference-grid">
            {[
              ["/img/ref-interceptor.jpg", "40FT INTERCEPTOR SECURITY BOAT"],
              ["/img/ref-patrol.jpg", "29FT POLICE PATROL BOAT"],
              ["/img/ref-catamaran.jpg", "85FT CATAMARAN PASSENGER FERRY"],
              ["/img/ref-pilot1.jpg", "55FT PILOT BOAT"],
              ["/img/ref-firefighting1.jpg", "55FT FIRE RESCUE BOAT"],
              ["/img/ref-firefighting2.jpg", "36FT POLICE PATROL BOAT"],
              ["/img/ref-ferry.jpg", "78FT CATAMARAN PASSENGER FERRY"],
            ].map(([src, label]) => (
              <Slide key={label} className="vessel-ref-card">
                <img src={src} alt={label} loading="lazy" />
                <span className="vessel-ref-label">{label}</span>
              </Slide>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <Button variant="marine" asChild>
              <Link to="/contact">Discuss a Custom Build <ArrowUpRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
