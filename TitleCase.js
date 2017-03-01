
function titleCase(str) {
 
  //first, split str into and array and remove all lowercase letters
  str=str.toLowerCase().split(' ');
  
  //iterate through str array, finding the first letter of each str and replacing it with a capital letter.
  
  for (i = 0; i < str.length; i++){
     //breaks index(i) of string array into another array.
     str[i] = str[i].split("");
     
     //looks for the first index of str[i] array and makes the first character of that index capitalized
     str[i][0] = str[i][0].toUpperCase();
     
     //turns the modified index back into a string and re-adds it to the original str array.
     str[i] = str[i].join('');
     
  }
  
  
  //joins all the array indexs from that we split apart into a string and returns it as our answer. 
  return str.join(' ');
}

titleCase("I'm a little tea pot");