// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const btnAggiungi = document.getElementById("btn-aggiungi");
const itemInput = document.getElementById("item");
const lista = document.getElementById("lista");
const msgErrore = document.getElementById("errore");


function addElement() {
    const item = itemInput.value;

    if (item == "") {
        msgErrore.textContent = "Elemento non valido";
        return;
    }
    msgErrore.textContent = "";

    const riga = document.createElement("li");
    const sTesto = document.createElement("span");
    sTesto.textContent = item;

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "Elimina";
    btnRimuovi.addEventListener("click", () => {
        riga.remove();
    });

    riga.appendChild(sTesto);
    riga.appendChild(btnRimuovi);
    lista.appendChild(riga);

    itemInput.value = "";

}

btnAggiungi.addEventListener("click", addElement);


itemInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addElement();
    }
});
