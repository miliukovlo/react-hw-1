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
            isICan: true,
            nameOfCompetence: 'React',
            informationAboutCompetence: 'А',
            levelOfCompetence: '3.5'
        }
    ])
    return (
        <>
            <main>
                <AboutMeBlock
                    imageOfPerson={infoAboutPerson.imageOfPerson}
                    nameOfPerson={infoAboutPerson.nameOfPerson}
                />
                {myCompetence.map(competence => {
                    return (
                        <Competence
                            isICan={competence.isICan}
                            nameOfCompetence={competence.nameOfCompetence}
                            informationAboutCompetence={competence.informationAboutCompetence}
                            levelOfCompetence={competence.levelOfCompetence}
                        />
                    )
                })}
            </main>
        </>
    );
}

export default Main;
