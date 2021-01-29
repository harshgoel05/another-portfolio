/* eslint-disable react/no-array-index-key */
import { Project, Projects } from '@constants';
import ProjectCard from './project-card';

const Landing = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28  ml-4 sm:mx-12 md:mx-16">
        <div className="grid md:grid-cols-2 gap-4 place-items-center">
          {Projects.map((project: Project) => (
            <ProjectCard {...project} key={project.slug} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
