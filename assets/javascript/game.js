    
// Countries list
var djs = ["TIESTO","ARMIN","SKRILLEX","EXCISION","KASKADE","KSHMR","DOMBRESKI","VOLAC"];

var allowedGuesses = 10; 
var lettersGuessed = []; 
var correctGuess = []; 
var gussesLeft = 0; 
var Wins = 0; 
var Losses = 0; 
var isFinished = false; 
var ansWord; 


function begin() {
     ansWord = djs[Math.floor(Math.random() * djs.length)];
     correctGuess = [];

    
    for (var i = 0; i < ansWord.length; i++) {
        correctGuess[i] = "_";
    }

    gussesLeft = allowedGuesses;
    lettersGuessed = [];

    document.getElementById("guessesLeft").style.color = "";

    refresh();
};

function refresh() {
    document.getElementById("Wins").innerText = Wins;
    document.getElementById("Losses").innerText = Losses;
    document.getElementById("guessesLeft").innerText = gussesLeft;
    document.getElementById("wordGenerated").innerText = correctGuess.join("");
    document.getElementById("lettersGuessed").innerText = lettersGuessed;

};


function checkGuess(letter) {
   
    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);

        if (ansWord.indexOf(letter) === -1) {
            gussesLeft--;
        }
           
        else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    correctGuess[i] = letter;
                } 
            }                
        }
    }

}; 


function Winner() {  
    if (correctGuess.indexOf("_") === -1) {
        Wins++;
        isFinished = true;
    }
};

function Loser() {
    if(gussesLeft <= 0) {
        Losses++;
        isFinished = true;
        document.getElementById("Losses").style.color = "#e12d2e";
    }

};


document.onkeyup = function(event) {
    if (isFinished) {
        begin();
        isFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            refresh();
            Winner();
            Loser();
        }
    }
};

begin();
refresh();

console.log(ansWord);n