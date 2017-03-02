function largestOfFour(arr) {
  //initalize answer variable with an empty array
  answer = [];
  
  //iterate through array and pushes the highest number from each subarray in arr to the answer array 
  for (i = 0; i < arr.length; i++){
    answer.push(Math.max.apply(null, arr[i]));   
   }
  
  //return the answer array.
  return answer;
}