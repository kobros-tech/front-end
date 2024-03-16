
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const another = new Circle(1);


// here is how the above code is implemented interally
// "Circle" has a constructor function called "Function"
const Circle_2 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
`);

const the_other = new Circle_2(1);


// also this expression is the same when using "new" keyword
const the_another = Circle.call({}, 1);

// we use apply method if we have many arguments need to pass in to the function, in this case we pass them as a list
Circle.apply({}, [1]);