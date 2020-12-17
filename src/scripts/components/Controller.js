var constants = require('../helpers/constants.js');
var functions = require('../helpers/functions.js');

function Controller(placeh) {
  var movieList = document.querySelector('.movie-list__cardbar');
  var pagArea = document.querySelector('.movie-list__pagination');
  var loader = document.querySelector('.loader');
  var searchForm = document.querySelector('.movie-list__searchform');
  var searchInput = document.querySelector('.movie-list__searchinput');
  var errorBox = document.querySelector('.errorBox');
  var infoBox = document.querySelector('.infoBox');
  var placeholder = placeh;

  var dataG = [];
  var imagesG = [];
  var page = 0;
  var total = 0;
  var request = '';

  changePage = function (event) {
    page = Number(event.currentTarget.textContent) - 1;
    checkoutPage.call(this);
  }

  setPage = function (num) {
    page = num;
    checkoutPage.call(this);
  }

  loadImages = function (data, callback) {
    var imgArr = Array(10);
    var fillingProgress = 0;

    data.forEach(function (e, i, a) {
      functions.getImage(e, placeholder, function (img) {
        imgArr[i] = img;
        fillingProgress += 1;
        if (fillingProgress === a.length) {
          callback(imgArr);
        }
      });
    });
  }

  generateCards = function (data, img, callback) {
    return callback(data.map(function (item, index) {
      return functions.createCard(item, img[index]
      )
    }));
  }

  generatePageItems = function (data) {
    var pages = [];
    var active = "";
    var changePageL = changePage.bind(this);

    for (var i = 0; i < total / 10; i++) {
      active = page === i ? "pagination-item_active" : "";
      pages.push(functions.createPagItem(i, active, changePageL));
    }

    if (pages.length > 10 && page >= 4 && page <= pages.length - 4) {
      return pages.slice(page - 3, page).concat(pages.slice(page, page + 4));
    } else if (pages.length > 10 && page >= pages.length - 4) {
      return pages.slice(-6);
    } else if (pages.length > 10) {
      return pages.slice(0, 6);
    }

    return pages;
  }

  generatePagination = function (data) {
    var pages = generatePageItems.call(this, data);
    var setPageL = setPage.bind(this);

    pages.push(functions.createPagArrow.call(this, total, page, setPageL, 'pagination-item_next'));
    pages.push(functions.createPagArrow.call(this, total, page, setPageL, 'pagination-item_last'));
    pages.unshift(functions.createPagArrow.call(this, total, page, setPageL, 'pagination-item_prev'));
    pages.unshift(functions.createPagArrow.call(this, total, page, setPageL, 'pagination-item_first'));

    return pages;
  }

  var generatePaginationG = generatePagination.bind(this);

  checkoutPage = function () {
    toggleLoader();

    movieList.textContent = '';
    pagArea.textContent = '';
    errorBox.textContent = '';

    return this.start(constants.DATA_LINK + '?searchBy=title&search=' + request + '&offset=' + page * 10);
  }

  toggleLoader = function () {
    loader.classList.toggle('loader_disable');
  }

  insertCards = function (cards) {
    cards.map(function (a) {
      movieList.append(a);
    })
  }

  insertPagination = function (pages) {
    pages.map(function (a) {
      pagArea.append(a);
    })
  }

  submitForm = function (event) {
    event.preventDefault();
    toggleLoader();

    var requestBody = searchInput.value;

    if (!requestBody.length) {
      errorBox.textContent = 'Your request is empty';
      toggleLoader();
      return;
    }

    request = requestBody;
    movieList.textContent = '';
    pagArea.textContent = '';
    errorBox.textContent = '';
    infoBox.textContent = '';
    page = 0;

    return this.start(constants.DATA_LINK + '?searchBy=title&search=' + requestBody + '&offset=0');
  }

  this.setEvents = function () {
    var submitFormL = submitForm.bind(this);
    searchForm.onsubmit = submitFormL;
  }

  this.start = function (link) {
    link === undefined ? link = constants.DATA_LINK : link
    functions.getData(link, function (data) {
      dataG = data.data;
      total = data.total;
      if (dataG.length) {
        var pages = generatePaginationG(data);
        insertPagination(pages);
        if (request) {
          infoBox.textContent = 'Search results for "' + request + '". Total movies: ' + total + '. Total pages: ' + Math.ceil(total / 10) + '.';
        }
      } else {
        errorBox.textContent = "Nothing is found";
        toggleLoader();
      }

      loadImages(data.data, function (images) {
        imagesG = images;

        generateCards(dataG, imagesG, function (cards) {
          insertCards(cards);
          toggleLoader();
        });
      });
    });
  }
}

module.exports = Controller;
