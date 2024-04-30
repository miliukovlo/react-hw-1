import React, { useEffect, useRef, useState } from 'react';
import { useGetFilms } from '../hooks/useGetFilms';
import './styles/MainPageStyle.css'
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';

const MainPage = () => {
    const [limit, setLimit] = useState(10)

    const popularFilms = useGetFilms(limit)
    const observer = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLimit(prevLimit => prevLimit + 10);
                }
            });
        });

        if (contentRef.current) {
            observer.current.observe(contentRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [limit])

    return (
        <>
            <h2 className='main-page__title'>Популярные фильмы</h2>
            <main className='main-page__content'>
            {popularFilms && popularFilms.map(({ id, poster, name, genres }) => (
                <FilmCard 
                    key={id}
                    id={id}
                    poster={poster.url} 
                    title={name} 
                    genres={genres} 
                />
            ))}
            </main>
            <div ref={contentRef} className="main-page__observer"></div>
        </>
    );
}

export default MainPage;
