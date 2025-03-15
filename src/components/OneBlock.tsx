import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';

export default function OneBlock() {
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

    const [visible, setVisible] = useState(false);
    const showNotification = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('play.videmanmc.ru');
        showNotification();
    };

    return (
        <LazyLoadComponent>
            <div
                className={`animatedBackground slideView oneBlock ${bgLoaded ? 'loaded' : ''}`}
                style={{
                    '--x': position.x,
                    '--y': position.y,
                } as React.CSSProperties}
                onMouseMove={handleMouseMove}
            >
                <img
                    src="/img/pages/mainpage/oneblock.png"
                    alt="Background"
                    style={{ display: 'none' }}
                    onLoad={() => setBgLoaded(true)}
                />

                <div className='slideViewTitle animatedDiv'>
                    Oneblock
                </div>
                <div className='slideViewInstructions'>
                    <div className='slideViewInstructionsTitle'>Инструкции:</div>
                    <div className='slideViewInstructionsItemWrapper'>
                        <a href='/docs/oneblock/intro'>
                            <div className='slideViewInstructionsItem'>Как играть</div>
                        </a>
                        <div className='slideViewInstructionsItem' onClick={handleCopy}>Адрес сервера</div>
                        <div className='slideViewInstructionsItem' onClick={handleCopy}>
                            play.videmanmc.ru
                        </div>
                        {visible && (
                            <div className="notification">
                                Текст успешно скопирован в буфер обмена!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LazyLoadComponent>
    );
}
