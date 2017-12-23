'use strict'

// constructor function
function Person(first_name, last_name) {
    this.first = first_name;
    this.last = last_name;
    // this.fullname = function() {              // DISADVANTAGE: MULTIPLE methods created; 1 for each object instance
    //     return this.first + ' ' + this.last;  // ADVANTAGE: can make private/public, use getters/setters
    // }
}

Person.prototype.fullname = function() {  // DISADVANTAGE: Everything is public
    return this.first + ' ' + this.last;  // ADVANTAGE: ONE method is created, accessible from each object instance
}

let dude = new Person("John", "Wayne");
console.log(dude.fullname());



// constructor function
function tradeIn(year, make, model) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.num = 0;
  // this.numOfCars = function() {
  //   return this.num += 1;
  // }
}

tradeIn.prototype.numOfCars = function () {  // prototype function
  return this.num += 1;
}

let auto = new tradeIn(1972, "Ford", "Mustang");
console.log(auto);
console.log("num of cars on lots = ", auto.numOfCars());

let auto2 = new tradeIn(1969, "Chey", "Camaro");
console.log(auto2);
console.log("num of cars on lots = ", auto2.numOfCars());
