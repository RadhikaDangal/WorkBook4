function compareAscendingNumber(a, b) {
  if (a < b) return -1; // right order
  else if (a == b) return 0; // same values
  else return 1; // swap, wrong order
}

let numbers = [3, 27, 400, 1, 111, 5];
numbers.sort(compareAscendingNumber);
console.log(numbers);

console.log("---------------");

numbers.sort(function (a, b) {
  if (a > b) return -1; // right order
  else if (a == b) return 0; // same values
  else return 1; // swap, wrong order
});
console.log(numbers);