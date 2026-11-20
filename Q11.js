function CloneDEEP(obj,seen = new WeakMap()) {
    if (obj===null || typeof obj !== "Object")
        return obj;

    if (seen.has(obj))
        return seen.get(obj);

    if (obj instanceof Date)
        return new Date(obj);

    let copy = Array.isArray(obj)?[]:{};
    seen.set(obj,copy);

    for (let key in obj) {
        copy[key] = CloneDEEP(obj[key],seen);
    }
    return copy;
}
let person = {
    name:"Tushar",
    age:20,
    hobbies:["Running","Writing"],
    address:{city:"Delhi" },
    date:new Date()
};
person.self = person;
let THEnewPerson = CloneDEEP(person);
console.log(THEnewPerson);
console.log(THEnewPerson.self === THEnewPerson);