import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="border p-6 rounded-xl hover:shadow-lg transition hover:scale-105">
            <h2 className="text-xl font-semibold">
                {project.title}
            </h2>
            <p className="text-gray-500 mt-2">
                {project.description}
            </p>

            <p className="mt-2 text-sm text-gray-400">
                Tech: {project.tech}
            </p>

            <Link to={`/project/${project.id}`} className="text-blue-500 mt-3 inline-block">
                View Project →
            </Link>
        </div>
    );
}