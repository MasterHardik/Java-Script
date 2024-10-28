const http = require('http');

http.get('http://localhost:3000/logs', (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log('Log entry received:', chunk);
    });

    res.on('end', () => {
        console.log('Log stream ended');
    });
});
