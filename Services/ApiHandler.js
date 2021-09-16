// service/index.js
const axios = require('axios');

class ColorApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.thecolorapi.com'
    });
  }

  getColor = (color) => this.api.get(`/scheme/?hex=${color}&mode=analogic&count=1`);
  getGradientScheme =(color) => this.api.get(`/scheme/?hex=${color}&mode=analogic&count=3`);
  getHexScheme =(hex)=> this.api.get(`/scheme/?hex=${hex.value}`);

}


module.exports = ColorApi;