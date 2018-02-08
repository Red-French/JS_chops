//  ***************************************
//  ex 1
//  ***************************************

let talk = function () {
  console.log(this.sound);
}

let dog = {
  sound: 'woof',
  speak: talk
}

let cat = {
  sound: 'meow'
}

let talkFunction = dog.speak;  // 'this' is window object
let boundFunction = talkFunction.bind(cat);  // 'this' is cat object
talk();  // undefined; 'this' is window object
talkFunction();  // undefined
boundFunction();  // "meow"

//  ***************************************
//  ex 2
//  ***************************************

let button = document.getElementById('someButton');
button.addEventListener(
  'click',
  dog.talk.bind(dog)  // "woof"; without bind, 'this' is the window object because that's where addEventListeners are triggered
);
