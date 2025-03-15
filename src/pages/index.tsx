import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Provider } from 'react-redux';
import store from '../store/store';
import MainPageSlider from '../components/MainPageSlider';
import MainPageTopComponent from '../components/MainPageTopComponent';
import PreloadImages from '../components/PreloadImages';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Provider store={store}>
      <Layout title={`${siteConfig.title}`}>
        <div className="allInOne">
          <PreloadImages/>
          <MainPageTopComponent />
          <MainPageSlider />
        </div>
      </Layout>
    </Provider>
  );
}
