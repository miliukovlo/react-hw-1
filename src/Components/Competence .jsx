import React from 'react';

const Competence = ({
    isICan,
    nameOfCompetence,
    informationAboutCompetence,
    levelOfCompetence
}) => {
    return (
        <>
        {/* Цвет границ блока зависит от значения isICan */}
            <div className={isICan ? 'competence-block can' : 'competence-block cant'}>
                <h2>{nameOfCompetence}</h2>
                <p className='competence-info'>{informationAboutCompetence}</p>
                {isICan && (
                    <p className='competence-level'>Я оцениваю свою уровень на <span>{levelOfCompetence}</span>/5</p>
                )}
            </div>
        </>
    );
}

export default Competence;
