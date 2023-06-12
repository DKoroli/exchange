const http = require("http");

const exchange = [
  {
    from: "USD",
    to: "EUR",
    rate: "1.04",
  },
  {
    from: "USD",
    to: "MDL",
    rate: "17.56",
  },
  {
    from: "GBR",
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

console.log("starting server...");
const server = http.createServer(handler);
server.listen(8080);

function handler(req, res) {
  const queryString = new URLSearchParams(req.url);
  let queryfrom = queryString.get("from");
  let queryto = queryString.get("/?to");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  let response = {};
  for (let i = 0; i < exchange.length; i++) {
    if (exchange[i].from == queryfrom && exchange[i].to == queryto) {
      response = exchange[i];
      res.write(JSON.stringify(response));
      res.end();
      return;
    }
  }
  response = { status: "error", message: "NOT FOUND" };
  res.write(JSON.stringify(response));

  res.end();
}

console.log("in the end");
