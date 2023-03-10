'use strict';

/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

//[] / [1] / [1, 2]

const bikes = [
    {
        nome: 'Bike 1',
        peso: 17
    },
    {
        nome: 'Bike 2',
        peso: 7
    },
    {
        nome: 'Bike 3',
        peso: 2
    },
    {
        nome: 'Bike 4',
        peso: 2
    }
]




if(bikes.length === 0){
    console.log(`Non ho bici`);
} else {

    let theBike = bikes[0];

    // escludo il confronto della prima bici con se stessa

    // for(let i = 1; i < bikes.length; i++){
    //     const currentBike = bikes[i];

    //     if(currentBike.peso < theBike.peso) {
    //         theBike = currentBike;
    //     }
    // }


    //confronto anche la prima bici con se stess
    bikes.forEach(currentBike => {
        if(currentBike.peso <= theBike.peso) {
            theBike = currentBike;
        }
    })

    //filtro tutte le bici più leggere partendo come riferimento dalla bici più leggera trovata
    const resultBikes = bikes.filter(({peso}) => {
        if(peso === theBike.peso) {
            return true;
        }
    });


    //stampo il risultato della mia ricerca
    resultBikes.forEach(({nome, peso}) => {
        console.log(`La bici più leggera è la bici ${nome} che pesa ${peso} kg`);
    })
}









