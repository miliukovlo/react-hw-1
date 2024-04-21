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
                    <button className='delete-block__button' onClick={(e) => {deleteCompetence(e, idOfCompetence)}}><img className='delete-block__image' src={DeleteIcon} alt="Иконка удаления" /></button>
                </div>
                <h2 className='competence-name'>{nameOfCompetence}</h2>
                <p className='competence-info'>{informationAboutCompetence}</p>
                    <p className='competence-level'>Я оцениваю свою уровень на <span className='competence-level__number'>{levelOfCompetence}</span>%</p>
            </div>
        </>
    );
}

export default Competence;
