import React, { useState } from 'react';
import AboutMeBlock from './AboutUser';
import FormCompetence from './FormCompetence';
import CompetenceList from './CompetenceList';

const MainContent = () => {
    const [competences, setCompetences] = useState([
        {    
            levelOfCompetence: 79,
            nameOfCompetence: 'HTML/CSS',
            informationAboutCompetence: 'Умение верстать макеты, делать их адаптивными',
            idOfCompetence: 1
        },
        {    
            levelOfCompetence: 49,
            nameOfCompetence: 'JS',
            informationAboutCompetence: 'Умение верстать макеты, делать их адаптивными',
            idOfCompetence: 2
        },
    ])
    return (
        <>
            <main className='main-content'>
                <AboutMeBlock/>
                <FormCompetence/>
                <CompetenceList
                    competenceList={competences}
                />
            </main>
        </>
    );
}

export default MainContent;
