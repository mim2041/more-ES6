const numbers = [12, 56, 87, 44];
const half = numbers.map(x => x/2);
const thirds = numbers.map(n => n/3);
// console.log(half, thirds);

const firends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = firends.map(firend => firend[0]);
// console.log(firstLetters);

const nameLengths = firends.map(n => n.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);