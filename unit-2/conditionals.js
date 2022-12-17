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

// ! Switch
/*
keywords:
    - switch
    - case
    - break
        - takes us out of our code block
    - default
        - run if no cases match

Structure:

switch(expression){
    case ... :
        return;
        break;
    case ... :
        return;
        break;
    case ... :
        return;
        break;
    default:
        return;
}
*/

let officeCharacter = "Jim";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactice");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let num = 5;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran')
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
        break;
}

// ! Ternary
/*
Always an if/else condition at minimum.

Structure:
expression ? true : false;
*/

// let expression = true;
// let expression = false;

// if (true) {
//     console.log('Runs true');
// } else {
//     console.log("Runs False");
// }

// expression ? consolee.log('runs true') : console.log('runs false');

let newerNum = 6;
newerNum > 0 ? console.log('yes') : console.log('no');

// as an if/else
if (newerNum > 0) {
    console.log('yes');
} else {
    console.log('no');
}

//* Else/If
// if (newerNum == 0) {
//     console.log('Hello');
// } else if (newerNum < 0) {
//     console.log('hi');
// } else {
//     console.log('goodbye');
// }

(newerNum === 5) ?
console.log('Hello'): console.log(newerNum > 0) ?
    console.log('hi') :
    console.log('goodbye again');


let numOne = 3;
let numTwo = 2;
let value = ((numOne + numTwo) > 1) ? (numOne + numTwo) : 0;
console.log(value);