// Desafio 1

// const combu = 5.3;
// const medCombu = 10
// let dista = 1569

// litrosConsu = dista / medCombu
// const valorGasto = litrosConsu * combu
// console.log(valorGasto.toFixed(2))

// Desafio 2

// const etanol = 4.5
// const gasolina = 5.3;
// const mediaCombustivel = 10;
// let combustivel = 'Etanol'
// let distancia = 100;

// let litrosConsumidos = distancia / mediaCombustivel;
// let valorEtanol = litrosConsumidos * etanol;
// let valorGasolina = litrosConsumidos * gasolina;

// if (combustivel === 'Etanol') {
//    console.log(valorEtanol.toFixed(2))
// }
// else {
//    console.log(valorGasolina.toFixed(2))
// }

// Exercício 1

// let notaHistoria = 4;
// let notaMatematica = 1;
// let notaPortugues = 1;

// let mediaNota = notaHistoria + notaMatematica + notaPortugues / 3;
// let mensagemNota = '';


// if(mediaNota < 5){
//    mensagemNota = 'reprovou';
//    console.log("Você "+ mensagemNota)
// }

// else if(mediaNota >= 5 && mediaNota <= 7){
//    mensagemNota = 'recuperação';
//    console.log("Você está em "+ mensagemNota)
// }

// else{
//    mensagemNota = 'passou';
//    console.log("Você "+ mensagemNota)
// }

// Exercício 2

// let peso = 190
// let altura = 1.6

// const IMC = peso / (altura * altura)

// console.log(IMC.toFixed(2))

// if (IMC < 18.5) {
//    mensagemIMC = 'abaixo do peso';
//    console.log("Você está " + mensagemIMC)
// }
// else if (IMC >= 18.5 && IMC <= 25.0){
//    mensagemIMC = 'peso ideal';
//    console.log("Você está " + mensagemIMC)
// }
// else if (IMC >= 25.0 && IMC <= 30.0){
//    mensagemIMC = 'acima do peso';
//    console.log("Você está " + mensagemIMC)
// }
// else if (IMC >= 30.0 && IMC <= 40.0){
//    mensagemIMC = 'obeso';
//    console.log("Você está " + mensagemIMC)
// }
// else {
//    mensagemIMC = 'gravemente obeso';
//    console.log("Você está " + mensagemIMC)
// }

// Exercício 3

let produto = 100.00;
let metodoDePagamento = 'credito';
let parcelaCredito = 2
let dezPorcento = 10;
let quinzePorcento = 15;

if(metodoDePagamento === 'debito'){
   let desconto10 = (dezPorcento / 100) * produto
   produto = produto - desconto10
   console.log('com o metodo de pagamento '+ metodoDePagamento +' o produto ficou por '+ produto.toFixed(2))
}
else if(metodoDePagamento === 'pix' || metodoDePagamento === 'dinheiro'){
   let desconto15 = (quinzePorcento / 100) * produto
   produto = produto - desconto15
   console.log('com o metodo de pagamento '+ metodoDePagamento +' o produto ficou por '+ produto.toFixed(2))
}
else if(metodoDePagamento === 'credito' && parcelaCredito > 2){
   let juros15 = (quinzePorcento / 100) * produto
   produto = produto + juros15
   console.log('com o metodo de pagamento '+ metodoDePagamento +' parcelando em '+ parcelaCredito +' o produto ficou por '+ produto.toFixed(2))
}
else{
   produto = produto 
   console.log('com o metodo de pagamento '+ metodoDePagamento +' parcelando em '+ parcelaCredito +' o produto ficou por '+ produto.toFixed(2))
}


