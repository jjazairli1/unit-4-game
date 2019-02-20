var randomNumber = 0
var wins = 0
var losses = 0
var c1 = 0
var c2 = 0
var c3 = 0
var c4 = 0
var currentscore = 0

$( document ).ready(function() {
    startgame();
});

function startgame(){

    randomNumber = Math.floor(Math.random()*120)+19
    var ranNumElem = document.getElementById("randomNumber")
    ranNumElem.innerText = randomNumber.toString(10)


    //wins
    var winsElem = document.getElementById("wins")
    winsElem.innerText = wins.toString(10)

    //losess
    var lossesElem = document.getElementById("losses")
    lossesElem.innerText = losses.toString(10)

    //c1
    c1 = Math.floor(Math.random()*12)+1;

    c2 = Math.floor(Math.random()*12)+1;

    c3 = Math.floor(Math.random()*12)+1;

    c4 = Math.floor(Math.random()*12)+1;
    
    // to add all the numbers here to match the random number given. 

    console.log("c1 , c2 , c3 , c4")
    
 // onclick event here


    //GameScore
    var scoreElem = document.getElementById("score")
    scoreElem.innerText = currentscore.toString(10)

    

}




function ResetGame(){


    randomNumber = Math.floor(Math.random()*120)+19
    var ranNumElem = document.getElementById("randomNumber")
    ranNumElem.innerText = randomNumber.toString(10)

    // get random number for crystals

    //c1
    c1 = Math.floor(Math.random()*12)+1

    //c2
    //c3
    //c4


    //reset score of game
    currentscore = 0
    var scoreElem = document.getElementById("score")
    scoreElem.innerText = currentscore.toString(10)

}


function C1Click(){



    var score = document.getElementById("score")
    currentscore = currentscore + c1
    score.innerText = currentscore.toString(10)

    // win
    if(currentscore === randomNumber){
        var winsElem = document.getElementById("wins")
        wins = wins + 1
        winsElem.innerText = wins.toString(10)
        ResetGame();
    }
    //lose
    if(currentscore > randomNumber){
        var lossesElem = document.getElementById("losses")
        losses = losses + 1
        lossesElem.innerText = losses.toString(10)
        ResetGame();
    }





}


//C2Click
//C3Click
//C4Click











