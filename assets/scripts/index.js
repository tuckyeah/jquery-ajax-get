'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


// In this case, 'require' is saying "give me access to this file"
// this builds an object named 'bookEvents' from the module.exports in books/events
const bookEvents = require('./books/events');

// On document ready (when the browser is finished loading EVREYTHING and the
// 'site' is fully loaded)

// This arrow thing is the same as $(document).ready(function(){...});
$(() => {
  $('#book-request').on('submit', bookEvents.onGetBooks);
});
