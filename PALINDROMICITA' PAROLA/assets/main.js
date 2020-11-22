// VERIRICA PAROLA PALINDROMA

//*************************************


function palindromicitàTest(wordUserChoose){

  var userArray = [];
  var reversedWord = [];

  for (var i = 0; i < wordUserChoose.length; i++) {
    reversedWord.push(wordUserChoose[i]);
  }

  for (i = 0; i < wordUserChoose.length; i++) {
    userArray.push(wordUserChoose[i]);
  }

  reversedWord.reverse();

  var x = 0;
  for (i = 0; i < wordUserChoose.length; i++) {

    if (userArray[i] === reversedWord[i]) {
      x++;
    }

  }

  if (x === wordUserChoose.length) {
    return true;
  }

}

//*************************************

var userWord = prompt("Scegli una parola da inserire!");

if ( palindromicitàTest(userWord) ) {
  console.log("[+] La parola è Palindroma");
} else {
  console.log("[-] La parola non è Palindroma");
}

//*************************************
		//END
//*************************************
