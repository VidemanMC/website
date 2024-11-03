import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SlideLine from './SlideLine';
import { RootState } from '../store/store';
import About from './About';
import OneBlock from './OneBlock';
import Mods from './Mods';
import Bosses from './Bosses';
import Team from './Team';

export default function MainPageSlider() {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 
    const targetRef = useRef(null);
    const scrollToElement = () => {
      targetRef.current?.scrollIntoView({
        behavior: 'smooth', // для плавной прокрутки
        block: 'start', // стартовая позиция: начало элемента
      });
    };

    return <div className='mainPageSlider'>
    <div className='sliderWrapper'>
        <div className='slideLineWrapperWrapper' onClick={scrollToElement}>
            <SlideLine/>

        </div>
        <div className='simpleWrapper sliderViewWrapper' ref={targetRef}>
        {/* {pickedSlideElement==0?
            <About/> : <></>
        } */}
        {pickedSlideElement==1?
            <OneBlock/> : <></>
        }
        {pickedSlideElement==2?
            <Mods/> : <></>
        }
        {pickedSlideElement==3?
            <Bosses/> : <></>
        }
        {pickedSlideElement==4?
            <Team/> : <></>
        }
        </div>
    </div>
    </div>;
}