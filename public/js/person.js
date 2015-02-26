// Create a namespace for this app iff it doesn't
// exist already
var PersonApp = PersonApp || {};

//
PersonApp.Person = (function(){

  // var _companyEmployees = {};

  // var _updateCompanyEmployees = function(person){
  //   if(!_companyEmployees.hasOwnProperty(person.companyName)){
  //     _companyEmployees[person.companyName] = [];
  //   }
  //   _companyEmployees[person.companyName].push(person);
  // };

  // return a Constructor Function for person
  var PersonConstructor = function(rPerson){
    this.name = rPerson.name;
    this.occupation = rPerson.occupation;
    this.companyName = rPerson.company_name;
    this.id = rPerson.id;

    //_updateCompanyEmployees(this);

    this.address = {
      street: rPerson.address.street,
      city: rPerson.address.city,
      state: rPerson.address.state
    };
  };

  PersonConstructor.prototype.companyEmployees = function(companyName){
    return _companyEmployees[companyName];
  };
  PersonConstructor.prototype.render = function(){
    var personHTML = "<div id='" + this.id + "'> ";
    personHTML += "<dt>Name</dt><dd>" + this.name + "</dd>";
    personHTML += "<dt>Occupation</dt><dd>" + this.occupation+ "</dd>";
    personHTML += "<dt>Company</dt><dd>" + this.companyName +  "</dd>";
    personHTML += "</div>";
    return personHTML;
  };

  return PersonConstructor;
})();
