// ! Loops

/*
FOR
  - Takes in 3 parameters
      - initial expression
      - condition
      - increment expression

  Structure:

  for (initial expression; condition; increment expression) {
    ...code block
  }

*/

for (i = 0; i < 10; i++) {
    console.log(i);
}
console.log('out of loop');

for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Challenge: using a for loop, count from 10 to 0, going down by 1

for (i = 10; i > 0; i--) {
    let x = 10 + i;
    console.log(i, x);
}

// use the curly brackets but know that if using a straight returen, don't need curly brackets.
for (i = 10; i > 0; i--) console.log(i);

let firstName = 'Durmick';
for (let i = 0; i < firstName.length; i++) {
    console.log(firstName[i], i);
}

let sum = 0;
for (i = 0; i <= 2; i++) {
    sum += i;
    console.log(sum);
}

// console.log(sum)


// ! For In
let student = {
    name: "Peter",
    awesome: true,
    degree: 'JS',
    week: 1
}

console.log(student["name"]); // pulls out the value of "name" from the object.


for (item in student) {
    console.log(item); // notes each key in the object
    console.log(student[item]); // notes the value of each key
}

let catArray = [
    'tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'
];

for (cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);
}

//! For of
// for (item of student) {
//     console.log(item);
// }

// for (cat of catArray) {
//     console.log('FOR OF: ', cat);
// }

for (cat of catArray) {
    if (cat === 'tabby') {
        console.log(cat);
    } else {
        console.log("not tabby");
    }
}

for (cat of catArray) {
    if (cat === 'tabby');
}