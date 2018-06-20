function sortByStrings(s, t) {
  let result = "";
  // character frequency counter
  let charMap = new Map();
  for (let char of s) {
    charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
  }
  for (let char of t) {
    result += charMap.has(char) ? char.repeat(charMap.get(char)) : "";
  }
  return result;
}
