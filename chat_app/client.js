const net = require("net");

const host = "127.0.0.1";
const port = 3000;

const client = net.createConnection({ host, port }, async () => {
  console.log("connected to", host);
});
