/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  let result = l1 * l2;
  return result;
}
const areaDelRettangolo = area(5, 10);
console.log(areaDelRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}

let firsResult = crazySum(2, 3);
let secondResult = crazySum(3, 3);
console.log(firsResult);
console.log(secondResult);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
  const differenza = Math.abs(numero - 19);
  if (numero > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}
const risultato1 = crazyDiff(8);
console.log(risultato1);
const risultato2 = crazyDiff(20);
console.log(risultato2);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if (n >= 20 && n <= 100) return true;
  else if (n === 400) return true;
  return false;
}
const risultatoVero = boundary(50);
console.log(risultatoVero);
const risultatoFalso = boundary(1);
console.log(risultatoFalso);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa.concat("Epicode")) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}
const risultatoS = epify("Epicode");
console.log(risultatoS);
const risultatoS2 = epify("hfjhhe");
console.log(risultatoS2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(positive) {
  if (positive % 3 || positive % 7) {
    return positive;
  } else {
    return false;
  }
}
const risult = check3and7(+21);
console.log(risult);
const risult1 = check3and7(+55);
console.log(risult1);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(rev) {
  return rev.split("").reverse().join("");
}

const stringa = reverseString("EPICODE");
console.log(stringa);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  let arr = [];
  for (let index = 0; index < str.length; index++) {
    if (str[0] !== " ") {
      arr[index] = str[0].toUpperCase();
    } else if (str[index - 1] === " " && str[index - 1] !== str[0])
      arr[index] = str[index].toUpperCase();
    else arr[index] = str[index];
  }
  return arr;
}
const upper = upperFirst("cavallo barbabietola");
console.log(upper);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cuString(strings) {
  return strings.slice(1, -1);
}
const strings1 = cuString("EPICODE");
console.log(strings1);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(N) {
  let randomNumbers = [];
  for (let i = 0; i < N; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
}

const numeriCasuali = giveMeRandom(5);
console.log(numeriCasuali);
