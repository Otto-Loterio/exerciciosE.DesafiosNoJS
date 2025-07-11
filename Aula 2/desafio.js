// Exercício 1


// function escrevaMeuNome(nome){
//     console.log('Meu nome é '+ nome);
// }

// escrevaMeuNome('Otto');
// escrevaMeuNome('Lemão');

// // Exercício 2


// function verificarIdade(idade){
//     if(idade < 18){
//         console.log('Você é menor de idade')
//     }
//     else{
//         console.log('Você é maior de idade')
//     }
// }
// verificarIdade(19);

// Exercício 3


//  function escrevaMeuNome(nome){
//     return (nome);
// }

// function verificarIdade(idade){
//     if(idade < 18){
//         console.log (escrevaMeuNome('Otto')+' é menor de idade')
//     }
//     else{
//         console.log (escrevaMeuNome('Otto')+' é maior de idade')
//     }
// }

// verificarIdade(15);

// Exercício 4


let produto = 4800.00;
let metodoDePagamento = 'credito';
let parcelaCredito = 5;
let desconto = null;
let acrescimo = null;

function valorADescontar(desconto, produto) {
    return (desconto / 100) * produto
}

function valorAAcrescentar(acrescimo, produto) {
    return (acrescimo / 100) * produto
}

function descontagemDoProduto(produto, valorADescontar) {
    return produto - valorADescontar
}

function acrescimoDoProduto(produto, valorADescontar) {
    return produto + valorADescontar
}

(function main() {
    if (metodoDePagamento === 'debito') {
        desconto = 10
        console.log('com o metodo de pagamento ' + metodoDePagamento + ' o produto ficou por ' + descontagemDoProduto(produto, valorADescontar(desconto, produto)))
    }
    else if (metodoDePagamento === 'dinheiro' || metodoDePagamento === 'pix') {
        desconto = 15
        console.log('com o metodo de pagamento ' + metodoDePagamento + ' o produto ficou por ' + descontagemDoProduto(produto, valorADescontar(desconto, produto)))
    }
    else if (metodoDePagamento === 'credito' && parcelaCredito <= 2) {
        desconto = 0
        console.log('com o metodo de pagamento ' + metodoDePagamento + ' o produto ficou por ' + descontagemDoProduto(produto, valorADescontar(desconto, produto)))
    }
    else{
        acrescimo = 10
        console.log('com o metodo de pagamento ' + metodoDePagamento + ' o produto ficou por ' + acrescimoDoProduto(produto, valorAAcrescentar(acrescimo, produto)))
    }
})();  