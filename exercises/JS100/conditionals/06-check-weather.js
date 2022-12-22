// weather variable initalized to sunny rainy or anything
const RAINY = "rainy";
const SNOWY = "snowy";
const SUNNY = "sunny";
let weather = SNOWY;

switch (weather) {
  case SUNNY: {
    console.log("It's nice outside!");
    break;
  }
  case RAINY: {
    console.log("Get the umbrella.");
    break;
  }
  case SNOWY: {
    console.log("Get your Winter Coat!");
    break;
  }
  default:
    console.log("Let's stay inside.");
    break;
}
