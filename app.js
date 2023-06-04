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

let i = 0;
setInterval(function () {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `http://127.0.0.1:8080?to=${currency[i].to}&from=${currency[i].from}`
  );
  xhr.addEventListener("load", () => {
    console.log("i before:", i);
    const response = JSON.parse(xhr.response);
    console.log(response);
    const currencyFrom = document.getElementById("from");
    const currencyTo = document.getElementById("to");
    const currencyRates = document.getElementById("rates");
    currencyFrom.innerHTML = response.from;
    currencyTo.innerHTML = response.to;
    currencyRates.innerHTML = response.rate;
    i++;
    console.log("i after:", i);
    if (i > currency.length - 1) {
      i = 0;
    }
  });

  xhr.send();
}, 5000);
