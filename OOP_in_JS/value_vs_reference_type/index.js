
// primitives (Value Types) are copied by their value
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);


// objects (Reference Types) are copied by their reference
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);


// Value Types:
// Number, String, Boolean, Symbol, undefined, null

// Reference Types:
// Object, Function, Array