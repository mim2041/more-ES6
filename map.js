/*
purpose
1. get an array
2. for every elements of the array do something
3. 
*/

const numbers = [2,8,4,6,3];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output);

function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = number * 2;
        output.push(doubled);
    }
    return output;
}

function doubleItOld(number){
    return number * 2;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

const makeDouble2 = numbers.map(x => x*2);

const fiveTimes = [1,2,3,4,5].map(x => x*5);
console.log(fiveTimes);

const result = getDoubles(numbers);
console.log(result);

