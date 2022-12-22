function sumTwo(addend1, addend2) {
  return addend1 + addend2;
}

function sumAll(...addends) {
  return addends.reduce((previousNumber, currentNumber) => {
    return previousNumber + currentNumber;
  }, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); //15
console.log(sumTwo(9, 2)); //11
