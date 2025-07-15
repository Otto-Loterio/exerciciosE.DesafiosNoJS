// Desafio 1 

// class Carro {
//     marca;
//     cor;
//     litroPorKM;

//     constructor(marca, cor, litroPorKM) {
//         this.marca = marca;
//         this.cor = cor;
//         this.litroPorKM = litroPorKM;
//     }

//     gastoComCombustivel(kilometros, precoGasolina) {
//         return kilometros / this.litroPorKM * precoGasolina
//     }
// }

// const Parati = new Carro ('Volkswagen', 'Vermelho', 10)
// const Fiesta = new Carro('Ford', 'Preto', 8)
// const Uno = new Carro('Fiat', 'Branco', 12)

// console.log(Parati.gastoComCombustivel(100, 5.3).toFixed(2))
// console.log(Fiesta.gastoComCombustivel(100, 5.3).toFixed(2))
// console.log(Uno.gastoComCombustivel(100, 5.3).toFixed(2))

// Desafio 2

// class Pessoa {
//     nome;
//     altura;
//     peso;

//     constructor(nome, altura, peso) {
//         this.nome = nome;
//         this.altura = altura;
//         this.peso = peso;
//     }

//     classifiqueIMC() {
//         const imc = this.calculadorDeIMC();

//         if (imc < 18.5) {
//             return 'abaixo do peso';
//         }
//         else if (imc >= 18.5 && imc <= 25.0) {
//             return 'peso ideal';
//         }
//         else if (imc >= 25.0 && imc <= 30.0) {
//             return 'acima do peso';
//         }
//         else if (imc >= 30.0 && imc <= 40.0) {
//             return 'obeso';
//         }
//         else {
//             return 'gravemente obeso';
//         }
//     }

//     calculadorDeIMC() {
//         return this.peso / (this.altura * this.altura);
//     }

//     declararIMC() {
//         console.log(`eu ${this.nome} tenho o IMC ${this.calculadorDeIMC().toFixed(2)} é me classifico como ${this.classifiqueIMC()}`)
//     }



// }

// const Otto = new Pessoa('Otto', 1.6, 43)
// const Geni = new Pessoa('Geni', 1.4, 100)
// const José = new Pessoa('José', 1.75, 70)

// Otto.declararIMC();
// José.declararIMC();
