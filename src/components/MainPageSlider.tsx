import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SlideLine from './SlideLine';
// import { increment, decrement } from './counterSlice';

export default function MainPageSlider() {
    const dispatch = useDispatch();
    // const count = useSelector((state) => state.counter.value);


    return <div className='mainPageSlider'>
    <div className='mainPageTransparentOverlay'>
        <div>слайдер</div>
        <SlideLine/>
    </div>


    </div>;
}