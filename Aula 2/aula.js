function calculadoraDeIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(IMC){
    if (IMC < 18.5) {
       mensagemIMC = 'abaixo do peso';
       return("Você está " + mensagemIMC)
    }
    else if (IMC >= 18.5 && IMC <= 25.0){
       mensagemIMC = 'peso ideal';
       return("Você está " + mensagemIMC)
    }
    else if (IMC >= 25.0 && IMC <= 30.0){
       mensagemIMC = 'acima do peso';
       return("Você está " + mensagemIMC)
    }
    else if (IMC >= 30.0 && IMC <= 40.0){
       mensagemIMC = 'obeso';
       return("Você está " + mensagemIMC)
    }
    else {
       mensagemIMC = 'gravemente obeso';
       return("Você está " + mensagemIMC)
    }
}
function main(){
let peso = 75;
let altura = 1.7;

const IMC = calculadoraDeIMC(peso, altura)
console.log(IMC.toFixed(2))
console.log(classificarIMC(IMC))
}

main();

console.log(calculadoraDeIMC)