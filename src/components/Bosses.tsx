import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';

export default function Bosses() {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 
    return <div className='slideView bosses'>
        <div className='slideViewTitle animatedDiv'>
            Боссы
        </div>
        <div className='slideViewInstructions'>
            <div className='slideViewInstructionsTitle'>Инструкции:</div>
            <div className='slideViewInstructionsItemWrapper'>
                <div className='slideViewInstructionsItem'>Как играть</div>
                <div className='slideViewInstructionsItem'>Список команд</div>
                <div className='slideViewInstructionsItem'>Адрес сервера</div>
            </div>
        </div>
    </div>;
    
}
