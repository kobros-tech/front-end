
// another.constructor will return the Circle function
// but, circle.constructor will return the built-in Object function

// these are some of the default constructor functions
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...


// factory function
function createCircle(radius) {
    return {
        radius,
        location: {
            x: 1,
            y: 1
        },
        draw: function() {
            console.log("draw");
        }
    };
}

const circle = createCircle(1);

// contructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

// "new" keyword creates an empty object {}, and makes "this" keyword refer to that object
// without "new" keyword "this" will refer to the global object
const another = new Circle(1);
