
function factorialize(num) {
 //declares an answer variable and assigns a value of one
 answer = 1;
  
 //creates a for loop that will multiply i by the value of the answer variable until i is equal to the num argument in the function call.
 for (i=1; i<=num; i++) {
    answer *= i;
 }
 
  //returns new value for answer variable.
  return answer;
}

factorialize(5);
