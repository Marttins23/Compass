class Carrinho {
    constructor(itens) {
        this.itens = itens;
        this.qtdTotal = this.calculaQtdTotal();
        this.valorTotal = this.calculaValorTotal();
    }

    adicionarItem(itemAAdicionar) {
        let jaExistia = false;

        for (let item in this.itens) {
            if (item.id == itemAAdicionar.id) {
                this.itens[item].qtd += itemAAdicionar.qtd;
                jaExistia = true;
            }
        }

        if (!jaExistia) {
            this.itens.push(itemAAdicionar);
        }

        this.qtdTotal += itemAAdicionar.qtd;
        this.valorTotal += itemAAdicionar.valor * itemAAdicionar.qtd;
    }

    removerItem(itemId) {
        for (let i = 0; i < this.itens.length; i++) {
            if (itemId === this.itens[i].id) {
                this.qtdTotal -= this.itens[i].qtd;
                this.valorTotal -= this.itens[i].qtd * this.itens[i].valor;
                this.itens.splice(i, 1);
            }
        }
    }

    calculaQtdTotal() {
        let qtd = 0;

        this.itens.forEach((item) => {
            qtd += item.qtd;
        });

        return qtd;
    }

    calculaValorTotal() {
        let valor = 0;

        this.itens.forEach((item) => {
            valor += item.valor * item.qtd;
        });

        return valor;
    }
}

class ItemCarrinho {
    constructor(nome, id, qtd, valor) {
        this.nome = nome;
        this.id = id;
        this.qtd = qtd;
        this.valor = valor;
    }
}

class WordCounter {
    constructor() {}
    
    countWords(str) {
        let arr = str.split(" ");
        return arr.length;
    }
}

const wc = new WordCounter();
console.log(wc.countWords("Um Dois Três"))

const carrinho = new Carrinho([
    new ItemCarrinho('Tênis Adidas', 1, 2, 20),
    new ItemCarrinho('Meia Lupo', 2, 1, 5)
]);

console.log(carrinho);

const cuecaMax = new ItemCarrinho('Cueca Max', 3, 2, 12);
carrinho.adicionarItem(cuecaMax);

console.log(carrinho);

carrinho.removerItem(2);

console.log(carrinho);
