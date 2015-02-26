// create namespace if it doesn't exist
var PersonApp = PersonApp || {};

$(document).ready(function(){
  // Set the container for People
  PersonApp.People.containerElement = $('#container');
  // Make the remote request to the server/API.
  PersonApp.People.get();

});
