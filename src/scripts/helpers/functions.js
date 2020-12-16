export function getData(link) {
  return fetch(link)
    .then(responce => responce.json())
}

export function getImage(data, image) {
  return fetch(data.poster_path)
    .then(img => img.blob())
    .then(function (blob) {
      if (blob.type === 'image/jpeg') {
        return URL.createObjectURL(blob);
      }
      return image
    })
    .catch(error => console.log(error));
}

export function createCard(object, image = '../../assets/placeholder.png') {
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

export function createPagItem(index, active, callback) {
  const mainBlock = document.createElement('div');
  mainBlock.className = 'pagination-item ';

  mainBlock.onclick = (callback);

  if (active) {
    mainBlock.classList.add(active);
  }

  mainBlock.textContent = index + 1;
  return mainBlock;
}

export function createPagArrow(total, page, setPage, arrowClass) {
  let arrowDisabledClass = 0;
  let arrowCallback = 0;

  if (arrowClass === 'pagination-item_next') {
    if (page + 1 !== Math.ceil(total / 10)) {
      arrowDisabledClass = ''
      arrowCallback = () => setPage(page + 1);
    } else {
      arrowDisabledClass = 'pagination-item_disabled'
      arrowCallback = null;
    }
  }

  if (arrowClass === 'pagination-item_last') {
    if (page + 1 !== Math.ceil(total / 10)) {
      arrowDisabledClass = ''
      arrowCallback = () => setPage(Math.ceil(total / 10) - 1);
    } else {
      arrowDisabledClass = 'pagination-item_disabled'
      arrowCallback = null;
    }
  }

  if (arrowClass === 'pagination-item_prev') {
    if (page !== 0) {
      arrowDisabledClass = ''
      arrowCallback = () => setPage(page - 1);
    } else {
      arrowDisabledClass = 'pagination-item_disabled'
      arrowCallback = null;
    }
  }

  if (arrowClass === 'pagination-item_first') {
    if (page !== 0) {
      arrowDisabledClass = ''
      arrowCallback = () => setPage(0);
    } else {
      arrowDisabledClass = 'pagination-item_disabled'
      arrowCallback = null;
    }
  }

  const mainBlock = document.createElement('div');
  mainBlock.className = `pagination-item ${arrowClass} ${arrowDisabledClass}`;
  mainBlock.onclick = arrowCallback;
  return mainBlock;
}