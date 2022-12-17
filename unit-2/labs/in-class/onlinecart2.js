const firstCart = [
    4.50, 3.25, 14.99, 25.99, 42.99
];
const secondCart = [
    1.99, 13.50, 22.99, 129.00
];

const vttax = .06;
/*
function cartcost(arr) {
    // 1. add everything in cart up into the total
    let subtotal = 0;
    for (i of arr) {
        subtotal += i;
        console.log(`new total: ${subtotal}`)
    }
    let tax = subtotal * vttax
    carttotal = subtotal + tax
}
cartcost(firstCart);
console.log(`Total: $${carttotal.toFixed(2)}`) */

let carttotal = (cartarray) => {
    subtotal = 0
    for (i = 0; i < cartarray.length; i++) {
        subtotal += cartarray[i];
        console.log(`subtotal: ${subtotal}`)
    }
    let tax = subtotal * vttax;
    total = tax + subtotal
}

carttotal(secondCart);
console.log(`Total: $${total.toFixed(2)}`);







// !Challenge
/*   Provided are two arrays of item expenses held within an "online cart".

  - Create a variable that represents sales tax. This will need to hold a number. *can be sales tax in your area or a made-up value.

  - Create a variable that will hold the total of this online cart.

  - Create a function that accepts an array as a parameter.
      - generate a subtotal of all the items provided through the array.
      - Update your total variable with the subtotal and sales tax.

  - Invoke your function by passing in the individual arrays provided.

  - Using string interpolation, console log "Total: [cart total]"
      - hint: https://www.w3schools.com/jsref/jsref_tofixed.asp */