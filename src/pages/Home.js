import React from 'react';
import Header from '../components/header/Header';
import Portrait from '../components/portrait_section/Portrait';
import Architekture from '../components/architekture_section/Architekture';
import StreetPhotography from '../components/street_photography_section/StreetPhotography';

const Home = () => {
  return (
    <>
      <Header />
      <Portrait />
      <Architekture />
      <StreetPhotography />
    </>
  );
};

export default Home;
