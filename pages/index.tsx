import { HomePage } from '@components';
import React from 'react';
import { Footer, Navbar, SocialBar } from '@shared-components';

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
