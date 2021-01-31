import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Footer, Loader, Navbar, SocialBar } from '@shared-components';
import { Project } from '@utils/types';
import { ProjectDetailsContext } from '@utils/contexts';
import { ProjectDetailedPage } from '@components';
import NotFound from '@pages/404';
import CustomCursor from 'shared/cursor';

const ProjectDetail = (): JSX.Element => {
  const router = useRouter();
  const projectDetails: Project[] = useContext(ProjectDetailsContext);
  const [project, setProject] = useState<Project | string>('loading');
  useEffect(() => {
    const { slug } = router.query;
    const found = projectDetails.find((p) => p.slug === slug);
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
