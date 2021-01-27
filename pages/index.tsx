import React from 'react';
import { Footer, Navbar, SocialBar } from '@shared-components';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false
});
const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <SocialBar />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
