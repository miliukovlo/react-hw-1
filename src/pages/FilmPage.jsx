import React from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';

const FilmPage = () => {
    const currentFilm = useGetCurrentFilm()

    const {
        name, 
        poster, 
        id, 
        genres, 
        actors,
        rating,
        movieLength,
        year
    } = currentFilm

    console.log(currentFilm)
    return (
        <>
            <h2 className='film-page__title'>Страница фильма {name}</h2>
            <main className="film-page__content">
                <img src={''} alt={name} />
            </main>
        </>
    );
}

export default FilmPage;
