import dynamic from 'next/dynamic';
import { Navbar } from '../shared/components';

const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false
});

export default function Projects(): JSX.Element {
  return (
    <>
      <Navbar />
      <ProjectsPage />
    </>
  );
}
