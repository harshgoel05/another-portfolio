import { Project, projects } from '@constants';
import { SocialBar, ProjectCard } from '@shared-components';
import { useEffect, useState } from 'react';

const category = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'App', value: 'app' },
  { label: 'UI-UX', value: 'ui-ux' }
];
const ProjectsPage = (): JSX.Element => {
  const [active, setActive] = useState('all');
  useEffect(() => {}, [active]);
  return (
    <>
      <div className="bg-blue pt-8 lg:pt-28">
        <div className="overflow-x-hidden">
          <div className="bg-blue pt-28 ml-4 sm:mx-12 md:mx-16">
            <div className="mb-10">
              <h1 className="text-center text-3xl sm:text-2xl xl:text-3xl font-extrabold text-white leading-none mb-6">
                Something that he has build
              </h1>
              <p className="text-center text-sm sm:text-7xl font-light text-white leading-none mb-6">
                with love, expertise and pinch of magical ingredients
              </p>
            </div>
            <div>
              <div className="mx-auto text-center">
                {category.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setActive(c.value)}
                    className={`${
                      active === c.value
                        ? 'text-blue bg-pink border-transparent'
                        : 'text-white border-pink'
                    } border-2 py-2 px-6 rounded-xl mx-4 outline-none focus:outline-none transition-all hover:shadow-light-3xl
                    `}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 place-items-center">
              {projects.map((project: Project) => (
                <ProjectCard
                  project={project}
                  key={project.slug}
                  filter={{ key: 'category', value: active }}
                />
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
