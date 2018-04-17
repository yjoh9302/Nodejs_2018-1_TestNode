
console.log('Hello, world!');
const circle = require('./circle');
console.log('Area of a circle = ' + circle.area(3));
console.log('Circumference of a circle = ' + circle.circum(3));
console.log('Pi = ' +circle.pi);

const square = require('./square');
let mySquare = square(4);
console.log('Area of a square = ' + mySquare.area());