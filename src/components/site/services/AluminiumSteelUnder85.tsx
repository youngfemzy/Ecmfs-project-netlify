import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { vesselConstruction, images } from '../content';

export function AluminiumSteelUnder85Page() {
  return (
    <section className="ecms-boat-gallery">
      <br />
      <br />
      {/* Blue title bar for under 85ft */}
      <h2 id="under-85ft" className="ecms-boat-gallery__heading">
        Aluminum and Steel Boat Construction Under 85ft
      </h2>

      {/* 3-column boat gallery matching brochure slide */}
      <div className="ecms-boat-gallery__grid">
        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-interceptor.jpg"
            alt="40ft interceptor security boat"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            40ft Interceptor Security Boat
          </span>
        </div>

        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-patrol.jpg"
            alt="29ft police patrol boat"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            29ft Police Patrol Boat
          </span>
        </div>

        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-catamaran.jpg"
            alt="85ft catamaran passenger ferry"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            85ft Catamaran Passenger Ferry
          </span>
        </div>

        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-pilot1.jpg"
            alt="55ft pilot boat"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            55ft Pilot Boat
          </span>
        </div>

        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-firefighting1.jpg"
            alt="55ft fire rescue boat"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            55ft Fire Rescue Boat
          </span>
        </div>

        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-firefighting2.jpg"
            alt="36ft police patrol boat"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            36ft Police Patrol Boat
          </span>
        </div>

        <div className="ecms-boat-gallery__card">
          <img
            src="/img/ref-ferry.jpg"
            alt="78ft catamaran passenger ferry"
            loading="lazy"
          />
          <span className="ecms-boat-gallery__caption">
            78ft Catamaran Passenger Ferry
          </span>
        </div>
      </div>

      {/* Above 85ft Section on the SAME page as requested */}
      <h2 id="above-85ft" className="ecms-boat-gallery__heading ecms-boat-gallery__heading--navy">
        Aluminium & Steel Boat Construction Above 85ft
      </h2>

      <div className="ecms-boat-above">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h3>Above 85ft</h3>
            {vesselConstruction.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div style={{ marginTop: '2rem' }}>
              <Button variant="marine" asChild>
                <Link to="/contact">Get in Touch Regarding Custom Builds <ArrowUpRight /></Link>
              </Button>
            </div>
          </div>
          <div>
            <img
              src={images.shipyard}
              alt="Large vessel construction at partner facility"
              style={{ width: '100%', height: 'auto', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
