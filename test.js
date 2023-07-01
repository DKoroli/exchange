const exchange = {
  USD: 1,
  EUR: 0.93,
  MDL: 17.83,
  GBP: 0.8,
  UAH: 36.94,
  RON: 4.6,
  RUB: 82.48,
};

let convfrom = "USD";
let convto = "MDL";
let convfromValidation = false;
let convtoValidation = false;

function validateWithFor(variable, valid) {
  let arrForValidation = Object.keys(exchange);
  for (i = 0; i < arrForValidation.length; i++) {
    if (variable == arrForValidation[i]) {
      return (valid = true);
    }
  }
}

let a = validateWithFor(convfrom, convfromValidation);

console.log(a);
