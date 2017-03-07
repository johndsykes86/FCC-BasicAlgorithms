
function destroyer(arr) {
  
  //turns the arguments Object into an array that I can call in my bye function.
  var arg = Array.from(arguments);
  
  // returns any index that does not match any of the arguments in the arg array.
  // the argument Object is zero indexed so we start from arg[1] since arg[0] is the actual array we're supposed to filter
  function bye(index){
    if (index !== arg[1] && index !== arg[2] && index !== arg[3])
      return index;
  }
  
  //filters the arr argument by the bye function above and returns the results.
 return arr.filter(bye);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
