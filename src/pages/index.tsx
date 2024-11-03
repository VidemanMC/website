import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useLocation} from '@docusaurus/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import MainPage from './MainPage';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Provider store={store}>
      <Layout
        title={`${siteConfig.title}`}>
      <MainPage/>

        {/* <img src="/img/joke/team.png"/> */}
      </Layout>
    </Provider>
    
    
  );
}
