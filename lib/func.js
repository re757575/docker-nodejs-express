exports.sanitize = function(word) {
  return word.toLowerCase().replace(/-/g, ' ').trim();
}

exports.tokenize = function(sentence) {
  return sentence.split(' ');
}
