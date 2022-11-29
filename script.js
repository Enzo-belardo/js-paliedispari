//Creare una funzione per capire se la parola inserita è palindroma



function pali(){
    
    let parola = prompt('inserisci una parola');
    
    let parolaInvertita = parola.split('').reverse().join(''); 
    if(parola == parolaInvertita){
        console.log('la parola è palindroma');
    }else {
        console.log('la parola non è palindroma');
    }

    return(parola);

}

const parola = (pali);
console.log(parola());