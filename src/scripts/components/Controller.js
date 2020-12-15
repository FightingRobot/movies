import { DATA_LINK } from '../helpers/constants.js';
import { getData, getImage, createCard, createPagItem, createPagArrow } from '../helpers/functions.js';

class Controller {
  constructor(placeholder) {
    this.movieList = document.querySelector('.movie-list__cardbar');
    this.pagArea = document.querySelector('.movie-list__pagination');
    this.loader = document.querySelector('.loader');
    this.searchForm = document.querySelector('.movie-list__searchform');
    this.searchInput = document.querySelector('.movie-list__searchinput');
    this.errorBox = document.querySelector('.errorBox');
    this.infoBox = document.querySelector('.infoBox');

    this.placeholder = placeholder;

    this.page = 0;
    this.total = 0;
    this.request = '';
    this.error = '';
    this.data = [];
    this.images = [];
  }

  loadImages(data) {
    let promises = data.map((a) => getImage(a, this.placeholder));
    return Promise.all(promises);
  }

  generateCards(data, img) {
    return data.map((item, index) => createCard(item, img[index]));
  }

  changePage(event) {
    this.page = Number(event.currentTarget.textContent) - 1;
    this.checkoutPage();
  }

  setPage(num) {
    this.page = num;
    this.checkoutPage();
  }

  generatePageItems(data) {
    const pages = [];
    let active = "";
    const changePage = this.changePage.bind(this)

    for (let i = 0; i < this.total / 10; i++) {
      active = this.page === i ? "pagination-item_active" : "";
      pages.push(createPagItem(i, active, changePage));
    }

    if (pages.length > 10 && this.page >= 4 && this.page <= pages.length - 4) {
      return pages.slice(this.page - 3, this.page).concat(pages.slice(this.page, this.page + 4));
    } else if (pages.length > 10 && this.page >= pages.length - 4) {
      return pages.slice(-6)
    } else if (pages.length > 10) {
      return pages.slice(0, 6)
    }

    return pages
  }

  generatePagination(data) {
    const pages = this.generatePageItems(data);

    const setPage = this.setPage.bind(this);

    pages.push(createPagArrow.call(this, this.total, this.page, setPage, 'pagination-item_next'));
    pages.push(createPagArrow.call(this, this.total, this.page, setPage, 'pagination-item_last'));
    pages.unshift(createPagArrow.call(this, this.total, this.page, setPage, 'pagination-item_prev'));
    pages.unshift(createPagArrow.call(this, this.total, this.page, setPage, 'pagination-item_first'));

    return pages
  }

  toggleLoader() {
    this.loader.classList.toggle('loader_disable');
  }

  insertCards(cards) {
    cards.map(a => this.movieList.append(a));
  }

  insertPagination(pages) {
    pages.map(a => this.pagArea.append(a));
  }

  submitForm(event) {
    event.preventDefault();
    this.toggleLoader();

    const requestBody = this.searchInput.value;

    if (!requestBody.length) {
      this.errorBox.textContent = 'Your request is empty';
      this.toggleLoader();
      return;
    }

    this.request = requestBody;
    this.movieList.textContent = '';
    this.pagArea.textContent = '';
    this.errorBox.textContent = '';
    this.infoBox.textContent = '';
    this.page = 0;


    return this.start(`${DATA_LINK}?searchBy=title&search=${requestBody}&offset=0`);
  }

  checkoutPage() {
    this.toggleLoader();

    this.movieList.textContent = '';
    this.pagArea.textContent = '';
    this.errorBox.textContent = '';

    return this.start(`${DATA_LINK}?searchBy=title&search=${this.request}&offset=${this.page * 10}`);
  }

  setEvents() {
    const submitForm = this.submitForm.bind(this);
    this.searchForm.onsubmit = submitForm;
  }

  start(link = DATA_LINK) {
    getData(link)
      .then(data => {
        this.data = data.data;
        this.total = data.total;

        if (this.data.length) {
          const pages = this.generatePagination(data);
          this.insertPagination(pages);
          if (this.request) {
            this.infoBox.textContent = `Search results for "${this.request}". Total movies: ${this.total}. Total pages: ${Math.ceil(this.total / 10)}.`;
          }
        } else {
          this.errorBox.textContent = "Nothing is found"
        }

        console.log(data)
        return this.loadImages(data.data)
          .then(images => this.images = images)
      })
      .then(() => this.generateCards(this.data, this.images))
      .then((cards) => this.insertCards(cards))
      // .catch(error => this.errorBox.textContent = error)
      .catch(error => console.log(error))
      .finally(() => this.toggleLoader());
  }
}

export default Controller
