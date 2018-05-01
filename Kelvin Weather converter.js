// author Kristina Urboniene
// 5/1/2018
// Kelvin Weather converter
const kelvin = 283;
console.log(`${kelvin} K converts to:`);
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`${fahrenheit} degrees F`);
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`${Newton} degrees Newton`);
console.log(`${celsius} degrees C`);
