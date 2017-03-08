
function confirmEnding(str, target) {
  
//   Count the number of characters in the target. We'll use this to figure out what substring to return
      length = target.length;
//   search str and return part of string equal to the length variable
      check = str.substring(str.length - length);
//   Make sure check is equal to str and return true if it is (false if it's not)
      if (check === target){
        return true;
      } else {
        return false;
      }
}

confirmEnding("Bastian", "n");
