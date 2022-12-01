/*
! Conditionals
- Evaluates an expression and responde if it is true
- Falsy
  - false
  - 0
  -  " ", ' ' (empty strings)
  - null
  - undefined
  - NaN (not a number)
*/

let isOn = true;
let a = "abc";
console.log(Number(a));

if (isOn == true) {
    console.log('The light is on!');
}
/*
Structure:

if(condition evaluated) {
  ...code that runs if expression is true.
}

*/

if (isOn) {
    console.log('The light is on, yay!');
}

let string = "double";
let string2 = 'single';

let myName = 'Eric';
let newString = `My name is ${myName}`;
console.log(newString);

let blueString = `2 + 2 is ${2 + 2}`;
console.log(blueString);


let firstName = "Sam";
let lastName = "Jones";
let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(`${firstName} ${lastName}`);

isOn = false;

if (isOn == false) {
    console.log('The light is off');
}

let weather = 72;

if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!')
}

// And, Or, Not

let rain = true;
weather = 68;

if (weather < 70 && rain) {
    console.log('Wear a jacket.');
} else {
    console.log('No jacket necessary!')
}

if (weather > 70 || rain) {
    console.log('Wear a jacket');
} else {
    console.log('no jacket');
}

if (!rain) {
    console.log('Seems to be a clear day');
} else {
    console.log('not a clear day :(')
}

let grade = 75;


if (grade > 75) {
    console.log('passing');
} else if (grade >= 69) {
    console.log('Please see the teacher')
} else {
    console.log('Failing');
}