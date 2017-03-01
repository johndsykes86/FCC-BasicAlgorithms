function palindrome(str) {
  
  //takes string replaces all non-alphanumberic characters, spaces, underscores and periods
  //and makes the string lower case.
  str = str.replace(/[\s\W\_\.]/gi, "" ).toLowerCase();

  //creates a reverse variable and assigns the reverse of str by spliting it into an array, using the reverse function to reverse
  //the str output and then using the join function to turn the reverse str output back into a string. 
  reverse = str.split("").reverse().join("");

  //check to see if str is equal to reverse. If it's the same, return true. If it's not, return false.
    if (str === reverse) {
    return true;
    } else {
      return false;
    }
}

palindrome("1 eye for of 1 eye.");