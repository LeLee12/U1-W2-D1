/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*I principali datatype in JavaScript sono:
1. String: è una sequenza di caratteri, come le parole o le frasi che diciamo. Ad esempio, "Ciao" è una stringa.
2. Number: rappresenta i numeri, sia interi che decimali. Ad esempio,21 o 2.29 sono numeri.
3. Boolean: è un tipo di dato che può essere solo vero (true) o falso (false). È come un interruttore che può essere acceso o spento.
4. Object: è un modo per raggruppare insieme diversi tipi di dati. Immagina un oggetto come una scatola che contiene vari oggetti al suo interno, come un giocattolo, un libro, o una palla.
5. Array: è una lista di elementi, come una fila di giocattoli. Ogni giocattolo nella fila è un elemento dell'array. Ad esempio, ["macchina", "palla", "doll"] è un array di giocattoli.
6. Null: rappresenta l'assenza di un valore. È come dire "non c'è niente qui". Ad esempio, se non hai un giocattolo, puoi dire che il valore è null.
7. Undefined: è un tipo di dato che indica che una variabile è stata dichiarata ma non ha ancora un valore assegnato. È come se avessi un giocattolo che non hai ancora aperto, quindi non sai cosa c'è dentro.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Emanuele";
console.log("Il mio nome è: Emanuele", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 12 + 20;
console.log("La somma di 12 e 20 è: 32", sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("La variabile x contiene il numero: 12", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Di Leva";
console.log("Il mio nome completo è: Emanuele Di Leva", myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let subtraction = 4 - x;
console.log("La sottrazione tra 4 e x (12) è: -8", subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "emanuele";
let name2 = "Emanuele";
console.log("name1 è diverso da name2:", name1 !== name2); // true
console.log("name1 in lowercase è uguale a name2 in lowercase:", name1.emanuele() === name2.Emanuele()); // true
