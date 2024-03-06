// var --> function
// let --> block
// const --> block

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

sayHello();

const x = 1;
x = 2;