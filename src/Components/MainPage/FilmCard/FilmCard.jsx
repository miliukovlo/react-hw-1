import React from 'react';
import './FilmCardStyle.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteFilm, removeFavoriteFilm } from '../../../data/reducer/favoriteFilmsReducer';
import { addWatchLater, removeWatchLater } from '../../../data/reducer/watchLaterFilmsReducer';

const FilmCard = ({
    title,
    genres,
    poster, 
    id
}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favoriteFilms = useSelector(state => state.favorite.films)
    const isFilmFavorite = favoriteFilms.some(film => film.id === id)
    const watchLaterFilms = useSelector(state => state.later.films)
    const isWatchLaterFilm = watchLaterFilms.some(film => film.id === id)

    const handleNavigateToFilm = () => {
        navigate(`/films/${id}`)
    }

    const handleAddToFavorite = () => {
        if (!favoriteFilms.some(film => film.id === id)) {
            const newFilm = {
                title: title,
                genres: genres,
                poster: poster, 
                id: id
            }
            dispatch(addFavoriteFilm(newFilm))
        } else {
            dispatch(removeFavoriteFilm(id))
        }
    }
    const handleAddToWatchLater = () => {
        if (!watchLaterFilms.some(film => film.id === id)) {
            const newFilm = {
                title: title,
                genres: genres,
                poster: poster, 
                id: id
            }
            dispatch(addWatchLater(newFilm))
        } else {
            dispatch(removeWatchLater(id))
        }
    }
    

    return (
        <div className='film-card'>
            <img onClick={handleNavigateToFilm} className='film-card__poster' src={poster} alt="Постер к фильму" />
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
            <div className="film-card__function-block">
                <button className='function-block__button' onClick={handleAddToFavorite}>
                    <svg className={isFilmFavorite ? 'favorite-image favorite-image__true' : 'favorite-image'} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.104"/>
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="0.9359999999999999" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>
                </button>
                <button className="function-block__button" onClick={handleAddToWatchLater}>
                    <svg className={isWatchLaterFilm ? 'watch-later__image watch-later__image-true' : 'watch-later__image'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default FilmCard;
