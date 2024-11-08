import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';

export default function TeammateCard({name, job, words, links, img}) {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 
    return <div className='teammateCard'>
        <img src={img} alt={`${name}'s photo`} className='teammateImg'/>
        <div className='teammateInfo'>

            <div className='teammateName'>
                {name}
            </div>
            <div className='teammateJob'>
                {job}
            </div>
            <div className='teammateWords'>
                {words}
            </div>
        </div>
        

    </div>;
}
