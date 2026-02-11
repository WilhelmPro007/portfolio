"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: onComplete,
                });
            },
        });

        // Initial state
        gsap.set(logoRef.current, { opacity: 0, y: 20 });
        gsap.set(textRef.current, { opacity: 0 });

        // Animation sequence
        tl.to(logoRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
        })
            .to(textRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.5")
            .to([logoRef.current, textRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.8,
                delay: 1,
                ease: "expo.in",
            });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-deep"
        >
            <div className="relative flex flex-col items-center gap-8">
                {/* Animated Initials */}
                <div
                    ref={logoRef}
                    className="text-8xl sm:text-9xl font-black italic tracking-tighter text-primary-blue select-none"
                >
                    WR
                </div>

                {/* Subtle Loading Text */}
                <div
                    ref={textRef}
                    className="text-xs font-bold uppercase tracking-[1em] text-white/60 select-none ml-[1em]"
                >
                    INICIALIZANDO SISTEMAS
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-10 border border-white/15 rounded-full animate-pulse-slow"></div>
                <div className="absolute -inset-20 border border-white/15 rounded-full animate-pulse-slow delay-700"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
