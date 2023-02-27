/*
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const button = document.getElementById('button');
const message = document.getElementById('message');
let playerPoint;
let computerPoint;

button.addEventListener('click', function(){

message.classList.remove('d-none');
message.classList.add('d-inline-block', 'box');



playerPoint = (Math.floor(Math.random() * 6 + 1));
computerPoint = (Math.floor(Math.random() * 6 + 1));

console.log(playerPoint, computerPoint)



if(playerPoint < computerPoint){
    console.log('vince il computer');
    message.innerHTML = 'vince il re, verrai decapitato';
} else if(playerPoint > computerPoint){
    console.log('vince il player');
    message.innerHTML = 'hai vinto, per questa volta hai salva la vita';
} else if(playerPoint = computerPoint){
    console.log('pareggio');
    message.innerHTML = 'pareggio';
}

});
    

// button.addEventListener('click', function(){

// message.classList.remove('d-none');
// message.classList.add('d-inline-block', 'box');

// const points = [];
// for(let x = 0; x<=1; x++){
//     points.push(Math.floor(Math.random() * 6 + 1));
//     console.log(points[x]);
// }

// if(points[0] < points[1]){
//     console.log('vince il computer');
//     message.innerHTML = 'vince il re, verrai decapitato';
// } else if(points[0] > points[1]){
//     console.log('vince il player');
//     message.innerHTML = 'hai vinto, per questa volta hai salva la vita';
// } else if(points[0] = points[1]){
//     console.log('pareggio');
//     message.innerHTML = 'pareggio';

// }

// });
    

