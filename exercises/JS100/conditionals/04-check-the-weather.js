// weather variable initalized to sunny rainy or anything
const RAINY = "rainy";
const SNOWY = "snowy";
const SUNNY = "sunny";
let weather = RAINY;

if (weather === SUNNY) {
  console.log("It's a beautiful day!");
} else if (weather === RAINY) {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}
