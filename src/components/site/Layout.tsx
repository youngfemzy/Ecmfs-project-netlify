import { Link, useLocation } from '@tanstack/react-router';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { company, images, whatsapp, servicesList } from './content';

const topLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Founder', '/founder'],
  ['Resources', '/resources'],
  ['Contact', '/contact'],
] as const;

/* ─── Sleek Top Progress Loader (Professional, Non-Blocking) ─── */
function RouteProgressBar({ routeKey }: { routeKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        className="page-route-loader"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{
          scaleX: [0, 0.65, 1],
          opacity: [1, 1, 0],
          transition: {
            duration: 0.4,
            times: [0, 0.6, 1],
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        exit={{ opacity: 0 }}
        style={{ transformOrigin: '0% 50%' }}
        aria-hidden
      />
    </AnimatePresence>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const loc = useLocation();
  const menu = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => setSolid(window.scrollY > 30);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [loc.pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab') {
        const els = menu.current?.querySelectorAll<HTMLElement>('a,button');
        if (!els?.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', key); };
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [servicesOpen]);

  const navLinks = topLinks.filter(([, to]) => to !== '/contact');

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        <a href="#main" className="skip-link">Skip to content</a>

        {/* ── Sleek top route progress indicator ── */}
        <RouteProgressBar routeKey={loc.pathname} />

        {/* ── Header ── */}
        <header className={`site-nav ${solid || open || loc.pathname !== '/' ? 'nav-solid' : ''}`}>
          <nav className="site-container nav-row" aria-label="Main navigation">
            <Link to="/" className="brand" aria-label="ECMFS Shipbuilding">
              <img src={images.logo} alt="ECMFS Shipbuilding logo" />
            </Link>
            <div className="desktop-nav">
              {navLinks.map(([label, to]) =>
                to === '/services' ? (
                  <div key={to} className="nav-dropdown-wrapper" ref={servicesRef}>
                    <button
                      className={`nav-dropdown-trigger ${loc.pathname.startsWith('/services') ? 'active' : ''}`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen(s => !s)}
                    >
                      {label} <ChevronDown className={`dropdown-chevron ${servicesOpen ? 'open' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                        >
                          {servicesList.map(s => (
                            <Link key={s.slug} to={s.slug as any} className="dropdown-item" onClick={() => setServicesOpen(false)}>
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={to} to={to} activeOptions={{ exact: to === '/' }} activeProps={{ className: 'active' }}>{label}</Link>
                )
              )}
              <Button variant="marine" asChild>
                <Link to="/contact">Get in Touch <ArrowUpRight /></Link>
              </Button>
            </div>
            <Button className="mobile-menu-button" variant="marineIcon" size="icon" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <Menu />
            </Button>
          </nav>
        </header>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menu}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              className="mobile-menu"
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.45 }}
            >
              <Button variant="marineIcon" size="icon" className="menu-close" aria-label="Close menu" onClick={() => setOpen(false)}><X /></Button>
              {topLinks.map(([label, to], i) => (
                <motion.div key={to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                  {to === '/services'
                    ? <span className="mobile-menu-label">{label}</span>
                    : <Link to={to} onClick={() => setOpen(false)}>{label}</Link>}
                  {to === '/services' && (
                    <div className="mobile-sub-links">
                      {servicesList.map(s => (
                        <Link key={s.slug} to={s.slug as any} onClick={() => setOpen(false)} className="mobile-sub-link">
                          — {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <Button variant="marine" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>Get in Touch <ArrowUpRight /></Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main content with clean, professional fade ── */}
        <AnimatePresence mode="wait">
          <motion.main
            key={loc.pathname}
            id="main"
            className={`site-main${loc.pathname === '/' ? ' site-main--home' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.26, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        {/* ── Footer ── */}
        <footer className="site-footer">
          <div className="site-container">
            <div className="footer-top">
              <Link to="/" className="brand" aria-label="ECMFS Shipbuilding">
                <img src={images.logo} alt="ECMFS Shipbuilding logo" loading="lazy" />
              </Link>
              <nav className='footer-nav-menu' aria-label="Footer navigation">
                {topLinks.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
              </nav>
            </div>
            <div className="footer-bottom">
              <p>{company} | RC No: 1879101</p>
              <p>© 2026</p>
            </div>
          </div>
        </footer>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp" className="whatsapp-float">
          <MessageCircle />
        </a>
      </div>
    </MotionConfig>
  );
}

export function NotFoundPage() {
  return (
    <section className="page-heading site-container not-found">
      <p className="eyebrow"><span className="square-motif" aria-hidden />ECMFS Shipbuilding</p>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Button variant="marine" asChild><Link to="/">Back to Home <ArrowUpRight /></Link></Button>
    </section>
  );
}
