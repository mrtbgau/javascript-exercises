const add = function (...lesArguments) {
  let result = 0;

  for (unArgument of lesArguments) {
    result += unArgument;
  }

  return result;
};

const subtract = function (...lesArguments) {
  return lesArguments[0] - lesArguments[1];
};

const sum = function (array) {
  let result = 0;

  if (array.length == 0) {
    return result;
  }

  for (item of array) {
    result += item;
  }

  return result;
};

const multiply = function (array) {
  let product = 1;

  for (item of array) {
    product *= item;
  }

  return product;
};

const power = function (...args) {
  let result = 1;

  for (i = 0; i < args[1]; i++) {
    result *= args[0];
  }

  return result;
};

const factorial = function (number) {
  let result = 1;

  if (number == 0 || number == 1) {
    return 1;
  }

  while (number != 1) {
    result *= number--;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
