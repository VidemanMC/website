import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';

export default function SlideOption({id, name}) {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 


    function handleClick() {

        dispatch(setPickedSlideElement(id));
      }
    return <div className='slideOptionWrapper'>
        {pickedSlideElement==id ?
        <div className='slideOption clickedSlideOption' onClick={handleClick}>
        {id} - {name}
        </div>
        :
        <div className='slideOption unclickedSlideOption' onClick={handleClick}>
        {id} - {name}

        </div>
        }
        
        
        

    </div>;
}
