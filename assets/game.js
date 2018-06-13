$(document).ready(function() {

//Define global variables. 
var computerGeneratedNumber = 0;
var gemstoneValue = 0;
var counter = 0;
var userWins = 0;
var userLosses = 0;

//Function for computer to select random number between 19-120
computerGeneratedNumber = Math.floor(Math.random() * 102) + 19;
console.log(computerGeneratedNumber);
$(".matchTargetNumber").append("Target Number to Match: " + computerGeneratedNumber);

//Function(s) for selecting random number for crystals 1-12 when clicked on.
//Make crystals on click events
$(".crystalImages").on("click", function() {

    //Assign random number to crystals
    gemstoneValue = Math.floor(Math.random() * 12) + 1;
    console.log(gemstoneValue);

    //Add user's total value for individual clicks to displayUserNumber 
    $("#gemstone1", "#gemstone2", "#gemstone3", "#gemstone4").append(gemstoneValue);
    counter += gemstoneValue;

    //Display to displayUserNumber div.
    $(".displayUserNumber").append(counter);

    if (counter === computerGeneratedNumber) {
        $(".resultsPanel").append("You Won!");
    } else if (counter > computerGeneratedNumber) {
        $(".resultsPanel").append("You Lost!");
    };
})



//
//if else statement to check if user value equals computer value or is greater than
//if player value = computer value user wins go up by one and game resets. 
//if player value > computer value loss goes up and game resets. 

});

