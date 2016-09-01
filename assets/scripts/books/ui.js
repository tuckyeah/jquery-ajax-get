'use strict';

const writeBookToPage = (obj) => {
  let title = obj.title;
  $('.bookNames').append(title+'<br />');
};


//all books
const onBooksSuccess = (data) => {
  // we get back an Object, that contains a key called 'books', which contains
  // an array of the book objects
  // this gives us the array of book objects
  console.log(data.books.forEach(writeBookToPage));
};

//one book
const oneBookSuccess = (data) => {
  $('.bookNames').text(''); // clears the titles each time
  $('.bookNames').append("Title: "+data.book.title+'<br />' +
    'Author: '+data.book.author);
};

const failure = (error) => {
  console.log(error);
};


module.exports = {
  onBooksSuccess,
  oneBookSuccess,
  failure
};
