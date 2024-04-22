import React, { useState } from 'react';
import Input from '../UI/Input'
import Button from '../UI/Button';

const FormCompetence = ({addNewCompetence}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [level, setLevel] = useState(0)
    const [error, setError] = useState(false)

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeDescription = (e) => {
        setDescription(e.target.value)
    }
    const changeLevel = (e) => {
        setLevel(e.target.value)
    }
    const addCompetence = (e) => {
        if (title !== '' && description !== '') {
            addNewCompetence(e,{
                level: level > 100 ? 100 : level,
                name: title,
                description: description,
                id: Math.floor(Math.random() * 1000000)
            })
            setTitle('')
            setLevel(0)
            setDescription(0)
            setError(false)
        } else {
            e.preventDefault();
            setError(true)
        }
}

    return (
        <>
            <form className='main-form'>
                <p className={error ? 'error-text' : 'error-text__no'}>Вы не ввели назваие или описание конпетенции!</p>
                <div className="main-form__inputs-block">
                    <Input
                        InputType={'text'}
                        InputValue={title}
                        InputPlaceholder={'Введите название компетенции'}
                        InputClass={'form-block__input'}
                        onChangeFunc={changeTitle}
                    />
                    <Input
                        InputType={'text'}
                        InputValue={description}
                        InputPlaceholder={'Введите описание компетенции'}
                        InputClass={'form-block__input'}
                        onChangeFunc={changeDescription}
                    />
                    <div className="main-form__range-block">
                        <Input
                            InputType={'number'}
                            InputValue={level}
                            InputPlaceholder={'Укажите ваш уровень'}
                            InputClass={'range-block__input'}
                            onChangeFunc={changeLevel}
                            InputMax='100'
                            InputMin='0'
                        />
                        <Input
                            InputType={'range'}
                            InputValue={level}
                            InputPlaceholder={'Укажите ваш уровень'}
                            InputClass={'range-block__input-range'}
                            onChangeFunc={changeLevel}
                            InputMax='100'
                            InputMin='0'
                        />
                    </div>
                </div>
                <Button
                    buttonClass={'main-form__button'}
                    buttonText={'Создать новую компетенцию'}
                    buttonFunction={addCompetence}
                />
            </form>
        </>
    );
}

export default FormCompetence;
