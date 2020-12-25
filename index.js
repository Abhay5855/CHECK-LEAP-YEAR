// create a CLI app to check whether user was born in a leap year.

// Ask user her name
// Ask her Date of Birth (give her a format prompt)
// Calculate and show her whether it's a leap year or not.
// If yes, ask her to share this on social media

// To determine whether a year is a leap year, follow these steps:

// 1.If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// 2.If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// 3.If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// 4.The year is a leap year (it has 366 days).
// 5.The year is not a leap year (it has 365 days).

var readlineSync = require('readline-sync')

// input
var userName = readlineSync.question("Enter your name? ")
console.log("Hello " + userName );


//calculation -> processing to show.

var question = "Enter the year of your D.O.B "
function leapYear(question){

  var userDate = readlineSync.question(question)
  console.log(userDate)
  
  //processing conditionals
  if (userDate % 400 === 0){
    console.log("It's a leap year")
  }

  else if (userDate % 100 === 0){
    console.log("not a leap year")
  }

  else if (userDate % 4 === 0){
    console.log("It's a leap year")
  }

  else{
    console.log("not a leap year")
  }

}

leapYear(question)