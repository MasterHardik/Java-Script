const express = require('express');
const app = express();

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    let counter = 0;

    const interval = setInterval(() => {
        counter += 1;
        res.write(`Data chunk ${counter}\n`);
        
        if (counter >= 10) { // Stop after 10 chunks
            clearInterval(interval);
            res.end('End of stream\n');
        }
    }, 1000); // Send data every second
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
