const net = require("net");
const readline = require("readline/promises");

const host = "127.0.0.1";
const port = 3000;
const readMessageInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sendMessage = async () => {
  const message = await readMessageInterface.question("Enter your message > ");
  client.write(message);
  // await clearLine(0);
};

// const clearLine = async (direction) => {
//   return new Promise((resolve, reject) => {
//     process.stdout.clearLine(direction, () => resolve());
//   });
// };

const client = net.createConnection({ host, port }, async () => {
  console.log("connected to", host);
  await sendMessage();
});

client.on("data", async (data) => {
  console.log(data.toString("utf-8"));
  await sendMessage();
});
