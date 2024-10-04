import React, { useEffect, useState, useMemo } from 'react';
import { io } from 'socket.io-client';
import { Button, Container, TextField, Typography } from '@mui/material';

const App = () => {
    const [message, setMessage] = useState("");
    
    // Create the socket connection using useMemo
    const socket = useMemo(() => {
        const socketInstance = io("http://localhost:3000");
        return socketInstance;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", message);
        setMessage(""); // Clear the input after sending the message
    };

    useEffect(() => {
        socket.on("connect", () => {
            console.log("connected", socket.id);
        });

        // listener for receive-message
        socket.on("receive-message",(data)=>{
            console.log(data);
        })

        socket.on("Welcome", (s) => {
            console.log(s);
        });

        // Cleanup function to disconnect the socket when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, [socket]); // Add socket to the dependency array

    return (
        <Container maxWidth="sm">
            <Typography variant="h1" component="div" gutterBottom>
                Welcome to Socket.io
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined" 
                />
                <Button type="submit" variant='contained' color='primary'>Send</Button>
            </form>
        </Container>
    );
}

export default App;
