import React from 'react';
import AboutMeBlock from './AboutUser';
import FormCompetence from './FormCompetence';

const MainContent = () => {
    return (
        <>
            <main className='main-content'>
                <AboutMeBlock/>
                <FormCompetence/>
                
            </main>
        </>
    );
}

export default MainContent;
