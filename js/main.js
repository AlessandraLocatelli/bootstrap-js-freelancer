/*quando l'utente cliccherà su send del form, il programma calcolerà l'ammontare del preventivo per le ore di lavoro richieste.
prezzo orario per sviluppo backend: 20.5 euro
prezzo orario per sviluppo frontend: 15.3 euro
prezzo orario per analisi progettuale: 33.6 euro 
5 codici promozionali che l'utente può utilizzare:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
se codice valido 25% sconto sul prezzo finale. una volta utilizzato, dovrà essere eliminato dall'elenco dei codici promozionali disponibili, in quanto non più utilizzabile. 
se codice non valido, il programma informerà che il codice non è valido e viene applicato prezzo finale senza sconti + bottone diventa di colore rosso. (prezzo mostrato .toFixed(2)) sotto bottone send.
*/


//creo array con i codici promozionali
let discountCodes = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];



//creo funzione per il form dove aggiungrò tutte le operazioni interne al form 
function submitForm(event)
{
event.preventDefault(); 




//dichiaro prezzi standard (all'ora) a seconda del lavoro richiesto e li inizializzo in delle variabili 
let priceBackEndPerHour = 20.5;
let priceFrontEndPerHour = 15.3;
let priceProjectAnalysisPerHour = 33.6; 

//dichiaro prezzo finale in una variabile e lo inizializzo a 0 
let finalPrice = 0; 
//dichiaro sconto utilizzando codice promozionale in una variabile e lo inizializzo
let codeDiscount = 0.25; 


//reperisco dati inseriti dall'utente nel form e assegno valori a delle variabili da me create 
let userName = document.getElementById("first-name").value; 
let userLastName = document.getElementById("name").value;
let userEmail = document.getElementById("email").value;
let userWorkingHours = document.getElementById("hours").value;
let typeOfWorkSelector = document.getElementById("type-of-work"); 
let typeOfWorkUserSelected = typeOfWorkSelector.value; 
let userDiscountCode = document.getElementById("discount-code").value;
let userMessage = document.getElementById("message").value; 

//ricavo prezzo finale dalla funzione
finalPrice = getFinalPrice(); 
console.log("Il prezzo finale è: "+finalPrice); 





//funzione per calcolare prezzo finale, considerando se utente ha applicato coupon o meno 
function getFinalPrice()
{

let isAValidDiscountCode = discountCodes.includes(userDiscountCode)

if(typeOfWorkUserSelected == "1")
    finalPrice = priceBackEndPerHour*userWorkingHours; 
    else if(typeOfWorkUserSelected == "2")
    finalPrice = priceFrontEndPerHour*userWorkingHours; 
    else if(typeOfWorkUserSelected == "3")
    finalPrice = priceProjectAnalysisPerHour*userWorkingHours; 



if(isAValidDiscountCode)
{
    console.log("Sconto applicato"); 

  finalPrice = finalPrice*codeDiscount; 


}
else
{

console.log("Mi dispiace, codice sconto non valido."); 

}

return finalPrice.toFixed(2); 

}


document.getElementById("price").innerHTML = finalPrice; 


}