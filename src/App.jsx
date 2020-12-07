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
  const [page, setPage] = useState(0);

  const inputRef = useRef();
  const debugRef = useRef();

  const loadImages = async (data) => {
    const imgArr = [];

    for (let i = 0; i < data.length; i++) {
      const img = await getImage(data[i]);
      imgArr.push(img);
    }

    return imgArr;
  }

  const changePage = (event) => {
    setPage(Number(event.currentTarget.textContent) - 1);
  }

  const generatePagination = (data, page) => {
    const pages = [];
    let active = "";

    for (let i = 0; i < data.length / 10; i++) {
      active = page === i ? "pagination-item_active" : "";
      pages.push(<div key={i} onClick={changePage} className={"pagination-item " + active}>{i + 1}</div>);
    }

    return pages;
  }

  const generateCards = (data, images, page) => {
    const cards = [];
    let length = 0;

    data.length - page * 10 >= 10
      ? length = (page * 10) + 10
      : length = (page * 10) + (data.length - page * 10)

    for (let i = page * 10; i < length; i++) {
      cards.push(<CreateCard object={data[i]} image={images[i]} key={i} />)
    }

    return cards;
  }

  const loadData = async (link, debugValue = '') => {
    let fetchData = await getData(link)

    if (debugValue !== '') {
      const moviePlaceholder = fetchData[0];
      fetchData = new Array(Number(debugValue));
      fetchData.fill(moviePlaceholder, 0);
    }

    setData(fetchData);

    if (!fetchData.length) {
      setError('Nothing is found');
    }

    const fetchImages = await loadImages(fetchData);
    setImages(fetchImages);
  }

  const submitForm = (event) => {
    event.preventDefault();

    const requestBody = inputRef.current.value;
    const debugBody = debugRef.current.value;

    if (!requestBody.length) {
      setError('Your request is empty')
      return;
    }

    setData(new Array(1));
    setImages([]);
    setError('');
    setPage(0);

    return loadData(`${DATA_LINK}?searchBy=title&search=${requestBody}&offset=0`, debugBody);
  }

  useEffect(async () => {
    try {
      await loadData(DATA_LINK);
    } catch {
      setError('Failed to fetch data! Check your network settings.')
    }
  }, []);

  // const checkPage = () => {
  //   if ('last') {
  //     if () {

  //     }
  //     return false
  //   }

  //   if ('first') {
  //     if () {

  //     }
  //   }
  // }

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
                  <input ref={debugRef} placeholder="Debug" type="number" className="movie-list__debug" />
                  <button className="movie-list__searchbtn"></button>
                </form>
                <p className='errorBox'>{error}</p>
              </div>
              <div className="movie-list__cardbar">
                {generateCards(data, images, page)}
              </div>
              {data.length ? (
                <div className="movie-list__pagination pagination">
                  <div
                    onClick={() => page !== 0
                      ? setPage(page - 1)
                      : null
                    }
                    className={`pagination-item ${page === 0
                      ? "pagination-item_disabled"
                      : ""}`
                    }>
                    prev
                </div>
                  {generatePagination(data, page)}
                  <div
                    onClick={() => page + 1 !== Math.ceil(data.length / 10)
                      ? setPage(page + 1)
                      : null
                    }
                    className={`pagination-item ${page + 1 === Math.ceil(data.length / 10)
                      ? "pagination-item_disabled"
                      : ""}`
                    }>
                    next
                  </div>
                </div>
              ) : (
                  null
                )}
            </div>
          </div>
        </main>
      </div >
    ) : (
        <Loader />
      )
  );
}

export default App;
