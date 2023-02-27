/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
 */

const mailList = ['mario@gmail.com', 'luca@gmail.com', 'anna@gmail.com', 'peppiniello@gmail.com', 'erMaggico@gmail.com'];

console.log(mailList);

let userMail = prompt('inserisci la tua mail per accedere');
for (let i = 0; i < mailList.length; i++) {
    
    if (userMail == mailList[i]){
        console.log('benvenuto!');
        i = mailList.length - 1;
    } else if(i == mailList.length -1){
        console.log('accesso negato');
    }
    
}

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
    