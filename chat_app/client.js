const net = require("net");
const readline = require("readline");

const host = "127.0.0.1";
const port = 3000;

const readMessageInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = () => {
  process.stdout.moveCursor(0, -1);
  process.stdout.cursorTo(0);
  process.stdout.clearLine();
};

const sendMessage = () => {
  readMessageInterface.question("Enter your message > ", (message) => {
    message = Buffer.from(message);
    client.write(message);
    clearLine();
    sendMessage(); // Call sendMessage again to prompt for the next message
  });
};

const client = net.createConnection({ host, port }, () => {
  console.log("connected to", host);
  sendMessage();
});

client.on("data", (data) => {
  process.stdout.cursorTo(0);
  process.stdout.clearLine();
  console.log(data.toString("utf-8"));
  sendMessage();
});
