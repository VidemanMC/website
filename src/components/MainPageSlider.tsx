import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SlideLine from './SlideLine';
import { RootState } from '../store/store';
import About from './About';
import OneBlock from './OneBlock';
import Mods from './Mods';
import Bosses from './Bosses';
import Team from './Team';


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import '../css/MyAwesomeSlider.css'
import { setPickedSlideElement } from '../store/slice';

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


    return <div className='mySliderWrapper'>
        <AwesomeSlider animation="cubeAnimation"
            fillParent={false}
            style={{
                // "--slider-height-percentage": "48%",
                "--slider-height-percentage": "100vh",
                // "--slider-height-percentage": "140%",
                "--organic-arrow-thickness": "7px",
                "--organic-arrow-border-radius": "0px",
                "--organic-arrow-height": "40px",
                "--organic-arrow-color": "#ffffff",
                "--control-button-width": "10%",
                // "--control-button-height": "25",
                "--control-button-background": "transparent",
                "--control-bullet-color": "#6a6a6a",
                "--control-bullet-active-color": "#6a6a6a",
                "--loader-bar-color": "#851515",
                "--loader-bar-height": "6px",
            }}
            mobileTouch={true}

            onTransitionStart={ e => { console.log(`Changing from: ${e.currentIndex}`); }}
            onTransitionEnd={ e => { 
                
                console.log(`Changed to: ${e.currentIndex}`); 
                dispatch(setPickedSlideElement(e.currentIndex));
        }}
            >
            
            <div className=''>
                <OneBlock/>
            </div>
            <div className=''>
                <Mods/>
            </div>
            <div className=''>
                <Bosses/>
            </div>
            <div className=''>
                <Team/>
            </div>
        </AwesomeSlider>

    </div>;
    // return <div className='mainPageSlider'>
    // <div className='sliderWrapper'>
    //     <div className='slideLineWrapperWrapper' onClick={scrollToElement}>
    //         <SlideLine/>

    //     </div>
    //     <div className='simpleWrapper sliderViewWrapper' ref={targetRef}>
    //     {/* {pickedSlideElement==0?
    //         <About/> : <></>
    //     } */}
    //     {pickedSlideElement==1?
    //         <OneBlock/> : <></>
    //     }
    //     {pickedSlideElement==2?
    //         <Mods/> : <></>
    //     }
    //     {pickedSlideElement==3?
    //         <Bosses/> : <></>
    //     }
    //     {pickedSlideElement==4?
    //         <Team/> : <></>
    //     }
    //     </div>
    // </div>
    // </div>;
}