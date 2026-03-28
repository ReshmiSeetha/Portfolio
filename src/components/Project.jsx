import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Project() {
    return (
        <section className="px-8 py-16">
            <h1 className="text-3xl font-bold mb-8">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (<ProjectCard key={project.id} project={project} />))}
            </div>
        </section>
    );
}