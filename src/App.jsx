import React, { useState, useEffect } from 'react';

import { DATA_LINK, MAX_ITEMS } from './helpers/constants';
import { getData, getImage } from './helpers/functions.js';

import Header from './components/Header/Header';
import CreateCard from './components/CreateCard/CreateCard.jsx';
import Loader from './components/Loader/Loader.jsx';

import './main.scss';

function App() {

  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  const loadImages = async (data) => {
    const imgArr = [];

    for (let i = 0; i < data.length; i++) {
      const img = await getImage(data[i]);
      imgArr.push(img);
    }

    return imgArr;
  }

  const generateCards = (data, images) => {
    const cards = [];

    for (let i = 0; i < data.length; i++) {
      cards.push(<CreateCard object={data[i]} image={images[i]} key={i} />)
    }

    return cards;
  }

  useEffect(async () => {
    const fetchData = await getData(DATA_LINK)
    const fetchImages = await loadImages(fetchData);

    setData(fetchData);
    setImages(fetchImages);
  }, [])

  return (
    images.length === MAX_ITEMS ? (
      <div className="movies">
        <Header />
        <main className="main">
          <div className="content main__content">
            <div className="movie-list">
              {generateCards(data, images)}
            </div>
          </div>
        </main>
      </div>
    ) : (
        <Loader />
      )
  );
}

export default App;
