/* 
Create a loop that prints the numbers 1 through 20 to the console.
For each number that is evenly divisible by 3 print the word fizz, instead of the number.
For each number that is evenly divisible by 5 print the word buzz, instead of the number.
For each number that is evenly divisible by both 3 and 5 print the word fizzbuzz, instead of the number. 
*/

// Javascript FizzBuzz Solution //

for (var i=1 ; i<=20 ; i++){
  if (i%3===0 && i%5!==0){
    console.log("Fizz");
  } 
  else if (i%5===0 && i%3!==0){
    console.log("Buzz");
  } 
  else if (i%3 ===0 && i%5 ===0){
    console.log("FizzBuzz");    
  } 
  else {
    console.log (i);
  }
}

// alternate, slightly more concise version //
for(var i=1; i<=20; i++){
  if (i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }
  else if (i%3===0){
    console.log("Fizz");
  }
  else if (i%5===0){
    console.log("Buzz");
  }
  else {
    console.log (i);
  }
}
