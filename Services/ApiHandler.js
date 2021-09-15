// service/index.js
const axios = require('axios');

class ColorApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.thecolorapi.com'
    });
  }

  getColorScheme = (color) => this.api.get(`/scheme/?hex=${color}`);
  getHexScheme =(hex) => this.api.get(`/scheme/?hex=${hex.value}`);

}


module.exports = ColorApi;