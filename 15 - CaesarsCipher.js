
//rot13 is a a shift cipher. You decode messages based the actual letter + or - 13, depending on what the letter is.

function rot13(str) { 
 

 //Initalize answer variable and gave it the value of a blank string. We will return this variable with the decoded string.
 answer = "";

  //loops through the string argument and..
  for (i=0; i<str.length; i++){
    //assigns code to be the unicode nunber of whatever letter is at str[i]
   
    code = str.charCodeAt(i);
    
    // If code is greater than 65 but less than 77, grab the character that matches code + 13
    // and adds it to the answer variable.
    
    if ( code >= 65 && code <=77){
    answer += String.fromCharCode(code+13);
    
    // If code is greater than 78 but less than 90, grab the character that matches code - 13
    // and add that to the answer variable.
    
    } else if (code >= 78 && code <= 90) {
    answer += String.fromCharCode(code-13);
    
    // All non-alphanumeric characters go here. We dont need to decode them but we do need to pass it on.
    // So we just use their unicode from the code variable and display the matching character.
    
    } else {
    answer += String.fromCharCode(code);  
    }
    
    
  }
  
  // This returns the decoded string.
  return answer;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
