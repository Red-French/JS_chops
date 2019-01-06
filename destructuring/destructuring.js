makeSound({
  weight: 82,
  // species: 'chihuahua',
  sound: 'WOOOOF!!'
})

function makeSound({species = 'animal', sound}) {
  // function makeSound(options) {
  // let {species, sound} = options;
  // species = species || 'animal';
  console.log('The ' + species + ' says ' + sound + '!!');
}