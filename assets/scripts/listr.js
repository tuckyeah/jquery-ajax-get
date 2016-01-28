'use strict';

let logResponseBody = function(responseBody) {
  console.table(responseBody);
};

let logRequestError = function(requestObject) {
  console.error(requestObject);
};

let getItems = function() {
  $.ajax({
    url: 'http://localhost:3000/items',
    type: 'GET'
  })
  .done(logResponseBody)
  .fail(logRequestError);
};

$(document).ready(getItems);
