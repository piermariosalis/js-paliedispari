/*
GIOCO PARI E DISPARI
*/

//*******************************************


function game (chooseInsert, chooseNumber){

  var numbServer = Math.ceil(Math.random() * 5);
  var somma = chooseNumber + numbServer;
  //console.log(chooseInsert);
  //console.log(somma);
  if (chooseInsert === "pari") {

    if (somma % 2 === 0) {
      return true;
    } else {
      return false;
    }

  } else if (chooseInsert === "dispari"){

    if (somma % 2 === 0) {
      return false;
    } else {
      return true;
    }

  }

}

//*******************************************


// SCELTA UTENTE PARI O DISPARI

var pariOdispari = prompt("SCEGLI: PARI O DISPARI");


//*******************************************

// SCELTA UTENTE NUMERO DA 1 A 5

var userNumber = Number(prompt("DIGITA UN NUMERO COMPRESO FRA 1 E 5"));

var gameResult = game(pariOdispari, userNumber);



//*******************************************

// RISULTATO


if (gameResult) {
  console.log("YOU WIN!!!!");
} else if( gameResult === false ) {
  console.log("YOU LOST!");





} 
