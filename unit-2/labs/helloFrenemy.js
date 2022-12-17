function checkArray(name) {
    let enemyArray = ['darth vader', 'lex luthor', 'shego', 'joker']
    if (enemyArray.includes(name)) {
        console.log("you are an enemy of the people")
    } else {
        console.log("you good")
    }
}

console.log(checkArray('darth vader'))

/*
function greeter(name) {
    for (i = 0; i < enemyArray.length; i++)
        if (enemyArray[i] == name) {
            console.log(`go away ${name}!`);
        } else {
            console.log(`hello, ${name}, so lovely to see you`);
        }
}

greeter('shego');
 */

/* function respond(name) {
    name = name.toLowerCase()
    if (name == "darth vader") {
        console.log("Noo! That's impossible!")
    } else if (name == "lex luthor") {
        console.log(`Be gone, ${name}!`)
    } else if (name == 'luke skywalker') {
        console.log(`Hello ${name}, you are a friend of the force!`)
    }

}

respond('darth vader');
// should print 'Noooooo! That's impossible!'
respond('lex luthor');
// should print 'Be gone, you villian!!!'
respond('luke skywalker'); */