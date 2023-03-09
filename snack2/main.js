'use strict';

/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo

ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70


3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

const studenti = [
    {
        id: 213,
        nome: 'Marco della Rovere',
        votazione: 78
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        votazione: 96
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        votazione: 48
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        votazione: 74
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        votazione: 68
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        votazione: 50
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        votazione: 84
    },
];


//1 foreach
// const targheStudenti = [];

// studenti.forEach((studente) => {

//     const upperStudent = studente.nome.toUpperCase();

//     // console.log(studente.nome.toUpperCase());
//     // console.log(studente['nome'])
//     targheStudenti.push(upperStudent);
// });

// console.log(targheStudenti);

//2 map

// const targheStudenti = studenti.map((studente) => {
//     //console.log(studente);
//     return studente.nome.toUpperCase();
// });

//2 map fico

//const targheStudenti = studenti.map(studente => studente.nome.toUpperCase());
const targheStudenti = studenti.map(({ nome }) => nome.toUpperCase());
console.log(targheStudenti);


// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));


//lista studenti >70

// const studentiTop = [];

// studenti.forEach(function(studente){
//     //console.log(studente);

//     console.log(studente.votazione);
//     console.log(studente.nome);

//     if(studente.votazione > 70){
//         studentiTop.push(studente);
//     }

// });

// console.log(studentiTop);

// lista studenti > 70 filter

const studentiTop = studenti.filter(function (studente) {
    // console.log(studente);
    // console.log(studente['votazione']);
    // console.log(studente['nome']);

    if (studente.votazione > 70) {
        return true;
    }

})

console.log(studentiTop);


// lista studenti > 70 & id > 120 filter

// const studentiTopNuovi = studenti.filter(function(studente){
//     // console.log(studente);
//     // console.log(studente['votazione']);
//     // console.log(studente['nome']);
//     // if(studente.votazione > 70 && studente.id > 120) {
//     //     return true;
//     // }

//     return studente.votazione > 70 && studente.id > 120; //true || //false

// }).map(element => element.nome);



//
const studentiTopNuovi = studenti.filter(studente => studente.votazione > 70 && studente.id > 120).map(element => ({ nome: element.nome, id: element.id })).find(element => element.id > 70);



console.log(studentiTopNuovi);









