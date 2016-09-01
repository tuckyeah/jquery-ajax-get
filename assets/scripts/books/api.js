'use strict';

const app = require('../app.js');

const index = () => {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = (bookId) => {
  return $.ajax({
    url: app.host + '/books/' + bookId,
    method: 'GET',
  });
};

module.exports = {
  index,
  show
};
