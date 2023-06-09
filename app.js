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
    from: "GBP",
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
    `http://127.0.0.1:8800?to=${currency[i].to}&from=${currency[i].from}&mount=1`
  );
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    const currencyFrom = document.getElementById("from");
    const currencyTo = document.getElementById("to");
    const currencyRates = document.getElementById("rates");
    currencyFrom.innerHTML = currency[i].from;
    currencyTo.innerHTML = currency[i].to;
    currencyRates.innerHTML = response.rate;
    i++;
    if (i > currency.length - 1) {
      i = 0;
    }
  });

  xhr.send();
}, 3000);

const exchangeFrom = document.getElementById("selectFrom");
const exchangeTo = document.getElementById("selectTo");
let amount = document.getElementById("amount");
amount.value = 1;
let curFrom;
let curTo;
let curMount;
const xhr = new XMLHttpRequest();

exchangeFrom.addEventListener("change", () => {
  curFrom = exchangeFrom.value;
  sendRequest();
  xhr.addEventListener("load", () => {
    addResult();
  });
});

exchangeTo.addEventListener("change", () => {
  curTo = exchangeTo.value;
  sendRequest();
  xhr.addEventListener("load", () => {
    addResult();
  });
});

amount.addEventListener("keyup", () => {
  curMount = amount.value;
  sendRequest();
  xhr.addEventListener("load", () => {
    addResult();
  });
});

amount.addEventListener("change", () => {
  curMount = amount.value;
  sendRequest();
  xhr.addEventListener("load", () => {
    addResult();
  });
});

function sendRequest() {
  if (
    exchangeFrom.value !== "" &&
    exchangeTo.value !== "" &&
    amount.value > 0
  ) {
    xhr.open(
      "GET",
      `http://127.0.0.1:8800/rate?to=${exchangeTo.value}&from=${exchangeFrom.value}&mount=${amount.value}`
    );
    xhr.send();
  }
}

function addResult() {
  const response = JSON.parse(xhr.response);
  const exchangeResult = document.getElementById("exchangeResult");
  exchangeResult.innerHTML = response.rate;
}
