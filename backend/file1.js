var Person = function(name){
    "use strict";
    this.name = name;
};

Person.prototype.greet = function(person){
    "use strict";
    return "Hello " + person.name;
};
module.exports = Person;