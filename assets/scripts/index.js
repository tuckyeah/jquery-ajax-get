'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  libraryApi.getBooks().done(ui.onSuccess);
};

// On document ready
$(() => {
  $('#get-books').on('click', onGetBooks);
});
