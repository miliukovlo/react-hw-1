import React from 'react';
import './styles/FavoritePageStyle.css'
import { useSelector } from 'react-redux';
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';

const FavoritePage = () => {
    const favoriteFilms = useSelector(state => state.favorite.films)

    return (
        <>
            <h2 className='favorite-page__title'>Страница избранных фильмов</h2>
            <main className='favorite-page__content'>
                {
                    favoriteFilms.map((film) => {
                        return (
                            <FilmCard
                                key={film.id}
                                {...film}
                            />
                        )
                    })
                }
            </main>
        </>
    );
}

export default FavoritePage;
