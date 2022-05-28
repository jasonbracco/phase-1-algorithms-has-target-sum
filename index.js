function hasTargetSum(array, target){
  for(i=0;i<array.length-1;i++){
    for(j=(i+1);j<array.length;j++){

      if (array[i]+array[j] === target){
      return true

      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  iterating through the array with i = n
  iterating through the array with j = n
  n*n = n^2
*/

/* 
  Take in one array and a target value
  iterate over the given array 
  if a value on index i + a value on index j = the target value
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
