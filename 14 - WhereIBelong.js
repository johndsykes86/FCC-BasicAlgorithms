
function getIndexToIns(arr, num) {
//pushes num into array 
  arr.push(num);
  
  //sorts the arr array to in ascending order.
  arr = arr.sort(function compare(a, b){
    return a-b;
  });
  
  
  //loops through the array and checks each index of the array. if the value of the index is equal to num, returns that index
  for (i=0; i<arr.length; i++) {
    if (num === arr[i]) {
      return i;
    }
  }

}

getIndexToIns([40, 60], 50);
