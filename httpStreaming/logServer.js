const express = require('express');
const app = express();

app.get('/logs', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    // Function to generate a random log entry
    const generateLog = () => {
        const levels = ['INFO', 'WARN', 'ERROR'];
        const messages = [
            'User login successful',
            'User attempted unauthorized access',
            'Database query took longer than expected',
            'Cache miss for session data',
            'Disk space running low',
            'New user registration completed'
        ];

        const level = levels[Math.floor(Math.random() * levels.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];
        const timestamp = new Date().toISOString();

        return `[${timestamp}] [${level}] ${message}\n`;
    };

    // Send a new log entry every second
    const interval = setInterval(() => {
        res.write(generateLog());
    }, 1000);

    // Stop streaming after 30 seconds
    setTimeout(() => {
        clearInterval(interval);
        res.end('End of log stream\n');
    }, 30000); // Stop after 30 seconds
});

app.listen(3000, () => {
    console.log('Log streaming server running on http://localhost:3000');
});
