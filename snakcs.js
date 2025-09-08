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

