const convertToCelsius = function (temp) {
  const FACTEUR_CONVERSION = 5 / 9;
  const POINT_CONGELATION_F = 32;

  let celsius = (temp - POINT_CONGELATION_F) * FACTEUR_CONVERSION;

  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const FACTEUR_CONVERSION = 9 / 5;
  const POINT_CONGELATION_F = 32;

  let fahrenheint = temp * FACTEUR_CONVERSION + POINT_CONGELATION_F;

  return parseFloat(fahrenheint.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
