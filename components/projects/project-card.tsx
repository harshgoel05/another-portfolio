import { Project } from '@constants';
import Link from 'next/link';
import Tilt from 'react-tilt';

const ProjectCard = (project: Project): JSX.Element => {
  return (
    <>
      <Tilt className="Tilt" options={{ max: 25 }}>
        <div
          className="m-10 lg:mx-16 rounded-2xl
              transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
          <Link href={`/project/${project.slug}`}>
            <img src={project.img} alt={project.name} className="rounded-2xl" />
          </Link>
        </div>
      </Tilt>
    </>
  );
};

export default ProjectCard;
