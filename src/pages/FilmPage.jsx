import React from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';
import './styles/FilmPageStyle.css'
import FilmPageContent from '../Components/FilmPage/FilmPageContent';
import { useFindSimilarFilms } from '../hooks/useFindSimilarFilms';
import SimilarFilmsBlock from '../Components/FilmPage/SimilarFilmsBlock';


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

    const similarFilms = useFindSimilarFilms(genres, id)


    return (
        <>
            <h2 className='film-page__title'>Страница фильма {name}</h2>
            <FilmPageContent
                        name={name} 
                        poster={poster} 
                        genres={genres}
                        description={description}
                        id={id}
                        rating={rating}
                        movieLength={movieLength}
                        year={year}
                        linkToStaff={linkToStaff}
            />
            <SimilarFilmsBlock
                similarFilms={similarFilms}
            />
        </>
    );
}

export default FilmPage;
