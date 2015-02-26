// Create a namespace for this app iff it doesn't
// exist already
var PersonApp = PersonApp || {};

// Only one instance of People. It's a Singleton.
// Use an Object Literal.

// We'll use an IIFE here so we have private
// methods, like _render.
PersonApp.People = (function($, url, $container){

  //private method
  // Parameter is a Javascript Array
  // containing Object Literals, one per person.
  var _render = function(remotePeople){
    var peopleHTML = '', person;
    remotePeople.forEach(function(remotePerson){
      console.log(remotePerson.name);
      person = new PersonApp.Person(remotePerson);
      peopleHTML += person.render();

    });
    $container.append(peopleHTML);
  };

  // Make the remote Ajax GET Request
  var get = function(){
    $.ajax({
      url: url,
      dataType: 'json'
    })
    .done(_render);
  };

  return {
    get: get
  };

  // pass in JQuery and the DOM that should contain all people
})(jQuery, '/people', $('#container'));
