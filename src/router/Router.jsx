import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../pages/MainLayout';
import MainPage from '../pages/MainPage';

const Router = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout/>} exact>
                        <Route path='' element={<MainPage/>} exact/>
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default Router;
