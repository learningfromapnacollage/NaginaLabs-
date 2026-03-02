let brotherMarraigeCard = {
  groomName :"Abdul Rafay",
  brideName : "Areeba",
  marque : "Gujerkhan Marque",
  invitedPeople : {
    relatives : true,
    friends : true,
    nabours : true,
    bestFriend : true,
    teachers : false
  },
  menue : {
    chapliKabab  : true,
     kheer : true,
   rasMalai : true,
    iceCream : true,
    freshSalad : true
  },
Timing : {
 engagement  : "12am to 4pm",
  mehendi : "8pm to 2am",
  nikah : "7pm to 11pm",
  barat : "6pm to 10pm"
};
  consol.log(brotherMarriageCard);
/* i am calculting now the relative
that enters in the party*/
let cousine = 12;
let relatives = 24;
let friends = 4;
relatives += 6;/*my father invite 
his relatives*/
console.log(relatives);
/*now i. am thinking whih members 
are more*/
if(cousine > relatives) {
  let crowed = false;
}
if(cousine < relatives) {
  let crowed = true;
}
console.log(crowed);







