const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map((number)=>number*2)
 
console.log(doubles); // [2, 4, 6, 8, 10]

const strnumbers = ["1", "2", "3", "4", "5"];

const numbermascero = strnumbers.map((number)=>number+0)

console.log(numbermascero); // ["10", "20", "30", "40", "50"]