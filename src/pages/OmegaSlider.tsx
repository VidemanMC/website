import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';



export default function OmegaSlider() {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 
    return <div>

    </div>;
    
}
