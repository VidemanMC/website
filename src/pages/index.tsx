import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useLocation} from '@docusaurus/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import MainPageSlider from '../components/MainPageSlider';
import MainPageTopComponent from '../components/MainPageTopComponent';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  let audio = new Audio("/music/lillibulleroflute-77207.mp3")
  const [auduoIsPlayed, setAudioPlayed] = useState(false);

  const start = () => {
    if (!auduoIsPlayed){
      audio.play()
      setAudioPlayed(true)
    }
    else{
      
    }
  }
  return (
    <Provider store={store}>
      <Layout
        title={`${siteConfig.title}`}>
      <div className='allInOne'
      onMouseDown={start}

      
      >
      

      
        <MainPageTopComponent/>
        <MainPageSlider/>
      </div>

        {/* <img src="/img/joke/team.png"/> */}
      </Layout>
    </Provider>
    
    
  );
}
