const fibonacci = function (n) {
  if (parseInt(n) < 0) {
    return "OOPS";
  } else if (parseInt(n) < 2) {
    return parseInt(n);
  } else {
    return fibonacci(parseInt(n) - 2) + fibonacci(parseInt(n) - 1);
  }
};

// Do not edit below this line
module.exports = fibonacci;
