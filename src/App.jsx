import React from 'react';

// import { DATA_LINK } from './helpers/constants.js';
// import { getData, getImage, createCard } from './helpers/functions.js';

import Header from './components/Header/Header';
import Controller from './components/Controller/Controller';

import './main.scss';

function App() {


  return (
    <div className="movies">
      {/* <div className="loader">
        <div className="loader__circle"></div>
      </div> */}
      <Header />
      <Controller />
    </div>
  );
}

export default App;
