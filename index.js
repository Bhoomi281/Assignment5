var http = require("http");

const httpServer = http.createServer(handleServer);

let PORT = 8081;

function handleServer(req, res) {
  const { url } = req;
  if (url === "/welcome") {
    res.end(" Welcome to Dominos!");
  } else if (url === "/contact") {
    res.end(`{  
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
           }
           `);
  } else {
    res.writeHead(404);
    res.end("404 Error");
  }
}

httpServer.listen(PORT, () => {
  console.log("server is running on" + " " + PORT);
});

module.exports = httpServer;
