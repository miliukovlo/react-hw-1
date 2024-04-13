import React, { useState } from 'react';
import Input from '../UI/Input'
import Button from '../UI/Button';

const FormCompetence = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [level, setLevel] = useState(0)

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeDescription = (e) => {
        setDescription(e.target.value)
    }
    const changeLevel = (e) => {
        setLevel(e.target.value)
    }

    return (
        <>
            <form className='main-form'>
                <div className="main-form__inputs-block">
                    <Input
                        InputType={'text'}
                        InputValue={title}
                        InputPlaceholder={'Введите название компетенции'}
                        InputClass={''}
                        onChangeFunc={changeTitle}
                    />
                    <Input
                        InputType={'text'}
                        InputValue={description}
                        InputPlaceholder={'Введите описание компетенции'}
                        InputClass={''}
                        onChangeFunc={changeDescription}
                    />
                    <div className="main-form__range-block">
                        <Input
                            InputType={'number'}
                            InputValue={level}
                            InputPlaceholder={'Укажите ваш уровень'}
                            InputClass={''}
                            onChangeFunc={changeLevel}
                            InputMax='100'
                            InputMin='0'
                        />
                        <Input
                            InputType={'range'}
                            InputValue={level}
                            InputPlaceholder={'Укажите ваш уровень'}
                            InputClass={''}
                            onChangeFunc={changeLevel}
                            InputMax='100'
                            InputMin='0'
                        />
                    </div>
                </div>
                <Button
                    buttonClass={'main-form__button'}
                    buttonText={'Создать новую компетенцию'}
                    buttonFunction={''}
                />
            </form>
        </>
    );
}

export default FormCompetence;
