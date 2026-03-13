let intro = {
 charactersList : {
   charac_1 : "Ally",
    charac_2 : "eliem",
    charac_3 : "syeran"
  },
feature : {
  daimonds : "unlimited",
  scoresGreaterThan50 : "add 20",
stars : "unlimited"
},
  gender : {
    ally : "male",
    eliem : "male",
    syeran : "female"
  },
scoresDemands : {
  loss1Star :"subtract 10 scores",
  use1Daimond : "increase 3 times",
lossTheGame : "decrease 2 times"
},
};
console.log(intro);
//check  scores
let scores = 50;
scores += 20;
scores -= 10;
scores *= 3;
scores /= 2;
console.log(scores);
//check the features
let daimond = "unlimited";
let star = "unlimited";
console.log(daimond === "unlimited" && star === "unlimited");
alert("you win award");
let scoresGreaterThan50 = "subtract 20";
console.log(scoresGreaterThan50 === false || star === "unlimited");
//check features are equal
console.log(daimond === star);
console.log(daimond !== star);
// check the scores increase strategy
scores = 90;
let win ;
if(scores <= 10) {
  win = false;
 console.log("try again");
  alert("loss the game");
} else if(scores <= 89) {
  win = false;
  console.log("you are near to win ,try again");
alert("try again");
} else if(scores  >= 90) {
  win = true;
  console.log("excellent ! you win the game");
  alert("good job!");
} else {
win = false;
console.log("try again");
alert("very bad")veryconsole.log("win");
