import React from 'react';
import MainPageTopComponent from '../components/MainPageTopComponent';
import MainPageSlider from '../components/MainPageSlider';
export default function MainPage() {
  return <div>
    <div className='topper'>
        <div className='topIcon'></div>
        <div className='topText'>Главная страница.</div>
    </div>

    <MainPageTopComponent/>
    <MainPageSlider/>

    
  </div>;
}