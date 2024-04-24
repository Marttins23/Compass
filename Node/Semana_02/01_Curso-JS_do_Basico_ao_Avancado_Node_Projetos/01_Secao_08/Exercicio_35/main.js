let calculadora = {
    somar: function(numUm, numDois) {
        return numUm + numDois;
    },
    subtrair: function(numUm, numDois) {
        return numUm - numDois;
    },
    multiplicar: function(numUm, numDois) {
        return numUm * numDois;
    },
    dividir: function(numUm, numDois) {
        return numUm / numDois;
    },
    calcular: function(numUm, operador, numDois) {
        if(operador == '+') {
            return this.somar(numUm, numDois);
        } else if(operador == '-') {
            return this.subtrair(numUm, numDois);
        } else if(operador == '/') {
            return this.dividir(numUm, numDois);
        } else if(operador == '*') {
            return this.multiplicar(numUm, numDois);
        }
    },
    exibirResultado: function(numUm,operador, numDois) {
        let resultado = this.calcular(numUm, operador, numDois);
        console.log(`${numUm} ${operador} ${numDois} = ${resultado}`)
    }
}

calculadora.exibirResultado(2,'+', 2);
calculadora.exibirResultado(2, '-', 2);
calculadora.exibirResultado(2, '*', 2);
calculadora.exibirResultado(2, '/', 2);