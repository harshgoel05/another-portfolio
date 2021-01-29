import { Project, Projects } from '@constants';
import { SocialBar, ProjectCard } from '@shared-components';

const ProjectsPage = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <div className="bg-blue pt-28  ml-4 sm:mx-12 md:mx-16">
            <div className="grid md:grid-cols-2 gap-4 place-items-center">
              {Projects.map((project: Project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SocialBar />
    </>
  );
};

export default ProjectsPage;
