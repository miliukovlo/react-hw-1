import React from 'react';
import './FilmCardStyle.css'

const FilmCard = ({
    title,
    genres,
    poster
}) => {
    return (
        <div className='film-card'>
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
