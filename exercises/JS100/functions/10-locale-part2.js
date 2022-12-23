/**
 * A locale is combination of a language code a region and a character set.
 * @example
 *   'en_US.UTF-8' → en
 */
function extractRegion(locale) {
  return locale.substring(locale.indexOf("_") + 1, locale.indexOf("."));
}
console.log(extractRegion("en_US.UTF-8"));
console.log(extractRegion("en_GB.UTF-8"));
console.log(extractRegion("ko_KR.UTF-16"));
