const http = require("http");

const informer = [
  {
    from: "USD",
    to: "EUR",
    rate: "1.04",
  },
  {
    from: "USD",
    to: "MDL",
    rate: "17.83",
  },
  {
    from: "GBP",
    to: "MDL",
    rate: "22.14",
  },
  {
    from: "UAH",
    to: "MDL",
    rate: "0.48",
  },
  {
    from: "RON",
    to: "MDL",
    rate: "4.15",
  },
  {
    from: "EUR",
    to: "MDL",
    rate: "19.64",
  },
  {
    from: "RUB",
    to: "MDL",
    rate: "0.33",
  },
];

const exchange = {
  EUR: 0.93,
  MDL: 17.83,
  GBP: 0.8,
  UAH: 36.94,
  RON: 4.6,
  RUB: 82.48,
};

// [
//   {
//     from: "USD",
//     to: "EUR",
//     rate: "0.93",
//   },
//   {
//     from: "USD",
//     to: "MDL",
//     rate: "17.83",
//   },
//   {
//     from: "USD",
//     to: "GBP",
//     rate: "0.80",
//   },
//   {
//     from: "USD",
//     to: "UAH",
//     rate: "36.94",
//   },
//   {
//     from: "USD",
//     to: "RON",
//     rate: "4.60",
//   },
//   {
//     from: "USD",
//     to: "RUB",
//     rate: "82.48",
//   },
// ];
//формула: (to/from)*mount

console.log("startin exchange server...");
const exServer = http.createServer(converter);
exServer.listen(8800);

function converter(req, res) {
  const convString = new URLSearchParams(req.url);
  let convfrom = convString.get("from");
  let convto = convString.get("/?to");
  let convmount = convString.get("mount");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  
  console.log("To:", convto, "From:", convfrom, "Mount:", convmount);
  console.log(req.url);
}
console.log("the end of exchange server...");

console.log("starting informer server...");
const infoServer = http.createServer(handler);
infoServer.listen(8080);

function handler(req, res) {
  const queryString = new URLSearchParams(req.url);
  let queryfrom = queryString.get("from");
  let queryto = queryString.get("/?to");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  let response = {};
  for (let i = 0; i < informer.length; i++) {
    if (informer[i].from == queryfrom && informer[i].to == queryto) {
      response = informer[i];
      res.write(JSON.stringify(response));
      res.end();
      return;
    }
  }
  response = { status: "error", message: "NOT FOUND" };
  res.write(JSON.stringify(response));

  res.end();
}

console.log("in the end of informer server");
