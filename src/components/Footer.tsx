const Footer = () => {
    return (
        <footer id="contacto" className="py-24 px-8 border-t border-white/5 bg-bg-deep overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="text-left space-y-4">
                    <span className="text-3xl font-black italic tracking-tighter text-primary-blue">WR</span>
                    <p className="text-xs text-text-muted tracking-widest uppercase font-bold max-w-xs">
                        Wilhelm Reyes — Diseñando el futuro desde la ingeniería de sistemas.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-16 w-full md:w-auto">
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-primary-blue/30 pb-2">Navegación</h4>
                        <div className="flex flex-col gap-3 text-xs text-text-muted uppercase font-bold tracking-widest">
                            <a href="#proyectos" className="hover:text-primary-blue transition-colors">Proyectos</a>
                            <a href="#sobre-mi" className="hover:text-secondary-cyan transition-colors">Sobre mí</a>
                            <a href="https://drive.google.com/file/d/1PQrt8HJ1UUfKH2KGlY1ZjcHi6ru44yn9/view?usp=sharing" target="_blank" className="hover:text-primary-blue transition-colors">Descargar CV</a>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-secondary-cyan/30 pb-2">Conectemos</h4>
                        <p className="text-xs text-text-muted uppercase font-bold tracking-widest leading-loose">
                            Managua, Nicaragua<br />
                            <span className="text-white hover:text-primary-blue transition-colors cursor-pointer text-wrap break-all sm:break-normal">wilhelmreyes0303@gmail.com</span>
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://github.com/WilhelmPro007" className="text-text-muted hover:text-white transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/wilhelm-antonio-reyes-romero-b28993149/" className="text-text-muted hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
