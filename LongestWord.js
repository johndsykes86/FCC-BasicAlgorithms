/* jshint esversion: 6 */ //<used because the spread operator that I used to return my answer is only supported in ES6.

function findLongestWord(str) {
  //splits str argument from function call into an array
  array=str.split(" ");
  
  //declared answer variable that we will push the answer into
  answer=[];
  
  //for loop through array and pushing the length of each index (i) into the answer array as a number
  for (i=0; i<array.length; i++){
    answer.push(array[i].length);
  }
  
 //returning the largest number in the answer array...
 return Math.max(...answer);
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");