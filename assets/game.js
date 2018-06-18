$(document).ready(function() {

    //Set Global Varaiables
    var targetNumber = "";
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var images = ["./assets/images/GemstoneOne.JPG", "./assets/images/GemstoneTwo.JPG", "./assets/images/GemstoneThree.JPG", "./assets/images/GemstoneFour.JPG"];

    //Function for random Target Number between 19-120
	function randomTargetNumber () {
        targetNumber = Math.floor(Math.random() * 102) + 19;
	}

    //Function to add cyrstal images with randomly generated number between 1-12.
	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            $(".crystalImages").append(crystal);
        }
	}

    //Function(s) to Reset when user has won or lost.
	function resetHTML () {
		$("#targetNumberToMatch").text(targetNumber);
		$("#userScore").empty();
		$(".resultsPanel").empty();
		$(".crystalImages").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

	// Inital Page Set Up
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

    // Click Functions
	function crystalClick () {
		counter += parseInt($(this).attr("value"));
		$("#userScore").html(counter);
		if (counter === targetNumber) {
            wins++;
            $("#displayUserWins").text(wins);
            $(".resultsPanel").append("You win!")
            totalReset();
		}
		else if (counter > targetNumber) {
            losses++;
            $("#displayUserLosses").text(losses);
            $(".resultsPanel").append("You lost!")
			totalReset();
		};
	};

	$(document).on("click", ".crystal", crystalClick);
})