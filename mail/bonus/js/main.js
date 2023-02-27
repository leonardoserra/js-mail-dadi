/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
 */

const mailList = ['mario@gmail.com', 'luca@gmail.com', 'anna@gmail.com', 'peppiniello@gmail.com', 'erMaggico@gmail.com'];

console.log(mailList);

const button = document.getElementById('button');
const userMailField = document.getElementById('mail');
const message = document.getElementById('message');
button.addEventListener('click', function(){
    let userMail = userMailField.value;
    console.log(userMail);

    for (let i = 0; i < mailList.length; i++) {
        
        if (userMail == mailList[i]){
            console.log('benvenuto!');
            message.innerHTML = 'benvenuto!';
            i = mailList.length - 1;
        } else if(i == mailList.length -1){
            console.log('accesso negato');
            message.innerHTML = 'accesso negato';
        }
        
    }
})



    