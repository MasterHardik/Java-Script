import React, { useEffect, useState, useMemo } from 'react';
import { io } from 'socket.io-client';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const App = () => {
    const [message, setMessage] = useState("");
    const [room, setRoom] = useState("");
    const [socketId, setSocketId] = useState("");
    const [messages, setMessages] = useState([]);

    // Create the socket connection using useMemo
    const socket = useMemo(() => {
        const socketInstance = io("http://localhost:3000");
        return socketInstance;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message) {
            // Emit the message with room if provided, otherwise broadcast
            socket.emit("message", { room, message });
            setMessage("");
            setRoom(""); // Optionally clear the room input after sending
        }
    };

    useEffect(() => {
        socket.on("connect", () => {
            setSocketId(socket.id);
            console.log("Connected:", socket.id);
        });

        // Listener for receiving messages in a room
        socket.on("receive-message", (data) => {
            console.log("Received message:", data);
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Listener for broadcasted messages
        socket.on("broadcast-message", (data) => {
            console.log("Broadcasted message:", data);
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on("Welcome", (s) => {
            console.log(s);
        });

        // Cleanup function to disconnect the socket when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return (
        <Container maxWidth="sm">
            <Box sx={{ height: 400, overflowY: 'auto', border: '1px solid #ccc', padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Messages
                </Typography>
                {messages.map((msg, index) => (
                    <Typography key={index} variant="body1">
                        {msg.message} {msg.room ? `(Room: ${msg.room})` : '(Broadcast)'}
                    </Typography>
                ))}
            </Box>
            <Typography variant="h6" component="div" gutterBottom>
                Socket ID: {socketId}
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    id="message-input" 
                    label="Message" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal"
                />
                <TextField 
                    value={room} 
                    onChange={e => setRoom(e.target.value)} 
                    id="room-input" 
                    label="Room" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal"
                />
                <Button type="submit" variant='contained' color='primary'>Send</Button>
            </form>
        </Container>
    );
}

export default App;
