const express = require('express');
const app = express();
const http = require("https");
const cors = require("cors");
const { Server } = require("socket.io")
app.use(cors());

const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "https://localhost:3000",
        method: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })
})


server.listen(3001, () => {
    console.log("SERVER Started RUNNING");
})