import React, { useEffect, useReducer } from 'react'
import {io} from "socket.io-client"

const App = () => {
    const socket = io("http://localhost:3000");

    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("connected",socket.id);
        });

        socket.on("Welcome",(s)=>{console.log(s);});


        return ()=>{
            socket.disconnect();
        };
    },[]);

    // return <div>App</div>
}

export default App