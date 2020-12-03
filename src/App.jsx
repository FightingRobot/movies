import React, { useState, useEffect, useRef } from 'react';

import { DATA_LINK, MAX_ITEMS } from './helpers/constants';
import { getData, getImage } from './helpers/functions.js';

import Header from './components/Header/Header';
import CreateCard from './components/CreateCard/CreateCard.jsx';
import Loader from './components/Loader/Loader.jsx';

import './main.scss';

function App() {

  const [data, setData] = useState(new Array(1));
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef();

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

  const loadData = async (link) => {
    const fetchData = await getData(link)
    setData(fetchData);

    if (!fetchData.length) {
      setError('Nothing is found')
    }

    const fetchImages = await loadImages(fetchData);
    setImages(fetchImages);
  }

  const submitForm = () => {
    event.preventDefault();

    const requestBody = inputRef.current.value;

    if (!requestBody.length) {
      setError('Your request is empty')
      return;
    }

    setData(new Array(1));
    setImages([]);
    setError('');

    return loadData(`${DATA_LINK}?searchBy=title&search=${requestBody}&offset=0`);
  }

  useEffect(async () => {
    try {
      await loadData(DATA_LINK);
    } catch {
      setError('Failed to fetch data! Check your network settings.')
    }
  }, [])

  return (
    images.length === data.length ? (
      <div className="movies">
        <Header />
        <main className="main">
          <div className="content main__content">
            <div className="movie-list">
              <div className="movie-list__searchbar">
                <form onSubmit={submitForm} action="" className="movie-list__searchform">
                  <input ref={inputRef} placeholder="Find your movie" type="text" className="movie-list__searchinput" />
                  <button className="movie-list__searchbtn"></button>
                </form>
                <p className='errorBox'>{error}</p>
              </div>
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
