import { Project } from '@utils/types';
import { technologies } from 'shared/utils/constants';

type Props = {
  project: Project;
};

export default function Details({ project }: Props): JSX.Element {
  return (
    <>
      {project.launch_video && (
        <div className="grid grid-cols-12 gap-4 h-84.5vh mt-8 text-center lg:mt-0 md:text-left mb-10">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col justify-center items-center">
            <div className="items-center w-3/4 -mt-10 relative">
              <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-2">
                Don&apos;t like to read?
              </h1>
              <h5 className="text-7xl font-light text-violet text-justify mb-10">
                Well,We got you covered. Here&apos;s an awesome video for you which walks you
                through the whole product
              </h5>
            </div>
          </div>
          <div className="col-span-12 flex md:col-span-4 lg:col-span-6 items-center justify-items-center">
            <iframe
              className="w-3/4 h-96 mx-auto text-center"
              src={project.launch_video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="kzilla"
            />
          </div>
        </div>
      )}
      {project.description && (
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-3xl text-white font-bold mb-4">
            Let&apos;s talk about the project
          </h1>
          <p className="text-violet lg:px-20 mx-auto w-2/3">{project.description}</p>
        </div>
      )}
      {project.tags && (
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-3xl text-white font-bold mb-8">
            What <span className="text-pink">Technologies</span> are used?
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center text-center">
            {project.tags.map((t): JSX.Element => {
              const tech = technologies.find((te) => te.name === t);
              return (
                tech && (
                  <div
                    className="flex flex-col justify-center items-center text-center my-4"
                    key={tech.name}>
                    <img src={tech.src} alt={tech.name} className="mb-2 h-12" />
                    <p className="text-violet lg:px-20 text-xl" key={t}>
                      {tech && tech.name}
                    </p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
