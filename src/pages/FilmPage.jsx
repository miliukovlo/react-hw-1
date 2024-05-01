import React, { useState } from 'react';
import { useGetCurrentFilm } from '../hooks/useGetCurrentFilm';
import './styles/FilmPageStyle.css'
import FilmPageContent from '../Components/FilmPage/FilmPageContent';
import { useFindSimilarFilms } from '../hooks/useFindSimilarFilms';
import SimilarFilmsBlock from '../Components/FilmPage/SimilarFilmsBlock';
import { useInput } from './../hooks/useInput';
import { useDispatch } from 'react-redux';
import { addComment } from '../data/reducer/commentReducer';
import { useGetComments } from '../hooks/useGetComments';


const FilmPage = () => {
    const currentFilm = useGetCurrentFilm()

    const dispatch = useDispatch()

    const commentsCurrentFilm = useGetComments(currentFilm.id)

    const linkToStaff = `https://www.kinopoisk.ru/film/${currentFilm.id}/cast/`

    const similarFilms = useFindSimilarFilms(currentFilm.genres, currentFilm.id)

    const comment = useInput('')

    const handleAddComment = () => {
        dispatch(addComment({
            filmId: currentFilm.id,
            user: 'Анонимный пользователь',
            text: comment.value
        }))
        comment.setValue('')
    }

    return (
        <>
            <h2 className='film-page__title'>Страница фильма {currentFilm.name}</h2>
            <FilmPageContent
                name={currentFilm.name} 
                poster={currentFilm.poster} 
                genres={currentFilm.genres}
                description={currentFilm.description}
                id={currentFilm.id}
                rating={currentFilm.rating}
                movieLength={currentFilm.movieLength}
                year={currentFilm.year}
                linkToStaff={linkToStaff}
            />
            <SimilarFilmsBlock
                similarFilms={similarFilms}
            />
            <div className="film-page__comment-block">
                <h2 className='film-page__title'>Комментарии</h2>
                <textarea name="" id="" cols="70" rows="10" value={comment.value} onChange={comment.onChange}>{comment.value}</textarea>
                <button onClick={handleAddComment} className='comment-block__button'>Добавить комментарий</button>
                {commentsCurrentFilm.length === 0 ?
                    <div className="comment-block__no-comments">
                        <h4>Комментариев нет!</h4>
                    </div>
                    :
                    commentsCurrentFilm.map(comment => {
                        return (
                            <div className="comment-block__element">
                                <h4 className="element-title">{comment.user}</h4>
                                <p className="element-text">{comment.text}</p>
                            </div>
                        )
                    })
            }
            </div>
        </>
    );
}

export default FilmPage;
