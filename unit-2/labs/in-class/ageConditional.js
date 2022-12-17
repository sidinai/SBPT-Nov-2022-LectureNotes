/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 24

// using 'else if' you have to define the age range or you won't get past >18 because as soon as it is 'true' it stops
console.log("TEST 1: ELSE IF")
if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
} else if (age >= 18 && age < 21) {
    console.log("You can vote!")
} else if (age >= 21 && age < 25) {
    console.log('You can drink!')
} else if (age >= 25) {
    console.log("You can rent a car!")
}

console.log("TEST 2: ELSE - IF IF IF")
if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
} else {
    if (age >= 18) {
        console.log("You can vote!")
    }
    if (age >= 21) {
        console.log("You can drink!")
    }
    if (age >= 25) {
        console.log("You can rent a car!")
    }
}

/*
Write a ternary that does the same thing as the age challenge
*/


//     function ageOld() {
//         return age <= 17 ? console.log("sorry..nope youngster") :
//             age >= 18 ? console.log("You can vote!") :
//             console.log("test");
//     }

// ageOld();

console.log("TEST 3: TERNARY")
age <= 17 ? console.log("sorry..nope youngster") :
    age >= 18 && age < 21 ? console.log("You can vote!") :
    age >= 21 && age < 25 ? console.log("drinking wooo!") :
    age >= 25 ? console.log("rent that carrrr") :
    console.log("test");


console.log("TEST 4: TERNARY")
age < 18 ? console.log("sorry...") : console.log("vote!");
age >= 21 ? console.log("drink!") : console.log("aw no drinky for you");
age >= 25 ? console.log("rent car you can!") : console.log("you can't rent car too bad")