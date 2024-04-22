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
                                        key={competence.id}
                                        name={competence.name}
                                        description={competence.description}
                                        level={competence.level}
                                        id={competence.id}
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
