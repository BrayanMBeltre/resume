import { projects } from "../public/projects";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-10">
      {projects.map((project, i) => (
        <div key={i}>
          <ProjectList project={project} />
        </div>
      ))}
    </div>
  );
}
