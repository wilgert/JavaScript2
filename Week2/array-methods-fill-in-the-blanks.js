const numbers = [3, 5, 3, 6];
const double = [];

numbers.forEach(number => {
  double.push(number * 2);
});

console.log(double);

const doubleFromMap = numbers.map(number => number * 2);

const sliced = numbers.slice(1, 2);

const reversed = numbers.slice().reverse();
console.log(numbers);
console.log(reversed);
