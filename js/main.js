/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
 */

    const mailList = ['mario@gmail.com', 'luca@gmail.com', 'anna@gmail.com', 'peppiniello@gmail.com'];

    console.log(mailList);

    let userMail = prompt('inserisci la tua mail per accedere');
    for (let i = 0; i < mailList.length; i++) {
        
        if (userMail == mailList[i]){
            console.log('benvenuto!');
        } else{
            console.log('accesso negato');
        }
        
    }
