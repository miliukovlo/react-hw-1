import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import React from 'react';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


