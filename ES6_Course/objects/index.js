const person = {
    name: "Mosh",
    walk: function () {},
    talk() {}
}

console.log(person.walk)
console.log(person.talk)
console.log(person.talk())

person.name = '';
const targetMember = "name";
console.log(person[targetMember])
console.log(person[targetMember.value])

person[targetMember.value] = "John"
person[targetMember] = "John"
console.log(person[targetMember.value])
console.log(person[targetMember])
