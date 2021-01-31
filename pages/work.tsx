import dynamic from 'next/dynamic';
import { Footer, Navbar } from '@shared-components';
import CustomCursor from 'shared/cursor';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false
});

const Work = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <WorkPage />
      <CustomCursor />
      <Footer />
    </>
  );
};

export default Work;
