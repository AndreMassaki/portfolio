import React from 'react';
import Banner from '../src/components/commons/Banner';
import Header from '../src/components/commons/Header';
import MyProjects from '../src/components/commons/MyProjects';
import Footer from '../src/components/commons/Footer';
import Contact from '../src/components/commons/Contact';

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
}
