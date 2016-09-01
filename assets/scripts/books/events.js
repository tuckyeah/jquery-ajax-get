'use strict';

const booksApi = require('./api.js');
const booksUi = require('./ui.js');

const onGetBooks = (event) => {
  event.preventDefault();

  let bookId = $('#book-id').val();

  if (bookId.length > 0) {
    booksApi.show(bookId)
    .done(booksUi.oneBookSuccess)
    .fail(booksUi.failure);
  } else {
    booksApi.index()
    .done(booksUi.onBooksSuccess)
    .fail(booksUi.failure);
  }
};

// the above listed .done/.fail is the same as chaining it on one line:
// booksApi.index().done().fail()

module.exports = {
  //this is the same as
  // onGetBooks: onGetBooks
  onGetBooks,
};
