function replaceRubyWithJavaScript(stringWithRuby) {
  const RUBY = "Ruby";
  const JAVASCRIPT = "JavaScript";
  return stringWithRuby.replace(RUBY, JAVASCRIPT);
}

console.log(replaceRubyWithJavaScript("Captain Ruby"));
