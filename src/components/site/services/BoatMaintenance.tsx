import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export function BoatMaintenancePage() {
  return (
    <section className="ecms-maintenance">
      {/* Yellow angled heading */}
      <h2 className="ecms-maintenance__heading">
        Boat Maintenance &amp; Management
      </h2>

      {/* Translucent dark teal content panel */}
      <div className="ecms-maintenance__panel">
        <div className="ecms-maintenance__copy">
          <p>
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
          </p>

          <p>
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
          </p>

          <div style={{ marginTop: '30px' }}>
            <Link to="/contact" className="ecms-yacht-cta-btn">
              Request Maintenance Contract <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
