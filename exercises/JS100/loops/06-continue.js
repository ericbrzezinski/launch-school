// Write a for loop that loops over the elements of the array.
let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

let cityArrayLength = cities.length;
for (let city of cities) {
  if (city === null) continue;
  console.log(city);
}
