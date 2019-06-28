import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Services from '../components/services';
import Studio from '../components/studio';
import Portfolio from '../components/portfolio';
import Brides from '../components/brides';
import Schedule from '../components/schedule';
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Principal" />
    <Services />
    <Studio />
    <Portfolio />
    <Brides />
    <Schedule />
  </Layout>
);

export default IndexPage;
