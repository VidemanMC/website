import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useLocation} from '@docusaurus/router';
import { Provider } from 'react-redux';
import store from '../store/store';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Provider store={store}>
      <Layout
        title={`${siteConfig.title}`}>
        <h1 style={{textAlign: 'center'}}>
          Лучший отдых - это смена деятельности. Отдыхай, играя!
        </h1>
      </Layout>
    </Provider>
    
    
  );
}
