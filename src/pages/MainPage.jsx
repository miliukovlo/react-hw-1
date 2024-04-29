import React, { useEffect } from 'react';
import { fetchFilms } from '../data/asyncActions/fetchFilms';
import { useDispatch, useSelector } from 'react-redux';
import './styles/MainPageStyles.css'
import FilmsCard from '../Components/MainPage/FilmsCard';

const MainPage = () => {
    const dispatch = useDispatch();
    const popularFilms = useSelector(state => state.films.data);
    const loading = useSelector(state => state.films.loading);
    const error = useSelector(state => state.films.error);

    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className='main-page__content'>
            {popularFilms && popularFilms.map(film => (
                <FilmsCard
                    key={film.id}
                    image={film.poster.url}
                    title={film.poster.name}
                    genre={film.genres}
                />
            ))}
        </main>
    );
}

export default MainPage;
