const currency = [
  {
    from: "USD",
    to: "EUR",
    rates: "1.05",
  },
  {
    from: "USD",
    to: "MDL",
    rates: "17.54",
  },
  {
    from: "GBR",
    to: "MDL",
    rates: "24.13",
  },
  {
    from: "UAH",
    to: "MDL",
    rates: "0.45",
  },
];
let i = 0;
setInterval(function () {
  let currencyFrom = document.getElementById("from");
  let currencyTo = document.getElementById("to");
  let currencyRates = document.getElementById("rates");
  currencyFrom.innerHTML = currency[i].from;
  currencyTo.innerHTML = currency[i].to;
  currencyRates.innerHTML = currency[i].rates;
  i++;
  if (i > currency.length - 1) {
    i = 0;
  }
}, 5000);

console.log(currency);
