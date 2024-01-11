const net = require("net");

const port = 3000;
const hostingInterface = "127.0.0.1";

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("A new connection to the server.");
});

server.listen(port, hostingInterface, () => {
  console.log("Server listening on", server.address());
});
