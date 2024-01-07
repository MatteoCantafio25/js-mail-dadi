//---------------------------------
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------
// INVENTO MAIL AUTORIZZATE

const allowedMails = ["matteo@gmail.com", "giuseppe@gmail.com", "martina@gmail.com"];


//---------------------------------
// RECUPERO GLI ELEMENTI
const input = document.getElementById("input");
const button = document.getElementById("button");
const resultElement = document.getElementById("result");
const validation = document.getElementById("validation");

//---------------------------------
// FACCIO REAGIRE IL BOTTONE AL CLICK CON LA LOGICA 

button.addEventListener("click", function () {
    // PRENDO IL VALUE DALL'INPUT
    const userEmail = input.value.trim();

    // ! VALIDAZIONE
    if (!userEmail) {
        validation.classList.remove("d-none");
        return;
    }

    // CREO UN FLAG
    let userIsAllowed = false;

    // CONTROLLO CHE LA MAIL INSERITA E' NELLA LISTA DELLE MAIL ATURORIZZATE
    for (let i = 0; i < allowedMails.length && !userIsAllowed; i++) {
        console.log("mail controllata: ", allowedMails[i]);
        console.log("mail dell'utente: ", userEmail);

        // FACCIO UNA SERIE DI AZIONI SE LA MAIL INSERITA E' EFFETTIVAMENTE NELLA LISTA
        if (userEmail === allowedMails[i]) {
            console.log("trovata");
            userIsAllowed = true;
            validation.innerText = "";
        }


        console.log("-----------------");
    }

    console.log("Utente è autorizzato: ", userIsAllowed);


    // DOPO IL CONTROLLO MODIFICO LA PAGINA IN BASE A SE LA MAIL DELL'UTENTE E' NELLA LISTA O MENO
    if (userIsAllowed) {
        button.classList.add("d-none");
        resultElement.innerText = "Benvenuto";
    } else {
        validation.classList.remove("d-none");
        validation.innerText = "Non sei autorizzato";
    }
})