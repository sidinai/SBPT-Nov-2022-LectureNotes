/* let food = [
    'Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'
];

for (item of food) {
    console.log(item)
} */


let newFoodList = [
    'apple', 'pear', 'mushroom', 'cheese', 'peach'
];

// for(let i = 0; i < newFoodList.length; i++) {
//   console.log(newFoodList[i]);
// }

newFoodList.forEach(item => console.log('For Each: ', item));
newFoodList.forEach((item, i) => {
    console.log('For Each Index: ', item, i)
});

// newFoodList.forEach(function(item) {
//     console.log('declaration sample', item);
// });

// newFoodList.forEach(infoDisplay);


// function infoDisplay(item) {
//     console.log("outside of forEach: ", item);
// }