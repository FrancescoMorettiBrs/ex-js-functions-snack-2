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
