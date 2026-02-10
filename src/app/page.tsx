import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import PROJECTS from "@/data/projects.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Sección Proyectos */}
      <section id="proyectos" className="py-24 px-8 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-left">
            <div className="space-y-2">
              <span className="text-primary-blue font-bold tracking-[0.3em] uppercase text-[10px]">Portafolio de Proyectos</span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
                Solution <span className="text-primary-blue">Vault</span>
              </h2>
            </div>
            <p className="text-text-muted max-w-md text-sm leading-relaxed">
              Una selección de soluciones técnicas que abarcan desde el sector financiero hasta la agricultura inteligente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="py-32 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-primary-blue font-bold tracking-[0.3em] uppercase text-[10px]">Mi Trayectoria</span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
                Fundamentos <br /> <span className="text-primary-blue">Sólidos</span>
              </h2>
            </div>
            <div className="space-y-6 text-text-muted leading-relaxed max-w-xl">
              <p>
                Ingeniero de Sistemas en formación con una base única: empecé mi carrera en el mundo del <span className="text-white font-bold italic">Soporte Técnico e Informática</span>. Estos 4 años me dieron una comprensión profunda del hardware y la infraestructura, algo que hoy aplico al escribir código eficiente y resiliente.
              </p>
              <p>
                He navegado por diversas industrias, desde la <span className="text-white font-bold italic">tokenización de activos Web3</span> hasta el desarrollo de soluciones <span className="text-white font-bold italic">Agrotech</span> galardonadas. Mi enfoque siempre es el mismo: entender el problema de negocio y construir la solución técnica más robusta posible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-effect p-8 border-l-4 border-primary-blue">
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">4+</h4>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Años de Soporte técnico</p>
            </div>
            <div className="glass-effect p-8 border-l-4 border-secondary-cyan">
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">5+</h4>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Tecnologías Fullstack</p>
            </div>
            <div className="glass-effect p-8 border-l-4 border-primary-blue/50">
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">2X</h4>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Finalista Hackathon</p>
            </div>
            <div className="glass-effect p-8 border-l-4 border-secondary-cyan/50">
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">100%</h4>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Enfoque a Soluciones</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="py-20 px-8 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left w-full md:w-auto">
            <span className="text-xl font-black italic text-primary-blue">WR</span>
            <p className="text-[10px] text-text-muted mt-2 tracking-widest uppercase font-bold">Wilhelm Reyes — Portfolio 2024</p>
          </div>

          <div className="flex gap-12 text-center md:text-right">
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 text-left md:text-right">Social</h4>
              <div className="flex flex-col gap-2 text-[10px] text-text-muted uppercase font-bold tracking-widest text-left md:text-right">
                <a href="https://github.com/WilhelmPro007" className="hover:text-primary-blue transition-colors">GitHub</a>
                <a href="#" className="hover:text-primary-blue transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 text-left md:text-right">Contacto</h4>
              <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest leading-loose text-left md:text-right">
                Managua, Nicaragua<br />
                wilhelmreyes0303@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-[10px] text-white/10 uppercase tracking-[0.5em]">
          Desarrollado con Código y Café
        </div>
      </footer>
    </main>
  );
}
