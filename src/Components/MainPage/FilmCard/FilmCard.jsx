import React from 'react';
import './FilmCardStyle.css'
import { useNavigate } from 'react-router-dom';

const FilmCard = ({
    title,
    genres,
    poster, 
    id
}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/films/${id}`)
    }

    return (
        <div className='film-card' onClick={handleClick}>
            <img className='film-card__poster' src={poster} alt="Постер к фильму" />
            <h2 className='film-card__title'>{title}</h2>
            <div className="film-card__genre-block">
                <p> жанр:
                {genres.map((genre, index) => {
                    return (
                        <span key={index} className='genre-block__text'>{genre.name}</span>
                    )
                })}
                </p>
            </div>
        </div>
    );
}

export default FilmCard;
