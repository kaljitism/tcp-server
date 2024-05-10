const net = require("node:net");

const server = net.createServer((socket) => {
  socket.on("data", data => {
    console.log(data);
  })
});

server.listen(3099, "127.0.0.1", () => {
  console.log('Server running at', server.address());
});
