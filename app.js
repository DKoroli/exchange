const currency = [
  {
    from: "USD",
    to: "EUR",
  },
  {
    from: "USD",
    to: "MDL",
  },
  {
    from: "GBR",
    to: "MDL",
  },
  {
    from: "UAH",
    to: "MDL",
  },
  {
    from: "RON",
    to: "MDL",
  },
  {
    from: "EUR",
    to: "MDL",
  },
  {
    from: "RUB",
    to: "MDL",
  },
];

i = 0;
setInterval(function () {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.apilayer.com/exchangerates_data/convert?to=${currency[i].to}&from=${currency[i].from}&amount=2`
  );
  xhr.setRequestHeader("apikey", "1W7rableYQZhtEklmqPT9sm71m2WFUvp");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    const currencyFrom = document.getElementById("from");
    const currencyTo = document.getElementById("to");
    const currencyRates = document.getElementById("rates");
    currencyFrom.innerHTML = response.query.from;
    currencyTo.innerHTML = response.query.to;
    currencyRates.innerHTML = response.info.rate;
    i++;
    if (i > currency.length - 1) {
      i = 0;
    }
  });

  xhr.send();
}, 5000);
