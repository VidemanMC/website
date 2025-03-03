import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPickedSlideElement } from '../store/slice';
import { RootState } from '../store/store';
import TeammateCard from './TeammateCard';

export default function Team() {
    const dispatch = useDispatch();
    const pickedSlideElement = useSelector((state: RootState) => state.pickedSlideElement.pickedSlideElement);

    const team = [
        {
            name: 'WhiteLight',
            job: 'администратор',
            words: 'Я ваш любимый администратор.',
            links: [],
            img: '/img/pages/team/WhiteLight.png',
        },
        {
            name: 'Wwelol08',
            job: 'главный модпакер',
            words: 'Я один из разработчиков модового сервера, и если вы найдёте баг, ни в коем случае не пишите о нём.',
            links: [],
            img: '/img/pages/team/Wwelol08.png',
        },
        {
            name: 'Protosso',
            job: 'графический дизайнер',
            words: 'К облагорожению сайта готов!',
            links: [],
            img: '/img/pages/team/videman-green.jpg',
        },
        {
            name: 'TallFly',
            job: 'переводчик',
            words: 'Отвечаю за перевод модов и плагинов. Если перевода не существует - делаю его самостоятельно (づ ◕‿◕ )づ',
            links: [],
            img: '/img/pages/team/TallFly.png',
        },
        {
            name: 'daradanci',
            job: 'аналитик',
            words: 'Лягушка.',
            links: [],
            img: '/img/pages/team/daradanci.png',
        },
    ];

    return (
        <div className="slideView team">
            <div className="slideViewTitle animatedDiv">Команда</div>
            <div className="teammatesContainer">
                <div className="teammates">
                    {team.map((teammate, index) => (
                        <TeammateCard key={index} {...teammate} />
                    ))}
                </div>
            </div>
        </div>
    );
}
