import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import WTF from '@sections/WTF';
import DressCode from '@sections/DressCode';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <WTF />
    <DressCode />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
