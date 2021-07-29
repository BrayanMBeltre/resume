import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";

export default function ProjectList({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="flex cursor-pointer">
        <div>
          <h2 className="text-2xl mb-4">{project.title}</h2>
          <div className=" transition-all transform motion-safe:hover:scale-105">
            <Image
              className="rounded-md"
              src={project.thumbnail}
              alt={project.alt}
              width={394.1}
              height={247.8}
              priority={true}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProjectDetails project={project} />
      </Modal>
    </>
  );
}
