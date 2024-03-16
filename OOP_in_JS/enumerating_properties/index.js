
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(10);

// iterate over all properties and methods
for (let key in circle) {
    console.log(key, circle[key]);
}

// iterate over all properties only
for (let key in circle) {
    if (typeof circle[key] !== "function") {
        console.log(key, circle[key]);
    }
}

// list all properties and methods as an array
const keys = Object.keys(circle);
console.log(keys);

// search for specific key
if ('radius' in circle) {
    console.log("Circle has radius");
}