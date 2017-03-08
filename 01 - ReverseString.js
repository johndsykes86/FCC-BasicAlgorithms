
function reverseString(str) {
  //takes the str argument and splits it into an array so we can reverse the contents and then joins the newly reverses array back into a string
  str = str.split("").reverse().join("");
  
  //returns the reversed string from the previous line.
  return str;
}

reverseString("hello");
