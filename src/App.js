import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import './styles/App.css';

import React from 'react';

const App = () => {
  return (
    <>
      <Header/>
      {/* Компонент Main создан для помещения туда основного контента */}
      <Main/>
      <Footer/>
    </>
  );
}

export default App;


