import React from 'react';
import Me from '../assets/Me.png'
import AboutMeBlock from './AboutMeBlock';

const Main = () => {
    const infoAboutPerson = {
            imageOfPerson: Me,
            nameOfPerson: 'Милюков Леонид Олегович'
        }
    return (
        <>
            <main>
                <AboutMeBlock
                    imageOfPerson={infoAboutPerson.imageOfPerson}
                    nameOfPerson={infoAboutPerson.nameOfPerson}
                />
            </main>
        </>
    );
}

export default Main;
