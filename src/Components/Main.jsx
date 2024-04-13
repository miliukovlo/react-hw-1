import React, { useState } from 'react';
import Me from '../assets/Me.png'
import AboutMeBlock from './AboutMeBlock';
import Competence from './Competence ';

const Main = () => {
    const [infoAboutPerson, setInfoAboutPerson] = useState({
            imageOfPerson: Me,
            nameOfPerson: 'Милюков Леонид Олегович'
        })
    const [myCompetence, setMyCompetence] = useState([
        {
            id: 1,
            isICan: true,
            nameOfCompetence: 'React',
            informationAboutCompetence: 'Я могу на React создавать приложения, могу использовать React-router, использую Context, могу получать данные с сервера и отображать их. На React сделал игру "Сапер". В ходе курса хочу улучшить свою разработку на React, чтобы она стала значительно лучше.',
            levelOfCompetence: 3
        },
        {
            id: 2,
            isICan: true,
            nameOfCompetence: 'NodeJS/Express',
            informationAboutCompetence: 'На NodeJS я могу создавать простой веб-сервер с подключением к базе данных. Изучал как NodeJS работает с Express, .env, PostgreSQL. В ходе курса хочу научиться качественно использовать NodeJS в разработке.',
            levelOfCompetence: 2.5
        },
        {
            id: 3,
            isICan: true,
            nameOfCompetence: 'HTML/CSS/SASS/SCSS',
            informationAboutCompetence: 'Умею верстать и использую препроцессоры CSS в верстке. Умею выполнять адаптивную верстку.',
            levelOfCompetence: 4
        },
        {
            id: 4,
            isICan: true,
            nameOfCompetence: 'VueJS',
            informationAboutCompetence: 'Умею работать с VueJS. На VueJS делал приложение "Список задач" и интернет-магазин. Умею пользоваться Vue, Vue-router, VueX. Стараюсь продолжать самостоятельно изучать данный фреймворк чтобы я умел работать на разных фреймворках.',
            levelOfCompetence: 3.5
        },
        {
            id: 5,
            isICan: true,
            nameOfCompetence: 'PostgreSQL',
            informationAboutCompetence: 'Умею пользоваться PostgreSQL. Могу создавать и выполнять операции над базой данных, также умею подключать её к веб-серверу и получать/отправлять/изменять в ней данные при помощи NodeJS.',
            levelOfCompetence: 3
        },
        {
            id: 6,
            isICan: false,
            nameOfCompetence: 'TypeScript',
            informationAboutCompetence: 'У меня базовое понимание TypeScript. Я знаю, что в нем можно и даже нужно указывать тип переменных, можно создавать типы и интерфейсы для объектов, что помогает в командной работе. Стараюсь практиковаться в его использовании. В ходе курса хочу научиться полноценно использовать TypeScript в разработке.',
        },
        {
            id: 7,
            isICan: false,
            nameOfCompetence: 'Redux',
            informationAboutCompetence: 'Я знаю, что Redux этот стейт-менеджер для хранения данных, но я его не изучал и не использовал на практике.'
        },
        {
            id: 8,
            isICan: false,
            nameOfCompetence: 'Командная работа',
            informationAboutCompetence: 'У меня не было полноценного опыта работы в команде. Поэтому в ходе прохождения курса мне хочется получить опыт разработки в команде.'
        },
        {
            id: 9,
            isICan: false,
            nameOfCompetence: 'Хуки React',
            informationAboutCompetence: 'Хочу более подробно и качественно разобраться в том, как работают хуки React, чтобы сделать их использование качественным.'
        },
        {
            id: 10,
            isICan: false,
            nameOfCompetence: 'React',
            informationAboutCompetence: 'Хочу научиться использовать React более качественно в разработке. Хочется узнать как правильно построить архитектуру приложения на React, получать и отображать данные полученные с сервера, как использовать хуки правильно.'
        },
        {
            id: 11,
            isICan: false,
            nameOfCompetence: 'Разработка клиент-серверного приложения',
            informationAboutCompetence: 'Я могу создать простое клиент-серверное приложение, но хочу улучшить качество разработки подобных приложений. Чтобы они Backend и Frontend были качественными.'
        },
        {
            id: 12,
            isICan: false,
            nameOfCompetence: 'NodeJS/Express',
            informationAboutCompetence: 'Я изучал данные инструменты самостоятельно по документациям и видео с Youtube-канала Ulbi TV. Хочу во время прохождения курса сделать это инструментами, которыми я смогу пользоваться для создания Backend приложения.'
        },
        {
            id: 13,
            isICan: false,
            nameOfCompetence: 'PostgreSQL',
            informationAboutCompetence: 'Хочу понять, как делать более качественные запросы к базе данных и как улучшить получения/отправку данных в базу данных.'
        },
        {
            id: 14,
            isICan: false,
            nameOfCompetence: 'Чистота кода',
            informationAboutCompetence: 'Благодаря code review хочу научиться более "Чистый" код. Чтобы мой код был одновременно полезеным, рабочим и читабельным.'
        },
        {
            id: 15,
            isICan: false,
            nameOfCompetence: 'Выбор правильного стека и решений в разработке',
            informationAboutCompetence: 'Это очень важная часть в работе разработчиком, я хотел бы разобраться как правильно выбирать технологии для проекта и какие решения лучше принимать в разработке.'
        },
        {
            id: 16,
            isICan: true,
            nameOfCompetence: 'Я просто забыл открыть PR...',
            informationAboutCompetence: 'Простите пожалуйста...'
        }
    ])
    return (
        <>
            <main>
                <AboutMeBlock
                    imageOfPerson={infoAboutPerson.imageOfPerson}
                    nameOfPerson={infoAboutPerson.nameOfPerson}
                />
                <h1>Что я умею и могу использовать</h1> 
                {myCompetence.map(competence => {
                    if (competence.isICan) {
                        return (
                            <Competence
                                key={competence.id}
                                isICan={competence.isICan}
                                nameOfCompetence={competence.nameOfCompetence}
                                informationAboutCompetence={competence.informationAboutCompetence}
                                levelOfCompetence={competence.levelOfCompetence}
                            />
                        )
                    }
                    return true
                })}
                <h1>Что я не умею использовать, либо хочу улучшить навык</h1>
                {myCompetence.map(competence => {
                    if (!competence.isICan) {
                        return (
                            <Competence
                                key={competence.id}
                                isICan={competence.isICan}
                                nameOfCompetence={competence.nameOfCompetence}
                                informationAboutCompetence={competence.informationAboutCompetence}
                                levelOfCompetence={competence.levelOfCompetence}
                            />
                        )
                    }
                    return true
                })}
            </main>
        </>
    );
}

export default Main;
