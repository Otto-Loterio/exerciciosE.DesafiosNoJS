class Pessoa {
    nome;
    idade;
    anoDenascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDenascimento = 2025 - idade;
    }

}

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(pessoa1.nome + " é mais velho(a)")
    }
    else if (pessoa1.idade < pessoa2.idade) {
        console.log(pessoa2.nome + " é mais velho(a)")

    }
    else {
        console.log(pessoa1.nome + " e " + pessoa2.nome + " tem a mesma idade")
    }
}

const Otto = new Pessoa('Otto', 15);
const Jorge = new Pessoa('Jorge', 40);

compararPessoas(Otto, Jorge);


