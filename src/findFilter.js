//Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition

//Find - returns single instance (object), returns first match, if no match - undefined
//mostly used for returning unique values

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

//filter
const youngPeople = people.filter((person) => {
  //   if (person.age < 30) {
  //     return person;
  //   }
  return person.age < 30;
});
console.log(youngPeople);
const developers = people.filter((person) => person.position === "developer");

//no match
const seniorDevs = people.filter((item) => item.position === "senior dev");
//find
const peter = people.find((person) => person.name === "peter");
//no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);
//multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === "anna");
console.log(peter.position); //designer
console.log(anna[0].position); //intern
