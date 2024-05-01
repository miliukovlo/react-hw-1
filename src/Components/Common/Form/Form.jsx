import React, { useEffect, useMemo, useState } from 'react';
import { filmsData } from './../../../data/filmsData';
import { useInput } from './../../../hooks/useInput';
import './FormStyle.css'
import { useSortFilms } from '../../../hooks/useSortFilms';

const allFilms = filmsData;

const Form = ({ setFilms, limit }) => {
    const selectValue = useInput("1")
    const sortedFilms = useSortFilms(allFilms, selectValue.value)
    const [prevLimit, setPrevLimit] = useState(limit)
    const sortFilms = useMemo(() => sortedFilms, [sortedFilms])

    useEffect(() => {
        if (selectValue.isChanged || limit > prevLimit) {
            setFilms(sortFilms.slice(0, limit))
            selectValue.setIsChanged(false)
            setPrevLimit(limit)
        }
    }, [selectValue.value, sortFilms, limit, selectValue.isChanged, setFilms])

    return (
        <form className='form'>
            <div className="rating-sort__block">
                <select value={selectValue.value} onChange={selectValue.onChange}>
                    <option value="1">По умолчанию</option>
                    <option value="2">По возрастанию</option>
                    <option value="3">По убыванию</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
