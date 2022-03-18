# Classic Mancala 
 Add a short description of the game 

## Technologies
- HTML
- Javascript
- Jquery
- Css, Flexbox, Grid

## User Experiences:

1. Players need to be able to click the play bottom to start the initial game. 

2. Allow the user to only click in 6 bottoms. (The bottoms that are facing their direction). 

3. Users are not allowed to click on the mancala storage. 

4. Display their remains rocks at each bottoms.

5. Display two scoreboards, one for each player.
  
6. Every time a player wins a new rock, reduce it from the initial 48 rocks and display the remaining on boards. 

7. The players must be notified if they win or lose.




## Description.


## Initial Setup:

 - 48 rocks available. 
 
 - Both players' scores start at 0. 


 ## Game start:

The game starts when the user clicks the play bottom, and the 48 rocks are distributed evenly between 12 storages. The storage is distributed between the player, so each player starts with six storage fills with four rocks each. 
            
            
- Once the user clicks one of the storage, the value inside the storage moves **counter-clockwise circle (to the right)** around the storage and adds 1 to each storage it visits until it reaches zero.


- If the value is added to one of the storage labels for scores, that value is added to the user and gets reduced from the initial 48 rocks. 


## Rules
1. If the last rock in storage lands in your storage, the player gets a bonus turn.


 2. If the last rock in your storage moved to another empty storage of your own, get to keep all of the rocks in your opponents storage on the opposite side.


## How to win?

The game is over when one player's storages are empty. The other player takes the rocks remaining in their storage and puts those in their store. The player with more rocks in their storage wins. 


<!--Next add wireframe  -->
