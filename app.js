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

setInterval(function () {
  const xhr = new XMLHttpRequest();
  // let i = 0;
  xhr.open(
    "GET",
    `http://127.0.0.1:8080?to=${currency[0].to}&from=${currency[0].from}`
  );
  // xhr.setRequestHeader("apikey", "1W7rableYQZhtEklmqPT9sm71m2WFUvp");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    console.log(response);
    const currencyFrom = document.getElementById("from");
    const currencyTo = document.getElementById("to");
    const currencyRates = document.getElementById("rates");
    currencyFrom.innerHTML = response.query.from;
    currencyTo.innerHTML = response.query.to;
    currencyRates.innerHTML = response.info.rate;
    // if (i > currency.length - 1) {
    //   i = 0;
    // }
    // i++;
  });

  xhr.send();
}, 5000);
