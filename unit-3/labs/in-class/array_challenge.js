/*
- First check if you are working with an array
    - Using a method, flip the values within the array
    (what was in index 5 is now in 0, 4 to 1, etc.)
    - Using a method, print the values of the newly arranged array

    hint:
    - search something like "arrays", "javascript", "reverse"
    - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);

/* function flip() {
    let flipped = arr.reverse();
    console.log(flipped)
}

flip(); */


function reverseArray(a, i) {
    var rewind = [];
    while (a.length > 0) {
        rewind.push(a.pop())
        console.log(`this is the array ${a}`)
        console.log(`This is the rewind empty array ${rewind}`)
    };
    return rewind
}

let newarray = reverseArray(arr)

console.log(newarray);


// reverseArrayarr.forEach((item, i) => {
//     console.log('For Each Index: ', item, i)
// })

// let newFoodList = [
//     'apple', 'pear', 'mushroom', 'cheese', 'peach'
// ];

// newFoodList.forEach(item => console.log('For Each: ', item));
// newFoodList.forEach((item, i) => {
//     console.log('For Each Index: ', item, i)
// });

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies (4 qty)
    - Use .forEach() to list your movies
    - Add another movie at the end
        - Use .forEach() to list your movies
    - And replace one of your existing movies with another one.
        - Use .forEach() to list your movies
*/




// ERIC SOLUTIONS

let arr1 = [1, 2, 3, 4, 5];

// console.log(arr instanceof Array);
if (arr instanceof Array) {
    let reversed = arr.reverse();
    console.log(reversed);
} else {
    console.log('not an array');
}

let movies = ['pirates1', 'pirates2', 'pirates3', 'pirates4']

movies.forEach(item => console.log("for Each: ", item));
movies.push("pirates5");
movies.forEach(item => console.log("for Each: ", item));
movies.splice(2, 1, "zombie");
movies.forEach(item => console.log("for Each: ", item));