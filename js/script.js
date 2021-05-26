// questo e visibile solo dal programmatore sulla console
console.log ('Console Playstation 5');

//  questo e visibile dal utente (selezione tramite id)
document.getElementById ('ps5-title').innerHTML='Ecco la PlayStation 5';

// questo e visibile dal utente (selezione tramite class ps:va indicato il numero della classe nel caso ce ne siano di piu )
document.getElementsByClassName ('test-js')[0].innerHTML='Sperimenta la nuova generazione di incredibili giochi PlayStation';


// interazione con l'utente
alert('Stai per entrare in una pagina fantastica!');

// prova bottone sul title
function myFunction() {
    var x = document.getElementsByClassName('test-button');
    x[0].innerHTML='Console PlayStation 5';
}
