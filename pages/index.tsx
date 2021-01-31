import { Footer, Navbar, SocialBar } from '@shared-components';
import dynamic from 'next/dynamic';
import CustomCursor from 'shared/cursor';

const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false
});
const Home = (): JSX.Element => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SocialBar />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
