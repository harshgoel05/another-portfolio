import { Project, Projects } from '@constants';
import { Button } from '@shared-components';

export default function ProjectsCards(): JSX.Element {
  return (
    <>
      <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16">
        <div className="sm:flex sm:flex-wrap justify-center items-center ">
          {Projects.map((project: Project) => (
            <div
              key={project.alt}
              className="flex flex-shrink-0 flex-grow-0 justify-center items-center sm:w-2/5 md:w-1/2 lg:w-2/5 transition-all duration-300 transform hover:opacity-80 hover:scale-110">
              <a href={project.url} className="flex flex-1 justify-center items-center">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="rounded-2xl p-6 py-3 md:p-10 lg:p-14"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button type="solid" text="Show me more! 🔥" />
        </div>
      </div>
    </>
  );
}
