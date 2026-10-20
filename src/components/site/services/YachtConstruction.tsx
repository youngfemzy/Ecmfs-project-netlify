import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function YachtConstructionPage() {
  return (
    <section className="ecms-yacht-page">
      {/* Yellow title banner */}
      <motion.div
        className="ecms-yacht-page__heading"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Yacht Construction and Brokering
      </motion.div>

      <br />
      <br />
      <br />

      <div className="ecms-yacht-page__layout">
        {/* LEFT: Descriptive content */}
        <motion.div
          className="ecms-yacht-page__text"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            In the Lagos Metropolis, fun in the sun on the water has become a popular feature in the leisure activity mix. Short trips around the lagoon and mid-range trips to beach resorts and boat clubs has become the day-trip event to look forward to at the end of a grueling work week. Why not take it a step further by investing in one of our mini-yacht designs guaranteed to create an ambience on water that challenges the notion that man was not built for the sea.
            <br />
            <br />
            Our partner in Yacht design and fabrication, Forepeak design LLC are in the business of delivering cutting-edge yacht designs. We invite you to treat yourself to a new world of waterway leisure. Be one of the first to own one of our mini-yacht range.
            <br />
            For those who are seeking something bigger and bolder within the much more exclusive price range, we may have just the products for you. We work closely with the "Sunseeker Yachts" brand as well as other luxury brands.
          </p>

          <p>
            We are well positioned to assist in facilitating deliveries, developing jetties and jetty approaches as well as day to day management/maintenance.
          </p>

          <motion.div
            style={{ marginTop: '28px' }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="ecms-yacht-cta-btn">
              Consult Our Yacht Specialists <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: Yacht designs and layouts collage */}
        <div className="ecms-yacht-page__gallery">
          {/* Main deck layout (top-left) */}
          <motion.div
            className="ecms-yacht-page__panel"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/img/yacht/mini_yacht_main_deck.png"
              alt="Mini yacht main deck layout"
              loading="lazy"
            />
            <div className="ecms-yacht-page__panel-label">Main Deck Layout</div>
          </motion.div>

          {/* 42ft sports fisherman mini-yacht (top-right) */}
          <motion.div
            className="ecms-yacht-page__image ecms-yacht-page__image--caption"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/img/yacht/sports_fisherman_42ft.png"
              alt="42ft sports fisherman mini-yacht"
              loading="lazy"
            />
            <div className="ecms-yacht-page__caption">
              42ft Sports Fisherman Mini-Yacht
            </div>
          </motion.div>

          {/* Express / 50ft sporting yacht (middle-left) */}
          <motion.div
            className="ecms-yacht-page__panel ecms-yacht-page__panel--express"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
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
              {/* <span>Main Deck</span> */}
              {/* <span>Below Deck</span> */}
            </div>
          </motion.div>

          {/* Below deck layout (middle-right) */}
          <motion.div
            className="ecms-yacht-page__panel ecms-yacht-page__panel--below"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ecms-yacht-page__deck-buttons">
              {/* <span>Main Deck</span> */}
              <span>Below Deck</span>
            </div>
            <img
              src="/img/yacht/below_deck_plan.png"
              alt="Mini yacht below deck layout"
              loading="lazy"
            />
            <div className="ecms-yacht-page__panel-label">Below Deck Layout</div>
          </motion.div>

          {/* Full-width bottom main deck layout */}
          <motion.div
            className="ecms-yacht-page__panel ecms-yacht-page__panel--wide"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ecms-yacht-page__panel-label">Main Deck Layout</div>
            <img
              src="/img/yacht/main_deck_wide_plan.png"
              alt="Luxury yacht main deck plan"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
