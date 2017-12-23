'use strict'

// module pattern uses getters/setters
let carOnLot = (function() {
  let year;
  let make;
  let model;

  function numOfCars() {
    return 2;
  }

  return {
    getCar: function() {
      return this.year + " " + this.make + " " + this.model;
    },
    setCar: function(year, make, model) {
      this.year = year;
      this.make = make;
      this.model = model;
    },
    getNum: numOfCars()
  }
})();

console.log(carOnLot)
carOnLot.setCar(1972, "Chevy", "Malibu");
console.log(carOnLot.getCar());
console.log("num ====> ", carOnLot.getNum);
