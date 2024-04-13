import React, { useContext, useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { userContext } from '../../Context/Context';

const LoginContent = () => {
    const [nameOfUser, setNameOfUser] = useState('')
    const contextOfUser = useContext(userContext)

    const changeNameOfUser = (e) => {
        setNameOfUser(e.target.value)
    }

    return (
        <>
            <main className='main-login'>
                <h1>Страница входа</h1>
                <Input
                onChangeFunc={changeNameOfUser}
                InputValue={nameOfUser}
                InputPlaceholder={'Введите имя'}
                InputClass={'main-login__input'}
                />
                <Button
                    buttonText={'Войти'}
                    buttonClass={'main-login__button'}
                />
            </main>
        </>
    );
}

export default LoginContent;
