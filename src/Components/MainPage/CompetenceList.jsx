import React from 'react';
import Competence from './Competence ';

const CompetenceList = ({competenceList}) => {
    return (
        <>
            <div className="competence-list">
                {competenceList.map(competence => {
                    return (
                        <Competence
                            key={competence.idOfCompetence}
                            nameOfCompetence={competence.nameOfCompetence}
                            informationAboutCompetence={competence.informationAboutCompetence}
                            levelOfCompetence={competence.levelOfCompetence}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default CompetenceList;
