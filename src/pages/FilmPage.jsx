import React from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';
import './styles/FilmPageStyle.css'
import { Link } from 'react-router-dom';


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
                </div>
            </main>
        </>
    );
}

export default FilmPage;
