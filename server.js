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
  console.log("url", req.url);
  console.log("method", req.method);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  let response = {};

  if (req.url == "?to=EUR&from=USD") {
    response = exchange[0];
    res.write(JSON.stringify(response));
  } else if (req.url == "?to=MDL&from=USD") {
    response = exchange[1];
    res.write(JSON.stringify(response));
  } else if (req.url == "?to=MDL&from=GBR") {
    response = exchange[2];
    res.write(JSON.stringify(response));
  } else if (req.url == "?to=MDL&from=UAH") {
    response = exchange[3];
    res.write(JSON.stringify(response));
  } else if (req.url == "?to=MDL&from=RON") {
    response = exchange[4];
    res.write(JSON.stringify(response));
  } else if (req.url == "?to=MDL&from=EUR") {
    response = exchange[5];
    res.write(JSON.stringify(response));
  } else if (req.url == "?to=MDL&from=RUB") {
    response = exchange[6];
    res.write(JSON.stringify(response));
  } else {
    response = { status: "error", message: "NOT FOUND" };
    res.write(JSON.stringify(response));
  }
  console.log(req.url);
  console.log(JSON.stringify(response));

  res.end();
}

console.log("in the end");
