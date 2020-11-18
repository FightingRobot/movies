export function createCard(object, image) {
  const mainBlock = document.createElement('div');
  mainBlock.className = 'movie-list__item movie-list-item';

  const img = document.createElement('img');
  img.setAttribute('src', image);
  img.className = 'movie-list-item__image';
  mainBlock.append(img);

  const infoBlock = document.createElement('div');
  infoBlock.className = 'movie-list-item__info';
  mainBlock.append(infoBlock);

  const title = document.createElement('h3');
  title.className = 'movie-list-item__title';
  title.textContent = object.title;
  infoBlock.append(title);

  const tagline = document.createElement('p');
  tagline.className = 'movie-list-item__tagline';
  tagline.textContent = object.tagline;
  infoBlock.append(tagline);

  const rateBlock = document.createElement('div');
  rateBlock.className = 'movie-list-item__rating';
  infoBlock.append(rateBlock);

  const score = document.createElement('p');
  score.className = 'movie-list-item__score';
  score.textContent = `Score: ${object.vote_average}`;
  rateBlock.append(score);

  const date = document.createElement('p');
  date.className = 'movie-list-item__date';
  date.textContent = `Release Date: ${object.release_date}`;
  rateBlock.append(date);

  return mainBlock;
}
