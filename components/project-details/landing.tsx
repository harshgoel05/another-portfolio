import { Button } from '@shared-components';
import { Project } from '@utils/types';
import Tilt from 'react-tilt';

type Props = {
  project: Project;
};

export default function Landing({ project }: Props): JSX.Element {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 h-84.5vh mt-8 text-center lg:mt-0 md:text-left">
        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col justify-center items-center">
          <div className="items-center w-3/4 -mt-10 relative">
            <img
              src="/images/vectors/triangle.svg"
              alt="Triangle 3d Vector"
              className="hidden md:block absolute right-0 top-0 w-2/3 md:w-32 animate-spin"
            />
            <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-2">
              {project.name}
            </h1>
            {project.tagline && (
              <h5 className="text-7xl font-light text-violet text-justify mb-10">
                {project.tagline}
              </h5>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
              {project.url && (
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="solid"
                    text="Visit Project"
                    onClickHandler={() => window.open(project.url, '_blank')}
                  />
                </div>
              )}
              {project.github && (
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="outlined"
                    text="View on Github"
                    onClickHandler={() => window.open(project.github, '_blank')}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-12 flex md:col-span-4 lg:col-span-6 items-center justify-items-center">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div
              className="my-4 mx-8 md:m-0 lg:m-10 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
              <img src={project.img} alt={project.name} className="rounded-2xl" />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
