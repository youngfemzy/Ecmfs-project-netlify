import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { images, company } from './content';
import { Waterline, Squares } from './Motion';

function Letters({ text, start }: { text: string; start: number }) {
    const reduce = useReducedMotion();
    return <span className="name-line" aria-label={text}>{text.split('').map((l, i) => <motion.span aria-hidden key={i} initial={reduce ? false : { y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 10, delay: start + i * .06 }}><span className="letter-wave" style={{ animationDelay: `${start + 1 + i * .08}s` }}>{l}</span></motion.span>)}</span>;
}

function Words({ text, start }: { text: string; start: number }) {
    const reduce = useReducedMotion();
    return <>{text.split(' ').map((w, i) => <motion.span className="word" key={i} initial={reduce ? false : { y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 10, delay: start + i * .06 }}>{w} </motion.span>)}</>;
}

export function HomePage() {
    const reduce = useReducedMotion();
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Play background video after a brief delay so initial load & animations are instant
        const timer = setTimeout(() => {
            setShowVideo(true);
            if (videoRef.current) {
                videoRef.current.play().catch(() => { });
            }
        }, 2400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="home-hero">
            <img
                src={images.hero}
                alt="Vessel at the ECMFS shipyard in Lagos, Nigeria"
                className={`home-background `}
                fetchPriority="high"
            />
            {/* <video
        ref={videoRef}
        src="/video/Crane_lifting_boat_at_shipyard.mp4"
        muted
        loop
        playsInline
        preload="auto"
        className={`home-background-video ${showVideo ? 'visible' : ''}`}
      /> */}
            <div className="home-overlay" />
            <div className="site-container hero-inner">
                <h1 className="company-name">
                    <Letters text="ECMFS" start={.1} />
                    <Letters text="SHIPBUILDING" start={.45} />
                </h1>
                <p className="hero-headline">
                    <Words text={`${company}.`} start={1.25} />
                </p>
                <p className="hero-registration"><Squares /> RC No: 1879101</p>
                <p className="hero-subline">
                    <Words text="ALUMINIUM & STEEL BOAT BUILDERS." start={1.65} />
                    <br />
                    <Words text="CONCRETE FLOTATION SYSTEM BUILDERS." start={1.65} />
                </p>
                <motion.div
                    className="hero-actions"
                    initial={reduce ? false : { y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10, delay: 2 }}
                >
                    <Button variant="marine" asChild>
                        <Link to="/contact">Get in Touch <ArrowUpRight /></Link>
                    </Button>
                </motion.div>
                <div className="hero-tiles">
                    {([['About Us', '/about'], ['Services', '/services'], ['Founder', '/founder'], ['Contact', '/contact']] as const).map(([label, to], i) => (
                        <motion.div
                            key={to}
                            initial={reduce ? false : { y: 45, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 2.1 + i * .1 }}
                        >
                            <Link to={to} className="hero-tile">
                                <span>{label}</span>
                                <ArrowUpRight />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Waterline />
        </section>
    );
}
