import React from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';

const FilmPage = () => {
    const {
        name, 
        poster,  
        genres, 
        actors,
        rating,
        movieLength,
        year
    } = useGetCurrentFilm()


    return (
        <>
            <h2 className='film-page__title'>Страница фильма {name}</h2>
            <main className="film-page__content">
                <img src={poster.url} alt={name} />
            </main>
        </>
    );
}

export default FilmPage;
