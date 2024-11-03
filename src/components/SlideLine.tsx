import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';
import SlideOption from './SlideOption';

export default function SlideLine() {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 
    const things = ["Ванблок", "Моды", "Боссы", "Команда"]

    return <div className='slideLineWrapper'>
        {
            things.map((thing, index) =>(
                <div><SlideOption id={index+1} name={thing} /></div>
            ))
        }
    </div>;
}