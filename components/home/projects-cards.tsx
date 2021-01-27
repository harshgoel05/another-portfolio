import { Project, Projects } from '@constants';
import { Button } from '@shared-components';
import { useRouter } from 'next/router';

export default function ProjectsCards(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16">
        <div className="sm:flex sm:flex-wrap justify-center items-center ">
          {Projects.map(
            (project: Project) =>
              project.featured && (
                <div
                  key={project.name}
                  className="flex flex-shrink-0 m-10 sm:m-10 sm:w-1/3 my-3 md:m-10 lg:mx-14 lg:my-6 
              rounded-2xl flex-grow-0 justify-center items-center 
              transition-all duration-300 transform hover:opacity-80 hover:scale-110 hover:shadow-violet-5xl">
                  <a href={project?.url} className="flex flex-1 justify-center items-center">
                    <img src={project.img} alt={project.name} className="rounded-2xl" />
                  </a>
                </div>
              )
          )}
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
