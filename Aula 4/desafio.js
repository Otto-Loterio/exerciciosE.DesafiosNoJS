// Desafio 1

// numeroTabuada = 2;

// function fazerTabuada(){
// for (let i = 0; i <= 10; i++) {

//     let tabuada = i * numeroTabuada
//     console.log(tabuada)
// }
// }

// fazerTabuada();

// Desafio 2

numeros = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

for (let i = 0; i <= numeros.length; i++) {
    const numero = numeros[i] 

    if (numero % 2 === 0){
        console.log(numero);
    }
}