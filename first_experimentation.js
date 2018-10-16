/* Zac Monroe
 * first_experimentation.js
 * File created: Tue 16 Oct 2018 02:50:42 PM EDT
 * Last changed: Tue 16 Oct 2018 03:46:14 PM EDT
 */

// Apparently this is how you import things?
const readline = require('readline');

let somethingSad = "I just spent like 20 minutes making a vim script that " +
  "dynamically generates the above documentation/comments. I'm not sure if " +
  "that'd be considered sad or cool. I think it's cool though.";

// console.log(somethingSad);

// Testing a for-loop
for (let a = 0; a < somethingSad.length; a++)
{
  // console.log(somethingSad[a]);
}

// Testing existence of built-in Math library and definition of functions.
// Function to give area of a circle given radius.
// Number -> Number
function circleArea(radius)
{
  return Math.PI * Math.pow(radius, 2);
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// The variable in which I'll store the user's input
let radius;

// Ask the user for a number and tell them the output of circleArea(thatNumber)
// question : String, [String -> Null] -> Null
rl.question("Give me a number and I'll give you the area of a circle whose " +
  "radius is that number.\n>>> ",
  // Testing lambda/arrow expressions
  (answer) => {
    radius = answer;
    console.log(circleArea(radius));
    rl.close();
  });
