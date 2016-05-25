'use strict';

const getBooks = function () {
  // don't forget the return!!
  return $.ajax({
    url: 'http://localhost:3000/books',
    method: 'GET',
  });
};

module.exports = {
  getBooks,
};
