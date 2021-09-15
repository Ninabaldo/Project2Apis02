

const { colorScheme, model } = require('mongoose');

const colorSchema = new Scheme(
  {
    colors:[String],
    
    
    
  },
  {
    timestamps: true
  }
);

module.exports = model('color', colorScheme);
