/*
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const points = [];

for(let x = 0; x<=1; x++){
    points.push(Math.floor(Math.random() * 6 + 1));
    console.log(points[x]);
}

if(points[0] < points[1]){
    console.log('vince il computer');
} else if(points[0] > points[1]){
    console.log('vince il player');
} else if(points[0] = points[1]){
    console.log('pareggio');
}
    