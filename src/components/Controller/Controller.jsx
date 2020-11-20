import React, { useState, useEffect } from 'react';

import { DATA_LINK } from '../../helpers/constants';
import { getData, getImage } from '../../helpers/functions.js';
import CreateCard from '../CreateCard/CreateCard.jsx';

import './Controller.scss';

function Controller() {
    const [cards, generateCards] = useState([]);

    const insertCards = (data) => {
        for (let i = 0; i < data.length; i++) {
            getImage(data[i])
                .then(img => generateCards([...cards, <CreateCard object={data[i]} image={img} key={i} />]))
                .then(data => console.log(cards))
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        getData(DATA_LINK)
            .then(data => insertCards(data))
            // .then(() => this.toggleLoader())
            .catch(error => console.log(error));
    }, [])



    // insertCards = (data) => {
    //     for (let obj of data) {
    //         getImage(obj)
    //             .then(img => this.movieList.append(createCard(obj, img)))
    //             .catch(error => console.log(error));;
    //     }
    // }

    // start = () => {
    //     getData(DATA_LINK)
    //         .then(data => this.insertCards(data))
    //         .then(() => this.toggleLoader())
    //         .catch(error => console.log(error));
    // }

    return (
        <div className="movies">
            {/* <div className="loader">
          <div className="loader__circle"></div>
        </div> */}
            <main className="main">
                <div className="content main__content">
                    <div className="movie-list">
                        {cards}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Controller;
