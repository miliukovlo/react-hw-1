import React, { useContext, useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { loginContext, userContext } from '../../Context/Context';

const LoginContent = () => {
    const [nameOfUser, setNameOfUser] = useState('')
    const [error, setError] = useState(null)
    const contextOfUser = useContext(userContext)
    const contextLogin = useContext(loginContext)

    const changeNameOfUser = (e) => {
        setNameOfUser(e.target.value)
    }

    const loginUser = () => {
        if (nameOfUser === '') {
            setError(true)
        } else {
            localStorage.setItem('login', true)
            localStorage.setItem('nameOfUser', JSON.stringify(nameOfUser))
            contextOfUser.setNameOfUser(nameOfUser)
            contextLogin.setIsLogin(true)
            setError(false)
            setNameOfUser('')
        }
    }

    return (
        <>
            <main className='main-login'>
                <h1 className='login-header__text'>Страница входа</h1>
                <Input
                onChangeFunc={changeNameOfUser}
                InputType={'text'}
                InputValue={nameOfUser}
                InputPlaceholder={'Введите имя'}
                InputClass={'main-login__input'}
                />
                <p className={error ? "error-text" : 'error-text__no'}>Вы не ввели имя!</p>
                <Button
                    buttonText={'Войти'}
                    buttonClass={'main-login__button'}
                    buttonFunction={loginUser}
                />
            </main>
        </>
    );
}

export default LoginContent;
