import React, { useState, useEffect } from 'react';

import { DATA_LINK } from '../../helpers/constants';
import { getData, getImage } from '../../helpers/functions.js';

import CreateCard from '../CreateCard/CreateCard.jsx';
import Loader from '../Loader/Loader.jsx';

import './Controller.scss';

function Controller() {
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
    <div className="movies">
      <Loader images={images} />
      <main className="main">
        <div className="content main__content">
          <div className="movie-list">
            {generateCards(data, images)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Controller;
