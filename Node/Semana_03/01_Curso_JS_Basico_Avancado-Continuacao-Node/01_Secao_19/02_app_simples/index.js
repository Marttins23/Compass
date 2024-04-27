const { createServer } = require('http');

let server = createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`
        <h1>Hello World!</h1>
        <p>Primeiro Projeto utilizando Node.js!</p>
    `);
    res.end();
});

server.listen(8000);

console.log(`Server rodando em http://localhost:8000`);