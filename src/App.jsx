import React, { useState, useEffect, useRef } from 'react';

import { DATA_LINK } from './helpers/constants';
import { getData, getImage } from './helpers/functions.js';

import Header from './components/Header/Header';
import CreateCard from './components/CreateCard/CreateCard.jsx';
import Loader from './components/Loader/Loader.jsx';
import Arrow from './components/Arrow/Arrow.jsx';

import './main.scss';

function App() {

  const [data, setData] = useState(new Array(1));
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [request, setRequest] = useState('');

  const inputRef = useRef();

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

  const generatePagination = (data) => {
    const pages = [];
    let active = "";

    for (let i = 0; i < total / 10; i++) {
      active = page === i ? "pagination-item_active" : "";
      pages.push(<div key={i} onClick={changePage} className={"pagination-item " + active}>{i + 1}</div>);
    }

    if (pages.length > 10 && page >= 4 && page <= pages.length - 4) {
      return pages.slice(page - 3, page).concat(pages.slice(page, page + 4));
    } else if (pages.length > 10 && page >= pages.length - 4) {
      return pages.slice(-6)
    } else if (pages.length > 10) {
      return pages.slice(0, 6)
    }

    return pages
  }

  const generateCards = (data, images) => {
    const cards = [];

    for (let i = 0; i < data.length; i++) {
      cards.push(<CreateCard object={data[i]} image={images[i]} key={i} />)
    }

    return cards;
  }

  const loadData = async (link) => {
    const dlData = await getData(link)

    setTotal(dlData.total);
    setData(dlData.data);

    let fetchData = dlData.data;

    if (!fetchData.length) {
      setError('Nothing is found');
    }

    const fetchImages = await loadImages(fetchData);
    setImages(fetchImages);
  }

  const submitForm = (event) => {
    event.preventDefault();

    const requestBody = inputRef.current.value;

    if (!requestBody.length) {
      setError('Your request is empty')
      return;
    }

    setRequest(requestBody);

    setData(new Array(1));
    setImages([]);
    setError('');
    setPage(0);

    return loadData(`${DATA_LINK}?searchBy=title&search=${requestBody}&offset=0`);
  }

  const checkoutPage = () => {
    setData(new Array(1));
    setImages([]);
    setError('');

    return loadData(`${DATA_LINK}?searchBy=title&search=${request}&offset=${page * 10}`);
  }

  useEffect(() => {
    checkoutPage();
  }, [page])

  useEffect(async () => {
    try {
      await loadData(DATA_LINK);
    } catch {
      setError('Failed to fetch data! Check your network settings.')
    }
  }, []);

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
                {request
                  ? (
                    <p className="infoBox">Search results for &apos;{request}&apos;. Total movies: {total}. Total pages: {Math.ceil(total / 10)}.</p>
                  )
                  : null}
                <p className='errorBox'>{error}</p>
              </div>
              <div className="movie-list__cardbar">
                {generateCards(data, images)}
              </div>
              {data.length ? (
                <div className="movie-list__pagination pagination">
                  <Arrow
                    total={total}
                    page={page}
                    setPage={setPage}
                    arrowClass={'pagination-item_first'}
                  />
                  <Arrow
                    total={total}
                    page={page}
                    setPage={setPage}
                    arrowClass={'pagination-item_prev'}
                  />
                  {generatePagination(data)}
                  <Arrow
                    total={total}
                    page={page}
                    setPage={setPage}
                    arrowClass={'pagination-item_next'}
                  />
                  <Arrow
                    total={total}
                    page={page}
                    setPage={setPage}
                    arrowClass={'pagination-item_last'}
                  />
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
