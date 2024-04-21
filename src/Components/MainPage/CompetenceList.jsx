import React from 'react';
import Competence from './Competence ';

const CompetenceList = ({competenceList, deleteCompetence}) => {
    return (
        <>
            {competenceList.length !== 0 && (
                            <div className="competence-list">
                            {competenceList.map(competence => {
                                return (
                                    <Competence
                                        key={competence.idOfCompetence}
                                        nameOfCompetence={competence.nameOfCompetence}
                                        informationAboutCompetence={competence.informationAboutCompetence}
                                        levelOfCompetence={competence.levelOfCompetence}
                                        idOfCompetence={competence.idOfCompetence}
                                        deleteCompetence={deleteCompetence}
                                    />
                                )
                            })}
                        </div>
            )} 
            {competenceList.length === 0 && (
                <div className="competence-list">
                    <h1>Компетенций нет!</h1>
                </div>
            )}
        </>
    );
}

export default CompetenceList;
