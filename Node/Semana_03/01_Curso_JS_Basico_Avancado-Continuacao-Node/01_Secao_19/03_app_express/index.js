const express = require('express');
const app = express();
const PORTA = 3000;

app.get('/', (req, res) => {
    res.send('Testando!');
});

app.listen(PORTA, () => {
    console.log(`Server rodando em http://localhost:${PORTA}`)
});