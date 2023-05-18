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
];

setInterval(function () {
  let currencyFrom = document.getElementById("from");
  let currencyTo = document.getElementById("to");
  let currencyRates = document.getElementById("rates");
  currencyFrom.innerHTML = currency[0].from;
  currencyTo.innerHTML = currency[0].to;
  currencyRates.innerHTML = currency[0].rates;
}, 5000);
