import ProjectCard from "./ProjectCard";
import PROJECTS from "@/data/projects.json";

const ProjectList = () => {
    return (
        <section id="proyectos" className="py-32 px-8 bg-bg-deep">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 text-left">
                    <div className="space-y-4">
                        <span className="text-primary-blue font-bold tracking-[0.4em] uppercase text-xs">Portafolio Seleccionado</span>
                        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
                            Solution <br /> <span className="text-primary-blue">Vault</span>
                        </h2>
                    </div>
                    <p className="text-text-muted max-w-lg text-lg leading-relaxed italic border-l-2 border-primary-blue/20 pl-6">
                        "Arquitectura robusta enfocada en resolver problemas complejos, desde la tokenización Web3 hasta la agricultura inteligente."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-text-muted uppercase tracking-[0.3em] text-sm font-bold">
                        [ Scroll para ver más fundamentos ]
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
