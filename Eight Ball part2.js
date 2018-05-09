//Project Magic Eight Ball
//Author Kristina Urboniene
//Date 20180509


let userName = '';
userName ? console.log(`Hello, ${userName}!`) :
console.log ('Hello!');

const userQuestion = 'will my life change?';
console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch(randomNumber) {
  case 1:
    console.log('It is decidedly so');
    break;
   case 2:
    console.log('Reply hazy try again');
    break;
   case 3:
    console.log('Cannot predict now');
    break;
   case 4:
    console.log('Do not count on it');
    break;
   case 5:
    console.log('My sources say no');
    break;
   case 6:
    console.log('Outlook not so good');
    break;
   case 7:
    console.log('Signs point to yes');
    break;
   case 8:
    console.log('It is decidedly so');
    break;
  default: 
    console.log('Invalid case');
    break;
 }
