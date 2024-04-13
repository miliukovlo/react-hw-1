import React from 'react';
import DeleteIcon from '../../assets/delete-svgrepo-com.svg'

const Competence = ({
    nameOfCompetence,
    informationAboutCompetence,
    levelOfCompetence,
    deleteCompetence,
    idOfCompetence
}) => {
    return (
        <>
        {/* Цвет границ блока зависит от значения isICan */}
            <div className={levelOfCompetence >= 50 ? 'competence-block can' : 'competence-block cant'}>
                <div className="delete-block">
                    <button onClick={(e) => {deleteCompetence(e, idOfCompetence)}}><img src={DeleteIcon} alt="Иконка удаления" /></button>
                </div>
                <h2>{nameOfCompetence}</h2>
                <p className='competence-info'>{informationAboutCompetence}</p>
                    <p className='competence-level'>Я оцениваю свою уровень на <span>{levelOfCompetence}</span>%</p>
            </div>
        </>
    );
}

export default Competence;
