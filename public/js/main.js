// Create a namespace for this app iff it doesn't
// exist already
var PersonApp = PersonApp || {};


$(document).ready(function(){

  // Get People from the remote server.
  PersonApp.People.get();
});
