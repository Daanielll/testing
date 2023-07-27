function capitalize(word) {
  const first = word.charAt(0).toUpperCase();
  const second = word.slice(1);
  return first + second;
}

module.exports = capitalize;
