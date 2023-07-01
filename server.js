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
  if (req.url == "/favicon.ico") {
    res.writeHead(404, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    let response;
    response = { status: "error", message: "Favicon.ico absent" };
    res.write(JSON.stringify(response));
    res.end();
    return;
  }

  let url = new URL("http://" + req.headers.host + req.url);
  let convString = new URLSearchParams(url.search);
  let convfrom = convString.get("from");
  let convto = convString.get("to");
  let convmount = convString.get("mount");
  let response = {};
  console.log("convfrom:", convfrom);
  console.log("convto:", convto);
  console.log("convmount:", convmount);
  if (convfrom.length !== 3 || convto.length !== 3 || convmount <= 0) {
    let response;
    res.writeHead(400, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    response = { status: "error", message: "Invalid data" };
    res.write(JSON.stringify(response));
    console.log("before return:", JSON.stringify(response));
    res.end();
    return;
  }
  let convfromValidation = false;
  let convtoValidation = false;

  function validateWithFor(variable, valid) {
    let arrForValidation = Object.keys(exchange);
    for (i = 0; i < arrForValidation.length; i++) {
      if (variable == arrForValidation[i]) {
        valid = true;
      }
    }
  }
  //  {
  //   console.log("array [i]:", arrForValidation[i]);
  //   console.log("type of array [i]:", typeof arrForValidation[i]);
  //    {
  //     res.writeHead(403, {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     });
  //     let response;
  //     response = { status: "error", message: "Currency doesn't match" };
  //     res.write(JSON.stringify(response));
  //     res.end();
  //     return;
  //   }
  // }

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  let to = exchange[convto];
  let from = exchange[convfrom];
  let intermediate = (to / from) * convmount;
  response.rate = intermediate.toFixed(2);
  res.write(JSON.stringify(response));
  console.log("after return:", JSON.stringify(response));

  res.end();
}
console.log("the end of exchange server...");
