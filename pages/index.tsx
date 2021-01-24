import { HomePage } from '@components';
import React from 'react';
import { Navbar, SocialBar } from '../shared/components';

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <SocialBar />
      <HomePage />
    </>
  );
};

export default Home;
