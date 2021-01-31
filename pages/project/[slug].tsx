import { Project, projects } from '@constants';
import { Footer, Loader, Navbar, SocialBar } from '@shared-components';
import { ProjectDetailedPage } from '@components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NotFound from '@pages/404';
import CustomCursor from 'shared/cursor';

const ProjectDetail = (): JSX.Element => {
  const router = useRouter();
  const [project, setProject] = useState<Project | string>('loading');
  useEffect(() => {
    const { slug } = router.query;
    const found = projects.find((p) => p.slug === slug);
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
      <SocialBar />
      <CustomCursor />
      <Footer />
    </>
  ) : (
    <div>
      <NotFound />
      <CustomCursor />
    </div>
  );
};

export default ProjectDetail;
