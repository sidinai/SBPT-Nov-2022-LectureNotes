/*
While loop structure

while(expression) {
  code block...
}

- The main purpose for while loops are when the iteration is uncertain.
*/

let city = [
    'building', 'building', 'light pole', 'bridge', 'building', 'light poll', 'tree', 'light pole', 'empty street'
];

let structure = city[0];
let pos = 0;

while (structure != 'empty street') {
    console.log(`Spider-Man swings from the ${structure}`);
    pos++;
    structure = city[pos];
}

console.log(`Spider-Man lands in the ${structure}`);

/*
Do While

do {
  code block...
} while (expression)

-works just like while loops with the exception that it will run our code block at least once.
*/

let spidyHP = 20;
let badguys = [{
        baddie: 'Green Goblin',
        hp: 15,
    },
    {
        baddie: 'Venom',
        hp: 25,
    },
    {
        baddie: 'Stilt-Man',
        hp: 5,
    },
    {
        baddie: 'Thug',
        hp: 0,
    }
];

let rand = Math.floor(Math.random() * badguys.length);
let villian = badguys[rand];

console.log(`${villian.baddie} has appeared!`);

do {

    if (villian.baddie == "Thug") {
        console.log('Spider-Man webs thug...');
        break;
    }

    console.log(`${villian.baddie} hits Spider-Man!`)
    spidyHP--;
    console.log('Spider-Man HP: ', spidyHP);

    spidyHit = Math.floor(Math.random() * 3);
    console.log(`Spider-Man hits ${villian.baddie} for ${spidyHit} damage!!!!`);
    villian.hp -= spidyHit;
    console.log('Villian HP: ', villian.hp);

    if (spidyHP === 0) {
        break;
    }

} while (villian.hp > 0);

villian.hp <= 0 ?
    console.log(`Spider-Man captures ${villian.baddie}!`) :
    console.log(`${villian.baddie} has taken down Spider-Man!`);

let conditions = [
    'rain', 'sunny', 'snow', 'humid', 'sunny', 'snow', 'humid', 'sunny', 'snow', 'humid', 'rain', 'sunny', 'snow', 'humid', 'windy'
];


console.log("WEATHER EXAMPLE!!!")

console.log('Array Length: ', conditions.length)
console.log(conditions[0] !== 'rain');

let number = 0;
// let weather = 'sunny';

do {
    // code block that runs as long as the while expression returns true
    // exception: will run at least once.

    console.log(conditions[number]);
    number++;

    if (conditions[number] === "rain") {
        // number = 20;  // provide a "false" for our while expression
        break; // breaks out of our loop (code block)
        // number++;
        // continue; // can help us "skip" a position.
    }

    // } while (number < conditions.length);
} while (conditions[0] !== 'rain');
console.log(number);
// continues