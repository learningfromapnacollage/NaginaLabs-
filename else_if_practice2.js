/Create the variable
let scores = 1000;
//Create another varibale without data
let win;
//use else if for multiple condition
if(scores < 50) {
  win = false;
} else if(scores < 250) {
  win = false;
} else if(scores < 500) {
  win = false;
} else if(scores < 900){
  win = false;
  console.log("good job!🙂try again");
} else if(scores >= 1000){
  win = true;
  console.log("excellent😍! you win the game");
}  else {
  win = false;
  console.log("try again");
}
/* Now use printing syntax to know
which condition is true*/
console.log(win);
