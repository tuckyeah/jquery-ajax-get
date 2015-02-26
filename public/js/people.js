// create namespace if it doesn't exist
var PersonApp = PersonApp || {};

// Create a single instance of People, a Singleton.
// Becuase there is only ONE list of People in you app.

// Use and Namespaced Object Literal
PersonApp.People = {
  // DOM element
  containerElement: null,

  // remote path for to call for all people
  url: '/people',

  // Callback Handler that will process all
  // remote data, JSON representation of all People.
  render: function(data){
    // data will be an Array of Object Literals.
    // each Object Literal will contain the info
    // for one Person.
    var person, peopleHTML = '';

    // Iterate through all people
    data.forEach(function(remotePerson){
      // create a Person
      //console.log("remotePerson object literal created from JSON HTTP Reply for: " + remotePerson.name);
      // Construct a Person
      person = new PersonApp.Person(remotePerson);
      // Get the HTML
      peopleHTML += person.render();
    });

    // Append all the People HTML into the DOM container
    // element
    this.containerElement.append(peopleHTML);
  },
  // Callback Handler for a remote request error.
  errorHandler: function(jqXHR, textStatus, errorThrown){
    var msg = "Request Failed: "+ textStatus;
    alert(msg);
    console.log(msg);
  },
  // Invoke a remote HTTP Request
  get: function(){
    // Using Ajax
    $.ajax({
      url: this.url,  // path of resource, /people
      dataType: 'json'
  })
    .done(this.render.bind(this))  // callbacks
    .fail(this.errorHandler);
  },
};
