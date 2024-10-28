const http = require('http');

http.get('http://localhost:3000/stream', (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log('Received chunk:', chunk);
    });

    res.on('end', () => {
        console.log('Stream ended');
    });
});
