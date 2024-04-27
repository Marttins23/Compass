let { readFile, writeFile } = require('fs');
let textoArquivo;

readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    }

    console.log(text);
});

writeFile("arquivo.txt", `Escrevendo Arquivo!`, (error) => {
    if (error) {
        throw error;
    }
});