import React from 'react';

const CreateCard = (props) => {
  return (
    <div className="movie-list__item movie-list-item">
      <img src={props.image} alt="poster" className="movie-list-item__image" />
      <div className="movie-list-item__info">
        <h3 className="movie-list-item__title">
          {props.object.title}
        </h3>
        <p className="movie-list-item__tagline">
          {props.object.tagline}
        </p>
        <div className="movie-list-item__rating">
          <p className="movie-list-item__score">
            {`Score: ${props.object.vote_average}`}
          </p>
          <p className="movie-list-item__date">
            {`Release Date: ${props.object.release_date}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
