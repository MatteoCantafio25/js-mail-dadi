//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// ASSEGNO UNA COSTANTE AGLI ELEMENTI E LI PRENDO TRAMITE L'ID
const npcElement = document.getElementById("npc");
const humanElement = document.getElementById("human");
const victoryElement = document.getElementById("victory");

//---------------------------------//
// ASSEGNO UNA COSTANTE AL BOTTONE E LO PRENDO TRAMITE L'ID
const confirmButton = document.getElementById("confirm-button");

//---------------------------------//
// AGGIUNGO UN EVENT LISTENER AL CLICK DEL BOTTONE
confirmButton.addEventListener("click", function () {
    //----------------//
    // CALCOLO UN NUMERO RANDOMICO DA 1 A 6
    const npcNumber = Math.floor(Math.random() * 6) + 1;

    //----------------//
    // STAMPO IN PAGINA IL RISULTATO PER IL COMPUTER
    npcElement.innerText = "Il computer ha fatto" + " " + npcNumber;

    //----------------//
    // CALCOLO UN NUMERO RANDOMICO DA 1 A 6
    const humanNumber = Math.floor(Math.random() * 6) + 1;

    //----------------//
    // STAMPO IN PAGINA IL RISULTATO PER GIOVANNI
    humanElement.innerText = "Giovanni ha fatto" + " " + humanNumber;

    //----------------//
    // DECRETO IL VINCITORE
    if (npcNumber > humanNumber) {
        victoryElement.innerText = "Il computer ha vinto";
    } else if (humanNumber > npcNumber) {
        victoryElement.innerText = "Giovanni ha vinto";
    }
    //----------------//
    // AGGIUNGO LA POSSIBILITA' DI UN PAREGGIO
    else if (humanNumber === npcNumber) {
        victoryElement.innerText = "Parità Tirate di nuovo i dadi!";
    }
})