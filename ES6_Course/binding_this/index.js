'use strict'

const person = {
    name: "Mosh",
    walk () {
        console.log(this)
    }
};

person.walk();

const walk = person.walk.bind(person);
console.log(walk);

// console.log(person.walk());
walk()