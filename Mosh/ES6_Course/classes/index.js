// const person = {
//     name: "Mosh",

//     walk() {
//         console.log("walk");
//     }
// };

class Person {
    constructor(name) {
        this.name = name;
    }
    
    walk() {
        console.log("walk");
    }
}

const person = new Person ("Mosh");
console.log(person.name)
person.walk()