let hitSquaresXcoords = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let hitSquaresYcoords = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let guessXcoord;
let guessYcoord;

let numOfShots = 250;
document.querySelector("#shots").innerHTML = numOfShots;

let shotsFired = 0;

let score = 0;
document.querySelector("#score").innerHTML = score + " / " + hitSquaresXcoords.length;


HideSailBoats();


function GetCoords(squareID){
    guessYcoord = parseInt(squareID.substring(8,10));

    let letterCoord = squareID.substring(7,8);

        switch(letterCoord)
    {
        case "A": 
            guessXcoord = 1;
            break;
        case "B":
            guessXcoord = 2;
            break;
        case "C":
            guessXcoord = 3;
            break;
        case "D": 
            guessXcoord = 4;
            break;
        case "E":
            guessXcoord = 5;
            break;
        case "F":
            guessXcoord = 6;
            break;
        case "G": 
            guessXcoord = 7;
            break;
        case "H":
            guessXcoord = 8;
            break;
        case "I":
            guessXcoord = 9;
            break;
        case "J": 
            guessXcoord = 10;
            break;
        case "K":
            guessXcoord = 11;
            break;
        case "L":
            guessXcoord = 12;
            break;
        case "M": 
            guessXcoord = 13;
            break;
        case "N":
            guessXcoord = 14;
            break;
        case "O":
            guessXcoord = 15;
            break;
        case "P": 
            guessXcoord = 16;
            break;
        case "Q":
            guessXcoord = 17;
            break;
        case "R":
            guessXcoord = 18;
            break;
        case "S": 
            guessXcoord = 19;
            break;
        case "T":
            guessXcoord = 20;
            break;
        case "U":
            guessXcoord = 21;
            break;
        case "V": 
            guessXcoord = 22;
            break;
        case "W":
            guessXcoord = 23;
            break;
        case "X":
            guessXcoord = 24;
            break;
        case "Y":
            guessXcoord = 25;
            break;
        case "Z":
            guessXcoord = 26;
            break;
    }
}


function HideSailBoats(){
  for(i = 0; i < hitSquaresXcoords.length; i++){
    let X = Math.ceil(Math.random() * 26);
    let Y = Math.ceil(Math.random() * 26);
   
    hitSquaresXcoords[i] = X;
    hitSquaresYcoords[i] = Y;
  }
  console.log(hitSquaresXcoords);
  console.log(hitSquaresYcoords);
}


function CheckForHit(){
  for(let j = 0; j < hitSquaresXcoords.length; j++){
      if( hitSquaresXcoords[j] == guessXcoord && hitSquaresYcoords[j] == guessYcoord){
        document.querySelector("#output").innerHTML = "<span style='color:red;font-weight:bold;font-size:3em;'>HIT!!!<span>";
        setTimeout( function(){ 
          document.querySelector("#output").innerHTML = "Click on a square to guess.";
        }, 1500); 
        score++; 
        document.querySelector("#score").innerHTML = score + " / " + hitSquaresXcoords.length;
        return true;
      }
  }
}

function CheckForNearHit(){
  for(let k = 0; k < hitSquaresXcoords.length; k++){
      if(hitSquaresXcoords[k] + 1 == guessXcoord && hitSquaresYcoords[k] == guessYcoord){
        NearHit();
        return true;
      }
      if(hitSquaresXcoords[k] - 1 == guessXcoord && hitSquaresYcoords[k] == guessYcoord){
        NearHit();
        return true;
      }
      if(hitSquaresYcoords[k] + 1 == guessYcoord && hitSquaresXcoords[k] == guessXcoord){
        NearHit();
        return true;
      }
      if(hitSquaresYcoords[k] - 1 == guessYcoord && hitSquaresXcoords[k] == guessXcoord){
        NearHit();
        return true;
      }
    }
  }
function NearHit(){
  document.querySelector("#output").innerHTML = "<span style='color:orange;font-weight:bold;font-size:2em;'>Near hit!<span>";
  setTimeout( function(){ 
    document.querySelector("#output").innerHTML = "Click on a square to guess";
  }, 1500);  
}

function CheckForEndOfGame(){
  if(shotsFired == numOfShots && score < hitSquaresXcoords.length) document.querySelector("#output").innerHTML = "You lose.";
  if(score == hitSquaresXcoords.length) document.querySelector("#output").innerHTML = "<span style='font-weight:bold;font-size:3em;'>You Win!<span>";
}


document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("click", () => {
      shotsFired++;
      document.querySelector("#shots").innerHTML = numOfShots - shotsFired;

     GetCoords(square.className);
     console.log(guessXcoord + "," + guessYcoord);
    
      square.style.backgroundColor = "orangered";
      setTimeout( () =>{ 
          if (CheckForNearHit() == true) square.style.backgroundColor = "gold";
          else if (CheckForHit() == true) square.style.backgroundColor = "red";
          else {
            square.style.backgroundColor = "blue"; 
            document.querySelector("#output").innerHTML = "miss.";
            setTimeout( function(){ 
              document.querySelector("#output").innerHTML = "Click on a square to guess";
            }, 1500);    
          }
        }, 500);
        
        CheckForEndOfGame();
    });
});