// Log Codecademy in all uppercase letters
console.log('Codecademy'. toUpperCase()); 

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

var x = 'My name is unknow';
var newx = x.replace(/unknow/, 'Kristina');
console.log(newx);

var re = /apples/gi;
var str = 'apples are round, and apples are juicy';
var newstr = str.replace(re,'oranges');
console.log(newstr);

var re = /apples/gi;
var str = 'apples are round, and apples are juicy.';
var newstr = str.replace(re,'oranges');
console.log(newstr);

console.log('VIlnius'.startsWith('V'));
console.log('KAISIADORYS'.toLowerCase());
console.log('kaisiadorys'.toUpperCase());

