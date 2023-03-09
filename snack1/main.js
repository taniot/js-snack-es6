'use strict';

/*
SNACK 1

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']`

Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
*/

const listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

/*
{
    nomeTavolo: 'Tavolo Vip',
    ospite: 'Brad Pitt',
    segnaposto: 1
}
*/

//1 creare array di oggetti
// const nuovaListaInvitati = [];

// for (let i = 0; i < listaInvitati.length; i++) {
//     const invitato = listaInvitati[i];
//     console.log(invitato);

//     const datiInvitato = {
//         nomeTavolo: 'Tavolo Vip',
//         ospite: invitato,
//         segnaposto: i + 1
//     }

//     nuovaListaInvitati.push(datiInvitato);

// }

// console.log(nuovaListaInvitati);



//2. foreach
() => { } //arrow function

// const nuovaListaInvitati = [];

// listaInvitati.forEach((invitato, i) => {
//     const datiInvitato = {
//         nomeTavolo: 'Tavolo Vip',
//         ospite: invitato,
//         segnaposto: i + 1
//     }
//     nuovaListaInvitati.push(datiInvitato);
// });

// console.log(nuovaListaInvitati);

//3. map

const nuovaListaInvitati = listaInvitati.map((invitato, i) => {

    const datiInvitato = {
        nomeTavolo: 'Tavolo Vip',
        ospite: invitato,
        segnaposto: i + 1
    };

    return datiInvitato;
});

console.log(nuovaListaInvitati);


