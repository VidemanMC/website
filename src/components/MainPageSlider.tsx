import React from 'react';
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

    return <div className='mainPageSlider'>
    <div className='sliderWrapper'>
        <div className='slideLineWrapperWrapper'>
            <SlideLine/>

        </div>
        <div className='simpleWrapper sliderViewWrapper'>
        {pickedSlideElement==0?
            <About/> : <></>
        }
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