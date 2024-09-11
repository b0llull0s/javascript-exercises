const palindromes = function (str) {
// Normalize the string by converting to lowercase and removing non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
};
// Do not edit below this line
module.exports = palindromes;
