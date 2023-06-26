const http = require("http");

const exchange = {
  USD: 1,
  EUR: 0.93,
  MDL: 17.83,
  GBP: 0.8,
  UAH: 36.94,
  RON: 4.6,
  RUB: 82.48,
};

console.log("startin exchange server...");
const exServer = http.createServer(converter);
exServer.listen(8800);

function converter(req, res) {
  const convString = new URLSearchParams(req.url);
  let convfrom = convString.get("from");
  let convto = convString.get("/?to");
  let convmount = convString.get("mount");
  if (convfrom.length === 3 && convto.length === 3 && convmount > 0) {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const response = {};
    let to = exchange[convto];
    let from = exchange[convfrom];
    let intermediate = (to / from) * convmount;
    response.rate = intermediate.toFixed(2);
    res.write(JSON.stringify(response));
    res.end();
  }
}
console.log("the end of exchange server...");
