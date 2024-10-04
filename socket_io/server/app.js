import express from "express";
import { Server } from "socket.io";
import {createServer} from "http"
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000; 

const server = new createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true,
    },
})

app.use(cors())

io.on("connection",(socket)=>{
    console.log("User connected");
    console.log("Id",socket.id);
    // socket.emit("Welcome", `Welcome to the server , ${socket.id}`) // sbhko jaega 
    // socket.broadcast.emit("Welcome", `${socket.id} joined the server`) // all except current

    socket.on("disconnect",()=>{
        console.log(`User disconnected, ${socket.id}`);
    })

})
app.get("/api/server", (req, res) => {
    res.status(200).json({ msg: "Hello From Server" });
});

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello From Server Root</h1>");
});

server.listen(PORT, () => {
    console.log(`server started at: http://localhost:${PORT}/api/server`);
});