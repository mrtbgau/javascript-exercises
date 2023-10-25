const sumAll = function (start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  let sum = 0;
  const min = Math.min(start, end);
  const max = Math.max(start, end);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
