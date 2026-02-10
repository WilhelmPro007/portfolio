"use client";

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ProjectProps {
    title: string;
    impact: string;
    situation: string;
    task: string;
    action: string;
    result: string;
    tags: string[];
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out'
            });
            gsap.to(cardRef.current, {
                borderColor: 'rgba(0, 112, 255, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                duration: 0.4
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            });
            gsap.to(cardRef.current, {
                borderColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                duration: 0.4
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={cardRef}
            onClick={() => setIsOpen(!isOpen)}
            className="group relative glass-effect border border-white/10 rounded-sm p-6 cursor-pointer overflow-hidden transition-all duration-300"
        >
            <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-primary-blue tracking-[0.2em] uppercase">Proyecto Seleccionado</span>
                <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-primary-blue animate-pulse' : 'bg-white/20'}`}></div>
            </div>

            <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary-blue transition-colors">
                {project.title}
            </h3>

            <p className="text-sm text-text-muted mb-4 line-clamp-2">
                {project.impact}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded-full tracking-wider uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            <div ref={contentRef} className="h-0 opacity-0 overflow-hidden border-t border-white/5 mt-4 pt-4">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-[10px] font-bold text-primary-blue uppercase mb-1">Situación</h4>
                        <p className="text-xs text-text-muted">{project.situation}</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold text-primary-blue uppercase mb-1">Acción (Mi Solución)</h4>
                        <p className="text-xs text-text-muted">{project.action}</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold text-primary-blue uppercase mb-1">Resultado</h4>
                        <p className="text-xs text-white font-semibold">{project.result}</p>
                    </div>
                </div>

                <button className="mt-6 w-full py-2 border border-primary-blue/30 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary-blue hover:text-white transition-all duration-300">
                    Ver Código
                </button>
            </div>

            {/* Indicador de expansión */}
            <div className="absolute bottom-2 right-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                {isOpen ? "[ Cerrar ]" : "[ Detalles + ]"}
            </div>
        </div>
    );
};

export default ProjectCard;
