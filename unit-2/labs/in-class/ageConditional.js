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

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
} else if (age >= 18 && age < 21) {
    console.log("You can vote!")
} else if (age >= 21 && age < 25) {
    console.log('You can drink!')
} else if (age >= 25) {
    console.log("You can rent a car!")
}