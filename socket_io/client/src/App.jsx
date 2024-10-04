import React, { useEffect, useState, useMemo } from 'react';
import { io } from 'socket.io-client';
import { Box, Button, Container, TextField, Typography, radioClasses } from '@mui/material';

const App = () => {
    const [message, setMessage] = useState("");
    const [room,setRoom] =  useState("");
    const [socketId,setSocketId] =  useState("");
    
    // Create the socket connection using useMemo
    const socket = useMemo(() => {
        const socketInstance = io("http://localhost:3000");
        return socketInstance;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", {message,room});
        setMessage("")
    };

    useEffect(() => {
        socket.on("connect", () => {
            setSocketId(socket.id);
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
            <Box sx={{height:400}}/>
            <Typography variant="h6" component="div" gutterBottom>
                {socketId}
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined" 
                />
                 <TextField 
                    value={room} 
                    onChange={e => setRoom(e.target.value)} 
                    id="outlined-basic" 
                    label="Room"
                    variant="outlined" 
                />
                <Button type="submit" variant='contained' color='primary'>Send</Button>
            </form>
        </Container>
    );
}

export default App;
