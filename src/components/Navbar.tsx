"use client";

import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Navbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
    }, { scope: navRef });

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 glass-effect border-b border-white/5 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-black italic tracking-tighter text-primary-blue">WR</span>
                    <span className="hidden sm:inline-block h-4 w-[1px] bg-white/20 mx-2"></span>
                    <span className="hidden sm:inline-block text-sm font-semibold tracking-widest uppercase">Wilhelm Reyes</span>
                </div>

                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
                    <Link href="#proyectos" className="hover:text-primary-blue transition-colors duration-300">Proyectos</Link>
                    <Link href="#sobre-mi" className="hover:text-primary-blue transition-colors duration-300">Sobre mí</Link>
                    <Link href="#contacto" className="px-4 py-2 border border-primary-blue rounded-sm hover:bg-primary-blue/10 transition-all duration-300 blue-glow">CV</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
