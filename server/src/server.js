const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const { Server } = require("socket.io");
const serverListener = server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//   },
// });
// let messages = [];
// io.on("connection", (socket) => {
//   console.log(`user connected ${socket.id}`);
//   socket.on("send_message", (chunk) => {
//     messages.push(chunk);
//     console.log(messages);
//     socket.broadcast.emit("receive_message", messages);
//   });
// });
