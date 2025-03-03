import React, { useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function MainPageTopComponent() {
    const [bgLoaded, setBgLoaded] = useState(false);

    return (
        <LazyLoadComponent>
            <div className={`mainPageTopComponent ${bgLoaded ? 'loaded' : ''}`}>
                {/* Фон загружается скрыто, потом меняем state */}
                <img
                    src="/img/pages/mainpage/gif-background1-slow.gif"
                    alt="Background"
                    style={{ display: 'none' }}
                    onLoad={() => setBgLoaded(true)}
                />

                <div className='simpleWrapper'>
                    <div className='mainPageTransparentOverlay'>
                        <div className='mainPageTopServerTitle'>VidemanMC.ru</div>
                        <div className='mainPageTopSlogan'>отдыхай, играя!</div>
                        <div className='mainPageTopDescription'>
                            Сервер с уникальным игровым опытом, домашним уютом и дружеской атмосферой.
                        </div>
                    </div>
                </div>
            </div>
        </LazyLoadComponent>
    );
}
