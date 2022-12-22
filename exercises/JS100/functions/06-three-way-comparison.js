/**
 * Compares the first string two the second string, returns -1 if the first string is shorter, 0 if they are the same length, and 1 if the second string is shorter
 * @returns -1 | 1 | 1 */
function compareByLength(firstString, secondString) {
  const firstStringLength = firstString.length;
  const secondStringLength = secondString.length;
  if (firstStringLength === secondStringLength) {
    return 0;
  } else if (firstStringLength < secondStringLength) {
    return -1;
  } else if (secondStringLength < firstStringLength) {
    return 1;
  }
}

console.log(compareByLength("patience", "perseverance")); // -1
console.log(compareByLength("strength", "dignity")); //  1
console.log(compareByLength("humor", "grace")); //  0
