"use client";

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

interface ProjectProps {
    title: string;
    impact: string;
    description: string;
    tags: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        if (isOpen) {
            // Content animation
            gsap.to(contentRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
            // Active state highlight (mirrors hover)
            gsap.to(cardRef.current, {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderColor: 'rgba(0, 112, 255, 0.8)',
                scale: 1.02,
                duration: 0.3
            });
            // Image focus
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    opacity: 1,
                    scale: 1.05,
                    duration: 0.3
                });
            }
        } else {
            // Revert content
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in'
            });
            // Revert card state
            gsap.to(cardRef.current, {
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                scale: 1,
                duration: 0.3
            });
            // Revert image
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    opacity: 0.7,
                    scale: 1,
                    duration: 0.3
                });
            }
        }
    }, [isOpen]);

    return (
        <div
            ref={cardRef}
            className={`group relative glass-effect rounded-lg overflow-hidden transition-all duration-500 flex flex-col ${isOpen ? 'active-card z-10' : ''}`}
        >
            {/* Project Thumbnail */}
            <div
                className="relative h-64 sm:h-80 w-full overflow-hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    ref={imageRef}
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isOpen ? 'opacity-100' : 'opacity-70 group-hover:opacity-100 group-hover:scale-110'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-80"></div>
            </div>

            <div className="p-8 sm:p-12 lg:p-16 space-y-8 text-left flex-grow">
                <div className="flex flex-wrap justify-between items-start gap-6">
                    <h3 className={`text-3xl font-black uppercase tracking-tight transition-colors leading-tight flex-1 min-w-[200px] ${isOpen ? 'text-primary-blue' : 'group-hover:text-primary-blue'}`}>
                        {project.title}
                    </h3>
                    <div className="flex gap-4 shrink-0">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" className="text-text-muted hover:text-white transition-colors p-2" aria-label="GitHub">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="text-text-muted hover:text-secondary-cyan transition-colors p-2" aria-label="Demo">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-xl sm:text-xl text-text-muted leading-relaxed ">
                    {project.impact}
                </p>

                <div className="flex flex-wrap gap-4 sm:gap-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs sm:text-sm font-bold px-5 py-2 bg-white/5 border border-white/10 rounded-full tracking-widest uppercase text-primary-blue/80">
                            {tag}
                        </span>
                    ))}
                </div>

                <div ref={contentRef} className="h-0 opacity-0 overflow-hidden pt-12 border-t border-white/5">
                    <div className="bg-primary-blue/5 p-8 sm:p-12 rounded-sm border border-primary-blue/10">
                        <h4 className="text-xs sm:text-sm font-bold text-primary-blue uppercase tracking-[0.3em] mb-6">Solución & Impacto</h4>
                        <p className="text-lg sm:text-2xl text-white leading-relaxed font-light">
                            {project.description}
                        </p>
                    </div>
                </div>

                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-full pt-4 text-xs sm:text-sm font-bold uppercase tracking-[0.5em] text-white/60 hover:text-primary-blue transition-all duration-300"
                    >
                        Explorar Proyecto [ + ]
                    </button>
                )}
            </div>

            {/* Decorative Game-style corner */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className={`absolute top-[-35px] right-[-35px] w-[70px] h-[70px] bg-primary-blue rotate-45 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-20 group-hover:opacity-100'}`}></div>
            </div>
        </div>
    );
};

export default ProjectCard;
