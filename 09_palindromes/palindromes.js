const palindromes = function (string) {
  let initialString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedString = initialString.split("").reverse().join("");
  return initialString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
