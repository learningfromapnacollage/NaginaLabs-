// 1. Pehle sirf DATA banayen (Object)
let dailyRoutineTracker = {
  isStudent: true,
  isTeenAger: true,
  routine: {
    wakeUpEarly: true,
    takeBath: true,
    takeBreakFast: true,
    study_1: true,
    prayer_2: true,
    play: true,
    helpMom: true,
    watchPhone: true,
    study_2: true,
    dinner: true,
    goToSleep: true
  }
};

// 2. Ab Logic (If-Else) ko Object ke BAHAR likhen
let r = dailyRoutineTracker.routine; // Chota naam rakh liya taake asani ho

if (r.wakeUpEarly === true) {
  console.log("Good job! You woke up early.");
  
  if (r.takeBath === true) {
    console.log("Good job! Bath taken.");
    
    if (r.takeBreakFast === true) {
      console.log("Excellent attempt! Breakfast done.");
      
      // Isi tarah baqi conditions bhi check honge...
      
      if (r.goToSleep === true) {
         console.log("Nice! Day complete.");
      } else {
         console.log("Complete the task to go next");
      }
    }
  }
}

// 3. Aapki AND (&&) wali logic ka sahi tareeqa:
let study = true;
let dinner = true;
// Comparison ke liye hamesha === use karen, single = value badal deta hai
console.log(study === true && dinner === true); 
Use code with caution.

