import placeholder from './placeholder.png';

export function getData(link) {
  return fetch(link)
    .then(responce => responce.json())
    .then(json => json.data)
}

export function getImage(data) {
  return fetch(data.poster_path)
    .then(img => img.blob())
    .then(function (blob) {
      if (blob.type === 'image/jpeg') {
        return URL.createObjectURL(blob);
      }
      return placeholder
    })
    .catch(error => console.log(error));
}
