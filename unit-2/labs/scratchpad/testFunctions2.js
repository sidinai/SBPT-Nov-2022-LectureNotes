let goodbye = () => console.log('goodbye');
goodbye();

let total = () => console.log(2 + 2);
// let isFour = total();
// console.log(isFour);
total();

let totale = () => 3 + 2;
let isFive = totale();
console.log(isFive);


let apples = qty => {
    return `There are ${qty} apples.`
};

let appleCount = apples(4);
console.log(appleCount);


let apples2 = amount => `There are ${amount} apples`;
let newAppleCount = apples2(isFive);
console.log(newAppleCount);