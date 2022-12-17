const firstCart = [
    4.50, 3.25, 14.99, 25.99, 42.99
];
const secondCart = [
    1.99, 13.50, 22.99, 129.00
];


// *METHOD 1
/* let salesTax = 0.06;
let total = 0;

function ringUp(arr) {
    let subtotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subtotal += arr[i];
        console.log(subtotal)
    }
    let total = subtotal * (1 + salesTax);
    total = `$` + total.toFixed(2);
    console.log(typeof total);
    return total;
}

console.log(`Total: ${ringUp(firstCart)}`);
console.log(`Total: ${ringUp(secondCart)}`);
 */

// *METHOD 2
/* let tax = 0.6;

function priceCalc(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    total = total + (total * tax);
    console.log(`Total: ${total.toFixed(2)}`)
}

priceCalc(firstCart);
priceCalc(firstCart);
priceCalc(secondCart); */

/*
! Challenge
  Provided are two arrays of item expenses held within an "online cart".

  - Create a variable that represents sales tax. This will need to hold a number. *can be sales tax in your area or a made-up value.

  - Create a variable that will hold the total of this online cart.

  - Create a function that accepts an array as a parameter.
      - generate a subtotal of all the items provided through the array.
      - Update your total variable with the subtotal and sales tax.

  - Invoke your function by passing in the individual arrays provided.

  - Using string interpolation, console log "Total: [cart total]"
      - hint: https://www.w3schools.com/jsref/jsref_tofixed.asp
*/

let salesTax = .075;
let total;

let calcShoppingCart = (cartArray) => {
    // console.log(cartArray);
    let subtotal = 0;

    for (cost of cartArray) {
        // console.log('cost: ', cost); // viewing the value within the array as an individual piece
        subtotal += cost;
        // subtotal = subtotal + cost;
        // console.log('sub after adding:', subtotal); // state of subtotal after adding the individual piece
        console.log('sub after adding:', subtotal);
    }

    // console.log(subtotal);
    let tax = subtotal * salesTax;
    total = subtotal + tax;
}

calcShoppingCart(firstCart);
console.log(`Total: $${total.toFixed(2)}`);
calcShoppingCart(secondCart);
console.log(`Total: $${total.toFixed(2)}`);