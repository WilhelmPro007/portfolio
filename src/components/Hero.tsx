"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            x: -50,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
        })
            .from(subtitleRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, "-=0.8");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center items-center px-8 overflow-hidden">
            {/* Fondo Decorativo Estilo Persona */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full -z-10 opacity-20 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-l from-primary-blue/30 to-transparent"></div>
                <div className="absolute top-1/4 right-10 w-40 h-40 border-2 border-primary-blue/20 rotate-45 animate-pulse"></div>
            </div>

            <div className="max-w-7xl w-full flex flex-col justify-center items-start">
                <div className="max-w-4xl space-y-4">
                    <span className="text-primary-blue font-bold tracking-[0.3em] uppercase text-sm inline-block animate-reveal">
                        Ingeniería de Sistemas + Desarrollo de Software
                    </span>

                    <h1 ref={titleRef} className="text-6xl sm:text-8xl font-black tracking-tighter leading-none uppercase">
                        Wilhelm <br />
                        <span className="text-transparent border-text stroke-white" style={{ WebkitTextStroke: '1px white' }}>Reyes</span>
                    </h1>

                    <p ref={subtitleRef} className="text-lg sm:text-2xl text-text-muted max-w-2xl leading-relaxed">
                        De la infraestructura al código: Desarrollador
                        <span className="text-white font-bold mx-2 italic">Fullstack & Mobile</span>
                        especializado en crear soluciones robustas desde la base.
                    </p>

                    <div className="pt-8 flex gap-4">
                        <button className="px-8 py-4 bg-primary-blue font-bold uppercase tracking-widest text-xs rounded-sm hover:-translate-y-1 transition-transform duration-300 blue-glow">
                            Ver Proyectos
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1PQrt8HJ1UUfKH2KGlY1ZjcHi6ru44yn9/view?usp=sharing"
                            target="_blank"
                            className="px-8 py-4 border border-white/20 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white/5 transition-all duration-300 text-center"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
