import dynamic from 'next/dynamic';
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
      <Footer />
    </>
  );
}
