import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
    const { id } = useParams();// gets id value from url

    const project = projects.find(
        (p) => p.id === parseInt(id)
    );// find project with matching id

    if (!project) {
        return <h1>Project not found</h1>;// if no project found
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">
                {project.title}
            </h1>

            <p className="mt-4 text-gray-500">
                {project.description}
            </p>

            <p className="mt-2">
                Tech: {project.tech}
            </p>
        </div>
    );
}