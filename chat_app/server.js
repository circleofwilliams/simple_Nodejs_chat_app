const net = require("net");

const port = 3000;
const hostingInterface = "127.0.0.1";
let sockets = [];
let clientsUsername = [];

const server = net.createServer();

server.on("connection", (socket) => {
  let firstMessage = true;
  let tag;

  console.log("A new connection to the server.");
  socket.write("...Kindly enter your username...");

  socket.on("data", (data) => {
    if (firstMessage) {
      const userName = data.toString();
      tag = userName;
      clientsUsername.push(userName);
      sockets.push(socket);
      firstMessage = false;
      sockets.map((s) => {
        if (s == socket) socket.write("You joined the chat!");
        else {
          message = "Alert: " + tag + " joined the chat!";
          s.write(message);
        }
      });
      console.log(
        "Number of users",
        clientsUsername.length,
        ": ",
        clientsUsername
      );
    } else {
      const socketIndex = sockets.indexOf(socket);
      let sendersTag = clientsUsername[socketIndex];
      sockets.map((s) => {
        if (s == socket) {
          message = "You: " + data.toString();
          s.write(message);
        } else {
          message = sendersTag + ": " + data.toString();
          s.write(message);
        }
      });
    }
  });
});

server.listen(port, hostingInterface, () => {
  console.log("Server listening on", server.address());
});
