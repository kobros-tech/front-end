const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined_2 = [...first, "a", ...second, "b"];

console.log(combined);
console.log(combined_2);

// ****************************************************************

const first_2 = { name: "Mosh" };
const second_2 = { job: "Instructor" };

const combined_3 = { ...first_2, ...second_2, location: "Australia" };
console.log(combined_3)