# Unit-4-Game
Assignment Four: Crystals Collector Game.

### Overview

In this game, the user is shown a randomly generated target number they should match in order to win the game. When the user arrives on the page, they'll see directions and the target number to match. When they click on a crystal, the randomly generated number attached to that specific crystal will add to the score so the user can track their score the closer they get to meeting the target number. 

### Step One

In the first step, we set our global variables for Target Number, Wins, Losses, Counter, and Images as we'll be assigning these their image attributes when their random number is generated in Step Two. 

### Step Two

Next we created functions to randomly generate numbers for the Target Number and each of the Crystal Images.

### Step Three

I then created functions to reset areas of the page that get manipulated after user input. We add the target number to the id being called in the index.html file, and empty the other areas that have been populated with input. The next function resets the randomly generated target number, clears the counter, runs the reset function mentioned above as well as the resetCrystals function from Step Two to reassign them their random numbers for the next round. 

### Step Four

In the last step, we're comparing the user's counter against the target number. If the counter matches the target number, the user wins and their score goes up by one, but if their number is greater, their losses go up by one. We then reset the game to prepare for the next round. 
