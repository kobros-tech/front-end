import { Teacher } from "./teacher";

const teacher = new Teacher("Mosh", "MSc");

console.log(teacher.name, teacher.degree)
teacher.walk();
teacher.teach();


// To enable "import" keyword

// install esm by running this command:
// npm install --save esm

// then, run node with esm argument like this:
// node -r esm index.js

// Reference:
// https://timonweb.com/javascript/how-to-enable-ecmascript-6-imports-in-nodejs/
