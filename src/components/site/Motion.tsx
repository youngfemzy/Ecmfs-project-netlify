import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export function Slide({children,className='',index=0}: {children:ReactNode;className?:string;index?:number}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} initial={reduce?false:{opacity:0,x:index%2?40:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.12}} transition={{duration:.75,delay:(index%6)*.07,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
export function Squares(){return <span aria-hidden className="square-motif"/>}
export function Photo({src,alt,className=''}:{src:string;alt:string;className?:string}) {return <div className={`photo-mask ${className}`}><img src={src} alt={alt} loading="lazy" className="clean-photo"/></div>}
export function Waterline(){return <div className="waterline" aria-hidden><svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q75 10 150 30 T300 30 T450 30 T600 30 T750 30 T900 30 T1050 30 T1200 30 V60 H0Z"/></svg><svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q75 10 150 30 T300 30 T450 30 T600 30 T750 30 T900 30 T1050 30 T1200 30 V60 H0Z"/></svg></div>}
