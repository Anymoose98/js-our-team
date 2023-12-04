// Aggiungo informazioni

let dipendenti = [
    {
        "nome" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "wayne-barmett-founder-ceo.jpg",
    },

    {
        "nome" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "walter-gordon-office-menager.jpg",
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


// Espongo tutto in maniera estesa
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

    // Aggiungo il testo al div
    
    let nome = document.createElement("div")
    nome.textContent = lavoratore["nome"] 
    personale.appendChild(nome);
    
    let role = document.createElement("div")
    role.textContent = lavoratore["role"] 
    personale.appendChild(role);

    let image = document.createElement("div")
    image.textContent = lavoratore["image"] 
    personale.appendChild(image);

    contenitore.appendChild(personale);
}