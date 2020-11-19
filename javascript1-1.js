// input statement
// prompt('Please Input your Info');

/* alert is used as output statement for JS to show an alert info*/
// alert('this is created by external JS; and this is an alert as an output statemtent');

/* console.log is used as output statement for JS to show logs in console*/
// console.log('Alert as an Output Statemtent');

/* JS Variable */
var myName = 'Steve Zhao';
console.log(myName);

/* Use prompt to store a uer input and use alert to output it */
var age = prompt('Please input your age');
console.log('input variable age = ' + age);
alert('User age is: '+ age);

/* Data Type - Number */
// will represent octal number
var octValue = 010; 
console.log(octValue);
// will represent hex number
var hexValue = 0xf; 
console.log(hexValue);
// will show the maximum value in JS
console.log(Number.MAX_VALUE);
// will show the minimum value in JS
console.log(Number.MIN_VALUE);
// show Infinity
console.log(Number.MAX_VALUE * 2);
// show -Infinity
console.log(-Number.MAX_VALUE * 2);
// isNaN() function is used to determine whether it's a number or not
var numTest = 10;
var strTest = 'string'
console.log(isNaN(numTest));
console.log(isNaN(strTest));

/* Data Type - String */
alert('this is a string\nwe can use "escape character" to represent special characters')