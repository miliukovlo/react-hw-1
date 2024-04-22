import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './styles/App.css';

import React, { useEffect, useState } from 'react';
import LoginPage from './Pages/LoginPage';
import { loginContext, userContext } from './Context/Context';
import MainPage from './Pages/MainPage';

const App = () => {
  const [nameOfUser, setNameOfUser] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('login')) {
      setIsLogin(true)
    }
    if (localStorage.getItem('nameOfUser')) {
      setNameOfUser(JSON.parse(localStorage.getItem('nameOfUser')))
    }
  },[])

  return (

    <loginContext.Provider value={{isLogin, setIsLogin}}>
    <userContext.Provider value={{nameOfUser, setNameOfUser}}>
      <BrowserRouter>
        <Routes>
          {isLogin ? 
            <>
              <Route path='/competent' element={<MainPage />} exact />
              <Route path='*' element={<Navigate to='/competent' replace />} exact />
            </>
            :
            <>
              <Route path='/' element={<LoginPage />} exact />
              <Route path='*' element={<Navigate to='/' replace />} exact />
            </>  
        }
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  </loginContext.Provider>
  );
}

export default App;


