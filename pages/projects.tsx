import dynamic from 'next/dynamic';
import CustomCursor from 'shared/cursor';
import { Footer, Navbar, SocialBar } from '../shared/components';

const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false
});

export default function Projects(): JSX.Element {
  return (
    <>
      <Navbar />
      <ProjectsPage />
      <SocialBar />
      <CustomCursor />
      <Footer />
    </>
  );
}
