var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/welcome") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(" Welcome to Dominos!");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, { "content-type": "text/plain", "keep-alive": 10 });
    res.write("Page not found");
    res.end();
  }
}

module.exports = httpServer;
