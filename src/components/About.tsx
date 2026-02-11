const About = () => {
    return (
        <section id="sobre-mi" className="py-40 px-8 bg-bg-darker relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-blue/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="space-y-10 text-left">
                    <div className="space-y-3">
                        <span className="text-secondary-cyan font-bold tracking-[0.4em] uppercase text-xs">La Base Técnica</span>
                        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
                            Core <br /> <span className="text-secondary-cyan border-text">Foundation</span>
                        </h2>
                    </div>
                    <div className="space-y-8 text-text-muted text-lg leading-relaxed max-w-xl">
                        <p>
                            Mi viaje comenzó en la intersección del <span className="text-white font-bold">Hardware y la Infraestructura</span>. Con 4 años de experiencia en soporte técnico y 2 años de desarrollo, entiendo los sistemas desde su núcleo físico. Esta perspectiva me permite escribir código que no solo funciona, sino que respeta el entorno donde se ejecuta.
                        </p>
                        <p>
                            Como Desarrollador , he trabajado en la implementación de plataformas <span className="text-white font-bold">Fintech de alta seguridad</span> y herramientas <span className="text-white font-bold">Agrotech</span> que optimizan el rendimiento real. Mi enfoque es pragmático: <span className="italic text-secondary-cyan">Primero el problema, luego la arquitectura, siempre el resultado.</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="glass-effect p-10 border-l-4 border-primary-blue hover:bg-white/10 transition-colors duration-300">
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white italic">2+ Años</h4>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Experiencia</p>
                    </div>
                    <div className="glass-effect p-10 border-l-4 border-secondary-cyan hover:bg-white/10 transition-colors duration-300">
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white italic">FULLSTACK</h4>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Web & Mobile Expert</p>
                    </div>
                    <div className="glass-effect p-10 border-l-4 border-primary-blue/40 hover:bg-white/10 transition-colors duration-300">
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white italic">HACKATHON</h4>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">2x National Finalist</p>
                    </div>
                    <div className="glass-effect p-10 border-l-4 border-secondary-cyan/40 hover:bg-white/10 transition-colors duration-300">
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white italic">SOLUTIONS</h4>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">100% Focused Architecture</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
