import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export function YachtConstructionPage() {
  return (
    <section className="ecms-yacht-page">
      {/* Yellow title banner */}
      <div className="ecms-yacht-page__heading">
        Yacht Construction and Brokering
      </div>

      <br />
      <br />
      <br />

      <div className="ecms-yacht-page__layout">
        {/* LEFT: Descriptive content */}
        <div className="ecms-yacht-page__text">
          <p>
            In the Lagos Metropolis, fun in the sun on the water has become a
            popular feature in the leisure activity mix. Short trips around the
            lagoon and mid-range trips to beach resorts and boat clubs has
            become the day-trip event to look forward to at the end of a
            grueling working week.
            <br />
            <br />
            Why not take it a step further by investing in one of our mini-yacht
            designs guaranteed to create an ambience on water that challenges
            the notion that man was not built for the sea. Our partner in Yacht
            design and fabrication, Forepeak design LLC are in the business of
            delivering cutting-edge yacht designs. We invite you to treat
            yourself to a new world of waterway leisure. Be one of the first to
            own one of our mini-yacht range.
          </p>

          <p>
            For those who are seeking something bigger and bolder within the much
            more exclusive price range, we may have just the products for you.
            We work closely with the "Sunseeker Yachts" brand as well as other
            luxury brands. We are well positioned to assist in facilitating
            deliveries, developing jetties and jetty approaches as well as day to
            day management/maintenance.
          </p>

          <div style={{ marginTop: '28px' }}>
            <Link to="/contact" className="ecms-yacht-cta-btn">
              Consult Our Yacht Specialists <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT: Yacht designs and layouts collage */}
        <div className="ecms-yacht-page__gallery">
          {/* Main deck layout (top-left) */}
          <div className="ecms-yacht-page__panel">
            <img
              src="/img/yacht/mini_yacht_main_deck.png"
              alt="Mini yacht main deck layout"
              loading="lazy"
            />
            <div className="ecms-yacht-page__panel-label">Main Deck Layout</div>
          </div>

          {/* 42ft sports fisherman mini-yacht (top-right) */}
          <div className="ecms-yacht-page__image ecms-yacht-page__image--caption">
            <img
              src="/img/yacht/sports_fisherman_42ft.png"
              alt="42ft sports fisherman mini-yacht"
              loading="lazy"
            />
            <div className="ecms-yacht-page__caption">
              42ft Sports Fisherman Mini-Yacht
            </div>
          </div>

          {/* Express / 50ft sporting yacht (middle-left) */}
          <div className="ecms-yacht-page__panel ecms-yacht-page__panel--express">
            <div
              className="ecms-yacht-page__panel-label"
              style={{ color: '#073456', fontWeight: 800, letterSpacing: '0.5px' }}
            >
              EXPRESS
            </div>
            <img
              src="/img/yacht/express_50ft_profile.png"
              alt="50ft sporting yacht express design"
              loading="lazy"
            />
            <div className="ecms-yacht-page__panel-label">
              50ft Sporting Yacht
            </div>
            <div className="ecms-yacht-page__deck-buttons">
              <span>Main Deck</span>
              <span>Below Deck</span>
            </div>
          </div>

          {/* Below deck layout (middle-right) */}
          <div className="ecms-yacht-page__panel ecms-yacht-page__panel--below">
            <div className="ecms-yacht-page__deck-buttons">
              <span>Main Deck</span>
              <span>Below Deck</span>
            </div>
            <img
              src="/img/yacht/below_deck_plan.png"
              alt="Mini yacht below deck layout"
              loading="lazy"
            />
            <div className="ecms-yacht-page__panel-label">Below Deck Layout</div>
          </div>

          {/* Full-width bottom main deck layout */}
          <div className="ecms-yacht-page__panel ecms-yacht-page__panel--wide">
            <div className="ecms-yacht-page__panel-label">Main Deck Layout</div>
            <img
              src="/img/yacht/main_deck_wide_plan.png"
              alt="Luxury yacht main deck plan"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
