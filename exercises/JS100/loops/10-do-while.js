let counterWhile = 0;
let counterDoWhile = 0;

while (counterWhile > 0) {
  console.log(`while loop count: ${counterWhile}`);
  counterWhile -= 1;
}

do {
  console.log(`do while loop count: ${counterDoWhile}`);
  counterDoWhile -= 1;
} while (counterDoWhile > 0);
