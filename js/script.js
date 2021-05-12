/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

var bici = [
    {
        nome: "Bici1",
        peso: 6.5
    },
    {
        nome: "Bici2",
        peso: 6
    },
    {
        nome: "Bici3",
        peso: 7
    },
    {
        nome: "Bici4",
        peso: 10
    },
    {
        nome: "Bici5",
        peso: 9.8
    },
    {
        nome: "Bici6",
        peso: 12
    },
    {
        nome: "Bici7",
        peso: 7.8
    },
    {
        nome: "Bici8",
        peso: 9.1
    },
    {
        nome: "Bici9",
        peso: 5.5
    },
    {
        nome: "Bici10",
        peso: 1.2
    }
];

//console.log(bici);
var biciLeggera = bici[0];

for (var i = 1; i < bici.length; i++){
    
    //console.log(bici[i].peso)    
    if (bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

//console.log(biciLeggera);

/* Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

var {nome, peso} =  biciLeggera;
console.log(nome, peso);

var paragrafo = document.getElementById("bici");
paragrafo.innerHTML = `La ${nome} è la più leggera, con un peso di ${peso} kg!`;