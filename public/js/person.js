// create namespace if it doesn't exist
var PersonApp = PersonApp || {};

// Create a Constructor Function for Person.
// When we have multiple, many, objects we want
// to create each using the 'new' keyword and
// a Constructor Function.
PersonApp.Person = function(remotePerson){
  // remotePerson is an Object Literal returned
  // from the server.
  this.name = remotePerson.name;
  this.occupation = remotePerson.occupaton;
  this.company = remotePerson.company_name;
  this.id =  remotePerson.id;

  // Could've used an Address 'class' here, meh.
  this.address = {
    street: remotePerson.address.street,
    city: remotePerson.address.city,
    state: remotePerson.address.state
  };
};

// Contruct the HTML representation for each Person.
PersonApp.Person.prototype.render = function(){
  var personHTML = "<div id='" + this.id  + "'> <dt>Name</dt><dd>";
  personHTML += this.name + "</dd>";
  personHTML += "<dt>Occupation</dt><dd>" + this.occupation + "</dd>";
  personHTML += "<dt>Company</dt><dd>" + this.company_name + "</dd>";
  personHTML += "</div><hr><br>";
  return personHTML;
};
