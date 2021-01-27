import dynamic from 'next/dynamic';
import { Navbar } from '@shared-components';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false
});

export default function Work(): JSX.Element {
  return (
    <>
      <Navbar />
      <WorkPage />
    </>
  );
}
