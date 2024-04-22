import React from 'react';
import DeleteIcon from '../../assets/delete-svgrepo-com.svg'

const Competence = ({
    name,
    description,
    level,
    deleteCompetence,
    id
}) => {
    return (
        <>
        {/* Цвет границ блока зависит от значения isICan */}
            <div className={level >= 50 ? 'competence-block can' : 'competence-block cant'}>
                <div className="delete-block">
                    <button className='delete-block__button' onClick={(e) => {deleteCompetence(e, id)}}><img className='delete-block__image' src={DeleteIcon} alt="Иконка удаления" /></button>
                </div>
                <h2 className='competence-name'>{name}</h2>
                <p className='competence-info'>{description}</p>
                    <p className='competence-level'>Я оцениваю свою уровень на <span className='competence-level__number'>{level}</span>%</p>
            </div>
        </>
    );
}

export default Competence;
