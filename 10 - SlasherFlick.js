
function slasher(arr, howMany) {
  //create variable to store what gets removed from arr with splice. Splice removes all indexs starting from zero to the value of howMany argument.
  arr.splice(0, howMany);
  //returns the modified arr (whatever is left after splicing);
  return arr;
}

slasher([1, 2, 3], 2);
