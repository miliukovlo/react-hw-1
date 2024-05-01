import React, { useEffect, useState } from 'react';
import './styles/FindPageStyle.css'
import Input from './../Components/UI/Input';
import { useInput } from '../hooks/useInput';
import { useFindFilms } from '../hooks/useFindFilms';
import FilmCard from '../Components/MainPage/FilmCard/FilmCard';
import Form from '../Components/Common/Form/Form';
import { filmsData } from '../data/filmsData';

const allFilms = filmsData

const FindPage = () => {
    const findValue = useInput('')
    const [filteredFilms, setFilteredFilms] = useState(allFilms)
    const foundFilms = useFindFilms(findValue.value, filteredFilms)


    return (
        <>
            <h2 className='find-page__title'>Страница поиска</h2>
            <div className="find-page__input-block">
                <Form
                    setFilms={setFilteredFilms}
                />
                    <Input
                        value={findValue.value}
                        onChange={findValue.onChange}
                        placeholder={'Введите название фильма'}
                        sizes={'M'}
                    />
                </div>
            <main className={foundFilms.length === 0 ? 'find-page__content-not-find' : 'find-page__content-find'}>
                {foundFilms.length === 0 ? 
                    <h1 className='find-page__content-text'>Фильм не найден!</h1>
                :
                    foundFilms.map(({ id, poster, name, genres, rating }) => {
                        return (
                            <FilmCard
                                key={id}
                                id={id} 
                                poster={poster.url} 
                                title={name}
                                rating={rating} 
                                genres={genres} 
                        />
                        )
                    })}
            </main>
        </>
    );
}

export default FindPage;
