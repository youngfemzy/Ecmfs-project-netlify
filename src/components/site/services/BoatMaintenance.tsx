import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function BoatMaintenancePage() {
  return (
    <section className="ecms-maintenance">
      {/* Yellow angled heading */}
      <motion.h2
        className="ecms-maintenance__heading"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Boat Maintenance &amp; Management
      </motion.h2>

      {/* Translucent dark teal content panel */}
      <motion.div
        className="ecms-maintenance__panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ecms-maintenance__copy">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We understand that routine maintenance schedules are not to be
            taken lightly, because a lack of attention to the Original
            Equipment Manufacturer's scheduled inspections and recommended
            action, can lead to equipment failure at a time when you need
            them the most. When you commit to a contract for a newbuild
            with us, you automatically enter into a maintenance contract
            for the period of manufacturer's warranty on your vessels' hull
            and machinery.
            <br />
            <br />
            If you own a third party build aluminum or steel marine asset,
            and wish to hand over maintenance responsibility to us, we will
            be happy to assess its condition and recommend a repair scope to
            bring the asset back to its original factory standard in regards
            to its hull and machinery status.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Once this is done, a maintenance contract can be signed provided
            the asset is moored at one of our designated jetty sites.
            Provision of certified Captains, Engineers and deckhands is key
            to the success of our overall maintenance strategy since the
            operators will play an integral part in the process of fault
            identification and reporting as well as feedback to affirm that
            the fault condition has been rectified or not post-repairs. In
            such instances, subject to our client's approval, our management
            team will liaise with the various parties, schedule the statutory
            surveys and address all deficiencies required for re-certification.
          </motion.p>

          <motion.div
            style={{ marginTop: '30px' }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="ecms-yacht-cta-btn">
              Request Maintenance Contract <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
