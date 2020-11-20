import React from 'react';

// import { DATA_LINK } from './helpers/constants.js';
// import { getData, getImage, createCard } from './helpers/functions.js';

import './main.scss';

function App() {


  return (
    <div className="movies">
      <div className="loader">
        <div className="loader__circle"></div>
      </div>
      <header className="header">
        <div className="content header__content">
          <h1>MOVIES (ES6)</h1>
        </div>
      </header>
      <main className="main">
        <div className="content main__content">
          <div className="movie-list">
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
