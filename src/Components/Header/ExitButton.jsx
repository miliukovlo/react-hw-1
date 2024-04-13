import React, { useContext } from 'react';
import ExitLogo from '../../assets/exit-logout-svgrepo-com.svg'
import { loginContext, userContext } from '../../Context/Context';


const ExitButton = () => {
    const contextOfUser = useContext(userContext)
    const contextLogin = useContext(loginContext)

    const exitUser = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('nameOfUser')
        contextOfUser.setNameOfUser('')
        contextLogin.setIsLogin(false)
    }
    

    return (
        <>
            <button onClick={exitUser}><img src={ExitLogo} alt="Кнопка выхода"/></button>
        </>
    );
}

export default ExitButton;
