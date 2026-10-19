import { ArrowUpRight, MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsapp, images } from './content';
import { PageHeading } from './Corporate';
import { Slide, Squares } from './Motion';

export function ContactPage(){
  return (
    <div className="contact-page">
      {/* Hero — matches brochure final slide: building photo with contact overlay */}
      <div className="contact-hero">
        <img src={images.hero} alt="ECMFS corporate facility — concrete float construction site" className="contact-hero-img"/>
        <div className="contact-hero-overlay"/>
        <div className="contact-hero-brand">
          <img src={images.logo} alt="ECMFS Shipbuilding logo" className="contact-logo-large"/>
        </div>
      </div>

      {/* Contact details matching brochure layout */}
      <div className="contact-details-band section-navy">
        <div className="site-container contact-columns">
          <Slide index={0} className="contact-block">
            <div className="contact-icon-row"><Building2 size={20}/><dt>Corporate Office</dt></div>
            <dd>#2 Kingsley Odo Close, Lekki Phase One, Lagos, Nigeria.</dd>
          </Slide>
          <Slide index={1} className="contact-block">
            <div className="contact-icon-row"><MapPin size={20}/><dt>Jetty Location</dt></div>
            <dd>The Leisure Park, #6 Wole Olateju Crescent, off Admiralty way,<br/>Lekki Phase One, Lagos, Nigeria.</dd>
          </Slide>
          <Slide index={2} className="contact-block">
            <div className="contact-icon-row"><Phone size={20}/><dt>Phones</dt></div>
            <dd>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">(+234)-803 845 7735 (WhatsApp)</a>
              <a href="tel:+2348188255176">0818 825 5176</a>
              <a href="tel:+23412802067">1-280 2067</a>
            </dd>
          </Slide>
          <Slide index={3} className="contact-block">
            <div className="contact-icon-row"><Mail size={20}/><dt>Email</dt></div>
            <dd>
              <a href="mailto:sales@ecmfsboatsandfloats.com.ng">sales@ecmfsboatsandfloats.com.ng</a>
            </dd>
          </Slide>
        </div>
      </div>

      {/* Get In Touch CTA section */}
      <section className="site-container contact-cta-section">
        <Slide>
          <p className="eyebrow"><Squares/>ECMFS Shipbuilding</p>
          <h2>Get In Touch</h2>
          <p className="large-copy">Ready to discuss your marine construction project? Our team is available to assist with aluminium & steel boat construction, concrete flotation systems, boat maintenance, and yacht requirements. Reach us directly via WhatsApp or email.</p>
          <div className="contact-actions">
            <Button variant="marine" asChild>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <ArrowUpRight/>
              </a>
            </Button>
            <Button variant="marineOutline" asChild>
              <a href="mailto:sales@ecmfsboatsandfloats.com.ng">
                Send an Email <ArrowUpRight/>
              </a>
            </Button>
          </div>
        </Slide>
      </section>
    </div>
  );
}
