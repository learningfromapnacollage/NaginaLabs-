/*Create the variable name scores and
asign a value.*/
let scores = 1000;
/*Create the second variable and does
not assign a value.*/
let win;
/*Use else if to know how much scores
requires for players to win.*/
if(scores < 50) {
  win = false;
} else if(scores < 500) {
  win = false;
} else if(scores > 5000) {
  win = true;
} else if(scores >= 1000) {
  win = true;
} else {
  win = false;
}
/* After creating multiple conditions
use printing syntax to know which is
true.*/
console.log("win",win);
