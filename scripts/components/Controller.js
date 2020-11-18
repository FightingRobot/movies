import { DATA_LINK } from '../helpers/constants.js';

class Controller {
  constructor() {
    this.value = 0;
  }

  getData = async () => {
    const responce = await fetch(DATA_LINK);
    const json = await responce.json();
    return json.data;
  }

  start = async () => {
    let data = await this.getData();
    console.log(data)
  }
}

const controller = new Controller();
export default controller;
