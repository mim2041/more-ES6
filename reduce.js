// map, forEach, filter, find, reduce
const numbers = [1,2,3,4,5];
// .reduce(accumulatorFunction, initial value)
// AC use two parameters
const total = numbers.reduce( (previous, current) => previous + current, 0);
console.log(total);