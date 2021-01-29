import { Project, Projects } from '@constants';
import { Loader, Navbar } from '@shared-components';
import { ProjectDetailedPage } from '@components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NotFound from '@pages/404';

const ProjectDetail = (): JSX.Element => {
  const router = useRouter();
  const [project, setProject] = useState<Project | string>('loading');
  useEffect(() => {
    const { slug } = router.query;
    const found = Projects.find((p) => p.slug === slug);
    setProject(found);
  }, [project]);
  if (project === 'loading') {
    return <Loader />;
  }
  return project ? (
    <>
      <Navbar />
      <div className="bg-blue pt-28 overflow-x-hidden">
        <ProjectDetailedPage project={project as Project} />
      </div>
    </>
  ) : (
    <div>
      <NotFound />
    </div>
  );
};

export default ProjectDetail;
