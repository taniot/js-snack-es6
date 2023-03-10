'use strict';

/*
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
NOME sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


/********
 * Functions
 *******/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/********
 * Main
 *******/

//creazione struttura dati
const teams = [
    {
        nome: 'Team 1',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Team 2',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Team 3',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Team 4',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Team 5',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


//generazione punti e falli random
teams.forEach(element => {
    const nRandom1 =getRndInteger(30,40);
    const nRandom2 =getRndInteger(30,40);

    element.puntiFatti = nRandom1;
    element.falliSubiti = nRandom2;
});

//stampa di squadra e falli
const qualcosa = teams.map(({nome, falliSubiti}) => {
    return {nome, falliSubiti}
});


console.log(qualcosa);