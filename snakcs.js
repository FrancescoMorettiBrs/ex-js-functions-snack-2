// 🏆 Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function sommaDichiarativa(num1, num2) {
  return num1 + num2;
}

console.log("Questa è la somma dichiarativa:", sommaDichiarativa(5, 8));

const sommaAnonima = function (num1, num2) {
  return num1 + num2;
};

console.log("Questa è la somma anonima:", sommaAnonima(4, 7));

const sommaArrow = (num1, num2) => num1 + num2;

console.log("Questa è la somma arrow", sommaArrow(10, 20));

// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const num = 5;
const quadrato = (num) => num * num;
console.log(`Questo è il quadrato di ${num}:`, quadrato(num));

// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (param1, param2) => param1 + param2;
const moltiplicazione = (param1, param2) => param1 * param2;
const sottrazione = (param1, param2) => param1 - param2;

function eseguiOperazione(param1, param2, operazione) {
  return operazione(param1, param2);
}

console.log(eseguiOperazione(6, 10, somma));
console.log(eseguiOperazione(4, 8, moltiplicazione));
console.log(eseguiOperazione(20, 8, sottrazione));

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const creaTimer = (time) => {
  return function startTimer() {
    return setTimeout(() => {
      console.log("Tempo scaduto!");
    }, time);
  };
};

const timer = creaTimer(3000);
timer();

// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

const createMess = (message, interval) => {
  return setInterval(() => {
    console.log(message);
  }, interval);
};

// se vuoi fermare il loop
const loop = createMess("Parto ogni secondo", 1000);
setTimeout(() => clearInterval(loop), 5000);

// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

const creaContatoreAutomatico = (interval, startInterval) => {
  let contatore = 0;
  return function startInterval() {
    return setInterval(() => {
      contatore++;
      console.log(contatore);
    }, interval);
  };
};

const startCounter = creaContatoreAutomatico(1000);
startCounter();

// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const startTime = 1000;
const stopTime = 5000;
const message = "Mi ripeto 5 volte";

const id = setInterval(() => {
  console.log(message);
}, startTime);

setTimeout(() => clearInterval(id), stopTime);

function eseguiEferma() {
  console.log(id);
}

eseguiEferma(message, startTime, stopTime);
