'use strict'

const person = {
    name: "Mosh",
    walk () {
        console.log(this)
    }
};

person.walk();

const walk = person.walk;
console.log(walk);

// console.log(person.walk());
walk()