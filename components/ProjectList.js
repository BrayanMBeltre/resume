import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import ProjectDetails from './ProjectDetails';

export default function ProjectList({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer mb-16 md:mb-8"
      >
        <div>
          <h2 className="text-2xl mb-4 dark:text-gray-50">{project.title}</h2>
          <div className="w-80 h-52 relative transition-all transform motion-safe:hover:scale-105">
            <Image
              className="rounded-md"
              src={project.thumbnail}
              alt={project.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProjectDetails modalIsOpen={setIsOpen} project={project} />
      </Modal>
    </>
  );
}
