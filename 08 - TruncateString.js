
function truncateString(str, num) {
   // if num is greater or equal to str, there's no need to truncate, since its not longer than the num, which is the max string length
  if (num >= str.length){
      return str;
     //now we know that num is not greater or equal to num, so now we check to make sure num is greater than 3
  } else if (num>=3){
       //if the above conditions are met, we will truncate str by num - 3 and then add the ... ending.
      return str.slice(0, num-3).concat('...');
  } else {
      // else is the same as (num <= str.length and num<=3), we still have to truncate but we no longer have to count the ...'s as a part of the length.
    return str.slice(0, num).concat('...');
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

