// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

const interval = 1000;
let n = 10;

function contoAllaRovescia(n) {
  const setUp = setInterval(() => {
    console.log(n);
    n--;

    if (n < 0) {
      console.log("Tempo scaduto!");
      clearInterval(setUp);
    }
  }, interval);
}

contoAllaRovescia(n)