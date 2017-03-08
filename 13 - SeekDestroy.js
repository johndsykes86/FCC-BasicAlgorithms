
function destroyer(arr) {
  
  //creates an array from the function's arguments object. We'll use this to help filter out results we dont want
  var arg = Array.from(arguments);
  
  //this function checks the value of each index against arguments 1, 2, and 3 (if present) 
  //and returns only those that don't any of the above mentioned arguments.
  function bye(index){
    if (index !== arg[1] && index !== arg[2] && index !== arg[3])
      return index;
  }
  //returns the array (arg[0]) filtered by the bye function.
 return arg[0].filter(bye);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
