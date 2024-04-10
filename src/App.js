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
    </>
  );
}

export default App;


