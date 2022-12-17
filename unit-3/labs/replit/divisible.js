//  METHOD 1

/* let divisible = function(dividend, divisor) {
    let remainder = dividend % divisor;
    console.log(remainder);
    if (remainder == 0) {
        return true
    } else {
        return false
    };
}

let divisibleone = divisible(8, 3);
let divisibletwo = divisible(8, 2);

console.log("Divisible One: ", divisibleone);
console.log("Divisible Two: ", divisibletwo); */

// METHOD 2

/* function divisible(dividend, divisor) {
    let remainder = dividend % divisor;
    console.log(remainder);
    if (remainder == 0) {
        return true
    } else {
        return false
    };
}

let divisibleone = divisible(8, 3);
console.log(divisibleone);
let divisibletwo = divisible(8, 2);
console.log(divisibletwo); */

//  METHOD 3


let divisible = (dividend, divisor) => {
    remainder = dividend % divisor;

    if (remainder === 0) {
        return `${true} remainder = ${remainder}`
    } else {
        return `${false} remainder = ${remainder}`
    };
}

divisone = divisible(8, 3);
console.log(divisone);

divistwo = divisible(8, 2);
console.log(divistwo);