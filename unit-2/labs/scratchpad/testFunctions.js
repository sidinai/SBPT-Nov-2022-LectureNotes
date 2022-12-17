let goodbye = () => console.log('goodbye');
goodbye();

let total = () => 2 + 2;
let isFour = total();
console.log(isFour);
// *Block Body
let apples = qty => {
    return `There are ${qty} apples.`
};

let appleCount = apples(4);
console.log(appleCount);

// ? same function above as concise body
let apples2 = qty => `There are ${qty} apples`;
let newAppleCount = apples2(5);
console.log(newAppleCount);