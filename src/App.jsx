import React from 'react';

import Header from './components/Header/Header';
import Controller from './components/Controller/Controller';

import './main.scss';

function App() {

  return (
    <div className="movies">
      <Header />
      <Controller />
    </div>
  );
}

export default App;
