import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import React, { useState } from 'react';
import LoginPage from './Pages/LoginPage';
import { userContext } from './Context/Context';

const App = () => {
  const [nameOfUser, setNameOfUser] = useState('')

  return (
    <userContext.Provider value={{nameOfUser, setNameOfUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;


