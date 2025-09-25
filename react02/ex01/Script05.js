const user = { name: "김", age: 25 };
const updatedUser = { ...user, age: 26 };
const numbers = [1, 2];
const moreNumbers = [...numbers, 3];
console.log(updatedUser);
console.log(moreNumbers);