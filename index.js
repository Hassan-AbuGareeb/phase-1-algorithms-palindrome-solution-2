function isPalindrome(word) {
  for ( let start = 0, end = word.length-1 ; start <= end ; start++, end-- )
      if(word.at(start) !== word.at(end))
        return false;
  return true;
}       

/* 
Add your pseudocode here
-get the string
-iterate on the string while keeping track of two positions at a time 
-the positions start from the first and last element in the first iteration.
-if the characters in the current postitions are equal then increase the position at the start by 1 and decrease the position at then by 1
      else end the iteration and return a false.
-repeat the previous step while the first position is less or equal than the second position
-if the iterations are finished successfully then return a true.

*/

/*
Add written explanation of your solution here
a loop is defined to iterate over the given string, with two variables used as indexes to track two characters at each
iteration, the first variable is initialized with 0 as the starting character of the string , the other variable is initialized
with the position of the last character which is the (length of the string - 1) , in each iteration the characters at the positions
of the two variables are compared if they aren't equal then the word isn't a Palindrome, else if all iterations are successful and 
the loop body is exited then the string must be a Palindrome so the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
