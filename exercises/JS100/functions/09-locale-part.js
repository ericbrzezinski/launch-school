/**
 * A locale is combination of a language code a region and a character set.
 * @example
 *   'en_US.UTF-8' → en
 */
function extractRegion(locale) {
  return locale.substring(0, locale.indexOf("_"));
}
console.log(extractRegion("en_US.UTF-8")); // 'en'
console.log(extractRegion("en_GB.UTF-8")); // 'en'
console.log(extractRegion("ko_KR.UTF-16")); // 'ko'
