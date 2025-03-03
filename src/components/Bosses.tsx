import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';

export default function Bosses() {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement); 
    const [position, setPosition] = useState({ x: '0%', y: '0%' });
    const [bgLoaded, setBgLoaded] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 4; 
        const y = ((e.clientY - top) / height - 0.5) * 4;
        setPosition({ x: `${x}%`, y: `${y}%` });
    };

    return (
        <LazyLoadComponent>
            <div
                className={`animatedBackground slideView bosses ${bgLoaded ? 'loaded' : ''}`}
                style={{
                    '--x': position.x,
                    '--y': position.y,
                } as React.CSSProperties}
                onMouseMove={handleMouseMove}
            >
                {/* Фон загружается скрыто, потом меняем state */}
                <img
                    src="/img/pages/mainpage/bosses.png"
                    alt="Background"
                    style={{ display: 'none' }}
                    onLoad={() => setBgLoaded(true)}
                />

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
            </div>
        </LazyLoadComponent>
    );
}
