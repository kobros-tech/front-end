
// abstraction means hide the details and show the essentials

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log("draw");
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) 
                throw new Error("Invalid Location");
            
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.draw();
circle.getDefaultLocation();
circle.defaultLocation = { x: 5, y: 5};
