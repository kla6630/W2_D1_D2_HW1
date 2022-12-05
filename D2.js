/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JavaScript sono Numeri, Stringhe, Dati Booleani, Null, e Undefined. 
I primi, che vanno inseriti senza apici, possono essere interi e decimali.
Le seconde invece, sono delle sequenze di caratteri e devono essere indicati tramite apici.
I dati Booleani possono assumere solo ed unicamente due tipi di valori (TRUE o FALSE),
in risposta ad una domanda che gli viene posta, mentre quelli di dipo Null indicano la 
non presenza consapevole ed intenzionale di un oggetto che verrà inserito successivamente ma che non compie funzione attiva.
Infine Le variabili di tipo Undefined sono quelle che non hanno un valore assegnato.

Per indicare ciascuno di questi valori è necessario utilizzare una sintassi specifica
non dimenticando che il JavaScript è un linguaggio "case sensitive", 
ovvero c'è un'enorme differenza tra lettere maiuscole e minuscole 
ed è per questo importante scrivere il codice tenendo conto di questo fatto: 
"Cognome" e "cognome" sono due variabili distinte.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Claudio";
   
console.log(name); */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let number01 = 12;
   let number02 = 20;
   
   let result = number01 + number02 
   
   console.log(result) */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12
   console.log(x) */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const name1 = "Claudio"; */ /*SyntaxError: Identifier 'name1' has already been declared */
/* const name1 = "mama"; */
/* console.log(name1); */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
console.log("Il risultato è " + (x - 4));
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* const name1 = "john";
const name2 = "John";

console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());
*/
