const numero = Math.round(Math.random() * 100);
let tentativas = 0;

function adivinharNumero() {
    const inputNumero = document.getElementById('numero');
    let valorChutado = inputNumero.value;

    if (valorChutado == '') {
        alert("Você deve informar um valor!");
    } else {
        tentativas++;
        checaValorChutadoEExibeMensagem(valorChutado, tentativas);
    }
}

function checaValorChutadoEExibeMensagem(valorChutado, tentativas) {
    const paragrafoResultado = document.getElementById('resultado');
    
    if (valorChutado == numero) {
        paragrafoResultado.innerHTML =
            "Parabéns! Você acertou o número em " + tentativas + " tentativas!"
    } else if(valorChutado < numero) {
        paragrafoResultado.innerHTML =
            `O número é maior do que ${valorChutado}. Essa é a sua ${tentativas} tentativa.`;
    } else {
        paragrafoResultado.innerHTML =
            `O número é menor do que ${valorChutado}. Essa é a sua ${tentativas} tentativa.`;
    }
}