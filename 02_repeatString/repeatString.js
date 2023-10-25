const repeatString = function (string, num) {
  let stringRepeated = "";

  if (num >= 0) {
    for (i = 0; i < num; i++) {
      stringRepeated += string;
    }
    return stringRepeated;
  }

  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
