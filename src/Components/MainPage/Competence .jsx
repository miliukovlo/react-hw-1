import React from 'react';

const Competence = ({
    nameOfCompetence,
    informationAboutCompetence,
    levelOfCompetence
}) => {
    return (
        <>
        {/* Цвет границ блока зависит от значения isICan */}
            <div className={levelOfCompetence >= 50 ? 'competence-block can' : 'competence-block cant'}>
                <h2>{nameOfCompetence}</h2>
                <p className='competence-info'>{informationAboutCompetence}</p>
                    <p className='competence-level'>Я оцениваю свою уровень на <span>{levelOfCompetence}</span>%</p>
            </div>
        </>
    );
}

export default Competence;
