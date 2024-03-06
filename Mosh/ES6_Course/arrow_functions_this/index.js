"use strict"

const  person = {
    talk () {
        setTimeout(function() {
            console.log("this", this);
        }, 1000);
    }
};

const  person_2 = {
    talk () {
        let self= this;
        setTimeout(function() {
            console.log("this", self);
        }, 1000);
    }
};


// arrow functions don't rebind "this" keyword
const  person_3 = {
    talk () {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};

person.talk()
person_2.talk()
person_3.talk()