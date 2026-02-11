"use client";

import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const Navbar = () => {
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });
    }, { scope: navRef });

    useGSAP(() => {
        if (isMenuOpen) {
            gsap.to(menuRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power3.out',
                display: 'flex'
            });
        } else {
            gsap.to(menuRef.current, {
                opacity: 0,
                x: 50,
                duration: 0.4,
                ease: 'power3.in',
                onComplete: () => {
                    if (menuRef.current) (menuRef.current as HTMLElement).style.display = 'none';
                }
            });
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav ref={navRef} className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-bg-deep' : 'glass-effect border-b border-white/5 bg-black/20 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className={`flex items-center gap-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="text-xl font-black italic tracking-tighter text-primary-blue">WR</span>
                    <span className="hidden sm:inline-block h-4 w-[1px] bg-white/20 mx-2"></span>
                    <span className="hidden sm:inline-block text-sm font-semibold tracking-widest uppercase">Wilhelm Reyes</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
                    <Link href="#proyectos" className="py-2 hover:text-primary-blue transition-colors duration-300">Proyectos</Link>
                    <Link href="#sobre-mi" className="py-2 hover:text-primary-blue transition-colors duration-300">Sobre mí</Link>
                    <Link href="https://drive.google.com/file/d/15t9Vng4omZDkB_U4NtagJGXo5vEkAs85/view?usp=sharing" target="_blank" className="py-2 px-4 border border-primary-blue rounded-sm hover:bg-primary-blue/10 transition-all duration-300 blue-glow">CV</Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                onClick={toggleMenu}
                className="fixed top-0 left-0 w-screen h-screen bg-bg-deep/98 backdrop-blur-2xl hidden flex-col items-center justify-center space-y-10 z-40"
            >
                <div className="flex flex-col items-center space-y-8 text-lg font-black uppercase tracking-[0.2em]">
                    <Link href="#proyectos" className="hover:text-primary-blue transition-colors">Proyectos</Link>
                    <Link href="#sobre-mi" className="hover:text-primary-blue transition-colors">Sobre mí</Link>
                    <Link href="#contacto" className="hover:text-primary-blue transition-colors">Contacto</Link>
                    <Link href="https://drive.google.com/file/d/15t9Vng4omZDkB_U4NtagJGXo5vEkAs85/view?usp=sharing" target="_blank" className="px-8 py-4 border border-primary-blue rounded-sm text-primary-blue blue-glow">Descargar CV</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
