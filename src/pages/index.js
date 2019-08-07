import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/seo';
import Services from '../components/services';
import Studio from '../components/studio';
import Portfolio from '../components/portfolio';
import Brides from '../components/brides';
import Schedule from '../components/schedule';
import ContactUs from '../components/contactus';
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Principal" />
    <Hero />
    <Services />
    <Studio />
    <Portfolio />
    <Brides />
    <Schedule />
    <ContactUs />
  </Layout>
);

export default IndexPage;
