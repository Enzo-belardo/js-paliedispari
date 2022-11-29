//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//Dichiariamo chi ha vinto.

const number = prompt('Digita un numero pari o dispari')

if(number < 0 || number > 5){
   number = prompt('Digita un numero pari o dispari')
}
function numComp(){
    const numberComp = mathfloor(math.random()* 5) -1;
    return(numberComp)
}

let num = (numComp);
console.log(numberComp)


