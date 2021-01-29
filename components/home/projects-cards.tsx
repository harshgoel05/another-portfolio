import { Project, Projects } from '@constants';
import { Button, ProjectCard } from '@shared-components';

import { useRouter } from 'next/router';

export default function ProjectsCards(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16" id="projects">
        <div className="grid md:grid-cols-2 gap-4 place-items-center">
          {Projects.map((project: Project) => (
            <ProjectCard project={project} key={project.slug} isFeatured />
          ))}
        </div>
        <div className="flex justify-center mt-10 lg:mt-4">
          <Button
            type="solid"
            text="Show me more! 🔥"
            onClickHandler={() => router.push('/projects')}
          />
        </div>
      </div>
    </>
  );
}
