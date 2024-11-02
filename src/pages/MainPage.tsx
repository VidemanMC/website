import React from 'react';
import MainPageTopComponent from '../components/MainPageTopComponent';
import MainPageSlider from '../components/MainPageSlider';
import { Provider } from 'react-redux';
import store from '../store/store';

export default function MainPage() {
  
  return <div>
    <Provider store={store}>

    <div className='topper'>
        <div className='topIcon'></div>
        <div className='topText'>Главная страница.</div>
    </div>

    <MainPageTopComponent/>
    <MainPageSlider/>

    </Provider>
    
  </div>;
}