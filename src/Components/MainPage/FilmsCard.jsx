import React from 'react';
import './FilmsCardStyle.css'

const FilmsCard = ({
    title,
    genre,
    image
}) => {
    return (
        <div className='film-card'>
            <img src={image} alt="Постер фильма"  className='film-card__poster'/>
            <h3 className='film-card__title'>{title}</h3>
            <div className="film-card__genre-block">
                <p className='genre-block__text'>{genre.map(el => {
                    return (
                        el
                    )
                })}</p>
            </div>
        </div>
    );
}

export default FilmsCard;
