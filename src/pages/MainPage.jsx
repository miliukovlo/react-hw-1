import React, { useState } from 'react';
import { useGetFilms } from '../hooks/useGetFilms';
import './styles/MainPageStyle.css'
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';

const MainPage = () => {
    const [limit, setLimit] = useState(10)

    const popularFilms = useGetFilms(limit)

    console.log(popularFilms)

    return (
        <>
            <h2 className='main-page__title'>Популярные фильмы</h2>
            <main className='main-page__content'>
            {popularFilms && popularFilms.slice(0, limit).map(({ id, poster, name, genres }) => (
                <FilmCard key={id} id={id} poster={poster.url} title={name} genres={genres} />
            ))}
            </main>
        </>
    );
}

export default MainPage;
