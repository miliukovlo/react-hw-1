import React, { useCallback } from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';
import './styles/FilmPageStyle.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteFilm, removeFavoriteFilm } from '../data/reducer/favoriteFilmsReducer';
import { addWatchLater, removeWatchLater } from '../data/reducer/watchLaterFilmsReducer';


const FilmPage = () => {
    const {
        name, 
        poster, 
        genres,
        description,
        id,
        rating,
        movieLength,
        year
    } = useGetCurrentFilm()

    const linkToStaff = `https://www.kinopoisk.ru/film/${id}/cast/`

    const dispatch = useDispatch()
    const favoriteFilms = useSelector(state => state.favorite.films)
    const isFilmFavorite = favoriteFilms.some(film => film.id === id)
    const watchLaterFilms = useSelector(state => state.later.films)
    const isWatchLaterFilm = watchLaterFilms.some(film => film.id === id)

    const handleAddToFavorite = useCallback(() => {
        if (!favoriteFilms.some(film => film.id === id)) {
            const newFilm = {
                title: name,
                genres: genres,
                poster: poster, 
                id: id
            }
            dispatch(addFavoriteFilm(newFilm))
        } else {
            dispatch(removeFavoriteFilm(id))
        }
    }, [dispatch, id, favoriteFilms, name, genres, poster])
    const handleAddToWatchLater = useCallback(() => {
        if (!watchLaterFilms.some(film => film.id === id)) {
            const newFilm = {
                title: name,
                genres: genres,
                poster: poster, 
                id: id
            }
            dispatch(addWatchLater(newFilm))
        } else {
            dispatch(removeWatchLater(id))
        }
    }, [watchLaterFilms, dispatch, name, genres, poster, id])

    return (
        <>
            <h2 className='film-page__title'>Страница фильма {name}</h2>
            <main className="film-page__content">
                <div className="content-poster">
                    <img className='content-poster__image' src={poster.url} alt={name} />
                </div>
                <div className="content-information">
                    <div className="content-information__block">
                        <p className='block__title'>Жанры: 
                            <ul className='genre-block__list'>
                                {genres.map(genre => {
                                    return (
                                        <li className='list-element' key={genre.name}>{genre.name}</li>
                                    )
                                })}
                            </ul>
                        </p>
                    </div>
                    <div className="content-information__block">
                        <div className="description-block">
                            <p className="block__title">Описание: {description}</p>
                        </div>
                    </div>
                    <div className="content-information__block">
                        <div className="actors-block">
                            <p className="block__title">
                                Актеры: <Link target='_blank' className='actors-link' to={linkToStaff}>Список актеров</Link>
                            </p>
                        </div>
                    </div>
                    <div className="content-information__block">
                        <div className="rating-block">
                            <p className="block__title">
                                Рейтинг на кинопоиске: {rating.kp}
                            </p>
                        </div>
                    </div>
                    <div className="content-information__block">
                        <div className="movie-length__block">
                                <p className="block__title">
                                    Продолжительность: {movieLength} минут
                                </p>
                        </div>    
                    </div>
                    <div className="content-information__block">
                        <div className="year-block">
                            <p className="block__title">
                                Фильм вышел в: {year} году
                            </p>
                        </div>
                    </div>
                    <div className="content-information__block">
                        <div className="function-block">
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
                </div>
            </main>
        </>
    );
}

export default FilmPage;
