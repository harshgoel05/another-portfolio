import { Project, technologies } from '@constants';

type Props = {
  project: Project;
};

export default function Details({ project }: Props): JSX.Element {
  return (
    <>
      {project.description && (
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-3xl text-white font-bold mb-4">
            Let&apos;s talk about the project
          </h1>
          <p className="text-white lg:px-20">{project.description}</p>
        </div>
      )}
      {project.tags && (
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-3xl text-white font-bold mb-8">
            What <span className="text-pink">Technologies</span> he used?
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center text-center">
            {project.tags.map(
              (t): JSX.Element => {
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
              }
            )}
          </div>
        </div>
      )}
    </>
  );
}
