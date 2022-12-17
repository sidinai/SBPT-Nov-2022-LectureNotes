//  METHOD 1
/* function capitalize(string) {
    let firstLetter = string[0].toUpperCase();
    let restOfWord = string.slice(1).toLowerCase();
    return firstLetter + restOfWord


console.log(capitalize('tomato'));
console.log(capitalize('BACON'));
console.log(capitalize('LeTTuCe'));
console.log(capitalize('mayonnAISE')); */


//  METHOD 2
let capitalize = (string) => {
    let firstLetter = string.charAt(0).toUpperCase();
    let restOfWord = string.slice(1).toLowerCase();
    return firstLetter + restOfWord
}

console.log(capitalize('tomato'));
console.log(capitalize('BACON'));
console.log(capitalize('LeTTuCe'));
console.log(capitalize('mayonnAISE'));