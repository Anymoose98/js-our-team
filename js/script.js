// Aggiungo informazioni

let dipendenti = [
    {
        "nome" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "wayne-barnett-founder-ceo.jpg",
    },

    {
        "nome" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "walter-gordon-office-manager.jpg",
    },

    {
        "nome" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "angela-lopez-social-media-manager.jpg",
    },

    {
        "nome" : "Scott Estrada",
        "role" : "Developer",
        "image" : "scott-estrada-developer.jpg",
    },

    {
        "nome" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "barbara-ramos-graphic-designer.jpg",
    },
]

// controllo se funziona
console.log(dipendenti)


// Espongo tutto in maniera estesa su console
for(let i=0 ; i < dipendenti.length; i++){
    let lavoratore = dipendenti[i]
    console.log(lavoratore["nome"]);
    console.log(lavoratore["role"]);
    console.log(lavoratore["image"]);
}

// Prendo il contenitore dal HTML
let contenitore = document.getElementById("contenitore")

// Scrivo su html 
for(let i=0 ; i <= dipendenti.length; i++){
    
    let lavoratore = dipendenti[i];
    // creo il div 
    let personale = document.createElement("div");
    personale.classList.add("col-4")
    personale.classList.add("m-10")

    // Aggiungo il testo al div
    
    // foto
    let image = document.createElement("img")
    let percorso = ("./img/" + lavoratore["image"])
    image.src = percorso 
    personale.appendChild(image);

    // nome
    let nome = document.createElement("h3")
    nome.classList.add("grassetto")
    nome.textContent = lavoratore["nome"] 
    personale.appendChild(nome);
    
    // ruolo
    let role = document.createElement("div")
    role.textContent = lavoratore["role"] 
    personale.appendChild(role);


    contenitore.appendChild(personale);
}