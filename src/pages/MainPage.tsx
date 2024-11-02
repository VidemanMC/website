import React from 'react';
import MainPageTopComponent from '../components/MainPageTopComponent';
export default function MainPage() {
  return <div>
    <div className='topper'>
        <div className='topIcon'></div>
        <div className='topText'>Главная страница.</div>
    </div>

    <MainPageTopComponent/>

  </div>;
}