import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

app.use(cors());

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Optionally emit a welcome message to the newly connected socket
    socket.emit("Welcome", `Welcome to the server, ${socket.id}`);

    // Listen for messages sent by clients
    socket.on("message", ({ room, message }) => {
        console.log({ room, message });
        
        if (room) {
            // Send to specific room if it exists
            io.to(room).emit("receive-message", { message, room });
        } else {
            // Broadcast to all clients if no room is specified
            socket.broadcast.emit("broadcast-message", { message });
        }
    });

    // Handle socket disconnection
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

app.get("/api/server", (req, res) => {
    res.status(200).json({ msg: "Hello From Server" });
});

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello From Server Root</h1>");
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}/api/server`);
});
