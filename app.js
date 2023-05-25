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

const obj = {
  success: true,
  query: {
    from: "UAH",
    to: "MDL",
    amount: 2,
  },
  info: {
    timestamp: 1684956963,
    rate: 0.480945,
  },
  date: "2023-05-24",
  result: 0.96189,
};

const str = JSON.stringify(obj);

const res = JSON.parse(str);

console.log(res);

let i = 0;
setInterval(function () {
  const currencyFrom = document.getElementById("from");
  const currencyTo = document.getElementById("to");
  const currencyRates = document.getElementById("rates");
  const currencyOnline = document.getElementById("online");
  currencyFrom.innerHTML = currency[i].from;
  currencyTo.innerHTML = currency[i].to;
  currencyRates.innerHTML = currency[i].rates;
  currencyOnline.innerHTML = res.info.rate;
  i++;
  if (i > currency.length - 1) {
    i = 0;
  }
}, 5000);
