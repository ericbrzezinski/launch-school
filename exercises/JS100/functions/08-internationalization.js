/**
 * Takes a ISO 639 language code returns a greeting in that language.
 */
function greet(languageCode) {
  switch (languageCode) {
    case "en":
      return "Hi!";
    case "af":
      return "Haai!";
    case "sv":
      return "Hej!";
    case "de":
      return "Hallo!";
    case "pt":
      return "Olá!";
    case "fr":
      return "Salut!";
  }
}

console.log(greet("sv"));
console.log(greet("en"));
console.log(greet("af"));
