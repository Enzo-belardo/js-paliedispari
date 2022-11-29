//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//Dichiariamo chi ha vinto.

const numberUser = prompt('Digita un numero pari o dispari')

if(numberUser < 0 || numberUser > 5){
   numberUser = prompt('Digita un numero pari o dispari')
}
console.log(numberUser)

function getRandomNumber(numMax , numMin){
    const randomNumber= Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return randomNumber;

}
let numCom = (getRandomNumber(1 , 6));
console.log(numCom);

function getSomma(numCom , numberUser){

    somma = (numberUser + numCom);
    if(somma % 5 == 0){
        console.log('hai vinto');
    }else if(somma % 3 == 0){
        console.log('hai perso');
    }
    return somma;
   
}

let result = (getSomma());
console.log(result);





