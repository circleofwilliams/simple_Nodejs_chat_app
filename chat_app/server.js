const net = require("net");

const port = 3000;
const hostingInterface = "127.0.0.1";
let clients = [];

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("A new connection to the server.");
  clients.push(socket);
  console.log("Number of users", clients.length);

  socket.on("data", (data) => {
    clients.map((c) => {
      c.write(data);
    });
    // socket.write(data);
  });
});

server.listen(port, hostingInterface, () => {
  console.log("Server listening on", server.address());
});
