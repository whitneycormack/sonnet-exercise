
// Take the contents of the sonnet div and place it in a variable

var sonnet = document.getElementById("sonnet").innerHTML;
console.log("sonnet", sonnet);

// Find and output the starting position of the word "orphans"

console.log("'orphans' starts at ", sonnet.indexOf("orphans"));

// Output the number of characters in the sonnet

console.log("This sonnet has ", sonnet.length, " characters");

// Replace the first occurance of the string "winter" with "yuletide"

var newPhrase = sonnet.replace("winter", "yuletide");
console.log(newPhrase);

// Replace all occurances of the string "the" with "a large"

var PhraseTwo = sonnet.replace(/the/g, "a large");
console.log(PhraseTwo);

// Set the content of the sonnet div with the new string

document.getElementById("sonnet").innerHTML = PhraseTwo;
